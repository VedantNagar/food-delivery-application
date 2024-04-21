import { useEffect, useState } from "react";
import AdminRestaurantCard from "../AdminRestaurantCard/AdminRestaurantCard";
import axios from "axios";
import { getAllUserRestUrl } from "../../../../urls/admin";
const AdminRestaurants = () => {
    const [restaurantCard, setRestaurantCard] = useState();
    useEffect(() => {
        const getAllRest = async () => {
            const response = await axios.get(getAllUserRestUrl);
            setRestaurantCard(response.data);
            // console.log(response.data);
        };
        getAllRest();
    }, [restaurantCard]);
    return (
        <div className="w-screen h-screen p-6">
            <h1 className="text-3xl font-poppins mb-4">Your restaurants</h1>
            <div className="grid gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ">
                {restaurantCard?.length === 0 ? (
                    <h1 className="text-3xl">No restaurant</h1>
                ) : (
                    restaurantCard?.map((item) => {
                        return (
                            <AdminRestaurantCard data={item} key={item._id} id={item._id}/>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default AdminRestaurants;
