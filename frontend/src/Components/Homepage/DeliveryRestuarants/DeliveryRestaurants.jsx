import classes from "./DeliveryRestaurants.module.css";
import styles from "../../Utils/CommonStyles/commonStyles.module.css";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const DeliveryRestaurants = ({ list }) => {
    const params = useParams();
    return (
        <div className={classes.deliveryRestaurants}>
            <h2 className={styles.delivryCollHead}>
                Delivery Restaurants in Delhi NCR
            </h2>
            <div className={classes.deliveryItems}>
                {list.map((restaurant) => {
                    return (
                        <Link to={`/homepage/${restaurant?._id}`}>
                            <RestaurantCard
                                restaurant={restaurant}
                                key={restaurant?._id}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
export default DeliveryRestaurants;
