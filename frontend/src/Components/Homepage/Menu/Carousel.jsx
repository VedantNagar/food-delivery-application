import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import food1 from "../../../images/slider_images/food-1.jpg";
import food2 from "../../../images/slider_images/food-2.jpg";
import food3 from "../../../images/slider_images/food-3.jpg";
import food4 from "../../../images/slider_images/food-4.jpg";
import food5 from "../../../images/slider_images/food-5.jpg";

export default function Carousel() {
    return (
        <div>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={food1} alt="not found"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food2} alt="not found"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food3} alt="not found"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food4} alt="not found"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food5} alt="not found"></img>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
