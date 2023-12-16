import classes from "./Services.module.css";
import service1 from "../../../images/service-1.svg"
import service2 from "../../../images/service-2.svg";
import service3 from "../../../images/service-3.svg";
const Services = () => {
    return (
        <div className={classes.container}>
            <h3 className={classes.header}>What we serve</h3>
            <h1>
                Your Favourite Food <br />
                Delivery Partner
            </h1>
            <div className={classes.cards}>
                <div className={classes.card}>
                    <img src={service1} alt="not found" />
                    <h3>Easy to Order</h3>
                    <p>
                        You only need a few steps in <br />
                        ordering food
                    </p>
                </div>
                <div className={classes.card}>
                    <img src={service2} alt="not found" />
                    <h3>Fastest Delivery</h3>
                    <p>
                        Delivery that is always ontime
                        <br /> even faster
                    </p>
                </div>
                <div className={classes.card}>
                    <img src={service3} alt="not found" />
                    <h3>Best Quality</h3>
                    <p>
                        Not only fast for us quality is also <br />
                        number one
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Services;
