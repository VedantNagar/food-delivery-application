import { useContext, useState } from "react";
import { utilityContext } from "../../../userContext/utilityContext";

const AdminMenuForm = () => {
    const { setAdminMenuModal } = useContext(utilityContext);
    const [data, setData] = useState({
        name: "",
        about: "",
        price: "",
        image: "",
        category: "",
    });
    const handleClick = async (e) => {
        e.preventDefault();
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
    };

    return (
        <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 z-[calc(infinity)] justify-center items-center w-screen h-screen max-h-full -translate-x-1/2 -translate-y-1/2 grid place-content-center backdrop-blur-sm backdrop-brightness-50"
        >
            <div className="relative p-4 w-96 max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Add a new dish
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                            data-modal-toggle="crud-modal"
                            onClick={() => {
                                setAdminMenuModal(false);
                            }}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <form className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Type restaurant name"
                                    required=""
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    About
                                </label>
                                <input
                                    type="text"
                                    name="about"
                                    id="about"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Type about your restaurant"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            about: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="col-span-2">
                                <label
                                    htmlFor="cft"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="$29.99"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            price: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="col-span-2">
                                <label
                                    htmlFor="category"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Upload restaurant image
                                </label>

                                <input
                                    type="file"
                                    name="file"
                                    id="contact"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    onChange={(e) => handleFileUpload(e)}
                                />
                            </div>
                            <div className="col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Category
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    t
                                    value={data.role}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            category: e.target.value,
                                        })
                                    }
                                >
                                    <option defaultValue>Veg</option>
                                    <option>Non-veg</option>
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-white inline-flex items-center bg-fudo-red hover:bg-[#e64747] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            onClick={handleClick}
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
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminMenuForm;
