import classes from "./Menu.module.css";
import longLine from "../images/longLine.svg";
import foodImg from "../images/foodImg.svg";
const categories = [
    {
        category: "Recommended",
    },
    {
        category: "Breakfast Box",
    },
    {
        category: "Lunch Box",
    },
    {
        category: "Combo Box",
    },
    {
        category: "Biriyani Box",
    },
];
const Menu = () => {
    return (
        <div className={classes.menu}>
            <div className={classes.left}>
                {categories.map((item) => {
                    return <li className={`${classes.foodCategory}`}><a>{item.category}</a></li>;
                })}
            </div>
            <img src={longLine} alt="" className={classes.longLine}/>
            <div className={classes.right}>
                <div className={classes.info}>
                    <h4 className={classes.head}>Brunch for 2 - Veg (Save upto Rs.45)</h4>
                    <h4 className={classes.price}>₹599</h4>
                    <p className={classes.desc}>Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!</p>
                </div>
                <div className={classes.image}>
                    <img src={foodImg} alt="" />
                    <a className={classes.add}>Add +</a>
                </div>
            </div>
        </div>
    );
};
export default Menu;
