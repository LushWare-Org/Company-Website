const Inquiry = require("../models/Inquiry");
const { sendInquiryEmail, sendUserConfirmationEmail } = require("../utils/emailService");

/**
 * Submit a new inquiry
 * Handles all inquiry types: solution, project, consultation
 */
const submitInquiry = async (req, res) => {
  try {
    const { firstName, lastName, email, country, whatsapp, inquiryType } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !country || !whatsapp || !inquiryType) {
      return res.status(400).json({ 
        message: "Missing required fields",
        required: ["firstName", "lastName", "email", "country", "whatsapp", "inquiryType"]
      });
    }

    // Create new inquiry document
    const inquiry = new Inquiry({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      country: country.trim(),
      whatsapp: whatsapp.trim(),
      inquiryType,
      organization: req.body.organization || null,
      
      // Solution specific
      industry: req.body.industry || null,
      requirements: req.body.requirements || null,
      
      // Project specific
      project: req.body.project || null,
      teamMembers: req.body.teamMembers || null,
      
      // General message
      message: req.body.message || null,
      
      submittedAt: new Date(),
      status: 'not-seen'
    });

    // Save to database
    const savedInquiry = await inquiry.save();

    // Send email notifications (don't block submission if emails fail)
    const adminEmailSent = await sendInquiryEmail(savedInquiry);
    const userEmailSent = await sendUserConfirmationEmail(savedInquiry);

    res.status(201).json({
      message: "Inquiry submitted successfully",
      id: savedInquiry._id,
      emailStatus: {
        adminNotification: adminEmailSent ? "sent" : "failed",
        userConfirmation: userEmailSent ? "sent" : "failed"
      },
      inquiry: {
        id: savedInquiry._id,
        email: savedInquiry.email,
        inquiryType: savedInquiry.inquiryType,
        status: savedInquiry.status,
        submittedAt: savedInquiry.submittedAt
      }
    });
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    res.status(500).json({ 
      message: "Error submitting inquiry",
      error: error.message 
    });
  }
};

/**
 * Get all inquiries (admin endpoint)
 */
const getAllInquiries = async (req, res) => {
  try {
    const { status, inquiryType, sortBy = "-createdAt" } = req.query;
    
    // Build filter
    const filter = {};
    if (status) filter.status = status;
    if (inquiryType) filter.inquiryType = inquiryType;

    const inquiries = await Inquiry.find(filter).sort(sortBy).lean();

    res.json({
      total: inquiries.length,
      inquiries
    });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    res.status(500).json({ 
      message: "Error fetching inquiries",
      error: error.message 
    });
  }
};

/**
 * Get single inquiry by ID
 */
const getInquiryById = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await Inquiry.findById(id);

    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.json(inquiry);
  } catch (error) {
    console.error("Error fetching inquiry:", error);
    res.status(500).json({ 
      message: "Error fetching inquiry",
      error: error.message 
    });
  }
};

/**
 * Update inquiry status (mark as seen or not-seen)
 */
const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['seen', 'not-seen'].includes(status)) {
      return res.status(400).json({ message: "Invalid status. Must be 'seen' or 'not-seen'" });
    }

    const updatedInquiry = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedInquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.json({
      message: "Inquiry status updated",
      inquiry: updatedInquiry
    });
  } catch (error) {
    console.error("Error updating inquiry:", error);
    res.status(500).json({ 
      message: "Error updating inquiry",
      error: error.message 
    });
  }
};

/**
 * Get inquiries by type
 */
const getInquiriesByType = async (req, res) => {
  try {
    const { type } = req.params;

    if (!['solution', 'project', 'consultation'].includes(type)) {
      return res.status(400).json({ message: "Invalid inquiry type" });
    }

    const inquiries = await Inquiry.find({ inquiryType: type })
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      type,
      total: inquiries.length,
      inquiries
    });
  } catch (error) {
    console.error("Error fetching inquiries by type:", error);
    res.status(500).json({ 
      message: "Error fetching inquiries",
      error: error.message 
    });
  }
};

module.exports = {
  submitInquiry,
  getAllInquiries,
  getInquiryById,
  updateInquiryStatus,
  getInquiriesByType
};
