const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic input validation
    if (!username && !email && !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide username, email, and password'});
    }

    if (!username) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide a username'});
    }

    if (!email) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide an email address'});
    }

    if (!password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide a password'});
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Email is already registered' });
    }
    //creating a hash for the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    // For security, avoid sending the password in the response
    const sanitizedUser = { _id: user._id, username, email };
    
    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user._id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });

    res.status(StatusCodes.CREATED).json({ user: sanitizedUser, token });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
    }

    // For security, avoid sending the password in the response
     const sanitizedUser = { _id: user._id, username: user.username, email: user.email };
    res.status(StatusCodes.OK).json(sanitizedUser); 
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });

    if (!updatedUser) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
    }

    // For security, avoid sending the password in the response
     const sanitizedUser = { _id: updatedUser._id, username: updatedUser.username, email: updatedUser.email };
    res.status(StatusCodes.OK).json(sanitizedUser); 
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);

    if (!deletedUser) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
    }
    res.status(StatusCodes.OK).send();
    // For security, avoid sending the password in the response
    const sanitizedUser = { _id: deletedUser._id, username: deletedUser.username, email: deletedUser.email };
    res.status(StatusCodes.OK).json(sanitizedUser); 
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
  }
};
