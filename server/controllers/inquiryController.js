const Inquiry = require("../models/Inquiry");
const { sendInquiryEmail, sendUserConfirmationEmail } = require("../utils/emailService");

/**
 * Submit a new inquiry
 * Handles all inquiry types: solution, project, consultation
 *
 * Performance strategy:
 *   1. Validate input
 *   2. Save to MongoDB
 *   3. Respond 201 immediately — user never waits for email
 *   4. Fire emails in the background via setImmediate (non-blocking)
 */
const submitInquiry = async (req, res) => {
  try {
    const { firstName, lastName, email, country, whatsapp, budget, inquiryType } = req.body;

    // Validation
    if (!firstName || !email || !inquiryType) {
      return res.status(400).json({
        message: "Missing required fields",
        required: ["firstName", "email", "inquiryType"],
      });
    }

    // Build and persist the inquiry document
    const inquiry = new Inquiry({
      firstName: firstName.trim(),
      lastName: lastName ? lastName.trim() : "",
      email: email.trim().toLowerCase(),
      country: country ? country.trim() : null,
      countryCode: /^[A-Za-z]{2}$/.test(req.body.countryCode || "") ? req.body.countryCode.toUpperCase() : null,
      sourcePath: typeof req.body.sourcePath === "string" ? req.body.sourcePath.slice(0, 200) : null,
      market: typeof req.body.market === "string" ? req.body.market.slice(0, 40) : null,
      budget: budget ? budget.trim() : null,
      whatsapp: whatsapp ? whatsapp.trim() : null,
      inquiryType,
      organization: req.body.organization || null,

      // Solution-specific
      industry: req.body.industry || null,
      requirements: req.body.requirements || null,

      // Project-specific
      project: req.body.project || null,
      teamMembers: req.body.teamMembers || null,

      // Shared message field
      message: req.body.message || null,

      submittedAt: new Date(),
      status: "not-seen",
    });

    // ── Step 1: Save to DB ────────────────────────────────────────────────
    const savedInquiry = await inquiry.save();
    console.log(`\n✅ [INQUIRY: ${savedInquiry._id}] Saved to MongoDB — type: ${savedInquiry.inquiryType}, from: ${savedInquiry.email}`);

    // ── Step 2: Respond immediately ───────────────────────────────────────
    // The client receives success as soon as the DB write completes.
    // Email status is reported as "processing" since they haven't run yet.
    res.status(201).json({
      message: "Inquiry submitted successfully",
      id: savedInquiry._id,
      emailStatus: {
        adminNotification: "processing",
        userConfirmation: "processing",
      },
      inquiry: {
        id: savedInquiry._id,
        email: savedInquiry.email,
        inquiryType: savedInquiry.inquiryType,
        status: savedInquiry.status,
        submittedAt: savedInquiry.submittedAt,
      },
    });

    // ── Step 3: Fire emails in background ─────────────────────────────────
    // setImmediate defers execution until after the current I/O event (response
    // is already flushed). Errors here are fully logged but never surface to
    // the user — email failures never affect inquiry creation.
    setImmediate(async () => {
      console.log(`\n===============================================`);
      console.log(`📬 [BG: ${savedInquiry._id}] Sending email notifications...`);
      console.log(`===============================================`);

      try {
        const [adminEmailResult, userEmailResult] = await Promise.all([
          sendInquiryEmail(savedInquiry),
          sendUserConfirmationEmail(savedInquiry),
        ]);

        console.log(`\n📊 [BG: ${savedInquiry._id}] Email Summary:`);
        console.log(`   Admin Email : ${adminEmailResult.sent ? "✅ SENT" : "❌ FAILED"}`);
        if (adminEmailResult.sent) console.log(`     Message ID : ${adminEmailResult.messageId}`);
        if (adminEmailResult.error) console.log(`     Error      : ${adminEmailResult.error.message}`);

        console.log(`   User Email  : ${userEmailResult.sent ? "✅ SENT" : "❌ FAILED"}`);
        if (userEmailResult.sent) console.log(`     Message ID : ${userEmailResult.messageId}`);
        if (userEmailResult.error) console.log(`     Error      : ${userEmailResult.error.message}`);
        console.log(`===============================================\n`);
      } catch (emailErr) {
        // Catches unexpected throws from the email service itself
        console.error(`\n❌ [BG: ${savedInquiry._id}] Unhandled email error:`, emailErr.message);
      }
    });

  } catch (error) {
    console.error("Error submitting inquiry:", error);
    res.status(500).json({
      message: "Error submitting inquiry",
      error: error.message,
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
