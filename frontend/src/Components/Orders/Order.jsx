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
          <h2 className="text-xl">Orders</h2>
        <hr />
        </div>
        <div className="rounded-lg min-h-96 my-6 bg-[#FBFBFB]">
          {/* Order */}
          <div className="py-2 flex justify-around">
            <h2 className="text-xl font-medium">Payment by</h2>
            <h2 className="text-xl font-medium">Date</h2>
            <h2 className="text-xl font-medium">Status</h2>
            <h2 className="text-xl font-medium">Total</h2>
          </div>
          <div className="flex flex-col gap-4 overflow-scroll max-h-96 min-h-80">
          
          {orderItem?.map((item)=>{
            return <OrderCard fields={item} key={item._id}/>
          })}
            
            
          </div>
        </div>
    </div>
  )
}
export default Order