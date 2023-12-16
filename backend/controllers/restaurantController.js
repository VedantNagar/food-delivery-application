const restaurantModel = require('../models/restaurant');

// post restaurant details


//get rest(id) 
const getRestaurant = async (req,res) => {
    const { id: restaurantID } = req.params
  const restaurant = await restaurantModel.findOne({ _id: restaurantID })
  if (!restaurant) {
    res.status(404).json("not find")
  }

  res.status(200).json({ restaurant })
}

//get all rest
const getAllRestaurant = async (req,res) => {
    const restaurants = await restaurantModel.find({})
    res.status(200).json({restaurants})
}

//delete rest(id)

//edit rest(id) -> menu,add image,description

//create
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

// post menu

module.exports = { createRestaurant ,getRestaurant,getAllRestaurant};
