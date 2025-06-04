import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useParams } from "react-router-dom";
import CardsList from "../reuts/CardsList";
import BannerPages from "./BannerPages";
import style from './pages_style/Pages.module.scss';
import GenreOpts from "../reuts/GenreOpts";

function Pages() {

    const [allContents, setAllContents] = useState([]);
    const { tipoPage } = useParams();

    const [optsGenres, setOptsGenres] = useState([]);
    const [optSelected, setOptSelected] = useState(null);

    const tipoCateg = {
        "animes": "anime",
        "animacoes": "filme_animacao",
        "filmes": "filme",
        "series": "serie"
    };

    useEffect(() => {
        const fetchData = async () => {
            // const response = await fetch('/contents.json');
            // const data = await response.json();
            const { data, error } = await supabase.from('itens_igk').select('*');
            if (error) return console.error(error);

            const dataFiltered = data.filter(item => item.tipo === tipoCateg[tipoPage]);
            setAllContents(dataFiltered);

            const allGenres = dataFiltered.flatMap(item => item.genre || []);
            const uniqueGenres = [...new Set(allGenres)].sort();
            setOptsGenres(uniqueGenres);
        };
        fetchData();
    }, [tipoPage]);
    
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