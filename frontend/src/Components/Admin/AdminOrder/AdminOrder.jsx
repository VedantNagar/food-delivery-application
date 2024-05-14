import axios from "axios";
import AdminOrderCard from "../AdminOrderCard/AdminOrderCard";
import { useEffect, useState } from "react";
import { getAllRestOrder } from "../../../../urls/admin";

const AdminOrder = ({id}) => {
    const [data,setData] = useState([])
    useEffect(() => {
        const getAllOrder = async() =>{
            const response = await axios.get(getAllRestOrder,{
                params:{
                    restId:id
                }
            })
            // console.log(response.data)
            setData(response.data)
        }
        getAllOrder()
    },[])
    const stauses = ['Preparing', 'Pending', 'Cancelled', 'Delivered'];
    return (

        <div className="h-5/6 overflow-y-scroll m-4 rounded-lg flex flex-col gap-3 p-6 shadow-lg">
            <div>
                {stauses.map((status,index)=>{
                    return(<>
                    <button key={index} className="text-white inline-flex items-center bg-fudo-red hover:bg-[#e64747] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center h-12 mr-5 my-auto">{status}</button>
                    </>)
                    
                })} 
            </div>
         {data?.length === 0 ? (
                    <h1 className="text-3xl">No Orders</h1>
                ) : (
                    data?.map((item) => {
                        return (
                            <AdminOrderCard data={item} key={item._id} id={item._id}/>
                        );
                    })
                )} 
            

        </div>
    );
};
export default AdminOrder;
