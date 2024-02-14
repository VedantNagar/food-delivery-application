import classes from "./NavSearchBar.module.css";
import magnifyGlass from "../../../images/greyMagnifyGlass.svg";
const NavSearchBar = () => {
    const formHandler = (e) => {
        e.preventDefault();
    };
    return (
        <form className={classes.navForm}>
            <input
                placeholder="Enter item or Restaurant you are looking for"
                className={classes.navInput}
                onClick={formHandler}
            ></input>
            <button type="submit" className={classes.navBtn}>
                <img src={magnifyGlass} />
            </button>
        </form>
    );
};
export default NavSearchBar;
