import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import food1 from "../../../images/slider_images/food-1.jpg";
import food2 from "../../../images/slider_images/food-2.jpg";
import food3 from "../../../images/slider_images/food-3.jpg";
import food4 from "../../../images/slider_images/food-4.jpg";
import food5 from "../../../images/slider_images/food-5.jpg";

export default function Carousel() {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                loop={true}
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
