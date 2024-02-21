import classes from "./Homepage.module.css";
import Hero from "./Hero/Hero.jsx";
import DeliveryCollections from "./DeliveryCollections/DeliveryCollections.jsx";
import TopBrands from "./DeliveryCollections/TopBrands.jsx";
import DeliveryRestuarants from "./DeliveryRestuarants/DeliveryRestaurants.jsx";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { getAllRestaurantUrl } from "../../../urls/restaurantUrl.js";
import { userContext } from "../../userContext/context.jsx";


const HomePage = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const restaurantList = restaurantData;
    const {setIsLoading } = useContext(userContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(getAllRestaurantUrl);
                setRestaurantData(response.data.restaurants);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        };
        fetchData();
    }, []);

    // console.log(restaurantData);
    return (
        <>
            <div className={classes.wrapper}>
                <Hero />
            </div>
            <DeliveryCollections />
            <div className={classes.wrapper}>
                <TopBrands />
                <DeliveryRestuarants list={restaurantList} />
            </div>
            
        </>
    );
};
export default HomePage;
