import classes from "./RestaurantPage.module.css";
import Banner from "./Banner/Banner";
import { useEffect } from "react";
import { getSingleRestaurantUrl } from "../../../urls/restaurantUrl";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MenuCard from "./Menu/MenuCard";

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
    console.log(fetchedData.menu);

    return (
        <>
            <Banner restaurantData={fetchedData} />
            <div className={`${classes.wrapper} ${classes.scrollMenu}`}>
                {fetchedData?.menu?.length != 0 &&
                    fetchedData?.menu?.map((item) => {
                        return <MenuCard item={item} key={item?._id} />;
                    })}
            </div>
        </>
    );
};
export default RestaurantPage;
