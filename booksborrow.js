const express = require('express');
const router = express.Router();
const Borrow = require('../models/Borrow'); // Borrow model to interact with MongoDB

// 📘 POST - Borrow a Book
router.post('/', async (req, res) => {
  try {
    const { studentName, book, borrowDate } = req.body;

    // Basic validation
    if (!studentName || !book || !borrowDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new borrow entry
    const newBorrow = new Borrow({ studentName, book, borrowDate });
    await newBorrow.save();

    res.json({ message: '✅ Book borrowed successfully!' });
  } catch (error) {
    console.error('❌ Error borrowing book:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
