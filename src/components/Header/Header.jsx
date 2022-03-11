import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
    <header>
        <div className = "burger-icon">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav className = {s.nav}>
        <div className = {s.logo}>
        </div>
            <div className = {s.links}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to = "/main" className = { navData => navData.isActive ? s.active : s.item }>Pokemon List</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to = "/caught" className = { navData => navData.isActive ? s.active : s.item }>Caught pokemons</NavLink>
                </div>
            </div>
        </nav>
    </header>
    );
}

export default Header;