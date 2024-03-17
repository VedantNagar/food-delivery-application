import { useEffect } from "react";
import AdminRestaurantCard from "../../AdminRestaurantCard/AdminRestaurantCard";
import axios from 'axios'
import { getAllUserRestUrl } from "../../../../urls/admin";
const AdminRestaurants = () => {
    console.log(getAllUserRestUrl)
    useEffect(() => {
        const getAllRest = async() => {
            const response = await axios.get(getAllUserRestUrl)

            console.log(response);
        }
        getAllRest()
    },[])
    return (
        <div className="w-screen h-screen p-6">
            <h1 className="text-3xl font-poppins mb-4">Your restaurants</h1>
            <div className="grid gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ">
                <AdminRestaurantCard />
                <AdminRestaurantCard />
                <AdminRestaurantCard />
                <AdminRestaurantCard />
            </div>
        </div>
    );
};

export default AdminRestaurants;
