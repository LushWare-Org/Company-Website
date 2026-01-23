const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema({
  // Common fields for all inquiry types
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  country: { type: String, required: true, trim: true },
  whatsapp: { type: String, required: true, trim: true },
  inquiryType: { 
    type: String, 
    enum: ['solution', 'project', 'consultation'],
    required: true 
  },
  organization: { type: String, trim: true, default: null },
  
  // Solution inquiry specific fields
  industry: { type: String, trim: true, default: null },
  requirements: { type: String, trim: true, default: null },
  
  // Project inquiry specific fields
  project: { type: String, trim: true, default: null },
  teamMembers: { type: String, trim: true, default: null },
  
  // General message/details field (used by multiple inquiry types)
  message: { type: String, trim: true, default: null },
  
  // Status tracking
  status: { 
    type: String, 
    enum: ['new', 'in-progress', 'responded', 'archived'],
    default: 'new'
  },
  
  submittedAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Index for faster queries
InquirySchema.index({ email: 1, inquiryType: 1 });
InquirySchema.index({ status: 1 });
InquirySchema.index({ createdAt: -1 });

module.exports = mongoose.model("Inquiry", InquirySchema);
