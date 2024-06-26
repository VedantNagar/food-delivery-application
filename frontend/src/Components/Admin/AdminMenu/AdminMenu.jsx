import { useContext } from "react";
import AdminMenuCard from "../AdminMenuCard/AdminMenuCard";
import { utilityContext } from "../../../userContext/utilityContext";

const AdminMenu = ({ data }) => {
    const { setAdminMenuModal } = useContext(utilityContext);
    // console.log(data)
    return (
        <div className="h-screen">
            <div className="grid grid-cols-2 gap-5">
                <h1 className="text-3xl font-regular mx-8 my-3">Your Menu</h1>
                <button
                    type="submit"
                    className="text-white inline-flex items-center bg-fudo-red hover:bg-[#e64747] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-52 h-12 my-auto"
                    onClick={() => {
                        setAdminMenuModal(true);
                    }}
                >
                    <svg
                        className="me-1 -ms-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    Add new dish
                </button>
            </div>
            <hr />
            <div className="h-5/6 overflow-y-scroll m-4 rounded-lg flex flex-col gap-3 p-6 shadow-lg">
                {data?.length === 0 ? (
                    <h1 className="text-3xl">No Menu</h1>
                ) : (
                    data?.map((item) => {
                        return <AdminMenuCard data={item} key={item._id} />;
                    })
                )}
            </div>
        </div>
    );
};
export default AdminMenu;
