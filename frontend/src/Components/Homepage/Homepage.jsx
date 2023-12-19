import Footer from "./Footer/Footer";
import Navbar from "./Hero-section/Navbar";
import Signin from "./Hero-section/Signin";
import Menu from "./Menu/Menu";
import Services from "./Services/Services";
import classes from "./Homepage.module.css";
const Homepage = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <Navbar />
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
