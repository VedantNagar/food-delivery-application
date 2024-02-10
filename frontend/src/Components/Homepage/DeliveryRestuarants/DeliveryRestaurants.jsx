import classes from "./DeliveryRestaurants.module.css";
import styles from "../../Utils/CommonStyles/commonStyles.module.css";
import RestaurantCard from "./RestaurantCard";
const DeliveryRestaurants = ({ list }) => {
    return (
        <div className={classes.deliveryRestaurants}>
            <h2 className={styles.delivryCollHead}>
                Delivery Restaurants in Delhi NCR
            </h2>
            <div className={classes.deliveryItems}>
                {list.map((restaurant) => {
                    return (
                        <RestaurantCard
                            restaurant={restaurant}
                            key={restaurant?._id}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default DeliveryRestaurants;
