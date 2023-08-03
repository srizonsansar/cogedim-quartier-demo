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
    const bodyTag = document.querySelector('body')
    const [isActive, setIsActive] = useState(false);
    const handleShowNav = () => {
        setIsActive(!isActive)
        bodyTag.classList.add('no-scroll')
    }
    const handleHideNav = () => {
        setIsActive(!isActive)
        bodyTag.classList.remove('no-scroll')
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

    // Nav on Tab
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleWinResize = () => {
        setWindowWidth(window.innerWidth)
    }
    const handleMobNav = () => {
        const subMenuItem = document.querySelector('.header__nav__subMenu')
        if(windowWidth > 849 && windowWidth < 1200 ){
            subMenuItem.classList.toggle('visible')
        } else {
            subMenuItem.classList.remove('visible')
        }
    }
    React.useEffect( () => {
        window.addEventListener('resize', handleWinResize);
        return () => {
            window.removeEventListener('resize', handleWinResize);
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
                        <div className="header__nav__item">
                            <NavLink to="/">Le Quartier</NavLink>
                        </div>
                        <div className="header__nav__item header__nav__item--hasSubMenu" onClick={handleMobNav}>
                            <NavLink to="/les-residences">Les Résidences</NavLink>
                            <div className="header__nav__subMenu">
                                <NavLink to="/">Sub Menu 1</NavLink>
                                <NavLink to="/">Sub Menu 2</NavLink>
                            </div>
                        </div>
                        <div className="header__nav__item">
                            <NavLink to="/les-actualites">Les Actualités</NavLink>
                        </div>
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