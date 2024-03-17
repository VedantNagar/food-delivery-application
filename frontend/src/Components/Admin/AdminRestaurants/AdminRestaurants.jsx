import AdminRestaurantCard from "../../AdminRestaurantCard/AdminRestaurantCard";

const AdminRestaurants = () => {
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
