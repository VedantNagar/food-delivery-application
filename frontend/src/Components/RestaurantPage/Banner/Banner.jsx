import classes from "./Banner.module.css";
import bannerImg from "../images/restaurantPage.png";
import offerImg from "../images/offer.svg"
import line from "../images/line.svg";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
const Banner = () => {
    return (
        <div className={classes.banner}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <img src={bannerImg} alt="" className={classes.bannerImg} />
                    <div className={classes.desc}>
                        <h3 className={classes.title}>
                            LunchBox - Meals and Thalis
                        </h3>
                        <p className={classes.category}>
                            North Indian, Punjabi
                        </p>
                        <div className={classes.info}>
                            <div className={classes.rating}>
                                <div className={classes.ratingFirstRow}>
                                    <span>4.0</span>
                                    <div className={classes.star}>
                                        <IconContext.Provider
                                            value={{ color: "#267E3E" }}
                                        >
                                            <FaStar />
                                        </IconContext.Provider>
                                    </div>
                                </div>
                                <span>100+ ratings</span>
                            </div>
                            <img src={line} alt="" />
                            <div className={classes.delivery}>
                                <span>30 mins</span>
                                <span>Delivery Time</span>
                            </div>
                            <img src={line} alt="" />
                            <div className={classes.cft}>
                                <span>₹200</span>
                                <span>Cost for two</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.offers}>
                        <h2>Offers</h2>
                        <div className={classes.offer}>
                            <img src={offerImg} alt="" />{" "}
                            <p>50% off up to ₹100 | Use code TRYNEW</p>
                        </div>
                        <div className={classes.offer}>
                            <img src={offerImg} alt="" />{" "}
                            <p>20% off | Use code PARTY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;
