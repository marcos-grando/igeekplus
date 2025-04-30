import React, { useEffect, useRef, useState } from "react";
import CircleLoading from "../reuts/CircleLoading";
import style from '../../styles/Banner.module.scss';

function Banner() {


    const [listBanner, setListBanner] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(null);

    const runNextAuto = useRef(null);
    const timeAutoNext = 10000;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/contents.json');
            const data = await response.json();

            const listFilter = data.reduce((acc, item) => { // aqui é retornado apenas 4 itens
                if (!acc.some(each => each.tipo === item.tipo)) {
                    acc.push(item);
                }
                return acc;
            }, []);

            setListBanner(listFilter); // armazena apenas 4 itens
            setIsLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            startProgress();
            runNextAuto.current = setTimeout(() => { showSlider('next'); }, timeAutoNext);
        }
        return () => clearTimeout(runNextAuto.current);
    }, [isLoading]);

    const showSlider = (type) => {
        if (isAnimating) return;
        setDirection(type);
        setIsAnimating(true);

        setTimeout(() => {
            if (type === 'next') {
                setListBanner(prev => {
                    const [first, ...rest] = prev;
                    return [...rest, first];
                });
            } else if (type === 'prev') {
                setListBanner(prev => {
                    const last = prev[prev.length - 1];
                    const rest = prev.slice(0, prev.length - 1);
                    return [last, ...rest];
                });
            } else {
                console.log("ERRO NA FUNÇÃO 'showSlider' (Banner.jsx).")
            }
            setIsAnimating(false);
            clearTimeout(runNextAuto.current);
            startProgress();
            runNextAuto.current = setTimeout(() => { showSlider('next'); }, timeAutoNext);
        }, 600);
    };

    const startProgress = () => {
        const progressBar = document.querySelector(`.${style.timeBar}`);
        if (!progressBar) return;

        progressBar.style.transition = 'none';
        progressBar.style.width = '100%';
        setTimeout(() => {
            progressBar.style.transition = `width ${timeAutoNext - 100}ms linear`;
            progressBar.style.width = "1%";
        }, 100);
    };

    const tipoCateg = {
        "anime": "Anime",
        "filme_animacao": "Animação",
        "filme": "Filme",
        "serie": "Série"
    };
    const loadBanner = (type) => {
        if (listBanner.length === 0) return {};

        let index = type === 'next' ? 0 : type === 'prev' ? listBanner.length - 2 : listBanner.length - 1;
        const item = listBanner[index] || {};
        return {
            main: item.main || "Carregando banner...",
            thumb: item.thumb || "Carregando thumb...",
            title: item.title || "Carregando título...",
            tipo: tipoCateg[item.tipo] || "Carregando categoria...",
            desc: item.desc || "Carregando descrição...",
            genre: item.genre || "Carregando gêneros...",
            nota: item.nota || "Carregando nota..."
        };
    };

    if (isLoading) {
        return (
            <section className={style.banner}>
                <CircleLoading />
            </section>
        );
    }

    const prevBanner = loadBanner("prev");
    const activeBanner = loadBanner("banner");
    const nextBanner = loadBanner("next");

    return (
        <section className={style.banner}>
            <div className={style.timeBar}></div>

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

            <div className={style.container}>
                {listBanner.map((item, i) => (
                    <div
                        key={i}
                        className={`
                            ${style.card}
                            ${isAnimating ? (direction === 'next' ? style.showThumb : style.outThumb) : ""}
                        `}
                    >
                        <img src={item.main} alt={`Thumbnail do(a) ${tipoCateg[item.tipo]} "${item.title}".`} />
                    </div>
                ))}
            </div>

            <div className={style.arrows}>
                <button className={style.arrow} onClick={() => showSlider('prev')}>
                    <p className={style.left}>{"‹"}</p>
                </button>
                <button className={style.arrow} onClick={() => showSlider('next')}>
                    <p className={style.right}>{"›"}</p>
                </button>
            </div>
        </section>
    );
}

export default Banner;