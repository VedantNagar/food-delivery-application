const mongoose = require('mongoose')

const restaurantSchema = new mongoose.model({
    desription:{
        name:{
            type:string,
            required:true
        },
        about:{
            type:string,
            required:true
        },
        address:{
            type:string,
            required:true
        },
        phone:{
            type:string,
            required:true
        },
        menu:{

        },
        rating:{
            type:Number,
            default:3
        },
        opening_hours:{
            type:string,
            default:''
        }
    },
    orderID:mongoose.Schema.Types.ObjectId
})

mongoose.export = mongoose.model('restaurant',restaurantSchema)