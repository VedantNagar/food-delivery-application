import classes from "./Signin.module.css";
import heroImg from "../../images/hero-section-landing.svg";
import { Button } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
const Signin = () => {
    const submitHandler = (e) => {
        e.preventDefault();
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
