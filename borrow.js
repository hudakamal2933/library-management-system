const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  book: {
    type: String,
    required: true
  },
  borrowDate: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Borrow', borrowSchema);
