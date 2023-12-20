// const Order = require('../models/Orders');

// // Create a new order
// const createOrder = async (req, res) => {
//     try {
//       const {items, payment, status, address, totalPrice, user} = req.body;
  
//       // Basic input validation
//       if (!items||!address||!totalPrice ||!user) {
//         return res.json({ error: 'Please provide items, address, totalPrice, and user' });
//       }
  
//       // Create a new order
//       const order = new Order({items, payment, status, address, totalPrice, user});
//       await order.save();
//       res.json(order);

//     } 
//     catch (error) {
//       console.error(error);
//       res.json({ error:'Internal server error'});
//     }
//   };
  
//   // Get order by ID
//   const getOrderById = async (req, res) => {
//     try {
//       const orderId = req.params.orderId;
  
//       // Basic input validation for orderId
//       if (!orderId) {
//         return res.json({error: 'Please provide a valid orderId'});
//       }
  
//       // Find the order by ID
//       const order = await Order.findById(orderId);
  
//       // Check if the order exists
//       if (!order) {
//         return res.json({error: 'Order not found'});
//       }
//       res.json(order);
//     } 
//     catch (error) {
//       console.error(error);
//       res.json({ error: 'Internal server error' });
//     }
//   };


// //change status and payment (id)


// module.exports = {getOrderById,createOrder}