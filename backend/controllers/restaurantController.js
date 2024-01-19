const restaurantModel = require('../models/restaurant');
const FoodModal = require('../models/Food');
const Order = require('../models/Orders');
const User = require('../models/user');

// const getRestaurant = async (req,res) => {
//     const { id: restaurantID } = req.params;
//     const restaurant = await restaurantModel.findOne({_id: restaurantID})
//   if (!restaurant) {
//     res.status(404).json("Restaurant not found")
//   }
//   res.status(200).json({ restaurant })
// }

//get rest(id)
const getRestaurant = async (req, res) => {
  const { id: restaurantID } = req.params;
  try {
    const restaurant = await restaurantModel.findById(restaurantID);
    if (!restaurant) {
      return res.status(404).json('Restaurant not found');
    }
    res.status(200).json({ restaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//get all rest
const getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({});
    res.status(200).json({ restaurants });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//delete rest(id)

const deleteRestaurant = async (req, res) => {
  const { id: restaurantID } = req.params;
  try {
    const deletedRestaurant = await restaurantModel.findOneAndDelete({
      _id: restaurantID,
    });
    if (!deletedRestaurant) {
      return res.status(404).json('Restaurant not found');
    }
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//edit rest(id) -> menu,add image,description
const editRestaurant = async (req, res) => {
  const { id: restaurantID } = req.params;
  try {
    const updatedRestaurant = await restaurantModel.findByIdAndUpdate(
      restaurantID,
      req.body,
      { new: true }
    );

    if (!updatedRestaurant) {
      return res.status(404).json('Restaurant not found');
    }
    res.status(200).json({ updatedRestaurant });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//create restaurant

const createRestaurant = async (req, res) => {
  try {
    const { name, about, address, phone, opening_hours } = req.body;
    const restaurant = await restaurantModel.create(req.body);

    // Send the created restaurant object in the response
    res.status(201).json(restaurant);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// add food in menu and update in food model
const addFood = async (req, res) => {
  const { id: restaurantID } = req.params;
  const items = req.body;

  const menuItem = {};
  menuItem.name = items.name;
  menuItem.about = items.about;
  menuItem.image = items.image;
  menuItem.category = items.category;
  menuItem.price = items.price;
  const food = await FoodModal.create({ ...menuItem, restaurantID });
  const restaurant = await restaurantModel.findById(restaurantID);
  restaurant.menu.push(menuItem);
  await restaurant.save();
  res.status(200).json(food);
};

// change Orderstatus(by restaurant) by orderId

const changeOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;

    //checking user role
    const userId = req.user.Id; //!! CHECK THIS !!
    const user = await User.findById(userId);

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Cannot access' });
    }

    //validating order status
    const possibleOrderStatus = [
      'preparing',
      'on the way',
      'delivered',
      'cancelled ',
    ];

    //checking possibleOrderStatus with orderStatus
    if (!possibleOrderStatus.includes(orderStatus)) {
      return res.status(400).json({ error: 'Invalid order status' });
    }
    //find order by id
    const order = await Order.findById(orderId);

    //check if order exists
    if (!order) {
      return res.status(404).json({ error: 'Order does not exist' });
    }

    //updating order status
    order.orderStatus = orderStatus;
    await order.save();

    //displaying successful
    res.status(200).json({
      message: `Order status changed to ${orderStatus} for ${orderId}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createRestaurant,
  getRestaurant,
  getAllRestaurant,
  deleteRestaurant,
  editRestaurant,
  addFood,
  changeOrderStatus,
};
