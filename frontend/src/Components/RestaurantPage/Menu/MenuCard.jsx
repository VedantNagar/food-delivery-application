import classes from "./MenuCard.module.css";
import foodImg from "../images/foodImg.svg";
import veg from "../images/veg.png";
import nonVeg from "../images/nonVeg.png";
import axios from "axios";
import { addToCartUrl } from "../../../../urls/cartUrl";
import { useContext } from "react";
import { userContext } from "../../../userContext/context";


const MenuCard = ({ item }) => {
    const { user } = useContext(userContext);
    const handleClick = async () => {
        console.log(item);
        console.log(user);
        const cookies = document.cookie.split(";");

        let token = null;

        cookies.forEach((cookie) => {
            const [name, value] = cookie.trim().split("=");
            if (name === "token") {
                token = value;
            }
        });

        console.log(token);
        const result = await axios.post(
            addToCartUrl,
            {
                userID: user.id,
                foodID: item.foodID,
                quantityToAdd: 1,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(result);
    };

    const head = item?.name ?? "Brunch for 2 - Veg (Save upto Rs.45)";
    const price = item?.price ?? "599";
    const image = item?.image?.length > 0 ? item?.image : foodImg;
    const category = item?.category;
    const desc =
        item?.about ??
        "Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!";
    return (
        <div className={classes.menu}>
            <div className={classes.info}>
                <h4 className={classes.head}>
                    <span>{head}</span>
                    {category === "veg" ? (
                        <img src={veg} alt="" />
                    ) : (
                        <img src={nonVeg} alt="" />
                    )}
                </h4>
                <h4 className={classes.price}>₹{price}</h4>
                <p className={classes.desc}>{desc}</p>
            </div>
            <div className={classes.image}>
                <img src={image} alt="" />
                <a className={classes.add} onClick={handleClick}>
                    Add +
                </a>
            </div>
        </div>
    );
};
export default MenuCard;
