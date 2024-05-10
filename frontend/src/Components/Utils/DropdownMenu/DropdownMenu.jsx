import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../userContext/context";
import toast from "react-hot-toast"
export default function DropdownMenu() {
  const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };
    const { logOut } = useContext(userContext);
    const logoutHandler = (e) => {
        e.preventDefault();
        logOut();
        navigate("/");
        toast.success("Logged out successfully")
        setAnchorEl(null);
    };
    const handleClose = (e) => {
        e.preventDefault();
        setAnchorEl(null);
    };
    const handleOrder = (e) => {
        e.preventDefault();
        navigate("/homepage/orders");
    };
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{
                    color: "#EB5757"
                }}
            >
                Account
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleOrder}>Orders</MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
