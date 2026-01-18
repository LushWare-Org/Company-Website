const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  whatsapp: { type: String, required: true },
  industry: { type: String, required: true },
  requirement: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Inquiry", InquirySchema);
