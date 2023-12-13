import classes from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
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
                    <div className={classes.navBtn} onClick={toggleMenu}>
                        <MenuRoundedIcon
                            size="large"
                            style={{ borderRadius: "1.5rem" }}
                        />
                    </div>
                </div>
                <div className={classes.right}>
                    <ul
                        className={
                            isMenuOpen
                                ? `${classes.right}`
                                : `${classes.hide}`
                        }
                    >
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
