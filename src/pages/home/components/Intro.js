import React, { useState } from 'react';

// Assets
import MainLogo from '../../../assets/images/logo-quartier.png';
import sliderImg1 from '../../../assets/images/slider-1.jpg';

const HomeIntro = () => {

    const [showPopup, setShowPopup] = useState(false)
    const bodyTag = document.querySelector('body')
    const iframeSRC = 'https://www.youtube.com/embed/g5WZLO8BAC8'
    const handleShowPopup = () => {
        const iframeTag = document.querySelector('.videoPopup__iframe')
        setShowPopup(true)
        bodyTag.classList.add('no-scroll')
        iframeTag.src = iframeSRC
    }
    const handleHidePopup = () => {
        const iframeTag = document.querySelector('.videoPopup__iframe')
        setShowPopup(false)
        bodyTag.classList.remove('no-scroll')
        iframeTag.src = ''
    }

    return(
        <section className="homeIntro bottom-space">
            <div className="homeIntro__container">
                <div className="homeIntro__textBlock">
                    <p className="homeIntro__textBlock__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tenetur itaque deserunt expedita eaque corporis optio numquam, maxime perspiciatis placeat atque doloribus porro consequuntur ratione debitis sunt eos! Omnis, quis.</p>
                    <h1 className="homeIntro__textBlock__title"><span className="color">N</span>aturellement <span className="break"><span className="color">T</span>rès</span> <span className="color">A</span>udacieux</h1>
                </div>
                <picture className="homeIntro__logo">
                    <img src={MainLogo} alt="" className="homeIntro__logo__img" alt="Main Logo" />
                </picture>
                <picture className="homeIntro__pic">
                    <div className="homeIntro__pic__play" onClick={handleShowPopup}>Play</div>
                    <img src={sliderImg1} alt="" className="homeIntro__pic__img" alt="Banner" />
                </picture>
            </div>
            <div className={`videoPopup ${showPopup ? 'active' : '' }`}>
                <div className="videoPopup__container">
                    <div className="videoPopup__close" onClick={handleHidePopup}>Close</div>
                    <iframe src="" className="videoPopup__iframe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default HomeIntro;