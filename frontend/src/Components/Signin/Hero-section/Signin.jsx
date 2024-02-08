import React, { useState } from "react";
import heroImg from "../../../images/hero-section-landing.svg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../../userContext/context";
import classes from "./Signin.module.css";
import { loginUrl } from "../../../../urls/userUrl";
import Register from "../register/Register";
import { Link, useSearchParams } from "react-router-dom";

import Login from "../Login/Login";
const Signin = () => {
    const submitHandler = async(e) => {
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
                <img src={heroImg} alt="not found" className={classes.signInImg}/>
            </div>
            <div className={classes.right}>
                <form action="#" className={classes.formAction}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                </form>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#FF4040",
                        fontSize: "1.175rem",
                        textTransform: "none",
                        padding: "13px 110px",
                        
                    }}
                    sx={{
                        width:{
                            xs:"17rem",
                            sm:"17rem",
                            md: "19rem",
                            lg:"19rem",
                            xl:"19rem"
                        }
                    }}
                    disableElevation
                    onClick={submitHandler}
                >
                    Continue
                </Button>
                <div className={classes.icons}>
                    <FacebookTwoToneIcon
                        style={{
                            width: "3rem",
                            height: "3rem",
                            border: "1px solid black",
                            borderRadius: "100%",
                        }}
                    />
                    <GoogleIcon
                        style={{
                            width: "3rem",
                            height: "3rem",
                            border: "1px solid black",
                            borderRadius: "100%",
                        }}
                    />
                    <AppleIcon
                        style={{
                            width: "3rem",
                            height: "3rem",
                            border: "1px solid black",
                            borderRadius: "100%",
                        }}
                    />
                </div>
                    <p>
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
            </div>
        </div>
    );
};

export default Signin;
