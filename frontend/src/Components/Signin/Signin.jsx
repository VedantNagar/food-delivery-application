import SignInHero from "./Hero-section/SignInHero";
import Menu from "./Menu/Menu";
import Services from "./Services/Services";
import classes from "./Signin.module.css";

const SignIn = () => {
    
    return (
        <>
            <div className={classes.wrapper}>
                <SignInHero />
                <Services />
                <Menu />
            </div>
        </>
    );
};
export default SignIn;
