const express = require("express");
const { 
  submitInquiry, 
  getAllInquiries, 
  getInquiryById,
  updateInquiryStatus,
  getInquiriesByType 
} = require("../controllers/inquiryController");

const router = express.Router();

/**
 * Public Routes
 */
// POST - Submit new inquiry (solution, project, or consultation)
router.post("/", submitInquiry);

/**
 * Admin Routes (in production, add authentication middleware)
 */
// GET - Get all inquiries with optional filters
router.get("/", getAllInquiries);

// GET - Get inquiries by type (solution, project, consultation)
router.get("/type/:type", getInquiriesByType);

// GET - Get single inquiry by ID
router.get("/:id", getInquiryById);

// PATCH - Update inquiry status
router.patch("/:id/status", updateInquiryStatus);

module.exports = router;
