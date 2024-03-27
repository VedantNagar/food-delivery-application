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
            console.log(response.data)
            setData(response.data)
        }
        getAllOrder()
    },[])
    return (

        <div className="h-5/6 overflow-y-scroll m-4 rounded-lg flex flex-col gap-3 p-6 shadow-lg">
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
