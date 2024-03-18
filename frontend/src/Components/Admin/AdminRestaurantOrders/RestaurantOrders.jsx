import AdminMenu from "../AdminMenu/AdminMenu";
import AdminOrder from "../AdminOrder/AdminOrder";

const RestaurantOrders = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 w-full">
            <div className="h-screen mt-6">
                <h1 className="text-3xl font-regular mx-8 my-3">Orders</h1>
                <AdminOrder />
            </div>
            <div className="h-screen mt-6">
                
                <AdminMenu />
            </div>
        </div>
    );
};
export default RestaurantOrders;
