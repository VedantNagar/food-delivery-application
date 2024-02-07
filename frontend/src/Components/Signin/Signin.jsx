import Footer from "../Utils/Footer/Footer";
import Navbar from "../Utils/Navbar/Navbar";
import Signin from "./Hero-section/Signin";
import Menu from "./Menu/Menu";
import Services from "./Services/Services";
import classes from "./Signin.module.css";
const navbarSignIn = [
    { title: "Sign In", to: "signin" },
    { title: "Services" },
    { title: "Menu" , to: "homepage"},
    { title: "Contact" },
];

const SignIn = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <Navbar list={navbarSignIn} />
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
export default SignIn;
