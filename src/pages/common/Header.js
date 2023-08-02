import React, { useState }from 'react';
import { NavLink } from "react-router-dom";

// Assets
import MainLogo from '../../assets/images/logo-cogedim.svg';
import IconCross from '../svg-icons/Icon-Cross';

const Header = () => {

    // Active on Scroll
    window.addEventListener('scroll', () => {
        const mainHeader = document.querySelector('.header')
        const windowScroll = window.scrollY
        if(windowScroll > 100){
            mainHeader.classList.add('smHeader')
        } else {
            mainHeader.classList.remove('smHeader')
        }
    })

    const [isActive, setIsActive] = useState(false);
    const handleShowNav = () => {
        setIsActive(!isActive)
    }
    const handleHideNav = () => {
        setIsActive(!isActive)
    }

    return(
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <NavLink to="/"><img src={MainLogo} className="header__logo__img" alt="Cogedim" /></NavLink>
                </div>
                <div className={`header__mainBlock ${isActive ? 'visible' : ''}`}>
                    <div className="header__mainBlock__closeNav" onClick={handleHideNav}>
                        <IconCross/>
                    </div>
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
                <div className="header__navLines" onClick={handleShowNav}>
                    <span className="header__navLines__line"></span>
                    <span className="header__navLines__line header__navLines__line--mid"></span>
                    <span className="header__navLines__line"></span>
                </div>
            </div>
        </header>
    )

}

export default Header;