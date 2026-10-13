import React, { useState } from "react";
import style from "./SpaceSearch.module.scss"
import CardsList from "../reuts/CardsList";
import listItems from "../../data/itens_igk.json";

function SpaceSearch() {
    const [searchText, setSearchText] = useState("");

    const filteredList = listItems.filter(item =>
        item.title.toLowerCase().includes(searchText.toLocaleLowerCase())
    );

    return (
        <section className={style.search}>
            <div className={style.container}>
                <div className={style.content}>

                    <input
                        className={style.inpuText}
                        type="text"
                        placeholder="Buscar..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                </div>
                {filteredList.length === 0
                    ? (
                        <div className={style.notSearch}>
                            <h2>Nenhum resultado encontrado!</h2>
                        </div>
                    )
                    : <CardsList listContents={filteredList} />
                }
            </div>
        </section>
    );
};

export default SpaceSearch;
