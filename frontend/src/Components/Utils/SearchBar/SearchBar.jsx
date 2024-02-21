import classes from "./SearchBar.module.css";

import search from "../../Homepage/images/search.svg";
import { useNavigate } from "react-router-dom";

import {  useState } from "react";

const SearchBar = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (name) {
            navigate(`/homepage/results/${name}`);
        } else {
            alert("please type to search");
        }
    };
    return (
        <div className={classes.searchBar}>
            <form action="#">
                <input
                    type="text"
                    placeholder="Search for restaurant, cuisine or a dish"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />

                <button onClick={submitHandler} type="submit">
                    <img src={search} onClick={submitHandler} />
                </button>
            </form>
        </div>
    );
};
export default SearchBar;
