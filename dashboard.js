const express = require('express');
const router = express.Router();

const Book = require('../models/Book');
const Borrow = require('../models/Borrow');
const User = require('../models/User');
const Member = require('../models/Member');
const Notification = require('../models/Notification');
const Category = require('../models/Category');

router.get('/', async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();

    const booksIssued = await Borrow.countDocuments({ returnDate: null });

    const overdueBooks = await Borrow.countDocuments({
      returnDate: null,
      dueDate: { $lt: new Date() }
    });

    const totalMembers = await Member.countDocuments();

    const totalNotifications = await Notification.countDocuments();

    const totalCategories = await Category.countDocuments();

    // 📊 Bar Chart
    const barChartData = {
      labels: ["Issued Books", "Overdue Books"],
      data: [booksIssued, overdueBooks]
    };

    // 📊 Pie Chart – Count of books per branch
    const pieRaw = await Book.aggregate([
      { $group: { _id: "$branch", count: { $sum: 1 } } }
    ]);
    const pieChartData = {
      labels: pieRaw.map(p => p._id),
      data: pieRaw.map(p => p.count)
    };

    // 📈 Line Chart – Issued books per month
    const lineRaw = await Borrow.aggregate([
      {
        $match: { borrowDate: { $exists: true } }
      },
      {
        $group: {
          _id: { $month: "$borrowDate" },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const lineChartData = {
      labels: lineRaw.map(l => months[l._id - 1]),
      data: lineRaw.map(l => l.count)
    };

    res.json({
      totalBooks,
      totalMembers,
      booksIssued,
      overdueBooks,
      totalNotifications,
      totalCategories,
      charts: {
        bar: barChartData,
        pie: pieChartData,
        line: lineChartData
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Dashboard error' });
  }
});

module.exports = router;
