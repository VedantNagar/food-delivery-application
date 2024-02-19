import burger from "../images/burger.svg";
import cake from "../images/cake.svg";
import chaat from "../images/chaat.svg";
import momos from "../images/momos.svg";
import pizza from "../images/pizza.svg";
import rolls from "../images/rolls.svg";
import classes from "./DeliveryCollections.module.css";
import styles from "../../Utils/CommonStyles/commonStyles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DeliveryItem from "./DeliveryItem";

const deliveryItems = [
    { id: 1, title: "Burger", img: burger },
    { id: 2, title: "Cake", img: cake },
    { id: 3, title: "Chaat", img: chaat },
    { id: 4, title: "Momos", img: momos },
    { id: 5, title: "Pizza", img: pizza },
    { id: 6, title: "Rolls", img: rolls },
    { id: 7, title: "Burger", img: burger },
    { id: 8, title: "Cake", img: cake },
    { id: 9, title: "Chaat", img: chaat },
    { id: 10, title: "Momos", img: momos },
    { id: 11, title: "Pizza", img: pizza },
    { id: 12, title: "Rolls", img: rolls },
];
const DeliveryCollections = () => {
    return (
        <div className={classes.outerDiv}>
            <div className={classes.wrapper}>
                <h2 className={styles.delivryCollHead}>
                    Eat what makes you happy
                </h2>
                <div className={classes.carousel}>
                    <Swiper
                        slidesPerView={6}
                        navigation={true}
                        modules={[Navigation]}
                        className={classes.swiper}
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
                        {deliveryItems.map((item) => {
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
        </div>
    );
};
export default DeliveryCollections;
