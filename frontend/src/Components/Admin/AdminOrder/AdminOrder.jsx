import axios from "axios";
import AdminOrderCard from "../AdminOrderCard/AdminOrderCard";
import { useEffect } from "react";
import { getAllRestOrder } from "../../../../urls/admin";

const AdminOrder = ({id}) => {
    useEffect(() => {
        const getAllOrder = async() =>{
            const response = await axios.get(getAllRestOrder,{
                params:{
                    restId:id
                }
            })
            console.log(response)
        }
        getAllOrder()
    })
    return (
        <div className="h-5/6 overflow-y-scroll m-4 mt-7 rounded-lg flex flex-col gap-3 p-6 shadow-lg ">
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
        </div>
    );
};
export default AdminOrder;
