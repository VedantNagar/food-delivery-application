const cartModel = require('../models/cart')
const User = require('../models/user')
// get cart
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

module.exports ={
    getCart
}