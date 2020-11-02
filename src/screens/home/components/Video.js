import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

function Video() {
    return (
        <div>
            <section className="home-video">
                <div className="video__container">
                    <img src={require("../../../img/video.png")} alt=""/>
                </div>
            </section>
        </div>
    )
}

export default Video
