import axios from "axios";
import { useEffect, useState } from "react";
import { changeStatusUrl } from "../../../../urls/restaurantUrl";

const AdminOrderCard = ({ data, id }) => {
    const [status, setStatus] = useState(data?.orderStatus);
    useEffect(() => {
        const changeStatus = async () => {
            const response = await axios.patch(`${changeStatusUrl}/${id}`, {
                orderStatus: status,
            });
        };
        changeStatus();
    }, [status]);
    return (
        <div className="border border-slate-300 p-2 rounded-lg flex justify-between gap-4 shadow-md">
            <div>
                <div className="grid grid-cols-2 gap-16">
                    <h1 className="text-xl font-medium">
                        {data?.user?.first_name} {data?.user?.last_name}
                    </h1>
                    <h1>{data?.user?.contact}</h1>
                </div>
                <span>${data?.totalAmount}</span>
                <p className="border border-slate-200 rounded-lg p-2">
                    {data?.user?.address}
                </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
                <label
                    htmlFor="status"
                    className="block mb-1 text-sm font-medium text-gray-900 "
                >
                    Order Status
                </label>
                <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    onChange={(e) => {
                        setStatus(e.target.value);
                    }}
                >
                    <option defaultValue="">{status}</option>
                    <option value="preparing">Preparing</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="delivered">Delivered</option>
                </select>
            </div>
        </div>
    );
};
export default AdminOrderCard;
