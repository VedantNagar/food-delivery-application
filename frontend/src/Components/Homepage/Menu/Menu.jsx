import classes from "./Menu.module.css";
import burgerIcon from "../../../images/burger-vector.svg";
import pizzaIcon from "../../../images/pizza-vector.svg";
import ramenIcon from "../../../images/ramen-vector.svg";
import cupCakeIcon from "../../../images/muffin-vector.svg";
import iceCreamIcon from "../../../images/iceCream-vector.svg";
const Menu = () => {
    return (
        <div className={classes.container}>
            <h3 className={classes.header}>Our menu</h3>
            <h1>
                Menu That Always
                <br /> Makes You Fall In Love
            </h1>
            <div className={classes.innerContainer}>
                <div className={classes.left}>
                    <div className={`${classes.menuBtn}`}>
                        <img src={burgerIcon} alt="not found" />
                        <h3>Burger</h3>
                    </div>
                    <div className={`${classes.menuBtn}`}>
                        <img src={pizzaIcon} alt="not found" />
                        <h3>Pizza</h3>
                    </div>
                    <div className={`${classes.menuBtn}`}>
                        <img src={cupCakeIcon} alt="not found" />
                        <h3>Cupcake</h3>
                    </div>
                    <div className={`${classes.menuBtn}`}>
                        <img src={ramenIcon} alt="not found" />
                        <h3>Ramen</h3>
                    </div>
                    <div className={`${classes.menuBtn}`}>
                        <img src={iceCreamIcon} alt="not found" />
                        <h3>Ice Cream</h3>
                    </div>
                </div>
                <div className={classes.right}></div>
            </div>
        </div>
    );
};
export default Menu;
