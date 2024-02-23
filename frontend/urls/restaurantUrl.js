const url =
  import.meta.env.PROD === true
    ? '/api/v1/restaurant'
    : 'http://localhost:8000/api/v1/restaurant';

export const getSingleRestaurantUrl = `${url}/getRestaurant`; // use /id for single restaurant
export const getAllRestaurantUrl = `${url}/getAllRestaurant`;
export const getSearchRestaurantsUrl = `${url}/getSearchRestaurants`;
