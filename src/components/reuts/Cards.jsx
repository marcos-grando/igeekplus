import React from "react";
import style from './reuts_style/Cards.module.scss';

function Card({ eachContent, timeDelay }) {

    let tipoCateg = {
        "anime": "Anime",
        "filme_animacao": "Animação",
        "filme": "Filme",
        "serie": "Série"
    } 
    let tipo = tipoCateg[eachContent.tipo];
    let title = eachContent.title;
    let nota = eachContent.nota;
    let desc = eachContent.desc;
    let release = `${tipoCateg[eachContent.tipo]} de ${eachContent.release}`

    return (
        <div className={style.card} style={{ animationDelay: `${timeDelay * 30}ms` }}>

            <img src={eachContent.thumb} className={style.img}
                alt={`Imagem do tipo Card do(a) ${tipo} ${title}`}
            />

            <div className={style.cardContent}>
                <h3 className={style.cardTipo}>     {tipo}                      </h3>
                <h1 className={style.cardTitle}>    {title}                     </h1>
                <h3 className={style.cardNota}>     {nota} <span>/10</span>     </h3>
                <p  className={style.cardDesc}>     {desc}                      </p>
                <h3 className={style.cardRelease}>  {release}                   </h3>
            </div>

        </div>
    );
};

export default Card;