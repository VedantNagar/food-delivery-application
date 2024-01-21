import Navbar from "../Utils/Navbar/Navbar";
import classes from "./Main.module.css";
import dropdown from "./images/dropdown.svg";
import cart from "./images/cart.svg";
import user from "./images/user.svg";
import Hero from "./Hero/Hero";
import DeliveryCollections from "./DeliveryCollections/DeliveryCollections";
import TopBrands from "./DeliveryCollections/TopBrands";
import DeliveryRestuarants from "./DeliveryRestuarants/DeliveryRestaurants";
import { restaurants } from "../../data/restaurants";
const navbarMain = [
    { title: "Order Now", imgfwd: "", imgbwd: "" },
    { title: "Top Brands", imgfwd: dropdown, imgbwd: "" },
    { title: "Cart", imgfwd: cart, imgbwd: "" },
    { title: "Kshitij", imgfwd: dropdown, imgbwd: user },
];

const restaurantList = restaurants;
const Main = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <Navbar list={navbarMain} />
                <Hero />
            </div>
            <DeliveryCollections />
            <div className={classes.wrapper}>
                <TopBrands />
                <DeliveryRestuarants list={restaurantList}/>
            </div>
        </>
    );
};
export default Main;
