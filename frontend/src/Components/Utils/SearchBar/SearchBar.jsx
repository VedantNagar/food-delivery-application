import classes from "./SearchBar.module.css";
import location from "../../Homepage/images/location.svg";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import search from "../../Homepage/images/Search.svg";
import { allFoodUrl,singleFoodUrl,sortedFoodUrl } from "../../../../urls/foodUrl";
import { getAllRestaurantUrl,getSingleRestaurantUrl,getSearchRestaurantsUrl } from "../../../../urls/restaurantUrl";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const area = [
    { label: "Janakpuri" },
    { label: "Patel Nagar" },
    { label: "Shalimar Bagh" },
    { label: "Rajendra Nagar" },
    { label: "Paschim Vihar" },
];
const SearchBar = () => {
    const [name,setName] = useState("")
    
    useEffect(() => {
        const fetchData = async() => {
            try {
            const searchRestaurant = await axios.get(getSearchRestaurantsUrl,{
                params:{
                    name:name
                }
            })
            const searchFood = await axios.get(sortedFoodUrl,{
                params:{
                    name:name,
                }
            })
            console.log(searchFood)
            console.log(searchRestaurant)
            } catch (error) {
                console.log(error)
            }
        }
        console.log(sortedFoodUrl)
        fetchData()
    },[name])
    return (
        <div className={classes.searchBar}>
            <div className={classes.left}>
                <img src={location} alt="" />
                <Autocomplete
                    sx={{ width: 200 }}
                    options={area}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Select a location"
                        ></TextField>
                    )}
                />
            </div>
            <div className={classes.right}>
                <img src={search} />
                <form action="#">
                    <input
                        type="text"
                        placeholder="Search for restaurant, cuisine or a dish"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </form>
            </div>
        </div>
    );
};
export default SearchBar;
