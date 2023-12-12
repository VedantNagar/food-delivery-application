const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    restarant:{
        type:mongoose.Schema.Types.ObjectId
    },
    about:{
        type:string,
        required:true
    },
    image:{
        type:String
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('food',foodSchema)