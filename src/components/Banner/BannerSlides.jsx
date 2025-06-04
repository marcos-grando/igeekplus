import React from "react";
import style from './banner_style/BannerSlides.module.scss';

function BannerSlides({ listBanner, tipoCateg, isAnimating, direction }) {

    const loadBanner = (type) => {
        if (listBanner.length === 0) return {};

        let index = type === 'next' ? 0 : type === 'prev' ? listBanner.length - 2 : listBanner.length - 1;
        const item = listBanner[index] || {};
        return {
            main: item.main || "Carregando banner...",
            thumb: item.thumb || "Carregando thumb...",
            title: item.title || "Carregando título...",
            tipo: tipoCateg[item.tipo] || "Carregando categoria...",
            descr: item.descr || "Carregando descrição...",
            genre: item.genre || "Carregando gêneros...",
            nota: item.nota || "Carregando nota..."
        };
    };
    const prevBanner = loadBanner("prev");
    const activeBanner = loadBanner("banner");
    const nextBanner = loadBanner("next");

    return (
        <>
            <img
                src={prevBanner.main}
                className={`${style.imgBanner} ${style.prev}`}
                alt={`Banner principal do(a) ${prevBanner.tipo} "${prevBanner.title}".`}
            />
            <img
                src={activeBanner.main}
                className={`
                    ${style.imgBanner} ${style.active}
                    ${isAnimating && direction === 'prev' ? style.outImage : ""}
                `}
                alt={`Banner principal do(a) ${activeBanner.tipo} "${activeBanner.title}".`}
            />
            <img
                src={nextBanner.main}
                className={`
                    ${style.imgBanner} ${style.next}
                    ${isAnimating && direction === 'next' ? style.showImage : ""}
                `}
                alt={`Banner principal do(a) ${nextBanner.tipo} "${nextBanner.title}".`}
            />
            <div className={style.shadowBack}></div>
            <div className={style.shadowDown}></div>
        </>
    );
};

export default BannerSlides;