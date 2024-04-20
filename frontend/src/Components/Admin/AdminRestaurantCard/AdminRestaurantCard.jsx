import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { deleteRestaurantUrl } from "../../../../urls/restaurantUrl";
import { useEffect } from "react";
import axios from "axios";

const AdminRestaurantCard = ({ data, id }) => {

    const deleteRest = async() => {
        const response = await axios.delete(`${deleteRestaurantUrl}/${id}`)
        console.log(response)
    }

    const imageSrc =
        data?.image ??
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";
    const title = data?.name ?? "Product Name";
    const desc =
        data?.about ??
        "This card element can be used to display a product, post, or any other type of data.";

    return (
        <div className="relative rounded-lg border border-neutral-200/60 bg-white text-neutral-700 shadow-sm w-[380px] z-49">
            <div className="relative">
                <img src={imageSrc} className="w-96 h-64 object-contain" />
            </div>
            <div className="p-7">
                <h2 className="mb-2 text-lg font-bold leading-none tracking-tight">
                    {title}
                </h2>
                <p className="mb-5 text-neutral-500">{desc}</p>
                <Link to={`orders/${id}`}>
                    <button className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90">
                        View Restaurant
                    </button>
                </Link>
            </div>
            <button onClick={deleteRest}>
                <MdOutlineDeleteForever
                    className="text-3xl border border-black rounded-full cursor-pointer absolute top-0 right-0 translate-x-4 -translate-y-2 z-50"
                    title="Delete restaurant"
                />
            </button>
        </div>
    );
};
export default AdminRestaurantCard;
