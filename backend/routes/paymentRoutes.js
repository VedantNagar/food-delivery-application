const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');

// CRUD operations for payments
router.post('/payments', PaymentController.createPayment); //allows creation of a new payment record for an order
router.get('/payments/:paymentId', PaymentController.getPaymentById); //retrieves payment details based on ID
router.put('/payments/:paymentId', PaymentController.updatePayment); //allows modification of payment record
router.delete('/payments/:paymentId', PaymentController.deletePayment); //enables deletion of payment record using ID

module.exports = router;
