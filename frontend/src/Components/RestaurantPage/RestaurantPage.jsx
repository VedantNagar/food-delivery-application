import Navbar from "../Utils/Navbar/Navbar";
import classes from "./RestaurantPage.module.css";
import dropdown from "../Homepage/images/dropdown.svg";
import cart from "../Homepage/images/cart.svg";
import user from "../Homepage/images/user.svg";
import NavSearchBar from "../Utils/NavSearchBar/NavSearchBar";
import Banner from "./Banner/Banner";
import Footer from "../Utils/Footer/Footer";
import { useEffect } from "react";
import { getSingleRestaurantUrl } from "../../../urls/restaurantUrl";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MenuCard from "./Menu/MenuCard";
const navbarRestaurantPage = [
    { title: "", imgfwd: "", imgbwd: "", component: <NavSearchBar /> },
    { title: "Cart", imgfwd: cart, imgbwd: "", to: "cart" },
    { title: "Kshitij", imgfwd: dropdown, imgbwd: user },
];
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
            <div className={classes.wrapper}>
                <Navbar list={navbarRestaurantPage} />
            </div>
            <Banner restaurantData={fetchedData} />
            <div className={`${classes.wrapper} ${classes.scrollMenu}`}>
                {fetchedData?.menu?.length !=0 && fetchedData?.menu?.map((item)=>{
                    return <MenuCard item={item} key={item?._id}/>
                })}
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </>
    );
};
export default RestaurantPage;
