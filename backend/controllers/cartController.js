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
// Ensure all model imports are correct at the top of your file

const getCart = async (req, res) => {
  try {
    const userID = req.user.id;
    if (!userID) {
      return res.json({ error: "Provide userID" });
    }

    const user = await User.findById(userID);
    if (!user) {
      return res.json({ error: "User not found" });
    }
    const userName = `${user.first_name} ${user.last_name || ""}`;

    const userCart = await cartModel.findOne({ userID: userID }).populate({
      path: "items.food",
      populate: {
        path: "restaurantID",
        model: "restaurantModel", // Ensure this matches your actual model name
        select: "name about rating phone image discount address cft rating",
      },
    });

    if (!userCart) {
      return res.json({ error: `Cart not found for user ${userName} with ID ${userID}` });
    }

    let discount = 0;
    const promises = userCart.items.map(async (item) => {
      if (!item.food) {
        console.log("Food item not found, skipping...");
        return 0; // Skip this item or handle as appropriate
      }
      try {
        const restID = item.food.restaurantID;
        const rest = await restaurant.findById(restID); // Ensure 'restaurant' is correctly imported and named
        if (!rest) {
          console.log("Restaurant not found for food item, skipping...");
          return 0; // Skip this item or handle as appropriate
        }
        const disc = rest.discount;
        const value = disc * 0.01 * item.food.price * item.quantity;
        return value;
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
        return 0; // Return 0 discount in case of error, or handle as appropriate
      }
    });
    
    Promise.all(promises)
      .then((discounts) => {
        discount = discounts.reduce((total, discount) => total + discount, 0);
        let total = userCart.items.reduce((total, item) => {
          // Only add to total if item.food is not null
          return item.food ? total + item.food.price * item.quantity : total;
        }, 0);
        const newUserCart = [{ ...userCart._doc, total, discount }];
        res.json({ newUserCart });
      })
      .catch((error) => {
        console.error("Error calculating discounts:", error);
        res.json({ error });
      });
  } catch (error) {
    console.error(error);
    res.json({ error: "Internal server error" });
  }
};
//add to cart
// -> same item count++
const addToCart = async (req, res) => {
  try {
    const { foodID, quantityToAdd } = req.body;
    const userID = req.user.id;

    console.log(foodID)
    //checking userID
    if(!foodID){
      return res.json({error:"not a food id"})
    }
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
    const itemIndex = userCart?.items?.findIndex((item) =>
      item?.food?.equals(foodID)
    );

    // If item is in the cart, increment its quantity, else add the new element
    if (itemIndex !== -1) {
      userCart.items[itemIndex].quantity += parseInt(quantityToAdd);
    } else {
      userCart?.items?.push({
        food: foodID,
        quantity: parseInt(quantityToAdd),
      });
    }

    // If item is in the cart, increment its quantity, else add the new element
    // if (itemIndex !== -1) {
    //   userCart.items[itemIndex].quantity += parseInt(quantityToAdd);
    // } else {
    //   userCart.items.push({
    //     food: foodID,
    //     quantity: parseInt(quantityToAdd),
    //   });
    // }

    
    await userCart.save();

   
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

//delete from cart
const deleteCart = async (req,res) => {
  try {
    const {foodID} = req.body
    console.log(foodID)
    const response = await cartModel.findOne({userID:req.user.id})
    console.log(response)
    console.log(response.items)
    const cart = response.items.filter((item) => 
      item.food.toString() !== foodID
    )
    console.log(cart)
    response.items = cart
    await response.save()
    return res.status(200).json(cart)
  } catch (error) {
    return res.status(400).json(error)
  }
}

//edit cart

module.exports = {
  getCart,
  removeFromCart,
  addToCart,
  deleteCart
};

// user(userID) -> addTocart(foodID) -> if(!findCart) -> create -> addFood
//                                    -> found -> add to cart
