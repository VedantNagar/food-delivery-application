const Order = require('../models/Orders');
const Food = require('../models/Food');
const Restaurant = require('../models/restaurant');
const User = require('../models/user');


//  Create a new order
// const createOrder = async (req, res) => {
//   const { items, totalAmount, paymentMethod, orderStatus, userId } = req.body;

//   // Create an itemsay of order items with the required structure
//   const orderItems = items.map((item) => ({
//     food: item.food,
//     quantity: item.quantity,
//   }));

//   // const restaurant = await Restaurant.findById(restaurantId)
//   // if(!restaurant){
//   //   return res.json({
//   //     error:"restaurant not found"
//   //   })
//   // }
//   // Create a new order
//   const newOrder = new Order({
//     items: orderItems,
//     totalAmount,
//     paymentMethod,
//     orderStatus,
//     user: userId, // Assuming you have a user ID from the request
//     orderDate: new Date(),
//     restaurant
//   });

//   // Save the order to the database
//   const savedOrder = await newOrder.save();
//   res.json(savedOrder);
// };

const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod, orderStatus} = req.body;
    const userId = req.user.id;
    const user = User.findById({userId})
    if(!user){
      res.status(400).json({
        msg:"user not found"
      })
    }
    // Create an itemsay of order items with the required structure
    // Create a new order for each restaurant
    const orders = [];

    // Group order items by restaurantID
    const groupedItems = await groupByRestaurant(items);
    console.log(groupedItems);

    // Iterate through each restaurant's items and create a separate order
    for (const restaurantID in groupedItems) {
      const rest = await Restaurant.findById(restaurantID); // Note the await here
      const disc = rest.discount;
      const restaurantItems = groupedItems[restaurantID];
      let sum = 0;
      restaurantItems.forEach(item => {
          sum += item.quantity * item.food.price; // shorthand for sum = sum + ...
      });
  
      sum -= (sum * disc * 0.01);
  
      // Check if sum is a valid number, if not, set it to 0
      if (isNaN(sum)) {
          sum = 0;
      }
  
      const newOrder = new Order({
          items: restaurantItems,
          totalAmount: sum,
          paymentMethod,
          orderStatus,
          user: userId,
          orderDate: new Date(),
          restaurant: restaurantID,
      });
  
      const savedOrder = await newOrder.save();
  
      // Add order in restaurant database
      await Restaurant.findByIdAndUpdate(restaurantID, {
          $push: { orderID: savedOrder._id },
      });
  
      orders.push(savedOrder);
  }
  
    //update order in  user
    await User.findByIdAndUpdate(userId, {
      $push: { orderID: { $each: orders } },
    });

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Helper function to group items by a specific property
async function groupByRestaurant(items) {
  try {
    // Fetch all unique restaurant IDs from the food items
    const restaurantIds = Array.from(new Set(items.map((item) => item.food)));

    // Fetch the restaurant ID for each food item from the Food model
    const restaurantIdMap = await Promise.all(
      restaurantIds.map(async (foodId) => {
        const foodDoc = await Food.findById(foodId);
        if (!foodDoc) {
          throw new Error(`Food with ID ${foodId} not found`);
        }
        return { foodId, restaurantId: foodDoc.restaurantID };
      })
    );

    // Create a mapping of restaurant IDs to their corresponding food items
    const groupedItems = items.reduce((acc, item) => {
      const { restaurantId } = restaurantIdMap.find(
        (mapItem) => mapItem.foodId === item.food
      );
      if (!acc[restaurantId]) {
        acc[restaurantId] = [];
      }
      acc[restaurantId].push(item);
      return acc;
    }, {});

    return groupedItems;
  } catch (error) {
    console.error(error);
    throw new Error('Error grouping items by restaurant');
  }
}

//get all order 
const getAllOrder = async(req,res) => {
  const userID = req.user.id
  const orders = await Order.find({user:userID});
  res.json(orders)
}

// Get order by ID
const getOrderById = async (req, res) => {
  const { id: orderId } = req.params;

  // Basic input validation for orderId
  if (!orderId) {
    return res.json({ error: 'Please provide a valid orderId' });
  }

  // Find the order by ID
  const order = await Order.findById(orderId)
    // .populate({
    //   path: 'items.food',

    //   select: 'name price', // Specify the fields you want to select from the populated model
    // })
    // .select(
    //   'items totalAmount paymentMethod orderStatus user orderDate restaurant'
    // );

  // Check if the order exists
  if (!order) {
    return res.json({ error: 'Order not found' });
  }
  res.json({ order });
};

//delete order - orderstatus(cancelled) by Orderid

const deleteOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const { userId } = req.body;
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
      //!!!! CHECK IF USER.TOSTRING() OR USERID.TOSTRING()!!!!!!//
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

module.exports = { getOrderById, createOrder, deleteOrder ,getAllOrder};

//user -> order -> many rest (id)
