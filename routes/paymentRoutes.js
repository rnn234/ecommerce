const express = require('express');
const { initiatePayment } = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/pay', authMiddleware, initiatePayment);

module.exports = router;
