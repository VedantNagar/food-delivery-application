const foodModal = require('../models/Food')


// all items

const allFood = async (req,res) => {
    const foods = await foodModal.find({})
    res.status(200).json([foods])
}

//get each food(id)

//get restarant(id)

//get food details(id)


//sort(price,name)