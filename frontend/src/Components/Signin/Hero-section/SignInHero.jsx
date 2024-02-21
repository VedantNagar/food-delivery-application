import React, { useContext } from "react";
import heroImg from "../../../images/hero-section-landing.svg";
import classes from "./SignInHero.module.css";
import Register from "../register/Register";
import { Link, useLocation } from "react-router-dom";
import Login from "../Login/Login";
import { userContext } from "../../../userContext/context";

const SignInHero = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const mode = searchParams.get("mode");
    const { isLogin } = useContext(userContext);
    const isLoginMode = mode === "login" || !mode;

    return (
        <div className={classes.hero}>
            <div className={classes.left}>
                <div>
                    <h1>{isLoginMode ? "Welcome Back." : "Hey there, "}</h1>
                    {isLogin ? (
                        <h3>You are already logged in</h3>
                    ) : (
                        <h3>Let's {isLoginMode ? "log" : "sign"} you in.</h3>
                    )}

                    <img
                        src={heroImg}
                        alt="not found"
                        className={classes.signInImg}
                    />
                </div>
            </div>
            <div className={classes.right}>
                {isLogin ? <h1>Lets find something to eat for you!</h1> : ""}
                <div className={`${isLogin ? classes.hide : ""}`}>
                    {isLoginMode ? <Login /> : <Register />}
                    <p className={classes.mode}>
                        Want to
                        <Link to={`?mode=${isLoginMode ? "signup" : "login"}`}>
                            {isLoginMode ? " Create new a user " : " Login "}
                        </Link>
                        ?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInHero;
