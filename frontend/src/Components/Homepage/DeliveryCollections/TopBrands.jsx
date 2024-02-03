import mcd from "../../HomePage/images/mcd.svg";
import dominos from "../../HomePage/images/dominos.svg";
import kfc from "../../HomePage/images/kfc.svg";
import bk from "../../HomePage/images/bk.svg";
import subway from "../../HomePage/images/subway.svg";
import lpp from "../../HomePage/images/lpp.svg";
import classes from "./DeliveryCollections.module.css";
import styles from "../../Utils/CommonStyles/commonStyles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DeliveryItem from "./DeliveryItem";
const topBrands = [
    { id: 1, title: "McDonald's", img: mcd },
    { id: 2, title: "Dominos", img: dominos },
    { id: 3, title: "KFC", img: kfc },
    { id: 4, title: "Burger King", img: bk },
    { id: 5, title: "Subway", img: subway },
    { id: 6, title: "La Pino'z Pizza", img: lpp },
    { id: 7, title: "McDonald's", img: mcd },
    { id: 8, title: "Dominos", img: dominos },
    { id: 9, title: "KFC", img: kfc },
    { id: 10, title: "Burger King", img: bk },
    { id: 11, title: "Subway", img: subway },
    { id: 12, title: "La Pino'z Pizza", img: lpp },
];
const TopBrands = () => {
    return (
        <div>
            <h2 className={styles.delivryCollHead}>Top Brands for you</h2>
            <div className={classes.carousel}>
                <Swiper
                    slidesPerView={6}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {topBrands.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <DeliveryItem
                                    img={item.img}
                                    title={item.title}
                                ></DeliveryItem>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};
export default TopBrands;
