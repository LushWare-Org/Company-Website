const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema({
  // Common fields for all inquiry types
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, trim: true, default: "" },
  email: { type: String, required: true, trim: true, lowercase: true },
  country: { type: String, trim: true, default: null },
  // Lead reporting: ISO 3166-1 alpha-2 country code, landing page and that
  // page's target market (client/src/data/markets.ts ids: trades, commercialMep, ...).
  countryCode: { type: String, trim: true, uppercase: true, maxlength: 2, default: null },
  sourcePath: { type: String, trim: true, maxlength: 200, default: null },
  market: { type: String, trim: true, maxlength: 40, default: null },
  budget: { type: String, trim: true, default: null },
  whatsapp: { type: String, trim: true, default: null },
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
  
  // Status tracking (seen/not-seen)
  status: { 
    type: String, 
    enum: ['seen', 'not-seen'],
    default: 'not-seen'
  },
  
  submittedAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Index for faster queries
InquirySchema.index({ email: 1, inquiryType: 1 });
InquirySchema.index({ status: 1 });
InquirySchema.index({ market: 1, createdAt: -1 });
InquirySchema.index({ countryCode: 1 });
InquirySchema.index({ createdAt: -1 });

module.exports = mongoose.model("Inquiry", InquirySchema);
