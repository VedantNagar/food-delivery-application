const express = require('express');
const NotFoundMIddleware = require('./middleware/notFound');
const connectDB = require('./database/connect');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

//routes
const restRouter = require('./routes/restaurantRoutes');
const foodRouter = require('./routes/foodRoutes');
const orderRouter = require('./routes/orderRoutes');
const userRouter = require('./routes/userRoutes');
const cartRouter = require('./routes/cartRoutes');
const stripeRouter = require('./routes/stripe');

// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middleware/errorMiddleware');
require('express-async-errors');

// console.log(process.env)

const app = express();
app.use(morgan('combined'));
// app.get('/', (req, res) => {
//   res.send('hello world');
// });

// app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:8000',
  'https://food-delivery-application-x68l.onrender.com',
  'https://kshitij-fudo-app.onrender.com',
  'https://fudo-w568.onrender.com'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
  credentials: true, // Allow credentials like cookies
};
app.use(cors(corsOptions));

app.use('/', express.static('../frontend/dist'));
app.use('/assets', express.static('../frontend/dist/assets'));

app.use('/api/v1/restaurant', restRouter);
app.use('/api/v1/food', foodRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/cart', cartRouter);
app.use('/api/v1/stripe', stripeRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'), (err) => {
    if (err) {
      console.error('Error sending file:', err);
    }
  });
});
app.use(errorMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    //connect db
    await connectDB(process.env.MONGO_URI);

    console.log('connected');
    //start server
    app.listen(port, () => {
      console.log('server is running on port 8000');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
