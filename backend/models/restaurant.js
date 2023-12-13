const mongoose = require('mongoose')

const restaurantSchema = new mongoose.model({
    desription:[{
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
        menu:[{
            name:{
                type:string,
                required:true
            },
            about:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            image:{
                type:String,
            }
        }],
        rating:{
            type:Number,
            default:3
        },
        opening_hours:{
            type:string,
            default:''
        }
    }],
    orderID:{
        type:mongoose.Schema.Types.ObjectId,
        required:false
    }
})

mongoose.export = mongoose.model('restaurant',restaurantSchema)