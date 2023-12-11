import classes from "./Navbar.module.css";
import logo from "../../images/logo.svg";

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.left}>
                <img src={logo} alt="not found" className={classes.img} />
                <h2>Fudo</h2>
            </div>
            <div className={classes.right}>
                <ul>
                    <li>
                        <a href="#">Sign in</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;
