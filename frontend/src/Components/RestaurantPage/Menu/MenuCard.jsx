import classes from "./MenuCard.module.css";
import foodImg from "../images/foodImg.svg";

const MenuCard = ({ item }) => {
    const head = item?.name ?? "Brunch for 2 - Veg (Save upto Rs.45)";
    const price = item?.price ?? "599";
    const desc =
        item?.about ??
        "Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!";
    return (
        <div className={classes.menu}>
            <div className={classes.right}>
                <div className={classes.info}>
                    <h4 className={classes.head}>{head}</h4>
                    <h4 className={classes.price}>₹{price}</h4>
                    <p className={classes.desc}>{desc}</p>
                </div>
                <div className={classes.image}>
                    <img src={foodImg} alt="" />
                    <a className={classes.add}>Add +</a>
                </div>
            </div>
        </div>
    );
};
export default MenuCard;
