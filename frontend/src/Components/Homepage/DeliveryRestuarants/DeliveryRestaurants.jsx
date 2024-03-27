import RestaurantCard from "./RestaurantCard";
import { Link, ScrollRestoration } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../../userContext/context";

const DeliveryRestaurants = ({ list }) => {
    const { isLoading } = useContext(userContext);
    return (
        <div className="my-16 flex flex-col flex-wrap justify-center">
            <ScrollRestoration />
            <h2 className="font-poppins text-xl font-medium">
                Delivery Restaurants in Delhi NCR
            </h2>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-16 mx-auto">
                {isLoading && <h1>Please wait, loading...</h1>}
                {list.map((restaurant) => {
                    return (
                        <Link
                            to={`/homepage/${restaurant?._id}`}
                            key={restaurant?._id}
                        >
                            <RestaurantCard restaurant={restaurant} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
export default DeliveryRestaurants;
