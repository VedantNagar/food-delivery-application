import classes from "./Cart.module.css";
import Navbar from "../Utils/Navbar/Navbar";
import dropdown from "../HomePage/images/dropdown.svg";
import cart from "../HomePage/images/cart.svg";
import user from "../HomePage/images/user.svg";
import NavSearchBar from "../Utils/NavSearchBar/NavSearchBar";
import location from "./images/location.svg";
import AddressBlock from "../Utils/AddressBlock/AddressBlock";
import CartItem from "./CartItem/CartItem";
import Button from "../Utils/Button/Button";
import Footer from "../Utils/Footer/Footer";
const navbarRestaurantPage = [
    { title: "", imgfwd: "", imgbwd: "", component: <NavSearchBar /> },
    { title: "Cart", imgfwd: cart, imgbwd: "", to: "cart" },
    { title: "Kshitij", imgfwd: dropdown, imgbwd: user },
];
const Cart = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <Navbar list={navbarRestaurantPage} />
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
                                <span>2 items</span>
                            </div>
                            <div className={classes.items}>
                                <CartItem
                                    from="LunchBox"
                                    title="Brunch for 2 - Veg"
                                    price="599"
                                    quantity="1"
                                />
                                <CartItem
                                    from="Fasso"
                                    title="Paneer Signature Rice Bowl (Regular)"
                                    price="200"
                                    quantity="1"
                                />
                            </div>
                            <hr />
                            <div className={classes.bill}>
                                <h4>Bill details</h4>
                                <div className={classes.billInfo}>
                                    <span>Item Total</span>
                                    <span>₹799.00</span>
                                </div>
                                <div className={classes.billInfo}>
                                    <span>
                                        Delivery Fee | 12.9 kms Custom Delivery
                                        time
                                    </span>
                                    <span>₹131.00</span>
                                </div>
                                <div className={classes.billInfo}>
                                    <span>Taxes and Charges</span>
                                    <span>₹2.0</span>
                                </div>
                                <div className={classes.billInfo}>
                                    <span>Total</span>
                                    <span>₹932</span>
                                </div>
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
            <div className={classes.footer}>
                <Footer />
            </div>
        </>
    );
};
export default Cart;
