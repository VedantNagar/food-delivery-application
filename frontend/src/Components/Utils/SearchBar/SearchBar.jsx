import classes from "./SearchBar.module.css";
import location from "../../Homepage/images/location.svg";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import search from "../../Homepage/images/Search.svg";
const area = [
    { label: "Janakpuri" },
    { label: "Patel Nagar" },
    { label: "Shalimar Bagh" },
    { label: "Rajendra Nagar" },
    { label: "Paschim Vihar" },
];
const SearchBar = () => {
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
                    />
                </form>
            </div>
        </div>
    );
};
export default SearchBar;
