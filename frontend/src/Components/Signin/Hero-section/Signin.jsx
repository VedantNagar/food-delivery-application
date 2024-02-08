import classes from "./Signin.module.css";
import heroImg from "../../../images/hero-section-landing.svg";
import { Button } from "@mui/material";
import { Link, Form, useSearchParams } from "react-router-dom";
const Signin = () => {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode") === "login";
    const submitHandler = (e) => {
        e.preventDefault();
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
                <Form method="post" className={classes.formAction}>
                    <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
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

                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#FF4040",
                            fontSize: "1.175rem",
                            textTransform: "none",
                            padding: "13px 110px",
                        }}
                        sx={{
                            width: {
                                xs: "17rem",
                                sm: "17rem",
                                md: "19rem",
                                lg: "19rem",
                                xl: "19rem",
                            },
                        }}
                        disableElevation
                        onClick={submitHandler}
                    >
                        Continue
                    </Button>
                    <p>
                        Want to
                        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
                            {isLogin ? " Create new user " : " Login "}
                        </Link>
                        ?
                    </p>
                </Form>
                
            </div>
        </div>
    );
};
export default Signin;
