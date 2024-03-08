const url =
  import.meta.env.PROD === true
    ? '/api/v1/cart'
    : 'http://localhost:8000/api/v1/cart';

//add to card
//const { userID, foodID, quantityToAdd } = req.body;
export const addToCartUrl = `${url}/addToCart`;

//remove from card
//const { userID, foodID, quantityToRemove } = req.body;
export const removeFromCartUrl = `${url}/removeFromCart`;

//get all food from card
//const userID = req.body.userID;
export const getAllFoodCartUrl = `${url}/getAllFood`;

export const deleteCartItemUrl = `${url}/deleteFromCart`