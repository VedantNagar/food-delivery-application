import classes from "./Signin.module.css";
import heroImg from "../../images/hero-section-landing.svg";
import { Button } from "@mui/material";
const Signin = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div className={classes.hero}>
            <div className={classes.left}>
                <h1>Welcome Back.</h1>
                <h3>Let's sign you in.</h3>
                <img src={heroImg} alt="not found" />
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
                        width: "19rem"
                    }}
                    disableElevation
                    onClick={submitHandler}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};
export default Signin;
