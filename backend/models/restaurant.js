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
  subName:{
    type:String,
    trim:true,
    lowercase:true
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
  cft:{
    type:String,
    required:false
  },
  discount:{
    type:String,
    required:false
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
        type:{
          type:String,
          trim:true,
          lowercase:true
        }
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
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"users"
  },
  orderID: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"orders",
    required: false,
  }],
});

// Use mongoose.model to create the model and export it
module.exports = mongoose.model('restaurantModel', restaurantSchema);
