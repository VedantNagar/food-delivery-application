const express = require('express');
const restaurantController = require('../controllers/restaurantController')
const router = express.Router();


// CRUD operations for restaurants

//create rest

//get rest(id) 
router.get('/getRestaurant', restaurantController.getRestaurant);//id

//get all rest
router.get('/getAllRestaurant', restaurantController.getAllRestaurant);

//delete rest(id)

//edit rest(id) -> menu,add image,description




router.post('/create', restaurantController.createRestaurant);


 //allows creation of new restaurant profile
// router.get('/restaurants/:restaurantId', RestaurantController.getRestaurantById); //retrieves restaurant info based on ID
// router.put('/restaurants/:restaurantId', RestaurantController.updateRestaurant); //updates details of restaurant
// router.delete('/restaurants/:restaurantId', RestaurantController.deleteRestaurant); //allows deletion of restaurant profile

module.exports = router;