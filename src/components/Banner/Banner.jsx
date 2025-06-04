import React, { useEffect, useMemo, useState } from "react";
import Navigation from "./Navigation";
import BannerSlides from "./BannerSlides";
import Thumbnails from "./Thumbnails";
import style from './banner_style/Banner.module.scss';

function Banner({ listFilter }) {

    const [listBanner, setListBanner] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(null);

    useEffect(() => {
        setListBanner(listFilter);
    }, [listFilter]);

    const tipoCateg = {
        "anime": "Anime",
        "filme_animacao": "Animação",
        "filme": "Filme",
        "serie": "Série"
    };

    return (
        <section className={style.banner}>
            <div className={style.timeBar}></div>

            <BannerSlides listBanner={listBanner} tipoCateg={tipoCateg} isAnimating={isAnimating} direction={direction} />

            <Thumbnails listBanner={listBanner} tipoCateg={tipoCateg} isAnimating={isAnimating} direction={direction} />

            <Navigation setDirection={setDirection} setIsAnimating={setIsAnimating} isAnimating={isAnimating} setListBanner={setListBanner} styleTimeBar={style.timeBar} />
        </section>
    );
};

export default Banner;