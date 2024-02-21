const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  type:{
    type:String,
    trim:true,
    lowercase:true
  },
  restaurantID: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"restaurantModel",
    required: true,
  },
});

module.exports = mongoose.model('food', foodSchema);
