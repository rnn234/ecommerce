const Payment = require('../models/Payment');

exports.initiatePayment = async (req, res) => {
    const { amount, paymentMethod } = req.body;

    try {
        const payment = await Payment.create({
            userId: req.user.id,
            amount,
            paymentMethod,
            status: 'Pending'
        });
        res.json({ message: 'Payment initiated', payment });
    } catch (error) {
        res.status(500).json({ message: 'Payment failed', error });
    }
};
