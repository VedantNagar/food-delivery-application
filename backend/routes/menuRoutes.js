const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menuController');

// CRUD operations for menus
router.post('/menus', MenuController.createMenu); //addition of new menu items to a restaurant
router.get('/menus/:menuId', MenuController.getMenuById);//retrieves menu items based on ID
router.put('/menus/:menuId', MenuController.updateMenu);//updates menu item information
router.delete('/menus/:menuId', MenuController.deleteMenu);//enables removal of menu item

module.exports = router;