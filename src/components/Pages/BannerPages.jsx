import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import style from './pages_style/BannerPages.module.scss';

function BannerPages({ allContents }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(allContents)
    return (
        <div className={style.bannerSlide} style={{ backgroundImage: `url(${allContents[currentIndex]?.main})`}}>
            <div className={style.slideContainer}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCreative]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    speed={2500}
                    effect="creative"
                    creativeEffect={{
                        prev: { translate: ["-10%", 0, -1] },
                        next: { translate: ["100%", 0, 0] },
                    }}
                    onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                    className={style.swiperBase}
                >
                    {allContents.map((item, i) => (
                        <SwiperSlide key={i} className={style.swiperSlide}>
                            <div className={style.contentWrapper}>
                                <img src={item.main} alt={item.title} className={style.image} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={style.textBox}>
                    <h2>{allContents[currentIndex]?.title}</h2>
                    <em>{allContents[currentIndex]?.descr}</em>
                </div>
            </div>
        </div>
    );
}

export default BannerPages;
