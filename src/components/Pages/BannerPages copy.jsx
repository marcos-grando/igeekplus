import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import style from './pages_style/BannerPages.module.scss';

function BannerPages({ allContents }) {

    return (
        <div className={style.bannerSlide}>
            <Swiper
                className={style.swiperBase}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                effect="fade"
                speed={1500}
            >
                {allContents.map((item, i) => (
                    <SwiperSlide key={i} className={style.swiperWrapper}>
                        <img src={item.main} alt={item.title} style={{ width: '100%' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerPages;