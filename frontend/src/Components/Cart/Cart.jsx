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
    const [items, setItems] = useState([]);
    const { user, isLogin } = useContext(userContext);
    // console.log(user);
    console.log(items);

    useEffect(() => {
        const fetchCart = async () => {
            const response = await axios.get(getAllFoodCartUrl);
            // console.log(response?.data?.userCart?.items);
            setItems(response?.data?.userCart?.items);
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
                            <AddressBlock address="Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana" />
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
                                <span>{items.length} items</span>
                            </div>
                            <div className={classes.items}>
                                {items.map((item) => {
                                    return (
                                        <CartItem
                                            key={item._id}
                                            from={
                                                item?.food?.restaurantID
                                                    ?.name ?? "Placeholder"
                                            }
                                            title={item?.food?.name}
                                            price={item?.food?.price}
                                            quantity={item.quantity}
                                        />
                                    );
                                })}
                            </div>
                            <hr />
                            <div className={classes.bill}>
                                <h4>Bill details</h4>
                                {/* <div className={classes.billInfo}>
                                    <span>Item Total</span>
                                    <span>₹799.00</span>
                                </div> */}
                                {/* <div className={classes.billInfo}>
                                    <span>
                                        Delivery Fee | 12.9 kms Custom Delivery
                                        time
                                    </span>
                                    <span>₹131.00</span>
                                </div> */}
                                {/* <div className={classes.billInfo}>
                                    <span>Taxes and Charges</span>
                                    <span>₹2.0</span>
                                </div>
                                <div className={classes.billInfo}>
                                    <span>Total</span>
                                    <span>₹932</span>
                                </div> */}
                                <div className={classes.billInfo}>
                                    <span>Discount</span>
                                    <span>₹32.00</span>
                                </div>
                                <div className={classes.topBottom}>
                                    <h3>Total</h3>
                                    <span>₹900</span>
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
