import classes from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header>
            <nav>
                <div className={classes.left}>
                    <div className={classes.logo}>
                        <img
                            src={logo}
                            alt="not found"
                            className={classes.img}
                        />
                        <h2>Fudo</h2>
                    </div>
                    <button className={classes.navBtn} onClick={toggleMenu}>
                        <MenuIcon />
                    </button>
                </div>
                <div className={classes.right}>
                    <ul className={isMenuOpen ? `${classes.right}`: `${classes.right} ${classes.hide}`}>
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
            </nav>
        </header>
    );
};
export default Navbar;
