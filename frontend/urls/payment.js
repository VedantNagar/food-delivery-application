const url =
  import.meta.env.PROD === true
    ? '/api/v1/cart'
    : 'http://localhost:8000/api/v1/stripe';

export const paymentUrl = `${url}/create-checkout-session`;
