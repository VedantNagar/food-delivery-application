const mongoose = require('mongoose')
const food = require('./Food')
export const OrderItemSchema = new Schema(
    {
      food: { type: food.schema, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
    {
      _id: false,
    }
  );



  OrderItemSchema.pre('validate', function (next) {
    this.price = this.food.price * this.quantity;
    next();
  });

const orderSchema = new mongoose.Schema({
    items:{
        type:[OrderItemSchema],
        required:true
    },
    payment:{
        type:String,
    },
    status:{
        type:String,
        default:"NEW"
    },
    address:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},{
    timestamps:true,
    toJSON: {
        virtuals: true,
      },
      toObject: {
        virtuals: true,
      }
});

module.exports  = mongoose.model('order',orderSchema)