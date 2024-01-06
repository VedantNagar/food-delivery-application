const foodModal = require('../models/Food');
const restModal = require('../models/restaurant');

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

//sort(price,name) (id) -filter

// const getAllProducts = async (req, res) => {
//   const { featured, company, name, sort, fields, numericFilters } = req.query;
//   const queryObject = {};

//   if (featured) {
//     queryObject.featured = featured === 'true' ? true : false;
//   }
//   if (company) {
//     queryObject.company = company;
//   }
//   if (name) {
//     queryObject.name = { $regex: name, $options: 'i' };
//   }
//   if (numericFilters) {
//     const operatorMap = {
//       '>': '$gt',
//       '>=': '$gte',
//       '=': '$eq',
//       '<': '$lt',
//       '<=': '$lte',
//     };
//     const regEx = /\b(<|>|>=|=|<|<=)\b/g;
//     let filters = numericFilters.replace(
//       regEx,
//       (match) => `-${operatorMap[match]}-`
//     );
//     const options = ['price', 'rating'];
//     filters = filters.split(',').forEach((item) => {
//       const [field, operator, value] = item.split('-');
//       if (options.includes(field)) {
//         queryObject[field] = { [operator]: Number(value) };
//       }
//     });
//   }

//   let result = Product.find(queryObject);
//   // sort
//   if (sort) {
//     const sortList = sort.split(',').join(' ');
//     result = result.sort(sortList);
//   } else {
//     result = result.sort('createdAt');
//   }

//   if (fields) {
//     const fieldsList = fields.split(',').join(' ');
//     result = result.select(fieldsList);
//   }
//   const page = Number(req.query.page) || 1;
//   const limit = Number(req.query.limit) || 10;
//   const skip = (page - 1) * limit;

//   result = result.skip(skip).limit(limit);
//   // 23
//   // 4 7 7 7 2

//   const products = await result;
//   res.status(200).json({ products, nbHits: products.length });
// };

// Sort food items by price range in increasing order and filter by name, including restaurant information
const sortFoodsByPriceRange = async (req, res) => {
  try {
    const { minPrice, maxPrice, sort = 'price', name } = req.query;

    // Basic input validation for price range
    if (!minPrice || !maxPrice || isNaN(minPrice) || isNaN(maxPrice)) {
      return res.json({
        error: 'Please provide valid minPrice and maxPrice as numbers',
      });
    }

    let query = {
      price: {
        $gte: parseInt(minPrice),
        $lte: parseInt(maxPrice),
      },
    };

    // Add optional name filter
    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }

    let result = foodModal
      .find(query)
      .populate({
        path: 'restaurant', // Assuming the reference field is named 'restaurant'
        select: 'name rating', // Select the fields you want to include
      })
      .sort(sort);

    const foods = await result;

    res.json(foods);
  } catch (error) {
    console.error(error);
    res.json({ error: 'Internal server error' });
  }
};

// example request
// GET /api/foods/sortByPriceRange?minPrice=100&maxPrice=200&sort=price&name=pizza

//range - (l - r)

module.exports = { allFood, singleFood, sortFoodsByPriceRange };
