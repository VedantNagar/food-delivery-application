import heroImg from "../../../images/hero-section-landing.svg";
import classes from "./SignInHero.module.css";
import Register from "../register/Register";
import { Link, useSearchParams } from "react-router-dom";

import Login from "../Login/Login";
const SignInHero = () => {
    const [searchParams] = useSearchParams();
    const login = searchParams.get("mode") === "login";
    return (
        <div className={classes.hero}>
            <div className={classes.left}>
                <h1>{login ? "Welcome Back." : "Hey there, "}</h1>
                <h3>Let's {login ? "log" : "sign"} you in.</h3>
                <img
                    src={heroImg}
                    alt="not found"
                    className={classes.signInImg}
                />
            </div>
            <div className={classes.right}>
                <div>
                    <div>
                        {login ? <Login /> : <Register />}
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

export default SignInHero;
