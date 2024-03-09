import axios from "axios"
import OrderCard from "./OrderCard"
import { getAllOrderUrl } from "../../../urls/orderUrl"
import { useEffect, useState } from "react"

const Order = () => {
  const [orderItem, setOrderItem] = useState([]);
  useEffect(() => {
    const allOrders = async() => {
      const response = await axios.get(getAllOrderUrl)
      console.log(response.data)
      setOrderItem(response.data);
    }

    allOrders()
  },[])
  return (
    <div className="w-customVW mx-auto">
        <div className="my-8">
          <h2 className="text-xl p-2">Orders</h2>
        <hr />
        </div>
        <div className="rounded-xl min-h-96 my-6 bg-[#FBFBFB]">
          <div className="py-2 px-4 justify-around grid grid-cols-4 text-center mr-6 font-medium text-xl sm:text-lg iPhone11:text-sm iPhone11:mr-0 sm:mr-0">
            <h2 >Payment by</h2>
            <h2 >Date</h2>
            <h2 >Status</h2>
            <h2 >Total</h2>
          </div>
          <div className="flex flex-col gap-4 overflow-scroll max-h-96 min-h-80 p-4 iPhone11:p-0">
          
          {orderItem?.map((item)=>{
            return <OrderCard fields={item} key={item._id}/>
          })}
            
            
          </div>
        </div>
    </div>
  )
}
export default Order