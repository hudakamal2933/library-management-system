const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  // ...other fields
});

module.exports = mongoose.model('Book', bookSchema);
