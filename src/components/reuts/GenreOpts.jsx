import React from "react";
import style from "./reuts_style/GenreOpts.module.scss";

function GenreOpts({ optsList, setOptSelected, optSelected }) {

    const handleClick = (opt) => {
        setOptSelected(prev => (prev === opt ? null : opt));
    };

    return (
        <section className={style.wrapper}>
            <div className={style.container}>
                <ul className={style.list}>
                    {optsList.map((opt, i) => (
                        <li
                            key={i}
                            className={`${style.item} ${opt === optSelected ? style.active : ''}`}
                            onClick={() => handleClick(opt)}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
};

export default GenreOpts;