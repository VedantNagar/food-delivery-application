const foodModal = require("../models/Food");
const restModal = require("../models/restaurant");

// all items
const allFood = async (req, res) => {
  const foods = await foodModal.find({});
  res.status(200).json([foods]);
};

const singleFood = async (req, res) => {
  const { id: foodID } = req.params;
  const item = await foodModal.findById(foodID);
  res.status(200).json(item);
};

// Sort food items by price range in increasing order and filter by name, including restaurant information
const sortFoodsByPriceRange = async (req, res) => {
  try {
    const { sort = "price", name } = req.query;

    // Basic input validation for price range
    // if (
    //   !minPrice ||
    //   !maxPrice ||
    //   isNaN(minPrice) ||
    //   isNaN(maxPrice) ||
    //   maxPrice < minPrice
    // ) {
    //   return res.status(400).json({
    //     error: 'Please provide valid minPrice and maxPrice as numbers',
    //   });
    // }

    // let query = {
    //   price: {
    //     $gte: parseInt(minPrice),
    //     $lte: parseInt(maxPrice),
    //   },
    // };

    // // Add optional name filter
    // if (name) {
    //   query.name = { $regex: name, $options: 'i' };
    // }
    const searchQuery = name;
    const regexPattern = new RegExp(searchQuery.split(/\s+/).join("|"), "i");

    // Assuming you have a MongoDB collection named 'names'
    

    let result = foodModal
      .find({ name: { $regex: regexPattern } })
      .populate({
        path: "restaurantID", // Assuming the reference field is named 'restaurant'
        select: "name rating", // Select the fields you want to include
      })
      
      .sort(sort);

    const foods = await result;

    res.json(foods);
  } catch (error) {
    console.error(error);
    res.json({ error: "Internal server error" });
  }
};

// example request
// GET /api/foods/sortByPriceRange?minPrice=100&maxPrice=200&sort=price&name=pizza

//range - (l - r)

module.exports = { allFood, singleFood, sortFoodsByPriceRange };
