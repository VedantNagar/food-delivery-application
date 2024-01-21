import classes from "./Footer.module.css";
import logo from "../../../images/logo.svg"
import insta from "../../../images/instagram.svg";
import fb from "../../../images/facebook.svg";
import x from "../../../images/x.svg";
const Footer = () => {
    const date = new Date();
    return (
        <div className={classes.outerDiv}>
            <footer>
                <div className={classes.left}>
                    <div className={classes.logo}>
                        <img
                            src={logo}
                            alt="not found"
                            className={classes.img}
                        />
                        <h2>Fudo</h2>
                    </div>
                    <p>
                        Our job is to filling your tummy with delicious food and
                        with fast and free delivery.
                    </p>
                    <div className={classes.social}>
                        <a
                            href="https://www.instagram.com/kxhxtij/"
                            target="_blank"
                        >
                            <img src={insta} alt="" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src={fb} alt="" />
                        </a>
                        <a
                            href="https://twitter.com/kshitijjtanwar"
                            target="_blank"
                        >
                            <img src={x} alt="" />
                        </a>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.about}>
                        <h3>About</h3>
                        <ul>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#Features">Features</a>
                            </li>
                            <li>
                                <a href="#News">News</a>
                            </li>
                            <li>
                                <a href="#Menu">Menu</a>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.support}>
                        <h3>Support</h3>
                        <ul>
                            <li>
                                <a href="#services">Account</a>
                            </li>
                            <li>
                                <a href="#Features">Support Center</a>
                            </li>
                            <li>
                                <a href="#News">Feedback</a>
                            </li>
                            <li>
                                <a href="#Menu">Accessibilty</a>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.contact}>
                        <h3>Get in Touch</h3>
                        <ul>
                            <li>
                                <p>Question or feedback?</p>
                            </li>
                            <li>
                                <p>We'd love to hear from you</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <hr />
            <p>© {date.getFullYear()} Fudo India, Inc. All rights reserved.</p>
        </div>
    );
};
export default Footer;
