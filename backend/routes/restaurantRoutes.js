const express = require('express');
const restaurantController = require('../controllers/restaurantController');
const router = express.Router();
const authMiddleware = require('../middleware/roleAuthMiddleware');
const upload = require('../utils/fileUpload/multer')
// CRUD operations for restaurants

//get rest(id)
router.get('/getRestaurant/:id', restaurantController.getRestaurant); //id

//get all rest
router.get('/getAllRestaurant', restaurantController.getAllRestaurant);

//get searched rest
router.get('/getSearchRestaurants',restaurantController.searchRest)




//middleware
router.use(authMiddleware);

//get all user restaurants(userID)
router.get('/getAllUserRestaurant',restaurantController.getAllUserRestaurant)

//delete rest(id)
router.delete('/deleteRestaurant/:id', restaurantController.deleteRestaurant);

//edit rest(id) -> menu,add image,description
router.patch('/editRestaurant/:id', restaurantController.editRestaurant);

//create rest(register -> if(role == owner) -> createRestaurant)

// router.post('/create',(req,res,next) => {
//     console.log("shivam bhai")
//     // res.send("shivam bhai")
//     next()
// },upload.single("image"), (req,res) => {
//     console.log(req.file)
//     res.send("shivam bhai")
// }); 

router.post('/create',upload.single("image"), restaurantController.createRestaurant);

// add food
router.post('/addFood/:id',upload.single("image"), restaurantController.addFood);




//orderStatus
router.patch('/changeStatus/:id',restaurantController.changeOrderStatus);

//get all orders
router.get('/getAllOrders',restaurantController.getorders)

//delete food
router.delete('/deleteFood/:id',restaurantController.deleteFood)

//edit food(food id)
router.patch('/editFood/:id',restaurantController.editFood)

module.exports = router;
