import Footer from "./Footer/Footer";
import Navbar from "./Hero-section/Navbar";
import Signin from "./Hero-section/Signin";
import Menu from "./Menu/Menu";
import Services from "./Services/Services";
import classes from "./Homepage.module.css";
const navbarMain = [
    { title: "Sign In" },
    { title: "Services" },
    { title: "Menu" },
    { title: "Contact" },
];
const Homepage = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <Navbar list={navbarMain} />
                <Signin />
                <Services />
                <Menu />
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </>
    );
};
export default Homepage;
