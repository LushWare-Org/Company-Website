const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  slug: { type: String, required: true, trim: true, lowercase: true, maxlength: 120, unique: true },
  excerpt: { type: String, trim: true, maxlength: 400, default: "" },
  // Sanitized HTML from the admin editor (utils/blogHtml.js).
  content: { type: String, default: "" },
  // Tag-free copy of the content, used for keyword search and word counts.
  plainText: { type: String, default: "", select: false },
  coverImage: {
    url: { type: String, trim: true, default: "" },
    alt: { type: String, trim: true, maxlength: 200, default: "" },
  },
  category: { type: String, trim: true, maxlength: 60, default: "" },
  tags: [{ type: String, trim: true, lowercase: true, maxlength: 40 }],
  author: {
    name: { type: String, trim: true, maxlength: 80, default: "LushWare Team" },
    role: { type: String, trim: true, maxlength: 80, default: "" },
  },
  // A published post with a future publishedAt stays hidden until then (scheduled).
  status: { type: String, enum: ["draft", "published"], default: "draft" },
  publishedAt: { type: Date, default: null },
  featured: { type: Boolean, default: false },
  seo: {
    metaTitle: { type: String, trim: true, maxlength: 120, default: "" },
    metaDescription: { type: String, trim: true, maxlength: 320, default: "" },
    focusKeyword: { type: String, trim: true, maxlength: 80, default: "" },
    keywords: [{ type: String, trim: true, maxlength: 60 }],
    noindex: { type: Boolean, default: false },
  },
  wordCount: { type: Number, default: 0 },
  readingTime: { type: Number, default: 1 },
}, { timestamps: true });

BlogPostSchema.index({ status: 1, publishedAt: -1 });
BlogPostSchema.index({ tags: 1 });
BlogPostSchema.index({ category: 1 });

module.exports = mongoose.model("BlogPost", BlogPostSchema);
