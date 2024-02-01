import Navbar from "../Utils/Navbar/Navbar";
import classes from "./RestaurantPage.module.css";
import dropdown from "../Main/images/dropdown.svg"
import cart from "../Main/images/cart.svg"
import user from "../Main/images/user.svg"
import NavSearchBar from "../Utils/NavSearchBar/NavSearchBar";
import Banner from "./Banner/Banner";
const navbarRestaurantPage = [
    {title: "", imgfwd: "", imgbwd: "" ,component: <NavSearchBar/>},
    { title: "Cart", imgfwd: cart, imgbwd: "" },
    { title: "Kshitij", imgfwd: dropdown, imgbwd: user },
];
const RestaurantPage = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <Navbar list={navbarRestaurantPage}/>
            </div>
                <Banner/>
        </>
    );
};
export default RestaurantPage;
