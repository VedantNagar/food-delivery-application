import Button from "../Utils/Button/Button";
import FoodCard from "./FoodItemCard/FoodCard";
import classes from "./SearchedResults.module.css";
import food from "./images/f.svg";
const foodItems = [
    {
        _id: 1,
        title: "Paneer Tikka Rice Bowl",
        outlet: "The Good Bowl",
        price: 200,
        img: food,
    },
    {
        _id: 2,
        title: "Paneer Tikka Rice Bowl",
        outlet: "The Good Bowl",
        price: 200,
        img: food,
    },
    {
        _id: 3,
        title: "Paneer Tikka Rice Bowl",
        outlet: "The Good Bowl",
        price: 200,
        img: food,
    },
    {
        _id: 4,
        title: "Paneer Tikka Rice Bowl",
        outlet: "The Good Bowl",
        price: 200,
        img: food,
    },
    {
        _id: 5,
        title: "Paneer Tikka Rice Bowl",
        outlet: "The Good Bowl",
        price: 200,
        img: food,
    },
    {
        _id: 6,
        title: "Paneer Tikka Rice Bowl",
        outlet: "The Good Bowl",
        price: 200,
        img: food,
    },
];
const SearchedResults = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.results}>
                <h1>Search results for “ Rice Bowls”</h1>
                <div className={classes.optionBtns}>
                    <Button title="Dishes" />
                    <Button title="Restaurant" />
                </div>
                <div className={classes.outerDiv}>
                    <div className={classes.foodItems}>
                        {foodItems.map((item) => {
                            return <FoodCard data={item} key={item._id} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SearchedResults;
