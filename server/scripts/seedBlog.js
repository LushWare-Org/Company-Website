// Inserts the starter blog posts from data/blogSeedPosts.js into MONGO_URI.
// Idempotent: a post whose slug already exists is skipped, never overwritten,
// so edits made in the admin editor are safe.
//
//   npm run seed:blog              insert as published
//   npm run seed:blog -- --draft   insert as drafts (review, then publish in /admin/blog)
//   npm run seed:blog -- --dry-run print what would be inserted, no DB connection
require("dotenv").config();
const mongoose = require("mongoose");
const BlogPost = require("../models/BlogPost");
const { buildPostData, validationError } = require("../controllers/blogController");
const posts = require("../data/blogSeedPosts");

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const status = args.has("--draft") ? "draft" : "published";

const main = async () => {
  // Newest first: the first post is published now, each next one a day earlier.
  const now = Date.now();
  const built = posts.map((post, i) => {
    const data = buildPostData({ ...post, status, publishedAt: status === "published" ? new Date(now - i * 86400000) : null });
    const invalid = validationError(data);
    if (invalid) throw new Error(`${post.title}: ${invalid}`);
    return data;
  });

  if (dryRun) {
    for (const p of built) console.log(`${p.slug}  (${p.wordCount} words, ${p.readingTime} min, keyword "${p.seo.focusKeyword}")`);
    return;
  }

  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is not set");
  await mongoose.connect(process.env.MONGO_URI);
  try {
    for (const data of built) {
      if (await BlogPost.exists({ slug: data.slug })) {
        console.log(`skip    ${data.slug} (already exists)`);
        continue;
      }
      await BlogPost.create(data);
      console.log(`added   ${data.slug} as ${status}`);
    }
  } finally {
    await mongoose.disconnect();
  }
};

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
