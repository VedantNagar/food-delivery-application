const express = require('express');
const restaurantController = require('../controllers/restaurantController');
const router = express.Router();
const authMiddleware = require('../middleware/roleAuthMiddleware');

// CRUD operations for restaurants

//get rest(id)
router.get('/getRestaurant/:id', restaurantController.getRestaurant); //id

//get all rest
router.get('/getAllRestaurant', restaurantController.getAllRestaurant);

//get searched rest
router.get('/getSearchRestaurants',restaurantController.searchRest)




//middleware
router.use(authMiddleware);



//delete rest(id)
router.delete('/deleteRestaurant/:id', restaurantController.deleteRestaurant);

//edit rest(id) -> menu,add image,description
router.patch('/editRestaurant/:id', restaurantController.editRestaurant);

//create rest(register -> if(role == owner) -> createRestaurant)
router.post('/create', restaurantController.createRestaurant);

// add food
router.post('/addFood/:id', restaurantController.addFood);

//orderStatus
router.patch('/changeStatus/:id',restaurantController.changeOrderStatus);

//get all orders
router.get('/getAllOrders/:id',restaurantController.getorders)


module.exports = router;
