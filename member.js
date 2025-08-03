const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  joinDate: { type: Date, default: Date.now },
  status: { type: String, default: 'active' } // active/inactive
});

module.exports = mongoose.model('Member', memberSchema);
