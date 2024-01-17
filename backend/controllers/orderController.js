const Order = require('../models/Orders');
const Cart = require('../models/cart');
const User = require('../models/user');

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
    res.json(savedOrder)
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




module.exports = { getOrderById, createOrder };
