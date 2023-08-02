import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="header__mainBlock">
            <div className="header__nav">
                <NavLink to="/">Le Quartier</NavLink>
                <NavLink to="/">Les Résidences</NavLink>
                <NavLink to="/">Les Actualités</NavLink>
            </div>
            <div className="header__social">
                <a href="https://www.facebook.com/" rel="noreferrer" className="header__social__item" target="_blank">F</a>
                <a href="https://www.facebook.com/" rel="noreferrer" className="header__social__item" target="_blank">T</a>
                <a href="https://www.facebook.com/" rel="noreferrer" className="header__social__item" target="_blank">I</a>
            </div>
        </div>
    );
};

export default Navigation;