import axios from "axios"
import { useEffect } from "react"
import { getOrderById } from "../../../../backend/controllers/orderController"

const OrderCard = () => {
  // useEffect(() => {
  //   const singleOrder = async() => {
  //     const response = await axios.get(getOrderById)
  //     console.log(response)
  //   } 

  //   singleOrder()
  // },[])
  return (
    <div className="border border-1 rounded-xl border-black w-full py-6 flex justify-around ">
        <h3 className="text-lg">#1r3r8u98</h3>
        <h3 className="text-lg">12/2/24</h3>
        <h3 className="text-lg">Delivered</h3>
        <h3 className="text-lg">₹400</h3>
    </div>
  )
}
export default OrderCard