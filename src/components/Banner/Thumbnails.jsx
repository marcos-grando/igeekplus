import React from "react";
import style from './banner_style/Thumbnails.module.scss';

function Thumbnails({ listBanner, tipoCateg, isAnimating, direction }) {

    return (
        <div className={style.container}>
            {listBanner.map((item, i) => (
                <div
                    key={i}
                    className={`
                        ${style.card}
                        ${isAnimating ? (direction === 'next' ? style.showThumb : style.outThumb) : ''}
                        ${direction === 'prev' ? (isAnimating ? '' : style.thumbHere) : ''}
                    `}
                >
                    <img src={item.thumb} alt={`Thumbnail do(a) ${tipoCateg[item.tipo]} "${item.title}".`} />
                </div>
            ))}
        </div>
    );
};

export default Thumbnails;