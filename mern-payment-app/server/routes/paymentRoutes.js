const router = require('express').Router();
const { initiatePayment } = require('../controllers/paymentController');
router.post('/initiate', initiatePayment);
module.exports = router;

// Controllers: server/controllers/paymentController.js
const Razorpay = require('razorpay');
const Transaction = require('../models/Transaction');
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
});

exports.initiatePayment = async (req, res) => {
  try {
    const { amount, userId } = req.body;
    const options = {
      amount: amount * 100,
      currency: 'INR',
      receipt: `receipt_order_${Date.now()}`
    };
    const order = await razorpay.orders.create(options);
    await Transaction.create({ userId, amount, currency: 'INR', razorpayOrderId: order.id, status: 'created' });
    res.json({ orderId: order.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};