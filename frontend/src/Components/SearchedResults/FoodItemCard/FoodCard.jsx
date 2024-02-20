import classes from "./FoodCard.module.css";
import tag from "../images/priceTag.svg";
import food from "../images/f.svg";
const FoodCard = ({ data }) => {
    const image = data.image ? data.image : food;
    const title = data?.name;
    const outlet = data?.restaurantID?.name;
    const price = data?.price;
    return (
        <div className={classes.foodCard}>
            <div className={classes.fImage}>
                <img src={image}></img>
            </div>
            <div className={classes.fContent}>
                <h4>{title}</h4>
                <span>{outlet}</span>
                <span>
                    <img src={tag} alt="" />₹{price}
                </span>
            </div>
        </div>
    );
};
export default FoodCard;
