import React, { useState } from "react";
import heroImg from "../../../images/hero-section-landing.svg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../../userContext/context";
import classes from "./Signin.module.css";
import { loginUrl } from "../../../../urls/userUrl";
import Register from "../Register/Register";
import { Link, useSearchParams } from "react-router-dom";
import Button from "../../Utils/Button/Button";
const Signin = () => {
    const [searchParams] = useSearchParams();
    const login = searchParams.get("mode") === "login";
    const { setIsLogin } = useContext(userContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const registerUser = async (e) => {
        e.preventDefault();
        // console.log(data)
        const { email, password } = data;
        try {
            const { data } = await axios.post(loginUrl, {
                email,
                password,
            });
            if (data.error) {
                toast.error(data.error, {
                    duration: 2000,
                });
            } else {
                setData({});
                toast.success("Logged in", {
                    duration: 2000,
                });
                setIsLogin(true);
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={classes.hero}>
            <div className={classes.left}>
                <h1>Welcome Back.</h1>
                <h3>Let's sign you in.</h3>
                <img
                    src={heroImg}
                    alt="not found"
                    className={classes.signInImg}
                />
            </div>
            <div className={classes.right}>
                <div>
                    <div>
                        {login ? (
                            <form
                                onSubmit={registerUser}
                                className={classes.formAction}
                            >
                                <h1>Login</h1>
                                <div className={classes.input}>
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.input}>
                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <Button type="submit" title={"Continue"}/>
                            </form>
                        ) : (
                            <Register />
                        )}
                        <p className={classes.mode}>
                            Want to
                            <Link to={`?mode=${login ? "signup" : "login"}`}>
                                {login ? " Create new a user " : " Login "}
                            </Link>
                            ?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
