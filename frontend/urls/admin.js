const url =
  import.meta.env.PROD === true
    ? '/api/v1/cart'
    : 'http://localhost:8000/api/v1/restaurant';


export const getAllUserRestUrl = `${url}/getAllUserRestaurant`;
export const getAllRestOrder = `${url}/getAllOrders`;