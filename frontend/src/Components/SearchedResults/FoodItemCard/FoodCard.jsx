import classes from "./FoodCard.module.css";
import tag from "../images/priceTag.svg";
const FoodCard = ({data}) => {
    return (
        <div className={classes.foodCard}>
            <div className={classes.fImage}>
                <img src={data.img}></img>
            </div>
            <div className={classes.fContent}>
                <h4>{data.title}</h4>
                <span>{data.outlet}</span>
                <span>
                    <img src={tag} alt="" />
                    ₹{data.price}
                </span>
            </div>
        </div>
    );
};
export default FoodCard;
