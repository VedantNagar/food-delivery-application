const restaurantModel = require('../models/restaurant');
const FoodModal = require('../models/Food');

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
    res.status(404).json({ error: 'Internal server error' });
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



module.exports = {
  createRestaurant,
  getRestaurant,
  getAllRestaurant,
  deleteRestaurant,
  editRestaurant,
  addFood,
};
