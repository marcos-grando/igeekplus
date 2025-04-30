import React from "react";
import Card from "./Cards";
import style from "./reuts_style/CardsList.module.scss";

function CardsList({ listContents }) {

    return (
        <section className={style.estuday}>
            <div className={style.container}>
                {listContents.map((item, i) => (
                    <Card key={i} timeDelay={i} eachContent={item} />
                ))}
            </div>
        </section>
    );
};

export default CardsList;