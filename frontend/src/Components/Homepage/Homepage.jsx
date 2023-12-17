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
        </>
    );
};
export default Homepage;
