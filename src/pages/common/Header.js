import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";

// Assets
import MainLogo from '../../assets/images/logo-cogedim.svg';
import IconCross from '../svg-icons/Icon-Cross';
import IconFacebook from '../svg-icons/Icon-Facebook';
import IconTwitter from '../svg-icons/Icon-Twitter';
import IconInstagram from '../svg-icons/Icon-Instagram';

const Header = () => {

    const location = useLocation();

    // Show Nav on HamBurger and Hide on Cross Click
    const [isActive, setIsActive] = useState(false);
    const handleShowNav = () => {
        setIsActive(!isActive)
    }
    const handleHideNav = () => {
        setIsActive(!isActive)
    }

    // Small Logo on Scroll (Creating Function)
    const [scrollY, setScrollY] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)
    
    const handleOnScroll = () => {
        const currentScrollValue = window.scrollY
        setScrollY(currentScrollValue)

        if(currentScrollValue > 100) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }

    }

    // Calling Function
    useEffect( () => {
        window.addEventListener('scroll', handleOnScroll)
        return () => {
            window.removeEventListener('scroll', handleOnScroll)
        }
    }, [])

    return(
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <NavLink to="/"><img src={MainLogo} className={`header__logo__img ${isScrolled ? 'smLogo' : ''}`} alt="Cogedim" /></NavLink>
                </div>
                <div className={`header__mainBlock ${isActive ? 'visible' : ''}`}>
                    <div className="header__mainBlock__closeNav" onClick={handleHideNav}>
                        <IconCross/>
                    </div>
                    <div className="header__nav">
                        <NavLink to="/">Le Quartier</NavLink>
                        <NavLink to="/les-residences">Les Résidences</NavLink>
                        <NavLink to="/les-actualites">Les Actualités</NavLink>
                    </div>
                    <div className="header__social">
                        <a href="https://www.facebook.com/cogedim/" rel="noreferrer" className="header__social__item" target="_blank">
                            <IconFacebook />
                        </a>
                        <a href="https://twitter.com/altarea_groupe" rel="noreferrer" className="header__social__item" target="_blank">
                            <IconTwitter />
                        </a>
                        <a href="https://www.instagram.com/cogedim/?hl=fr" rel="noreferrer" className="header__social__item" target="_blank">
                            <IconInstagram />
                        </a>
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