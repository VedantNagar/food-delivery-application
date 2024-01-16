const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    items:[
        {
            food:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'food'
            },
            quantity:{
                type:Number,
                min:1
            }
        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

module.exports = mongoose.model('cart',cartSchema)

