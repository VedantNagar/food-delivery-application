const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');

//middleware
router.use(authMiddleware);

// // CRUD operations for orders

router.post('/createOrder', OrderController.createOrder);
router.get('/getOrder/:id', OrderController.getOrderById);
router.get('/getAllOrder',OrderController.getAllOrder)
router.patch('/deleteOrder',OrderController.deleteOrder)

// router.post('/orders', OrderController.createOrder); //allows creation of new food order
// router.get('/orders/:orderId', OrderController.getOrderById);//retrieves order details based on ID
// router.put('/orders/:orderId', OrderController.updateOrder);//allows modification of order information
// router.delete('/orders/:orderId', OrderController.deleteOrder);//enables removal of an order

module.exports = router;
