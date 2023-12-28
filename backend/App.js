const express = require('express')
const NotFoundMIddleware = require('./middleware/notFound')
const connectDB = require('./database/connect')
const restRouter = require('./routes/restaurantRoutes')
const foodRouter = require('./routes/foodRoutes')
const orderRouter = require('./routes/orderRoutes')
const userRouter = require('./routes/userRoutes')
const cartRouter = require('./routes/cartRoutes')
const bodyParser = require('body-parser')
const errorMiddleware = require('./middleware/errorMiddleware');
require('express-async-errors')
require('dotenv').config()


const app = express();
app.get('/',(req,res) => {
    res.send("hello world")
})

app.use(bodyParser.json());

app.use('/api/v1/restaurant',restRouter)
app.use('/api/v1/food',foodRouter)
app.use('/api/v1/order',orderRouter)
app.use('/api/v1/user',userRouter)
// app.use('/api/v1/cart',cartRouter)
app.use(NotFoundMIddleware)
app.use(errorMiddleware)

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

