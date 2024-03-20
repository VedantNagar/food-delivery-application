const AdminOrderCard = () => {
    return (
        <div className="border border-slate-300 p-2 rounded-lg flex justify-between gap-4 shadow-md">
            <div>
                <div className="grid grid-cols-2 ">
                    <h1 className="text-xl font-medium">Kshitij Tanwar</h1>
                    <h1>+91 98371635127</h1>
                </div>
                <span>$8.75</span>
                <p className="border border-slate-200 rounded-lg p-2">
                    Arya Samaj Rd, Beadonpura, Block 25A, Karol Bagh
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
                >
                    <option defaultValue="">Select status</option>
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
