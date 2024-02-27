import classes from "./Banner.module.css";
import bannerImg from "../images/restaurantPage.png";
import offerImg from "../images/offer.svg";
import line from "../images/line.svg";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
const Banner = ({ restaurantData }) => {
    const name =
        restaurantData?.name ?? "LunchBox - Meals and Thalis";
    const aboutCuisine =
        restaurantData?.about ?? "North Indian, Punjabi";
    const rating = restaurantData?.rating ?? "4.0";
    const cft = restaurantData?.cft ?? "₹200 for two";
    const discount = restaurantData?.discount ?? "Discounts soon!!";
    const image = restaurantData?.image ?? { bannerImg };

    return (
        <div className={classes.banner} autoFocus>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <img src={image} alt="" className={classes.bannerImg} />
                    <div className={classes.desc}>
                        <h3 className={classes.title}>{name}</h3>
                        <p className={classes.category}>{aboutCuisine}</p>
                        <div className={classes.info}>
                            <div className={classes.rating}>
                                <div className={classes.ratingFirstRow}>
                                    <span>{rating}</span>
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
                                <span>{cft}</span>
                                <span>Cost for two</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.offers}>
                        <h2>Offers</h2>
                        <div className={classes.offer}>
                            <img src={offerImg} alt="" /> <p>{discount}</p>
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
