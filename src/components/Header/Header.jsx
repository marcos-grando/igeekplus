import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "../reuts/Search";
import Linkto from "../reuts/Linkto";

import style from "./Header.module.scss";

function Header() {

    const [scrolledBlur, setScrolledBlur] = useState(false);

    useEffect(() => {
        const scrolledDown = () => {
            setScrolledBlur(window.scrollY >= 200);
        };

        window.addEventListener('scroll', scrolledDown);
        return () => window.removeEventListener('scroll', scrolledDown);
    }, [])

    const navMenu = [
        { navName: "Início", navRota: "init" },
        { navName: "Animes", navRota: "rota1" },
        { navName: "Séries", navRota: "rota2" },
        { navName: "Filmes", navRota: "rota3" },
        { navName: "Animações", navRota: "rota4" },
        { navName: <Search />, navRota: "rota5" }
    ]

    return (
        <header className={`${style.header} ${scrolledBlur ? style.headerBlur : ''}`}>
            <div className={style.container}>
                <h1>i<span>G</span>eek<span>+</span></h1>
                <nav>
                    <ul>
                        {navMenu.map((item, i) => (
                            <li key={i}>
                                <NavLink to={Linkto({ type: item.navRota })}
                                    className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                                >
                                    {item.navName}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
