// models/fyq.js
const mongoose = require('mongoose');

const fyqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('FYQ', fyqSchema);
