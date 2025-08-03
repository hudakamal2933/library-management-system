const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// ➡️ CREATE: Add new book
router.post('/add', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({ message: 'Book added successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➡️ READ: Get all books
router.get('/list', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➡️ UPDATE: Update book by ID
router.put('/update/:id', async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Book updated successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➡️ DELETE: Delete book by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
