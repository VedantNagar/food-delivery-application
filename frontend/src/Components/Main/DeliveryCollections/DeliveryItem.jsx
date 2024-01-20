import classes from "./DeliveryItem.module.css";
const DeliveryItem = ({ title, img }) => {
    return (
        <div className={classes.deliveryItem}>
            <img src={img} alt="" />
            <p>{title}</p>
        </div>
    );
};
export default DeliveryItem;
