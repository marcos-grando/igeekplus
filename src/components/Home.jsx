import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../supabaseClient";
import CardsList from "./reuts/CardsList";
import Banner from "./Banner/Banner";
import GenreOpts from "./reuts/GenreOpts";

function Home() {

    const [allContents, setAllContents] = useState([]);

    const [optsGenres, setOptsGenres] = useState([]);
    const [optSelected, setOptSelected] = useState(null);

    useEffect(() => {
        const fetchSupabase = async () => {
            const { data, error } = await supabase.from('itens_igk').select('*');
            error ? console.error(error) : setAllContents(data);

            const allGenres = data.flatMap(item => item.genre || []);
            const uniqueGenres = [...new Set(allGenres)].sort();
            setOptsGenres(uniqueGenres);
        }
        fetchSupabase();
    }, [])

    const bannerListFilter = useMemo(() => {
        const tipoSet = new Set();
        return allContents.filter(item => !tipoSet.has(item.tipo) && tipoSet.add(item.tipo));
    }, [allContents]);

    const cardListFilter = allContents.filter(item =>
        optSelected ? item.genre.includes(optSelected) : true
    );

    const styleh3list = {
        width: "100%", maxWidth: "1280px",
        margin: "0 auto", fontSize: "1em",
        fontWeight: "300", opacity: "0.8",
        padding: "1em 1em 1em 1em"
    }

    return (
        <>
            <Banner listFilter={bannerListFilter} />

            <GenreOpts optsList={optsGenres} setOptSelected={setOptSelected} optSelected={optSelected} />

            <h3 style={styleh3list}>
                {optSelected
                    ? (
                        cardListFilter.length > 1
                            ? `Foram encontradas ${cardListFilter.length} obras de ${optSelected}`
                            : `Foi encontrada ${cardListFilter.length} obra de ${optSelected}`
                    )
                    : `Catálago completo com ${cardListFilter.length} obras`
                }
            </h3>

            <CardsList listContents={cardListFilter} />
        </>
    );
};

export default Home;