import hero from "../images/hero.svg"
import classes from "./Hero.module.css"
const Hero = () => {
  return (
    <div className={classes.hero}>
        <img src={hero} alt="" />
    </div>
  )
}
export default Hero