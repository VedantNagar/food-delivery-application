import classes from "./Navbar.module.css";
import logo from "../../../images/logo.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
const Navbar = ({ list }) => {
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
                            isMenuOpen ? `${classes.right}` : `${classes.hide}`
                        }
                    >
                        {list.map((item) => {
                            return (
                                <li key={item.title}>
                                    <a href="#">{item.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
