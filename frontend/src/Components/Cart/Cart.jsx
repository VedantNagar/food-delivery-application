import classes from "./Cart.module.css";
import location from "./images/location.svg";
import AddressBlock from "../Utils/AddressBlock/AddressBlock";
import CartItem from "./CartItem/CartItem";
import Button from "../Utils/Button/Button";
import { useEffect, useState } from "react";
import { getAllFoodCartUrl } from "../../../urls/cartUrl";
import { useContext } from "react";
import { userContext } from "../../userContext/context";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { createOrderUrl } from "../../../urls/orderUrl";
import { utilityContext } from "../../userContext/utilityContext";
import Payment from "./Payment";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const { render } = useContext(utilityContext);
  const [cartItems, setCartItems] = useState([]);
  const { user, isLogin } = useContext(userContext);
  const { isLoading, setIsLoading } = useContext(userContext);
  const [total, setTotal] = useState();
  const [stripeTotal, setStripeTotal] = useState();

  console.log(cartItems[0]?.items[0]?.food?.name);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
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
      console.log(response);
      setIsLoading(false);
      setCartItems(response?.data?.newUserCart);
    };
    if (isLogin) {
      fetchCart();
    }
  }, [isLogin, total, render]);

  const createOrder = async () => {
    setOpenModal(true);
    const response = await axios.post(createOrderUrl, {
      items: cartItems[0]?.items,
      totalAmount: cartItems[0].total,
    });
    // console.log(response);
  };

  // if (cartItems[0]?.items.length == 0) {
  //     return <h1>Cart is empty</h1>;
  // }
  const userID = cartItems[0]?.userID;

  console.log(cartItems[0]?.items);

  return (
    <>
      {openModal && cartItems[0]?.items?.length > 0 && stripeTotal && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-sm backdrop-brightness-50 z-[calc(infinity)]"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-3/4 bg-white rounded-lg shadow-lg overflow-y-auto">
              <Payment
                // item={}
                price={stripeTotal}
                cartlength={cartItems[0]?.items?.length}
              />
            </div>
          </div>
        </div>
      )}
      <div className={classes.wrapper}>
        <div className={classes.heading}>
          <h2>Secure Checkout</h2>
          <hr />
        </div>
        <div className={classes.content}>
          <div className={classes.left}>
            <div className={classes.deliveryAddress}>
              <img src={location} alt="" />
              <h2>Delivery address</h2>
            </div>
            <div className={classes.addresses}>
              <AddressBlock address={user?.address ?? "Your address"} />
            </div>
            <div className={classes.notes}>
              <p>Any Note for us?</p>
              <form action="#">
                <input type="text" placeholder="Type your note here" />
              </form>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.cart}>
              <div className={classes.topBottom}>
                <h3>Cart</h3>
                <span>
                  {!cartItems ? "0 " : cartItems[0]?.items?.length}
                  <span> items</span>
                </span>
              </div>
              <div className={classes.items}>
                {isLoading && (
                  <Skeleton variant="rounded" width={210} height={60} />
                )}
                {!cartItems ? (
                  <CartItem
                    key="0"
                    from="Dummy outlet"
                    title="Dummy"
                    price="0"
                    quantity="0"
                  />
                ) : isLoading ? (
                  <Stack spacing={1}>
                    <Skeleton variant="rounded" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                  </Stack>
                ) : (
                  cartItems[0]?.items?.map((item) => {
                    return (
                      <CartItem
                        key={item?._id}
                        from={item?.food?.restaurantID?.name ?? "Your outlet"}
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
                  <span>₹{!cartItems ? "0 " : cartItems[0]?.discount}</span>
                </div>
                <div className={classes.topBottom}>
                  <h3>Total (after discount)</h3>
                  <span>
                    ₹
                    {!cartItems
                      ? "0 "
                      : cartItems[0]?.total - cartItems[0]?.discount}
                  </span>
                </div>
                <div className={classes.btn}>
                  <Button
                    disabled={!cartItems || cartItems.length === 0}
                    title="Proceed To Payment"
                    onClick={createOrder}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
