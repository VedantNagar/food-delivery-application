const express = require('express')
const connectDB = require('./database/connect')
require('dotenv').config()

const app = express();
app.get('/',(req,res) => {
    res.send("hello world")
})

const port = process.env.PORT || 8000;

const start = async() => {
    try {
        //connect db
        connectDB(process.env.MONGO_URI)
        //start server
        app.listen(port,() => {
            console.log("server is running on port 8000")
        })
    } catch (error) {
        console.log(error)
    }

}

start()

