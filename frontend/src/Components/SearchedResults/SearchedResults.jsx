import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Utils/Button/Button";
import FoodCard from "./FoodItemCard/FoodCard";
import classes from "./SearchedResults.module.css";
import { sortedFoodUrl } from "../../../urls/foodUrl";
import { getSearchRestaurantsUrl } from "../../../urls/restaurantUrl";
import { useParams } from "react-router-dom";
// const foodItemss = [
//     {
//         _id: 1,
//         title: "Paneer Tikka Rice Bowl",
//         outlet: "The Good Bowl",
//         price: 200,
//         img: food,
//     },
//     {
//         _id: 2,
//         title: "Paneer Tikka Rice Bowl",
//         outlet: "The Good Bowl",
//         price: 200,
//         img: food,
//     },
//     {
//         _id: 3,
//         title: "Paneer Tikka Rice Bowl",
//         outlet: "The Good Bowl",
//         price: 200,
//         img: food,
//     },
//     {
//         _id: 4,
//         title: "Paneer Tikka Rice Bowl",
//         outlet: "The Good Bowl",
//         price: 200,
//         img: food,
//     },
//     {
//         _id: 5,
//         title: "Paneer Tikka Rice Bowl",
//         outlet: "The Good Bowl",
//         price: 200,
//         img: food,
//     },
//     {
//         _id: 6,
//         title: "Paneer Tikka Rice Bowl",
//         outlet: "The Good Bowl",
//         price: 200,
//         img: food,
//     },
// ];
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
const SearchedResults = () => {
    const [foodItems, setFoodItems] = useState([]);
    const params = useParams();
    const name = params.resultName;
    let capitalizedName = capitalizeFirstLetter(name);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const searchRestaurant = await axios.get(
                    getSearchRestaurantsUrl,
                    {
                        params: {
                            name: name,
                        },
                    }
                );
                const searchFood = await axios.get(sortedFoodUrl, {
                    params: {
                        name: name,
                    },
                });
                setFoodItems(searchFood.data);
                console.log(searchFood.data);
                // console.log(searchRestaurant);
            } catch (error) {
                console.log(error);
            }
        };
        console.log(sortedFoodUrl);
        fetchData();
    }, [name]);
    return (
        <div className={classes.wrapper}>
            <div className={classes.results}>
                <h1>Search results for "{capitalizedName}"</h1>
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
