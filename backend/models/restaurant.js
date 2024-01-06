const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
  },
  menu: {
    type: [
      {
        name: {
          type: String,
        },
        about: {
          type: String,
        },
        price: {
          type: Number,
        },
        image: {
          type: String,
        },
        category: {
          type: String,
        },
      },
    ],
    default: [],
  },
  rating: {
    type: Number,
    default: 3,
  },
  opening_hours: {
    type: String,
    default: '',
  },
  orderID: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
});

// Use mongoose.model to create the model and export it
module.exports = mongoose.model('restaurantModel', restaurantSchema);
