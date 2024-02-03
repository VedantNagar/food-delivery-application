import classes from "./DeliveryItem.module.css";
import { NavLink } from "react-router-dom";
const DeliveryItem = ({ title, img }) => {
    return (
        <NavLink to="/restaurant-page">
            <div className={classes.deliveryItem}>
                <img src={img} alt="" />
                <p>{title}</p>
            </div>
        </NavLink>
    );
};
export default DeliveryItem;
