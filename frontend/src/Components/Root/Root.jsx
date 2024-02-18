import dropdown from "../Homepage/images/dropdown.svg";
import cart from "../Homepage/images/cart.svg";
import user from "../Homepage/images/user.svg";
import { Outlet } from "react-router-dom";
import Navbar from "../Utils/Navbar/Navbar";
import { useContext } from "react";
import { userContext } from "../../userContext/context";
import Footer from "../Utils/Footer/Footer";
import classes from "./Root.module.css";
import DropdownMenu from "../Utils/DropdownMenu/DropdownMenu";
import SearchedResults from "../SearchedResults/SearchedResults";
const navbarHomePage = [
    { title: "Top Brands", imgfwd: dropdown, imgbwd: "", to: "homepage" },
    { title: "Cart", imgfwd: cart, imgbwd: "", to: "homepage/cart" },
    { imgbwd: user, component: <DropdownMenu /> },
];
const navbarSignIn = [
    { title: "Sign In" },
];

const Root = () => {
    const { isLogin } = useContext(userContext);
    const navItems = isLogin ? navbarHomePage : navbarSignIn;
    return (
        <>
            <div className={classes.wrapper}>
                <Navbar list={navItems} />
            </div>
            <Outlet />
            <div className={classes.footer}>
                <Footer />
            </div>
        </>
    );
};
export default Root;
