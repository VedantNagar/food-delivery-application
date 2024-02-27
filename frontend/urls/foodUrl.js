const url =
  import.meta.env.PROD === true
    ? '/api/v1/food'
    : 'http://localhost:8000/api/v1/food';

export const allFoodUrl = `${url}/allFood`;
export const singleFoodUrl = `${url}/singleFood`;
export const sortedFoodUrl = `${url}/sortedFood`;
