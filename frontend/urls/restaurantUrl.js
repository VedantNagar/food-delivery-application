const url =
  import.meta.env.PROD === true
    ? '/api/v1/restaurant'
    : 'http://localhost:8000/api/v1/restaurant';

export const getSingleRestaurantUrl = `${url}/getRestaurant`; // use /id for single restaurant
export const getAllRestaurantUrl = `${url}/getAllRestaurant`;
export const getSearchRestaurantsUrl = `${url}/getSearchRestaurants`;
export const createRestauranrUrl = `${url}/create`;
export const changeStatusUrl = `${url}/changeStatus`
export const deleteRestaurantUrl = `${url}/deleteRestaurant`

//restID in params
export const addFoodRestaurant = `${url}/addFood`


//foodId(params) - putrequest
export const editFoodUrl = `${url}/editFood`

//foodId(params) - deleterequest
export const deleteFoodUrl = `${url}/deleteFood`
