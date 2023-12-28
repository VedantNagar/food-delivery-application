const express = require('express');
const router = express.Router();
const {register,login,profile} = require('../controllers/authController')

// CRUD operations for users
router.post('/login',login);
router.post('/register',register)
router.get('/profile',profile)
// router.post('/users', UserController.register); //allows creation of a new user account
// router.get('/users/:userId', UserController.getUserById); // retrieves user information based on ID
// router.put('/users/:userId', UserController.updateUser); //allows updation of user information by ID
// router.delete('/users/:userId', UserController.deleteUser); //allows the deletion of a user's account by ID

module.exports = router;