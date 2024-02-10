import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import { registerUrl } from "../../../../urls/userUrl";
import Button from "../../Utils/Button/Button";
const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        address: "",
        contact: "",
        role: "",
        email: "",
        password: "",
    });
    // console.log(data);
    const registerUser = async (e) => {
        e.preventDefault();
        console.log(data);
        const {
            first_name,
            last_name,
            address,
            contact,
            role,
            email,
            password,
        } = data;

        try {
            const { data } = await axios.post(registerUrl, {
                first_name,
                last_name,
                address,
                contact,
                role,
                email,
                password,
            });
            if (data.error) {
                toast.error(data.error, {
                    duration: 6000,
                });
            } else {
                setData({
                    first_name: "",
                    last_name: "",
                    address: "",
                    contact: "",
                    role: "",
                    email: "",
                    password: "",
                });
                toast.success("Login Successful. Welcome!");
                navigate("/homepage");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={registerUser} className={classes.formAction}>
            <h1>Register</h1>
            <div className={classes.cover}>
                <div className={`${classes.input}`}>
                    <input
                        className={classes.inline}
                        type="text"
                        placeholder="First Name"
                        value={data.first_name}
                        onChange={(e) =>
                            setData({ ...data, first_name: e.target.value })
                        }
                    />
                </div>
                <div className={`${classes.input}`}>
                    <input
                        className={classes.inline}
                        type="text"
                        placeholder="Last Name"
                        value={data.last_name}
                        onChange={(e) =>
                            setData({ ...data, last_name: e.target.value })
                        }
                    />
                </div>
            </div>
            <div className={classes.input}>
                <input
                    type="text"
                    placeholder="Enter Address"
                    value={data.address}
                    onChange={(e) =>
                        setData({ ...data, address: e.target.value })
                    }
                />
            </div>
            <div className={classes.input}>
                <input
                    type="number"
                    placeholder="Enter Contact"
                    value={data.contact}
                    onChange={(e) =>
                        setData({ ...data, contact: e.target.value })
                    }
                />
            </div>
            <div className={classes.input}>
                <select
                    value={data.role}
                    onChange={(e) => setData({ ...data, role: e.target.value })}
                >
                    <option defaultValue>Customer</option>
                    <option>Owner</option>
                </select>
            </div>
            <div className={classes.input}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={data.email}
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />
            </div>
            <div className={classes.input}>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
            </div>
            <Button type="submit" title={"Continue"} />
        </form>
    );
};

export default Register;
