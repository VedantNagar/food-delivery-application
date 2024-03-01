import classes from "./RestaurantPage.module.css";
import Banner from "./Banner/Banner";
import { useEffect } from "react";
import { getSingleRestaurantUrl } from "../../../urls/restaurantUrl";
import { ScrollRestoration, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MenuCard from "./Menu/MenuCard";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
const RestaurantPage = () => {
    const params = useParams();
    const [fetchedData, setFetchData] = useState([]);
    useEffect(() => {
        const fetchRestaurantInfo = async () => {
            try {
                const response = await axios.get(
                    `${getSingleRestaurantUrl}/${params.restaurantId}`
                );
                setFetchData(response.data.restaurant);
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        };
        fetchRestaurantInfo();
    }, []);

    const componentRef = useRef(null);

    useEffect(() => {
        if (componentRef.current) {
            componentRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [componentRef.current]);

    return (
        <div ref={componentRef}>
            <Banner restaurantData={fetchedData} />
            <div className={classes.wrapper}>
                <h1 className="font-poppins text-3xl ml-4 mt-4">Menu</h1>
            </div>
            <div className={`${classes.wrapper} ${classes.scrollMenu}`}>
                {fetchedData?.menu?.length != 0 &&
                    fetchedData?.menu?.map((item) => (
                        <MenuCard item={item} key={item?._id} />
                    ))}
            </div>
        </div>
    );
};
export default RestaurantPage;
