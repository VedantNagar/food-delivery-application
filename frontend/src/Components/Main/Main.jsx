import Navbar from "../Utils/Navbar/Navbar";
import classes from "./Main.module.css";
import dropdown from "./images/dropdown.svg";
import cart from "./images/cart.svg";
import user from "./images/user.svg";
import Hero from "./Hero/Hero";
const navbarMain = [
    { title: "Order Now", imgfwd: "", imgbwd: "" },
    { title: "Top Brands", imgfwd: dropdown, imgbwd: "" },
    { title: "Cart", imgfwd: cart, imgbwd: "" },
    { title: "Kshitij", imgfwd: dropdown, imgbwd: user },
];
const Main = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <Navbar list={navbarMain} />
                <Hero />
            </div>
        </>
    );
};
export default Main;
