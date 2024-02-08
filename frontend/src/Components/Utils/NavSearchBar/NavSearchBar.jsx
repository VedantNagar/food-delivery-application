import classes from "./NavSearchBar.module.css";
import magnifyGlass from "../../../images/greyMagnifyGlass.svg";
const NavSearchBar = () => {
    return (
        <form className={classes.navForm}>
            <input
                placeholder="Enter item or Restaurant you are looking for"
                className={classes.navInput}
            ></input>
            <button type="submit" className={classes.navBtn}>
                <img src={magnifyGlass} />
            </button>
        </form>
    );
};
export default NavSearchBar;
