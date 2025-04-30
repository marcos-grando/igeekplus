import React, { useEffect, useRef } from "react";
import style from './banner_style/Navigation.module.scss';

function Navigation({ setListBanner, setDirection, setIsAnimating, isAnimating, styleTimeBar }) {

    const runNextAuto = useRef(null);
    const timeAutoNext = 10000;

    useEffect(() => {
        startProgress();
        runNextAuto.current = setTimeout(() => { showSlider('next'); }, timeAutoNext);

        return () => clearTimeout(runNextAuto.current);
    }, []);

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
                console.log("ERRO NA FUNÇÃO 'showSlider' (Navigation.jsx).")
            }
            setIsAnimating(false);
        }, 600);
        clearTimeout(runNextAuto.current);
        startProgress();
        runNextAuto.current = setTimeout(() => { showSlider('next'); }, timeAutoNext);
    };

    const startProgress = () => {
        const progressBar = document.querySelector(`.${styleTimeBar}`);
        if (!progressBar) return;

        progressBar.style.transition = 'none';
        progressBar.style.width = '100%';
        setTimeout(() => {
            progressBar.style.transition = `width ${timeAutoNext - 100}ms linear`;
            progressBar.style.width = "0%";
        }, 100);
    };

    return (
        <div className={style.arrows}>
            <button className={style.arrow} onClick={() => showSlider('prev')}>
                <p className={style.left}>{"‹"}</p>
            </button>
            <button className={style.arrow} onClick={() => showSlider('next')}>
                <p className={style.right}>{"›"}</p>
            </button>
        </div>
    );
};

export default Navigation;