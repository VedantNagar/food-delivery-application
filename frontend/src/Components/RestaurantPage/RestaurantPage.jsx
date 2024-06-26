import classes from "./RestaurantPage.module.css";
import Banner from "./Banner/Banner";
import { useEffect } from "react";
import { getSingleRestaurantUrl } from "../../../urls/restaurantUrl";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MenuCard from "./Menu/MenuCard";
import { useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
    return <Grow {...props} />;
}
const RestaurantPage = () => {
    const params = useParams();
    const [fetchedData, setFetchData] = useState([]);
    const [state, setState] = useState({
        open: false,
        Transition: Fade,
    });

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };
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
                {fetchedData?.menu?.length === 0 && (
                    <h1 className="font-poppins text-3xl ml-4 mt-4 text-center ">
                        No items available <br /> <span className="text-[#EB5757]">Please check back later :)</span>
                    </h1>
                )}
                {fetchedData?.menu?.length != 0 &&
                    fetchedData?.menu?.map((item) => (
                        <MenuCard
                            item={item}
                            key={item?._id}
                            onAddCart={handleClick(SlideTransition)}
                        />
                    ))}
            </div>
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message="Hurray!! item is added"
                key={state.Transition.name}
                autoHideDuration={1200}
            />
        </div>
    );
};
export default RestaurantPage;
