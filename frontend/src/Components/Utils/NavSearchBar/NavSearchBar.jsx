import classes from "./NavSearchBar.module.css"
import magnifyGlass from "../../../images/greyMagnifyGlass.svg"
const NavSearchBar = () => {
  return (
    <form className={classes.navForm}>
        <input placeholder="Enter item or Restaurant you are looking for" className={classes.navInput}></input>
        <a className={classes.navBtn}><img src={magnifyGlass}/></a>
    </form>
  )
}
export default NavSearchBar