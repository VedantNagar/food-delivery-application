import classes from "./RestaurantCard.module.css";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
const RestaurantCard = ({ restaurant }) => {
    const name = restaurant?.info?.name ?? "";
    const coverImg = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const discount =
        offers.length > 1
            ? offers[1].text
            : offers.length === 1
            ? offers[0].text
            : null;
    const cuisines = restaurant?.info?.cuisine
        ?.map((item) => item.name)
        .slice(0, 3);
    return (
        <NavLink to="/restaurant-page">
            <div className={classes.card}>
                <div className={classes.coverImg}>
                    <img src={coverImg} alt="" />
                    {discount && (
                        <div className={classes.discount}>{discount}</div>
                    )}
                </div>
                <div className={classes.content}>
                    <div className={classes.firstRow}>
                        <span>{name}</span>
                        <div className={classes.rating}>
                            <span>{rating}</span>
                            <div className={classes.star}>
                                <IconContext.Provider
                                    value={{ color: "white" }}
                                >
                                    <FaStar />
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                    <div className={classes.secondRow}>
                        <div className={classes.cuisinesContainer}>
                            {cuisines.map((cuisine, i) => {
                                return (
                                    <span className={classes.cuisine} key={cuisine}>
                                        {cuisine}
                                        {i !== cuisines.length - 1
                                            ? ", "
                                            : "..."}
                                    </span>
                                );
                            })}
                        </div>
                        <span className={classes.cfo}>{approxPrice}</span>
                    </div>
                    {deliveryTime && (
                        <div className={classes.deliveryTime}>
                            {deliveryTime}
                        </div>
                    )}
                </div>
            </div>
        </NavLink>
    );
};
export default RestaurantCard;
