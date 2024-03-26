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
    //role -> customer || owner
    role: {
      type: String,
      required: true,
    },
    orderID: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'order',
      required: false,
    }],
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('user', userSchema);


