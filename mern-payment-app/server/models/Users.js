const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' }
});
module.exports = mongoose.model('User', userSchema);

// File: server/models/Transaction.js
const transactionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  currency: String,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  status: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Transaction', transactionSchema);