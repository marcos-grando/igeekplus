import React from "react";
import style from './reuts_style/CircleLoading.module.scss';

function CircleLoading() {
    console.log("circleloading")
    return (
        <svg className={style.circleLoading} viewBox="0 0 50 50">
            <circle className={style.path} cx="25" cy="25" r="20" fill="none"></circle>
        </svg>

    );
};

export default CircleLoading;