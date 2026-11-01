const mongoose = require("mongoose");

// Blog images live in MongoDB (not on disk) so uploads survive serverless
// deploys. The admin editor resizes/compresses to WebP before uploading.
const BlogImageSchema = new mongoose.Schema({
  data: { type: Buffer, required: true, select: false },
  contentType: { type: String, required: true },
  size: { type: Number, required: true },
  width: { type: Number, default: null },
  height: { type: Number, default: null },
  name: { type: String, trim: true, maxlength: 200, default: "" },
}, { timestamps: true });

BlogImageSchema.index({ createdAt: -1 });

module.exports = mongoose.model("BlogImage", BlogImageSchema);
