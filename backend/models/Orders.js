const mongoose = require('mongoose');
const food = require('./Food');
const OrderItemSchema = new mongoose.Schema(
  {
    items: [
      {
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'food',
        },
        quantity: {
          type: Number,
          min: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    orderDate: {
      type: Date,
    },
    paymentMethod: {
      // COD// CARD // Net Banking // Google Pay
      type: String,
    },
    orderStatus: {
      // preparing // onway // delivered // cancelled
      type: String,
      default: 'preparing',
    },
    //add user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'restaurantModel',
      required: true,
    },

    // {{abcd,2},{},{}}
  },
  {
    timestamps: true,
  }
);

OrderItemSchema.pre('find', function (next) {
  this.populate('items.food');
  next();
});

module.exports = mongoose.model('order', OrderItemSchema);

// order(many rest) -> food -> [restaurantId]
