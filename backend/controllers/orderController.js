const Order = require('../models/Orders');
const Cart = require('../models/cart');
const User = require('../models/user');
const Restaurant = require('../models/restaurant');

//  Create a new order
const createOrder = async (req, res) => {
  const { items, totalAmount, paymentMethod, orderStatus, userId } = req.body;

  // Create an array of order items with the required structure
  const orderItems = items.map((item) => ({
    food: item.food,
    quantity: item.quantity,
  }));

  // Create a new order
  const newOrder = new Order({
    items: orderItems,
    totalAmount,
    paymentMethod,
    orderStatus,
    user: userId, // Assuming you have a user ID from the request
    orderDate: new Date(),
  });

  // Save the order to the database
  const savedOrder = await newOrder.save();
  res.json(savedOrder);
};

// Get order by ID
const getOrderById = async (req, res) => {
  const { id: orderId } = req.params;

  // Basic input validation for orderId
  if (!orderId) {
    return res.json({ error: 'Please provide a valid orderId' });
  }

  // Find the order by ID
  const order = await Order.findById(orderId);

  // Check if the order exists
  if (!order) {
    return res.json({ error: 'Order not found' });
  }
  res.json({ order });
};

//delete order - orderstatus(cancelled) by Orderid

const deleteOrder = async (req, res) => {
  const { orderId, userId } = req.params;

  //input validation for orderID
  if (!orderId || !userId) {
    return res.status(400).json({ error: 'Provide valid orderId and userId' });
  }

  try {
    //finding order by ID
    const order = await Order.findById(orderId);

    //checking if the order exists
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    //checking if order belongs to the user
    if (order.user.toString() !== userId) {
      return res.json({ error: 'No access to delete this order' });
    }

    //can't cancel if already delivered or cancelled
    if (
      order.orderStatus === 'cancelled' ||
      order.orderStatus === 'delivered'
    ) {
      return res.json({ error: 'Order cannot be cancelled' });
    }

    //updating order status to cancel
    order.orderStatus = 'cancelled';

    //saving the updated order
    const deletedOrder = await order.save();

    //matching order to restaurant
    if (order.restaurant) {
      const restaurant = await Restaurant.findById(order.restaurant);
      if (restaurant) {
        restaurant.orderID = null;
        await restaurant.save();
      }
    } else {
      res.json({ error: 'No restaurant provided of this order' });
    }
    res.json(deletedOrder);
  } catch (error) {
    console.log(error);
    res.json({ error: 'Internal Server Error' });
  }
};

module.exports = { getOrderById, createOrder, deleteOrder };
