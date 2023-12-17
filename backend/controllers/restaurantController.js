const restaurantModel = require('../models/restaurant');

// post restaurant details


//get rest(id) 
const getRestaurant = async (req,res) => {
    const { id: restaurantID } = req.params;
    const restaurant = await restaurantModel.findOne({_id: restaurantID})
  if (!restaurant) {
    res.status(404).json("Restaurant not found")
  }
  res.status(200).json({ restaurant })
}
/*
const getRestaurant = async (req, res) => {
    const {id: restaurantID} = req.params;
    try {
        const restaurant = await restaurantModel.findById(restaurantID);
        if (!restaurant) {
            return res.status(404).json("Restaurant not found");
        }
        res.status(200).json({restaurant});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:Internal Server Error});
    }
};*/ 

//get all rest
const getAllRestaurant = async (req,res) => {
    try{
    const restaurants = await restaurantModel.find({})
    res.status(200).json({restaurants})
}catch(error){
    console.log(error);
    res.status(500).json({error:'Internal server error'});
}
};

//delete rest(id)

/*const deleteRestaurant = async (req, res) => {
    const {id: restaurantID} = req.params;
    try{
        const deletedRestaurant = await restaurantModel.findOneAndDelete({ _id:restaurantID});
        if (!deletedRestaurant){
            return res.status(404).json("Restaurant not found");
        }
        res.status(200).json({message:"Restaurant deleted successfully"});
    }catch (error){
        console.error(error);
        res.status(500).json({error:'Internal server error'});
    }
};*/

//edit rest(id) -> menu,add image,description
/*const editRestaurant = async(req, res)=>{
    const {id:restaurantID}=req.params;
    try {
        const updatedRestaurant= await restaurantModel.findByIdAndUpdate(restaurantID, req.body,{new:true});

        if(!updatedRestaurant){
            return res.status(404).json('Restaurant not found');
        }
        res.status(200).json({updatedRestaurant});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
};*/

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

module.exports = { createRestaurant ,getRestaurant,getAllRestaurant,deleteRestaurant,editRestaurant};
