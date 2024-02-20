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
import ScrollToTop from "../../ScrollToTop";
const navbarHomePage = [
    { title: "Top Brands", imgfwd: dropdown, imgbwd: "", to: "homepage" ,key: 1124141241},
    { title: "Cart", imgfwd: cart, imgbwd: "", to: "homepage/cart" , key: 214122412421},
    { imgbwd: user, component: <DropdownMenu /> ,key: 214122412},
];
const navbarSignIn = [
    { title: "Sign In" ,key: 2122412},
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
            <ScrollToTop/>
            <div className={classes.footer}>
                <Footer />
            </div>
        </>
    );
};
export default Root;
