const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      default: 'Rohini',
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', userSchema);

//role -> rest -> form -> create rest

//role -> user ->
