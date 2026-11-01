const mongoose = require("mongoose");
const BlogPost = require("../models/BlogPost");
const BlogImage = require("../models/BlogImage");
const { sanitizeContent, toPlainText, countWords, readingTime, slugify, escapeRegex } = require("../utils/blogHtml");

const LIST_FIELDS = "title slug excerpt coverImage category tags author status publishedAt featured readingTime wordCount seo.focusKeyword createdAt updatedAt";
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

/** Published and not scheduled for later. */
const publicFilter = () => ({ status: "published", publishedAt: { $lte: new Date() } });

const isId = (id) => mongoose.Types.ObjectId.isValid(id);

/** Splits a search query into lower-case terms (max 8). */
const searchTerms = (q) =>
  String(q || "")
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 8);

/** Every term must appear in at least one searchable field. */
const termsFilter = (terms) =>
  terms.length
    ? {
        $and: terms.map((t) => {
          const rx = new RegExp(escapeRegex(t), "i");
          return { $or: [{ title: rx }, { excerpt: rx }, { tags: rx }, { category: rx }, { plainText: rx }, { "seo.focusKeyword": rx }, { "seo.keywords": rx }] };
        }),
      }
    : {};

/** Relevance: title and tag hits outweigh body hits. */
const scorePost = (post, terms, phrase) => {
  const title = post.title.toLowerCase();
  const excerpt = (post.excerpt || "").toLowerCase();
  const body = (post.plainText || "").toLowerCase();
  const tags = (post.tags || []).join(" ");
  const keyword = `${post.seo?.focusKeyword || ""} ${(post.seo?.keywords || []).join(" ")}`.toLowerCase();
  let score = phrase && title.includes(phrase) ? 25 : 0;
  for (const t of terms) {
    if (title.includes(t)) score += title.startsWith(t) ? 12 : 10;
    if (tags.includes(t)) score += 6;
    if (keyword.includes(t)) score += 5;
    if ((post.category || "").toLowerCase().includes(t)) score += 4;
    if (excerpt.includes(t)) score += 3;
    score += Math.min(body.split(t).length - 1, 10) * 0.5;
  }
  return score;
};

/** Fields an admin can set; derived fields are computed here. */
const buildPostData = (body) => {
  const content = sanitizeContent(body.content);
  const plainText = toPlainText(content);
  const wordCount = countWords(plainText);
  const tags = [...new Set((Array.isArray(body.tags) ? body.tags : []).map((t) => String(t).trim().toLowerCase()).filter(Boolean))].slice(0, 20);
  const keywords = (Array.isArray(body.seo?.keywords) ? body.seo.keywords : []).map((k) => String(k).trim()).filter(Boolean).slice(0, 20);
  const status = body.status === "published" ? "published" : "draft";
  const publishedAt = body.publishedAt ? new Date(body.publishedAt) : null;
  return {
    title: String(body.title || "").trim(),
    slug: slugify(body.slug || body.title),
    excerpt: String(body.excerpt || "").trim() || plainText.slice(0, 200),
    content,
    plainText,
    coverImage: { url: String(body.coverImage?.url || "").trim(), alt: String(body.coverImage?.alt || "").trim() },
    category: String(body.category || "").trim(),
    tags,
    author: { name: String(body.author?.name || "").trim() || "LushWare Team", role: String(body.author?.role || "").trim() },
    status,
    publishedAt: publishedAt && !isNaN(publishedAt) ? publishedAt : status === "published" ? new Date() : null,
    featured: Boolean(body.featured),
    seo: {
      metaTitle: String(body.seo?.metaTitle || "").trim(),
      metaDescription: String(body.seo?.metaDescription || "").trim(),
      focusKeyword: String(body.seo?.focusKeyword || "").trim(),
      keywords,
      noindex: Boolean(body.seo?.noindex),
    },
    wordCount,
    readingTime: readingTime(wordCount),
  };
};

const validationError = (data) => {
  if (!data.title) return "Title is required";
  if (!data.slug) return "Slug is required";
  if (data.coverImage.url && !/^https?:\/\//.test(data.coverImage.url)) return "Cover image must be an http(s) URL";
  return null;
};

/** Free slug: `base`, `base-2`, `base-3`, ... */
const uniqueSlug = async (base, excludeId) => {
  for (let i = 1; i < 100; i++) {
    const slug = i === 1 ? base : `${base}-${i}`;
    const clash = await BlogPost.exists({ slug, ...(excludeId ? { _id: { $ne: excludeId } } : {}) });
    if (!clash) return slug;
  }
  return `${base}-${Date.now()}`;
};

const facets = async () => {
  const [tags, categories] = await Promise.all([
    BlogPost.aggregate([{ $match: publicFilter() }, { $unwind: "$tags" }, { $group: { _id: "$tags", count: { $sum: 1 } } }, { $sort: { count: -1, _id: 1 } }, { $limit: 40 }]),
    BlogPost.aggregate([{ $match: { ...publicFilter(), category: { $ne: "" } } }, { $group: { _id: "$category", count: { $sum: 1 } } }, { $sort: { count: -1, _id: 1 } }]),
  ]);
  return {
    tags: tags.map((t) => ({ name: t._id, count: t.count })),
    categories: categories.map((c) => ({ name: c._id, count: c.count })),
  };
};

/* ── Public ─────────────────────────────────────────────────────── */

/**
 * GET /api/blog/posts?q=&tag=&category=&page=&limit=&full=
 * Published posts, newest first, or by relevance when searching.
 * `full=1` includes content (used by the build to prerender every post).
 */
const listPublishedPosts = async (req, res) => {
  try {
    const full = req.query.full === "1";
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 12, 1), full ? 500 : 50);
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const terms = searchTerms(req.query.q);
    const filter = { ...publicFilter(), ...termsFilter(terms) };
    if (req.query.tag) filter.tags = String(req.query.tag).toLowerCase();
    if (req.query.category) filter.category = String(req.query.category);

    let posts;
    let total;
    if (terms.length) {
      // Small collection: rank all matches in memory, then paginate.
      const matches = await BlogPost.find(filter).select(`${LIST_FIELDS} plainText seo.keywords${full ? " content seo" : ""}`).lean();
      const phrase = terms.join(" ");
      matches.forEach((p) => (p.score = scorePost(p, terms, phrase)));
      matches.sort((a, b) => b.score - a.score || b.publishedAt - a.publishedAt);
      total = matches.length;
      posts = matches.slice((page - 1) * limit, page * limit).map(({ plainText, score, ...p }) => p);
    } else {
      [posts, total] = await Promise.all([
        BlogPost.find(filter).select(full ? "-plainText" : LIST_FIELDS).sort({ publishedAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
        BlogPost.countDocuments(filter),
      ]);
    }

    res.json({ posts, total, page, pages: Math.max(1, Math.ceil(total / limit)), ...(await facets()) });
  } catch (error) {
    console.error("Error listing blog posts:", error);
    res.status(500).json({ message: "Error fetching blog posts", error: error.message });
  }
};

/** GET /api/blog/posts/:slug — one published post plus related posts. */
const getPublishedPost = async (req, res) => {
  try {
    const post = await BlogPost.findOne({ ...publicFilter(), slug: String(req.params.slug).toLowerCase() }).lean();
    if (!post) return res.status(404).json({ message: "Post not found" });

    const relatedFilter = { ...publicFilter(), _id: { $ne: post._id } };
    let related = await BlogPost.find({ ...relatedFilter, $or: [{ tags: { $in: post.tags } }, ...(post.category ? [{ category: post.category }] : [])] })
      .select(LIST_FIELDS).sort({ publishedAt: -1 }).limit(3).lean();
    if (related.length < 3) {
      const more = await BlogPost.find({ ...relatedFilter, _id: { $nin: [post._id, ...related.map((r) => r._id)] } })
        .select(LIST_FIELDS).sort({ publishedAt: -1 }).limit(3 - related.length).lean();
      related = related.concat(more);
    }
    res.json({ post, related });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ message: "Error fetching blog post", error: error.message });
  }
};

/** GET /api/blog/images/:id — public image bytes, cached forever (ids never change). */
const getImage = async (req, res) => {
  try {
    if (!isId(req.params.id)) return res.status(404).end();
    const image = await BlogImage.findById(req.params.id).select("+data contentType").lean();
    if (!image) return res.status(404).end();
    res.set({
      "Content-Type": image.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
      "Cross-Origin-Resource-Policy": "cross-origin",
    });
    // lean() returns a BSON Binary; never Buffer.from(buf.buffer) a Node Buffer (that's the whole shared pool).
    res.send(Buffer.isBuffer(image.data) ? image.data : Buffer.from(image.data.buffer));
  } catch (error) {
    console.error("Error fetching blog image:", error);
    res.status(500).end();
  }
};

/* ── Admin ──────────────────────────────────────────────────────── */

/** GET /api/blog/admin/posts?q=&status= — every post, newest edit first. */
const listAllPosts = async (req, res) => {
  try {
    const filter = {};
    const terms = searchTerms(req.query.q);
    if (terms.length) Object.assign(filter, termsFilter(terms));
    if (req.query.status === "draft") filter.status = "draft";
    if (req.query.status === "published") Object.assign(filter, publicFilter());
    if (req.query.status === "scheduled") Object.assign(filter, { status: "published", publishedAt: { $gt: new Date() } });
    const posts = await BlogPost.find(filter).select(LIST_FIELDS).sort({ updatedAt: -1 }).lean();
    res.json({ posts });
  } catch (error) {
    console.error("Error listing blog posts (admin):", error);
    res.status(500).json({ message: "Error fetching blog posts", error: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    if (!isId(req.params.id)) return res.status(404).json({ message: "Post not found" });
    const post = await BlogPost.findById(req.params.id).lean();
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ post });
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog post", error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const data = buildPostData(req.body);
    const invalid = validationError(data);
    if (invalid) return res.status(400).json({ message: invalid });
    data.slug = await uniqueSlug(data.slug);
    const post = await BlogPost.create(data);
    res.status(201).json({ message: "Post created", post: post.toObject() });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Error creating blog post", error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    if (!isId(req.params.id)) return res.status(404).json({ message: "Post not found" });
    const data = buildPostData(req.body);
    const invalid = validationError(data);
    if (invalid) return res.status(400).json({ message: invalid });
    if (await BlogPost.exists({ slug: data.slug, _id: { $ne: req.params.id } })) {
      return res.status(409).json({ message: `The URL slug "${data.slug}" is already used by another post` });
    }
    const post = await BlogPost.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true }).lean();
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post updated", post });
  } catch (error) {
    console.error("Error updating blog post:", error);
    res.status(500).json({ message: "Error updating blog post", error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    if (!isId(req.params.id)) return res.status(404).json({ message: "Post not found" });
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog post", error: error.message });
  }
};

/** POST /api/blog/admin/images?name=&width=&height= — raw image body. */
const uploadImage = async (req, res) => {
  try {
    const contentType = (req.headers["content-type"] || "").split(";")[0];
    if (!IMAGE_TYPES.includes(contentType)) return res.status(415).json({ message: "Only JPEG, PNG, WebP and GIF images are allowed" });
    if (!Buffer.isBuffer(req.body) || !req.body.length) return res.status(400).json({ message: "Empty image" });
    const image = await BlogImage.create({
      data: req.body,
      contentType,
      size: req.body.length,
      width: parseInt(req.query.width, 10) || null,
      height: parseInt(req.query.height, 10) || null,
      name: String(req.query.name || "").slice(0, 200),
    });
    res.status(201).json({ image: { _id: image._id, contentType, size: image.size, width: image.width, height: image.height, name: image.name, createdAt: image.createdAt } });
  } catch (error) {
    console.error("Error uploading blog image:", error);
    res.status(500).json({ message: "Error uploading image", error: error.message });
  }
};

/** GET /api/blog/admin/images — media library (metadata only). */
const listImages = async (req, res) => {
  try {
    const images = await BlogImage.find().sort({ createdAt: -1 }).limit(200).lean();
    res.json({ images });
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error: error.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    if (!isId(req.params.id)) return res.status(404).json({ message: "Image not found" });
    const image = await BlogImage.findByIdAndDelete(req.params.id);
    if (!image) return res.status(404).json({ message: "Image not found" });
    res.json({ message: "Image deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image", error: error.message });
  }
};

module.exports = {
  listPublishedPosts,
  getPublishedPost,
  getImage,
  listAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  uploadImage,
  listImages,
  deleteImage,
};
