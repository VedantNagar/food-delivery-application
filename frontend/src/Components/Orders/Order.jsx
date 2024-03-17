import axios from "axios";
import OrderCard from "./OrderCard";
import { getAllOrderUrl } from "../../../urls/orderUrl";
import { useContext, useEffect, useState } from "react";
import { utilityContext } from "../../userContext/utilityContext";

const Order = () => {
    const [orderItem, setOrderItem] = useState([]);
    const { render, setRender } = useContext(utilityContext);

    const [filter, setFilter] = useState("preparing");
    const filterOrders = (status) => {
        setFilter(status);
        setRender(!render);
    };
    console.log(filter);
    useEffect(() => {
        const allOrders = async () => {
            const response = await axios.get(getAllOrderUrl);
            console.log(response.data);
            setOrderItem(response.data.reverse());
        };

        allOrders();
    }, [render]);
    return (
        <div className="w-customVW mx-auto">
            <div className="my-8">
                <h2 className="text-xl p-2">Orders</h2>
                <hr />
            </div>
            <div className="flex gap-5">
            <button
                    onClick={() => filterOrders("preparing")}
                    className={`border ${
                        filter === "preparing"
                            ? "bg-fudo-red text-white scale-110"
                            : "border-fudo-red"
                    } rounded-md p-2 hover:scale-110 transition-transform hover:bg-fudo-red hover:text-white`}
                >
                    Preparing
                </button>
                <button
                    onClick={() => filterOrders("pending")}
                    className={`border ${
                        filter === "pending"
                            ? "bg-fudo-red text-white scale-110"
                            : "border-fudo-red"
                    } rounded-md p-2 hover:scale-110 transition-transform hover:bg-fudo-red hover:text-white`}
                >
                    Pending
                </button>
                <button
                    onClick={() => filterOrders("cancelled")}
                    className={`border ${
                        filter === "cancelled"
                            ? "bg-fudo-red text-white scale-110"
                            : "border-fudo-red"
                    } rounded-md p-2 hover:scale-110 transition-transform hover:bg-fudo-red hover:text-white`}
                >
                    Cancelled
                </button>
                <button
                    onClick={() => filterOrders("delivered")}
                    className={`border ${
                        filter === "delivered"
                            ? "bg-fudo-red text-white scale-110"
                            : "border-fudo-red"
                    } rounded-md p-2 hover:scale-110 transition-transform hover:bg-fudo-red hover:text-white`}
                >
                    Delivered
                </button>
                
            </div>
            <div className="rounded-xl min-h-96 my-6 bg-[#FBFBFB]">
                <div className="py-2 px-4 justify-around grid grid-cols-4 text-center mr-6 font-medium text-xl sm:text-lg iPhone11:text-sm iPhone11:mr-0 sm:mr-0 md:mx-6">
                    <h2>Payment by</h2>
                    <h2>Date</h2>
                    <h2>Status</h2>
                    <h2>Total</h2>
                </div>
                <div className="flex flex-col gap-4 overflow-scroll max-h-96 iPhone11:p-4 min-h-screen">
                    {orderItem
                        ?.filter((item) =>
                            filter === "all"
                                ? true
                                : item.orderStatus === filter
                        )
                        .map((item) => (
                            <OrderCard
                                fields={item}
                                orderID={item._id}
                                key={item._id}
                            />
                        ))}
                    {orderItem?.filter((item) =>
                        filter === "all" ? true : item.orderStatus === filter
                    ).length === 0 && (
                        <h1 className="text-center text-2xl my-9">
                            No {filter} orders to show{" "}
                            <span className="text-fudo-red">:(</span>
                        </h1>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Order;
