const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurantController');

// CRUD operations for restaurants
router.post('/restaurants', RestaurantController.createRestaurant); //allows creation of new restaurant profile
router.get('/restaurants/:restaurantId', RestaurantController.getRestaurantById); //retrieves restaurant info based on ID
router.put('/restaurants/:restaurantId', RestaurantController.updateRestaurant); //updates details of restaurant
router.delete('/restaurants/:restaurantId', RestaurantController.deleteRestaurant); //allows deletion of restaurant profile

module.exports = router;