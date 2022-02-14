import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to = "/main" className = { navData => navData.isActive ? s.active : s.item }>Main Page</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to = "/catched" className = { navData => navData.isActive ? s.active : s.item }>Catched pokemon</NavLink>
            </div>
            
        </nav>
    );
}

export default Navbar;