import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodItemCard/FoodCard";
import classes from "./SearchedResults.module.css";
import { sortedFoodUrl } from "../../../urls/foodUrl";
import { getSearchRestaurantsUrl } from "../../../urls/restaurantUrl";
import { Link, useParams } from "react-router-dom";
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
const SearchedResults = () => {
    const [activeBtn, setActiveBtn] = useState("Dishes");
    const handleBtnClick = (btnName) => {
        setActiveBtn(btnName);
    };
    const [foodItems, setFoodItems] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
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
                setRestaurants(searchRestaurant.data);
                // console.log(searchFood.data);
                // console.log(searchRestaurant);
            } catch (error) {
                console.log(error);
            }
        };
        // console.log(sortedFoodUrl);
        fetchData();
    }, [name]);
    return (
        <div className={classes.wrapper}>
            <div className={classes.results}>
                <h1>Search results for "{capitalizedName}"</h1>
                <div className={classes.optionBtns}>
                    <button
                        className={`${classes.proceedBtn} ${
                            activeBtn === "Dishes" ? classes.active : ""
                        }`}
                        onClick={() => handleBtnClick("Dishes")}
                    >
                        Dishes
                    </button>
                    <button
                        className={`${classes.proceedBtn} ${
                            activeBtn === "Restaurant" ? classes.active : ""
                        }`}
                        onClick={() => handleBtnClick("Restaurant")}
                    >
                        Restaurant
                    </button>
                </div>
                <div className={classes.outerDiv}>
                    <div className={classes.foodItems}>
                        {activeBtn === "Dishes" && foodItems.length === 0 && (
                            <h1>
                                No food items related to {capitalizedName} found
                                <span className={classes.coloredSpan}> :(</span>
                            </h1>
                        )}
                        {activeBtn === "Restaurant" &&
                            restaurants.length === 0 && (
                                <h1>
                                    No restaurants related to {capitalizedName}{" "}
                                    found
                                    <span className={classes.coloredSpan}>
                                        {" "}
                                        :(
                                    </span>
                                </h1>
                            )}
                        {activeBtn === "Dishes"
                            ? foodItems.map((item) => {
                                  return (
                                      <FoodCard data={item} key={item._id} />
                                  );
                              })
                            : restaurants.map((item) => {
                                  return (
                                      <Link
                                          to={`/homepage/${item._id}`}
                                          key={item._id}
                                      >
                                          <FoodCard data={item} />
                                      </Link>
                                  );
                              })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SearchedResults;
