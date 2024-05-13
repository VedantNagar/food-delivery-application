import tacos from "../../../../assets/tacos.png";
import axios from "axios";
import { deleteFoodUrl } from "../../../../urls/restaurantUrl";
import { utilityContext } from "../../../userContext/utilityContext";
import { useContext } from "react";
import { toast } from 'react-toastify';


const AdminMenuCard = ({ data }) => {
//   console.log(data);
  const {render,setRender} = useContext(utilityContext)
  const deleteFood = async () => {
    const menuId = data?._id;
  console.log(menuId);
    
    if (!menuId || typeof menuId !== 'string') {
      console.error('Invalid or missing menuId');
      return;
    }

    try {
      const request = await axios.delete(`${deleteFoodUrl}/${menuId}`);
      console.log(request);
      toast.success("item deleted successfully")
      setRender(!render)
      
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  return (
    <div className="border border-slate-300 p-2 rounded-lg justify-between gap-4 shadow-md flex">
      <div className="object-contain w-32 h-32">
        <img
          src={data?.image[0]}
          alt=""
          className="w-full h-full object-cover rounded-lg "
        />
      </div>
      <div className="w-1/3 flex flex-col justify-center gap-2">
        <h1 className="text-lg font-bold">{data?.name}</h1>
        <p className="truncate">{data?.about}</p>
        <span>${data?.price}</span>
      </div>
      <div className="inline-flex w-fit rounded-md shadow-sm h-fit my-auto" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-fudo-red focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Edit
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-fudo-red focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={deleteFood}
        >
          Delete
        </button>
        
      </div>
    </div>
  );
};

export default AdminMenuCard;