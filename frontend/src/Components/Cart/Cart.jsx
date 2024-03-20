import classes from './Cart.module.css';
import location from './images/location.svg';
import AddressBlock from '../Utils/AddressBlock/AddressBlock';
import CartItem from './CartItem/CartItem';
import Button from '../Utils/Button/Button';
import { useEffect, useState } from 'react';
import { getAllFoodCartUrl } from '../../../urls/cartUrl';
import { useContext } from 'react';
import { userContext } from '../../userContext/context';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { createOrderUrl } from '../../../urls/orderUrl';
import { utilityContext } from '../../userContext/utilityContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Payment from './Payment';
const Cart = () => {
  const [open, setOpen] = useState(false);
  const { render } = useContext(utilityContext);
  const [cartItems, setCartItems] = useState([]);
  const { user, isLogin } = useContext(userContext);
  const { isLoading, setIsLoading } = useContext(userContext);
  const [total, setTotal] = useState();
  const [stripeTotal, setStripeTotal] = useState();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const foodLocalQuantityHandler = (localQuantity) => {
    setTotal(localQuantity);
  };

  useEffect(() => {
    if (cartItems[0]?.items?.length > 0) {
      setStripeTotal(cartItems[0]?.total);
    }
  }, [cartItems]);
  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      const response = await axios.get(getAllFoodCartUrl);
      // console.log(response?.data?.newUserCart);
      setIsLoading(false);
      setCartItems(response?.data?.newUserCart);
    };
    if (isLogin) {
      fetchCart();
    }
  }, [isLogin, total, render]);

  const createOrder = async () => {
    const response = await axios.post(createOrderUrl, {
      items: cartItems[0]?.items,
      totalAmount: cartItems[0].total,
    });
    setOpen(true);
    console.log(response);
  };

  if (!cartItems) {
    return <h1>Cart is empty</h1>;
  }
  const userID = cartItems[0]?.userID;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.heading}>
          <h2>Secure Checkout</h2>
          <hr />
        </div>
        <div className={classes.content}>
          <div className={classes.left}>
            <div className={classes.deliveryAddress}>
              <img src={location} alt='' />
              <h2>Delivery address</h2>
            </div>
            <div className={classes.addresses}>
              <AddressBlock address={user?.address ?? 'Your address'} />
            </div>
            <div className={classes.notes}>
              <p>Any Note for us?</p>
              <form action='#'>
                <input type='text' placeholder='Type your note here' />
              </form>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.cart}>
              <div className={classes.topBottom}>
                <h3>Cart</h3>
                <span>
                  {!cartItems ? '0 ' : cartItems[0]?.items?.length}
                  <span> items</span>
                </span>
              </div>
              <div className={classes.items}>
                {isLoading && (
                  <Skeleton variant='rounded' width={210} height={60} />
                )}
                {!cartItems ? (
                  <CartItem
                    key='0'
                    from='Dummy outlet'
                    title='Dummy'
                    price='0'
                    quantity='0'
                  />
                ) : isLoading ? (
                  <Stack spacing={1}>
                    <Skeleton variant='rounded' width={210} height={60} />
                    <Skeleton variant='rounded' width={210} height={60} />
                    <Skeleton variant='rounded' width={210} height={60} />
                  </Stack>
                ) : (
                  cartItems[0]?.items?.map((item) => {
                    return (
                      <CartItem
                        key={item?._id}
                        from={item?.food?.restaurantID?.name ?? 'Your outlet'}
                        title={item?.food?.name}
                        price={item?.food?.price}
                        quantity={item?.quantity}
                        foodID={item?.food?._id}
                        user={userID}
                        totalHandler={foodLocalQuantityHandler}
                      />
                    );
                  })
                )}
              </div>
              <hr />
              <div className={classes.bill}>
                <h4>Bill details</h4>
                <div className={classes.billInfo}>
                  <span>Discount</span>
                  <span>₹{!cartItems ? '0 ' : cartItems[0]?.discount}</span>
                </div>
                <div className={classes.topBottom}>
                  <h3>Total (after discount)</h3>
                  <span>
                    ₹
                    {!cartItems
                      ? '0 '
                      : cartItems[0]?.total - cartItems[0]?.discount}
                  </span>
                </div>
                <div className={classes.btn}>
                  {cartItems[0]?.items?.length > 0 && stripeTotal && (
                    <Payment
                      price={stripeTotal}
                      cartlength={cartItems[0]?.items?.length}
                    />
                  )}
                  <Button title='Proceed To Payment' onClick={createOrder} />
                </div>
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity='success'
                    variant='outlined'
                    sx={{ width: '100%' }}
                  >
                    Congratulations, you order is successfully placed!!!
                  </Alert>
                </Snackbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
