import Footer from "./Footer/Footer";
import Navbar from "./Hero-section/Navbar";
import Signin from "./Hero-section/Signin";
import Menu from "./Menu/Menu";
import Services from "./Services/Services";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Signin />
            <Services />
            <Menu />
            <Footer/>
        </>
    );
};
export default Homepage;
