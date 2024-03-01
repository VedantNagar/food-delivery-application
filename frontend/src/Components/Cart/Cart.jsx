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

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { user, isLogin } = useContext(userContext);
    // console.log(user);
    console.log(cartItems);

    useEffect(() => {
        const fetchCart = async () => {
            const response = await axios.get(getAllFoodCartUrl);
            // console.log(response?.data?.newUserCart);
            setCartItems(response?.data?.newUserCart);
        };
        if (isLogin) {
            fetchCart();
        }
    }, [isLogin]);

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
                            <img src={location} alt="" />
                            <h2>Delivery address</h2>
                        </div>
                        <div className={classes.addresses}>
                            <AddressBlock address={user?.address} />
                        </div>
                        <div className={classes.notes}>
                            <p>Any Note for us?</p>
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Type your note here"
                                />
                            </form>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.cart}>
                            <div className={classes.topBottom}>
                                <h3>Cart</h3>
                                <span>{cartItems[0]?.items?.length} items</span>
                            </div>
                            <div className={classes.items}>
                                {cartItems[0]?.items?.map((item) => {
                                    return (
                                        <CartItem
                                            key={item?._id}
                                            from={
                                                item?.food?.restaurantID
                                                    ?.name ?? "Your outlet"
                                            }
                                            title={item?.food?.name}
                                            price={item?.food?.price}
                                            quantity={item?.quantity}
                                        />
                                    );
                                })}
                            </div>
                            <hr />
                            <div className={classes.bill}>
                                <h4>Bill details</h4>
                                <div className={classes.billInfo}>
                                    <span>Discount</span>
                                    <span>₹{cartItems[0]?.discount}</span>
                                </div>
                                <div className={classes.topBottom}>
                                    <h3>Total (after discount)</h3>
                                    <span>
                                        ₹
                                        {cartItems[0]?.total -
                                            cartItems[0]?.discount}
                                    </span>
                                </div>
                                <div className={classes.btn}>
                                    <Button title="Proceed To Payment" />
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
