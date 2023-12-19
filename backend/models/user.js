const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type:string
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:stirng,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    address:{
        type:string,
        default:'Rohini'
    },
    role:{
        type:String,
        required:true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('user',userSchema)