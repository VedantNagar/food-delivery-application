const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    items:{
        item:{
            type:Array,
            default:[]
        },
        quantity:Number
    },
    payment:{
        type:String,
    },
    status:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('order',orderSchema)