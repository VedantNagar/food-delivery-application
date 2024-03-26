import { useParams } from "react-router-dom";
import AdminMenu from "../AdminMenu/AdminMenu";
import AdminOrder from "../AdminOrder/AdminOrder";
import { useEffect ,useState} from "react";
import { getSingleRestaurantUrl } from "../../../../urls/restaurantUrl";
import axios from "axios";
const RestaurantOrders = () => {
    const params = useParams();
    console.log(params.orderId);
    const [rest,setRest] = useState([])
    useEffect(() => {
        const getRest = async() => {
            const response = await axios.get(
                `${getSingleRestaurantUrl}/${params.orderId}`
            )
            setRest(response.data)
        }
        getRest()
    },[]) 
    return (
        <div className="grid md:grid-cols-2 gap-8 w-full">
            <div className="h-screen mt-6">
                <h1 className="text-3xl font-regular mx-8 my-3">Orders</h1>
                <AdminOrder id = {params.orderId}/>
            </div>
            <div className="h-screen mt-6">
                <AdminMenu data = {rest?.restaurant?.menu}/>
            </div>
        </div>
    );
};
export default RestaurantOrders;
