import { useContext, useState } from "react";
import { utilityContext } from "../../../userContext/utilityContext";
import axios from "axios";
import { createRestauranrUrl } from "../../../../urls/restaurantUrl";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AdminRestaurantForm = () => {
  const { setModal } = useContext(utilityContext);
  const [data, setData] = useState({
    name: "",
    about: "",
    cft: "",
    number: "",
    image: "",
    discount: "",
    address: "",
  });
  const handleClick = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Append form fields to the FormData object
    formData.append("name", data.name);
    formData.append("about", data.about);
    formData.append("address", data.address);
    formData.append("phone", data.number);
    formData.append("discount", data.discount);
    formData.append("cft", data.cft);
    formData.append("image", data.image); // Assuming data.image is a file

    try {
      // Send the FormData object in the POST request
      const response = await axios.post(createRestauranrUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
        },
      });
      // console.log(response);
      
      setModal(false);
    } catch (error) {
      console.error(error);
      toast.error("please provide complete imformation")
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    
    // You may want to check if a file was selected
    if (!file) {
      return;
    }
    
    // Update the state with the selected file
    setData({
      ...data,
      image: file
    });
  };

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 z-[calc(infinity)] justify-center items-center w-screen h-screen max-h-full -translate-x-1/2 -translate-y-1/2 grid place-content-center backdrop-blur-sm backdrop-brightness-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-lg font-semibold text-gray-900">
              Create New Restaurant
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              data-modal-toggle="crud-modal"
              onClick={() => {
                setModal(false);
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
                  required
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
                  required
                  onChange={(e) =>
                    setData({
                      ...data,
                      about: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cft"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Cost for two
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
                      cft: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Contact number
                </label>
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="+91"
                  onChange={(e) =>
                    setData({
                      ...data,
                      number: e.target.value,
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
              
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  onChange={(e) => handleFileUpload(e)}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Discount
                </label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type restaurant discount"
                  onChange={(e) =>
                    setData({
                      ...data,
                      discount: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Restaurant Address
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write restaurant description here"
                  required
                  onChange={(e) =>
                    setData({
                      ...data,
                      address: e.target.value,
                    })
                  }
                ></textarea>
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
              Add new restaurant
            </button>
            <ToastContainer position="top-right"/>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminRestaurantForm;
