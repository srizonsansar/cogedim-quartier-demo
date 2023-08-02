import React from 'react';
import Navigation from '../common/Navigation';
import MainLogo from '../../assets/images/logo-cogedim.svg';

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

    // On Click show / hide Nav
    const bodyTag = document.querySelector('body')
    const showNavBlock = () => {
        bodyTag.classList.add('no-scroll')
    }

    return(
        <header className="header">
            <div className="header__container">
                <a href="/" className="header__logo"><img src={MainLogo} className="header__logo__img" alt="Cogedim" /></a>
                <Navigation />
                <div className="header__navLines" onClick={showNavBlock}>
                    <span class="header__navLines__line"></span>
                    <span class="header__navLines__line header__navLines__line--mid"></span>
                    <span class="header__navLines__line"></span>
                </div>
            </div>
        </header>
    )

}

export default Header;