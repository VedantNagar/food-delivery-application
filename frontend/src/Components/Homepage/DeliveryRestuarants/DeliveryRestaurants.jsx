import classes from "./DeliveryRestaurants.module.css";
import styles from "../../Utils/CommonStyles/commonStyles.module.css";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../../userContext/context";

const DeliveryRestaurants = ({ list }) => {
    const { isLoading } = useContext(userContext);
    return (
        <div className={classes.deliveryRestaurants}>
            <h2 className={styles.delivryCollHead}>
                Delivery Restaurants in Delhi NCR
            </h2>
            <div className={classes.deliveryItems}>

                    {isLoading && <h1>Please wait, loading...</h1>}
                    {list.map((restaurant) => {
                        return (
                            <Link
                                to={`/homepage/${restaurant?._id}`}
                                key={restaurant?._id}
                            >
                                <RestaurantCard restaurant={restaurant} />
                            </Link>
                        );
                    })}

            </div>
        </div>
    );
};
export default DeliveryRestaurants;
