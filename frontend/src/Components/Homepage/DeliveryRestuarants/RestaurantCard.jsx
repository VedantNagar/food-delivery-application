import classes from "./RestaurantCard.module.css";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

const RestaurantCard = ({ restaurant }) => {
    const name = restaurant?.name ?? "";
    const coverImg = restaurant?.image ?? "";
    const deliveryTime = restaurant?.order?.deliveryTime ?? "";
    const rating = restaurant?.rating;
    const approxPrice = restaurant?.cft;
    const discount = restaurant?.discount;
    const cuisines = restaurant?.about;
    return (
        <div className={classes.card}>
            <div className={classes.coverImg}>
                <img src={coverImg} alt="" />
                {discount && <div className={classes.discount}>{discount}% off</div>}
                
            </div>
            <div className={classes.content}>
                <div className={classes.firstRow}>
                    <span>{name}</span>
                    <div className={classes.rating}>
                        <span>{rating}</span>
                        <div className={classes.star}>
                            <IconContext.Provider value={{ color: "white" }}>
                                <FaStar />
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
                <div className={classes.secondRow}>
                    <div className={classes.cuisinesContainer}>
                        <span className={classes.cuisine}>{cuisines}</span>
                    </div>
                    <span className={classes.cfo}>{approxPrice}</span>
                </div>
                {deliveryTime && (
                    <div className={classes.deliveryTime}>{deliveryTime}</div>
                )}
            </div>
        </div>
    );
};
export default RestaurantCard;
