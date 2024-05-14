import axios from "axios";
import AdminOrderCard from "../AdminOrderCard/AdminOrderCard";
import { useEffect, useState } from "react";
import { getAllRestOrder } from "../../../../urls/admin";

const AdminOrder = ({id}) => {
    const [data,setData] = useState([])
    const [filterValue , setFilterValue] = useState(null)
    const [filterData, setFilteredData] = useState([])
    useEffect(() => {
        const getAllOrder = async() =>{
            const response = await axios.get(getAllRestOrder,{
                params:{
                    restId:id
                }
            })
            console.log(response.data)
            setData(response.data)
            setFilteredData(response.data)
        }
        getAllOrder()
    },[])

    const checkStatus = (status)=>{
        if(status === filterValue){
            return
        }
        else{
            const filter = status ? data.filter((items)=>items.orderStatus === status): data
            setFilterValue(status)
            setFilteredData(filter)
            console.log('Status is',status);
        }
    }

    const statuses = ['Preparing', 'Pending', 'Cancelled', 'Delivered'];
    return (

        <div className="h-5/6 overflow-y-scroll m-4 rounded-lg flex flex-col gap-3 p-6 shadow-lg">
            <div>
                {statuses.map((status)=>{
                    return(
                    <button key={status} className="text-white inline-flex items-center bg-fudo-red hover:bg-[#e64747] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center h-12 mr-5 my-auto"
                    onClick={()=>checkStatus(status)}>{status}</button>
                    )
                })} 
            </div>
         {filterData?.length === 0 ? (
                    <h1 className="text-3xl">No Orders</h1>
                ) : (
                    filterData?.map((item) => {
                        return (
                            <AdminOrderCard data={item} key={item._id} id={item._id}/>
                        );
                    })
                )} 
            

        </div>
    );
};
export default AdminOrder;
