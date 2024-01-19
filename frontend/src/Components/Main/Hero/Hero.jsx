import SearchBar from "../../Utils/SearchBar/SearchBar"
import hero from "../images/hero.svg"
import classes from "./Hero.module.css"
const Hero = () => {
  return (
    <div className={classes.hero}>
        <img src={hero} alt="" />
        <SearchBar/>
    </div>
  )
}
export default Hero