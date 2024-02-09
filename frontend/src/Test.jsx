import React, { useEffect } from 'react'
import { allFoodUrl ,singleFoodUrl,sortedFoodUrl} from '../urls/foodUrl'
import { getAllRestaurantUrl ,getSingleRestaurantUrl} from '../urls/restaurantUrl'
import axios from 'axios'
const Test = () => {
    useEffect(() => {
        const fetchData = async() => {

            const data = await axios.get(allFoodUrl)
            console.log(data)
        }
        fetchData()
    },[])
    
  return (
    <>
    <div>test</div>
    </>
    
  )
}

export default Test