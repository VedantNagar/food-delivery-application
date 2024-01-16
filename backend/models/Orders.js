const mongoose = require('mongoose');
const food = require('./Food');
export const OrderItemSchema = new Schema({
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
  payementMethod: {
    // COD// CARD // Net Banking // Google Pay
    type: String,
  },
  orderStatus: {
    // waiting // preparing // onway // delivered // cancelled // failed
    type: String,
  },
});

module.exports = mongoose.model('order', orderSchema);
