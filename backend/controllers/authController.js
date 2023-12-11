const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic input validation
    if (!username && !email && !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide username, email, and password' });
    }

    if (!username) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide a username' });
    }

    if (!email) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide an email address' });
    }

    if (!password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide a password' });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Email is already registered' });
    }

    // Hash the password and create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user._id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });

    // Respond with the created user and JWT token
    const sanitizedUser = { _id: user._id, username, email };
    res.status(StatusCodes.CREATED).json({ user: sanitizedUser, token });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic input validation
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide both email and password' });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid email or password' });
    }

    // Check if the provided password matches the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user._id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });

    // Respond with the user details and JWT token
    const sanitizedUser = { _id: user._id, username: user.username, email: user.email };
    res.status(StatusCodes.OK).json({ user: sanitizedUser, token });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
  }
};

