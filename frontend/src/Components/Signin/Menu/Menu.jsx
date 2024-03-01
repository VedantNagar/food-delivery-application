import classes from "./Menu.module.css";
import burgerIcon from "../../../images/burger-vector.svg";
import pizzaIcon from "../../../images/pizza-vector.svg";
import ramenIcon from "../../../images/ramen-vector.svg";
import cupCakeIcon from "../../../images/muffin-vector.svg";
import iceCreamIcon from "../../../images/iceCream-vector.svg";
import Carousel from "./Carousel";
import MenuBtn from "./MenuBtn";
const btnItem = [
    { img: burgerIcon, title: "Burger" },
    { img: pizzaIcon, title: "Pizza" },
    { img: ramenIcon, title: "Ramen" },
    { img: cupCakeIcon, title: "Cupcake" },
    { img: iceCreamIcon, title: "Ice Cream" },
];
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
                    {btnItem.map((item) => {
                        return (
                            <MenuBtn
                                img={item.img}
                                title={item.title}
                                key={item.title}
                            />
                        );
                    })}
                </div>
                <div className={classes.right}>
                    <Carousel />
                </div>
            </div>
        </div>
    );
};
export default Menu;
