const express = require("express");
const { 
  submitInquiry, 
  getAllInquiries, 
  getInquiryById,
  updateInquiryStatus,
  getInquiriesByType 
} = require("../controllers/inquiryController");
const adminAuthMiddleware = require("../middleware/adminAuth");

const router = express.Router();

/**
 * Public Routes
 */
// POST - Submit new inquiry (solution, project, or consultation)
router.post("/", submitInquiry);

/**
 * Admin Routes (protected with authentication)
 */
// GET - Get all inquiries with optional filters
router.get("/", adminAuthMiddleware, getAllInquiries);
//router.get("/", getAllInquiries);

// GET - Get inquiries by type (solution, project, consultation)
router.get("/type/:type", adminAuthMiddleware, getInquiriesByType);

// GET - Get single inquiry by ID
router.get("/:id", adminAuthMiddleware, getInquiryById);

// PATCH - Update inquiry status
router.patch("/:id/status", adminAuthMiddleware, updateInquiryStatus);

module.exports = router;
