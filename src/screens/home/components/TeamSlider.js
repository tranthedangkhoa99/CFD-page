import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';


function TeamSlider() {
    return (
        <div>
            <section className="home-teamslider">
                <Swiper
                    spaceBetween={45}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={require("../../../img/Rectangle 25.png")} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={require("../../../img/Rectangle 28.png")} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={require("../../../img/Rectangle 27.png")} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={require("../../../img/Rectangle 25.png")} alt="" /></SwiperSlide>
                </Swiper>
            </section>
        </div>
    )
}

export default TeamSlider

