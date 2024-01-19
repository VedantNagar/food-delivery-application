const express = require('express');
const router = express.Router();
const foodController = require('../controllers/FoodController');

// CRUD operations for menus

//get all food
router.get('/allFood', foodController.allFood);
router.get('/singleFood/:id', foodController.singleFood);
router.get('/sortedFood', foodController.sortFoodsByPriceRange);
// router.post('/menus', MenuController.createMenu); //addition of new menu items to a restaurant
// router.get('/menus/:menuId', MenuController.getMenuById);//retrieves menu items based on ID
// router.put('/menus/:menuId', MenuController.updateMenu);//updates menu item information
// router.delete('/menus/:menuId', MenuController.deleteMenu);//enables removal of menu item

module.exports = router;
