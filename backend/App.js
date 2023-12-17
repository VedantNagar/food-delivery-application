const express = require('express')
const connectDB = require('./database/connect')
const router = require('./routes/restaurantRoutes')
const bodyParser = require('body-parser')

require('dotenv').config()


const app = express();
app.get('/',(req,res) => {
    res.send("hello world")
})

app.use(bodyParser.json());

app.use('/api/v1/restaurant',router)

const port = process.env.PORT || 8000;

const start = async() => {
    try {
        //connect db
        await connectDB(process.env.MONGO_URI)
        
        console.log("connected")
        //start server
        app.listen(port,() => {
            console.log("server is running on port 8000")
        })
    } catch (error) {
        console.log(error)
    }

}

start()

