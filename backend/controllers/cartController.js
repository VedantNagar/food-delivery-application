const cart = require('../models/cart');
const cartModel = require('../models/cart')
const User = require('../models/user')
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
const getCart = async(req,res)=>{
     try{
         //getting userID 
         const userID = req.params.userID;
        
         //checking userID
         if(!userID){
             return res.json({error:'Provide userID'});
         }
         //finding the user
         const user = await User.findByID(userID);

         //checking if user exists
         if(!user){
             return res.json({error:'User not found'});
         }
         const userName = `${user.first_name} ${user.last_name || ''}`;

         //finding user's cart using userID
         const userCart = await cartModel.findOne({user:userID});

         //checking if the cart exists
         if(!userCart){
             return res.json({error:`Cart not found for user ${userName} with ID ${userID}`});
         }
         res.json({userCart});
     }
     catch(error){
         console.log(error);
         res.json({error:'Internal server error'});
     }
}
//add to cart
// -> same item count++

//delete from cart

const removeFromCart = async(req,res)=>{
    try {
        const{userID,foodID,quantityToRemove}=req.body;

        //validation
        if(!userID||!foodID || !quantityToRemove || quantityToRemove <= 0){
            return res.json({error:'Invalid action. Provide all details'})
        }
        //finding user
        const user = await User.findByID(userID);

        //checking if user exists
        if(!user){
            return res.json({error:'User not found'});
        }
        //finding user's cart by user ID
        const userCart = await cart.findOne({userID:userID});
        
        //checking if the cart exists or not
        if(!userCart){
            return res.json({error:`Cart not found for user ${userID}`});
        }
        //find the index of item from array
        const itemIndex = userCart.items.findIndex(item => item.food.equals(foodID));
        //check if item exists or not
        if(itemIndex!==1){
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
    }
    else{
        return res.json({error:'Item not found in the cart'});
    }
    } catch (error) {
        console.log(error);
        res.json({error:'Internal Server Error'});
    }
};

//edit cart


module.exports ={
    getCart,removeFromCart
}