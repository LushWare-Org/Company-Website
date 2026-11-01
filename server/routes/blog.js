const express = require("express");
const {
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
} = require("../controllers/blogController");
const adminAuthMiddleware = require("../middleware/adminAuth");

const router = express.Router();

/**
 * Public Routes
 */
// GET - Published posts (search with ?q=, filter with ?tag= / ?category=)
router.get("/posts", listPublishedPosts);

// GET - One published post by slug, with related posts
router.get("/posts/:slug", getPublishedPost);

// GET - Uploaded image
router.get("/images/:id", getImage);

/**
 * Admin Routes (protected with authentication)
 */
router.get("/admin/posts", adminAuthMiddleware, listAllPosts);
router.get("/admin/posts/:id", adminAuthMiddleware, getPostById);
router.post("/admin/posts", adminAuthMiddleware, createPost);
router.put("/admin/posts/:id", adminAuthMiddleware, updatePost);
router.delete("/admin/posts/:id", adminAuthMiddleware, deletePost);

// Images are sent as the raw request body (already resized by the editor);
// 4 MB stays under Vercel's 4.5 MB request limit.
router.get("/admin/images", adminAuthMiddleware, listImages);
router.post("/admin/images", adminAuthMiddleware, express.raw({ type: "image/*", limit: "4mb" }), uploadImage);
router.delete("/admin/images/:id", adminAuthMiddleware, deleteImage);

module.exports = router;
