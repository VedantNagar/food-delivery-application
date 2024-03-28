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
    required:false
  },
  cft: {
    type: String,
    required: false,
  },
  discount: {
    type: Number,
    required: false,
    default:'5%'
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
          type: [String],
        },
        category: {
          type: String,
        },
        foodID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'food',
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
    default: '10am',
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  orderID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'order',
      required: false,
      
    },
  ],
});

// Use mongoose.model to create the model and export it
module.exports = mongoose.model('restaurantModel', restaurantSchema);
