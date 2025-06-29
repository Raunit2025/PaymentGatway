const router = require('express').Router();
const { initiatePayment } = require('../controllers/paymentController');
router.post('/initiate', initiatePayment);
module.exports = router;
