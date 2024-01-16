const User = require('../models/user');
const Food = require('../models/Food');
const cart = require('../models/cart');
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

    const userID = req.user.id
    // finding the user
    const user = await User.findByID(userID);
    const userName = `${user.first_name} ${user.last_name || ''}`
    const userCart = await cartModel.findOne({ user: userID });
        if (!userCart) {
            return res.json({ error: `Cart not found for user ${userName} with ID ${userID}` });
        }
        res.json({ userCart });


    // try {
    //     //getting userID 
    //     const userID = req.params.userID;

    //     //checking userID
    //     if (!userID) {
    //         return res.json({ error: 'Provide userID' });
    //     }
    //     //finding the user
    //     const user = await User.findByID(userID);

    //     //checking if user exists
    //     if (!user) {
    //         return res.json({ error: 'User not found' });
    //     }
    //     const userName = `${user.first_name} ${user.last_name || ''}`;

    //     //finding user's cart using userID

    //     const userCart = await cartModel.findOne({ user: userID });

    //     //checking if the cart exists
    //     if (!userCart) {
    //         return res.json({ error: `Cart not found for user ${userName} with ID ${userID}` });
    //     }
    //     res.json({ userCart });
    // }
    // catch (error) {
    //     console.log(error);
    //     res.json({ error: 'Internal server error' });
    // }
}
//add to cart
// -> same item count++
const addToCart = async (req, res) => {



    const { foodId, quantity } = req.body;

    // Validate that foodId is a valid ObjectId
    const match = await Food.findById({foodId})
    if(!match){
        return res.status(404).json({
            error:"invalid foodId"
        })
    }
    // if (!mongoose.Types.ObjectId.isValid(foodId)) {
    //     return res.status(400).json({ message: 'Invalid foodId' });
    // }

    // Find the cart for the user (you may have a user authentication step before this)
    const userId = req.user.id; // Assuming you have user authentication and can access the user ID

    // Check if the user has an existing cart
    let userCart = await cart.findOne({ user: userId });

    // If the user doesn't have a cart, create one
    if (!userCart) {
        userCart = new cart({ user: userId, items: [] });
        await newCart.save();

        // Associate the new cart with the user
        User.cartID = newCart._id;
        await User.save();
        return res.status(200).json({ message: 'Item added to cart successfully', cart: userCart });
    }

    // Check if the item is already in the cart
    const existingItem = userCart.items.find(item => item.food.toString() === foodId);

    if (existingItem) {
        // If the item is already in the cart, update the quantity
        existingItem.quantity += quantity;
    } else {
        // If the item is not in the cart, add it
        userCart.items.push({ food: foodId, quantity });
    }

    // Save the updated cart
    await userCart.save();

    res.status(200).json({ message: 'Item added to cart successfully', cart: userCart });



    // try {
    //     const { userID, foodID, quantityToAdd } = req.body;

    //     //input validation
    //     if (!userID || !foodID || !quantityToAdd || quantityToAdd <= 0) {
    //         return res.json({ error: 'Invalid Input.Provide all details' });
    //     }
    //     //find user by ID
    //     const user = await User.findByID(userID);

    //     //check if user exists
    //     if (!user) {
    //         return res.json({ error: 'User not found' });
    //     }
    //     //finding food item by ID
    //     const foodItem = await Food.findByID(foodID);

    //     // Check if the food item exists
    //     if (!foodItem) {
    //         return res.json({ error: 'Food item not found' });
    //     }

    //     // Find the user's cart by user ID
    //     let userCart = await cartModel.findOne({ user: userID });

    //     //creating a new cart if it doesn't exist
    //     if (!userCart) {
    //         userCart = new cartModel({
    //             user: userID,
    //             items: [],
    //         });
    //     }
    //     // Find the index of the item in the cart's items array
    //     const itemIndex = userCart.items.findIndex(item => item.food.equals(foodID));

    //     //if item is in the cart, incrementing its quantity , else adding the new element

    //     if (itemIndex !== 1) { /* Item found, proceed with the logic */
    //         userCart.items[itemIndex].quantity += quantityToAdd;
    //     }
    //     else {
    //         userCart.items.push({
    //             food: foodID,
    //             quantity: quantityToAdd,
    //         });
    //     }

    //     //saving the updated cart
    //     await userCart.save();
    //     res.json(userCart);

    // } catch (error) {
    //     console.error(error);
    //     res.json({ error: 'Internal server error' });
    // }
}

//delete from cart

const removeFromCart = async (req, res) => {

    
    const foodId = req.params.foodId;

    // Assuming you have user authentication and can access the user ID
    const userId = req.user.id;

    // Find the user's cart
    const userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
        return res.status(404).json({ message: 'Cart not found' });
    }

    // Find the index of the item to be removed
    const itemIndex = userCart.items.findIndex(item => item.food.toString() === foodId);

    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found in the cart' });
    }

    // Remove the item from the cart
    userCart.items.splice(itemIndex, 1);

    // Save the updated cart
    await userCart.save();

    res.status(200).json({ message: 'Item removed from cart successfully', cart: userCart });






    //     const { userID, foodID, quantityToRemove } = req.body;

    //     //validation
    //     if (!userID || !foodID || !quantityToRemove || quantityToRemove <= 0) {
    //         return res.json({ error: 'Invalid action. Provide all details' })
    //     }
    //     //finding user
    //     const user = await User.findByID(userID);

    //     //checking if user exists
    //     if (!user) {
    //         return res.json({ error: 'User not found' });
    //     }
    //     //finding user's cart by user ID
    //     const userCart = await cartModel.findOne({ userID: userID });

    //     //checking if the cart exists or not
    //     if (!userCart) {
    //         return res.json({ error: `Cart not found for user ${userID}` });
    //     }
    //     //find the index of item from array
    //     const itemIndex = userCart.items.findIndex(item => item.food.equals(foodID));

    //     //check if item exists or not

    //     if (itemIndex !== 1) { /* Item found, proceed with the logic */
    //         const existingCartItem = userCart.items[itemIndex];

    //         // If the quantityToRemove is >= the existing quantity, remove the entire item
    //         if (quantityToRemove >= existingCartItem.quantity) {
    //             userCart.items.splice(itemIndex, 1);
    //         }
    //         else {
    //             // Reduce the quantity of the existing item
    //             existingCartItem.quantity -= quantityToRemove;
    //         }
    //         //save updated cart
    //         await userCart.save();
    //         return res.json(userCart);
    //     }
    //     else {
    //         return res.json({ error: 'Item not found in the cart' });
    //     }
    // } catch (error) {
    //     console.log(error);
    //     res.json({ error: 'Internal Server Error' });
    // }
};

//edit cart


module.exports = {
    getCart, removeFromCart, addToCart
}


// user(userID) -> addTocart(foodID) -> if(!findCart) -> create -> addFood
//                                    -> found -> add to cart 