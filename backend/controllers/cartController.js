const User = require("../models/user");
const Food = require("../models/Food");
const cartModel = require("../models/cart");
const restaurant = require("../models/restaurant");
// get cart
/* const getCart = async(req,res)=>{
    const {id:user_ID} = req.params
    const user = await User.findOne({_id:user_ID})
    if(!user){
        req.json({
            error:"Invalid User"
        })
    }
    const userCart = await cartModel.findOne({userID:user_ID})
    if(!userCart){
        req.json({
            error:"cart not found"
        })
    }
    res.json({
        userCart
    })
} */
const getCart = async (req, res) => {
  try {
    //getting userID
    const userID = req.user.id;

    //checking userID
    if (!userID) {
      return res.json({ error: "Provide userID" });
    }
    //finding the user
    const user = await User.findById(userID);

    //checking if user exists
    if (!user) {
      return res.json({ error: "User not found" });
    }
    const userName = `${user.first_name} ${user.last_name || ""}`;

    //finding user's cart using userID
    const userCart = await cartModel.findOne({ userID: userID }).populate({
      path: "items.food",
      populate: {
        path: "restaurantID",
        model: "restaurantModel",
        select: "name about rating phone image discount address cft rating",
      },
    });

    //checking if the cart exists
    if (!userCart) {
      return res.json({
        error: `Cart not found for user ${userName} with ID ${userID}`,
      });
    }
    // console.log(userCart.items)
    let discount = 0;
    const promises = userCart.items.map(async (item) => {
      const restID = item.food.restaurantID._id;
      const rest = await restaurant.findById(restID);
      const disc = rest.discount;

      /* console.log('The discount is', disc); */

      console.log(item.food.price * item.quantity);
      const value = disc * 0.01 * item.food.price * item.quantity;
      console.log("The discounted price is", value);
      return value;
    });

    Promise.all(promises)
      .then((discounts) => {
        discount = discounts.reduce((total, discount) => total + discount, 0);
        console.log("discount = " + discount);
        let array = userCart.items;
        let total = 0;
        array.forEach((element) => {
          total = total + element.food.price * element.quantity;
        });
        console.log(total);
        const newUserCart = [{ ...userCart._doc, total, discount }];
        // console.log(newUserCart)
        res.json({ newUserCart });
      })
      .catch((error) => {
        console.error("Error calculating discounts:", error);
        res.json({ error });
      });
  } catch (error) {
    console.log(error);
    res.json({ error: "Internal server error" });
  }
};
//add to cart
// -> same item count++
const addToCart = async (req, res) => {
  try {
    const { foodID, quantityToAdd } = req.body;
    const userID = req.user.id;

    //checking userID
    if (!userID) {
      return res.json({ error: "Provide userID" });
    }
    //finding the user
    const user = await User.findById(userID);

    //checking if user exists
    if (!user) {
      return res.json({ error: "User not found" });
    }
   

    // Input validation

    if (!foodID || !quantityToAdd || quantityToAdd <= 0) {
      return res.json({ error: "Invalid Input. Provide all details" });
    }

    

    // Find food item by ID
    const foodItem = await Food.findById(foodID);
    if (!foodItem) {
      return res.json({ error: "Food item not found" });
    }

    // Find the user's cart by user ID
    var userCart = await cartModel.findOne({ userID: userID }).populate({
      path: 'items.food',
      populate: {
        path: "restaurantID",
        model: "restaurantModel",
        select: "name about rating phone image discount address cft rating",
      },
    });

    console.log(userCart);

    // Create a new cart if it doesn't exist
    if (!userCart) {
      userCart = new cartModel({
        userID: userID,
        items: [],
      });
    }

    // Find the index of the item in the cart's items array
    const itemIndex = userCart.items.findIndex((item) =>
      item.food.equals(foodID)
    );

    // If item is in the cart, increment its quantity, else add the new element
    if (itemIndex !== -1) {
      userCart.items[itemIndex].quantity += parseInt(quantityToAdd);
    } else {
      userCart.items.push({
        food: foodID,
        quantity: parseInt(quantityToAdd),
      });
    }

    // // Populate cart with food name and price
    // userCart = await populateCartItems(userCart);

    // Save the updated cart
    await userCart.save();

    // Sending cart and quantity
    res.json(userCart);
  } catch (error) {
    console.error(error);
    res.json({ error: "Internal server error" });
  }
};

// Function to populate cart items with food name and price
// const populateCartItems = async (userCart) => {
//   for (let item of userCart.items) {
//     const foodItem = await Food.findById(item.food);
//     const rest = await restaurant.findById(item.restaurantID)
//     if (foodItem) {
//       item.name = foodItem.name;
//       item.about = foodItem.about;
//       item.category = foodItem.category;
//       item.image = foodItem.image;
//       item.price = foodItem.price;
//     }
//     if(rest){
//       item.restaurantName = rest.name
//       item.restaurantRating = rest.rating
//       item.restaurantDiscount = rest.discount
//     }
//   }
//   return userCart;
// };

//delete from cart

const removeFromCart = async (req, res) => {
  try {
    const {  foodID, quantityToRemove } = req.body;
    const userID = req.user.id
    //validation
    if (!userID || !foodID || !quantityToRemove || quantityToRemove <= 0) {
      return res.json({ error: "Invalid action. Provide all details" });
    }
    //finding user
    const user = await User.findById(userID);

    //checking if user exists
    if (!user) {
      return res.json({ error: "User not found" });
    }
    //finding user's cart by user ID
    const userCart = await cartModel.findOne({ userID: userID });

    //checking if the cart exists or not
    if (!userCart) {
      return res.json({ error: `Cart not found for user ${userID}` });
    }
    //find the index of item from array
    const itemIndex = userCart.items.findIndex((item) =>
      item.food.equals(foodID)
    );

    //check if item exists or not

    if (itemIndex !== -1) {
      /* Item found, proceed with the logic */
      const existingCartItem = userCart.items[itemIndex];

      // If the quantityToRemove is >= the existing quantity, remove the entire item
      if (quantityToRemove >= existingCartItem.quantity) {
        userCart.items.splice(itemIndex, 1);
      } else {
        // Reduce the quantity of the existing item
        existingCartItem.quantity -= quantityToRemove;
      }
      //save updated cart
      await userCart.save();
      return res.json(userCart);
    } else {
      return res.json({ error: "Item not found in the cart" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: "Internal Server Error" });
  }
};

//edit cart

module.exports = {
  getCart,
  removeFromCart,
  addToCart,
};

// user(userID) -> addTocart(foodID) -> if(!findCart) -> create -> addFood
//                                    -> found -> add to cart
