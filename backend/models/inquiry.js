const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  details: { type: String, required: true },
  items: { type: Number, required: true },
  distance: { type: Number, required: true }
});

module.exports = mongoose.model('inquiry', InquirySchema);