const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');

// CRUD operations for carts
router.post('/carts', CartController.createCart);//allows creation of new cart
router.get('/carts/:cartId', CartController.getCartById);//retrieves cart details based on ID
router.put('/carts/:cartId', CartController.updateCart);//allows modification of cart info based on ID
router.delete('/carts/:cartId', CartController.deleteCart);//enables removal of a cart based on ID

module.exports = router;