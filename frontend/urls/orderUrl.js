const url =
  import.meta.env.PROD === true
    ? '/api/v1/order'
    : 'http://localhost:8000/api/v1/order';

//create order
/*
const { items, totalAmount, paymentMethod, orderStatus, userId } = req.body;
*/
export const createOrderUrl = `${url}/createOrder`;

//get order
//const { id: orderId } = req.params;
export const getOrderUrl = `${url}/getOrder`;

export const getAllOrderUrl = `${url}/getAllOrder`
//delete order
//const { id: orderId } = req.params;
//const { userId } = req.body;
export const deleteOrderUrl = `${url}/deleteOrder`;
