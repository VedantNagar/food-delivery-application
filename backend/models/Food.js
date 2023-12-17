const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    about:{
        type:string,
        required:true
    },
    image:{
        type:String
    },
    category: {
        type: String,
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('foodModal',foodSchema)