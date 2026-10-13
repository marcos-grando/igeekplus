import React, { useEffect, useMemo, useState } from "react";
import contents from "../../data/itens_igk.json";
import { useParams } from "react-router-dom";
import CardsList from "../reuts/CardsList";
import BannerPages from "./BannerPages";
import style from './pages_style/Pages.module.scss';
import GenreOpts from "../reuts/GenreOpts";

const tipoCateg = {
    "animes": "anime",
    "animacoes": "filme_animacao",
    "filmes": "filme",
    "series": "serie"
};

function Pages() {

    const { tipoPage } = useParams();

    const [optSelected, setOptSelected] = useState(null);

    const allContents = useMemo(() => {
        return contents.filter(item => item.tipo === tipoCateg[tipoPage]);
    }, [tipoPage]);

    const optsGenres = useMemo(() => {
        const allGenres = allContents.flatMap(item => item.genre || []);
        return [...new Set(allGenres)].sort();
    }, [allContents]);
    
    useEffect(() => {
        setOptSelected(null);
    }, [tipoPage])

    const cardListFilter = allContents.filter(item =>
        optSelected ? item.genre.includes(optSelected) : true
    );

    return (
        <section className={style.pages}>
            <BannerPages allContents={allContents} />

            <GenreOpts key={tipoPage} optsList={optsGenres} setOptSelected={setOptSelected} optSelected={optSelected} />

            <CardsList listContents={cardListFilter} />
        </section>
    );
};

export default Pages;
