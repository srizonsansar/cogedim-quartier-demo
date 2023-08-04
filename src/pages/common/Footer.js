import React, {useState} from 'react';

// Components
import IconCross from '../svg-icons/Icon-Cross';
import IconFacebook from '../svg-icons/Icon-Facebook';
import IconTwitter from '../svg-icons/Icon-Twitter';
import IconInstagram from '../svg-icons/Icon-Instagram';

const Footer = () => {

    const bodyTag = document.querySelector('body')
    const handleShowPopup = (event) => {
        const popupName = event.target.getAttribute('data-name')
        const popupDisplay = document.getElementById(popupName)
        popupDisplay.classList.add('active')
        bodyTag.classList.add('no-scroll')
    }
    const handleHidePopup = (event) => {
        const popupHide = event.target.closest('.popup')
        popupHide.classList.remove('active')
        bodyTag.classList.remove('no-scroll')
    }

    return(
        <footer className="footer">
            <div className="footer__topLinks">
                <span className="footer__topLinks__item" data-name="popup1" onClick={handleShowPopup}>Popup 1</span>
                <span className="footer__topLinks__item" data-name="popup2" onClick={handleShowPopup}>Popup 2</span>
                <span className="footer__topLinks__item" data-name="popup3" onClick={handleShowPopup}>Popup 3</span>
            </div>
            <div className="footer__social">
                <a href="/" className="footer__social__item"><IconFacebook /></a>
                <a href="/" className="footer__social__item"><IconTwitter /></a>
                <a href="/" className="footer__social__item"><IconInstagram /></a>
            </div>
            <div id="popup1" className="popup">
                <div className="popup__close" onClick={handleHidePopup}>
                    <IconCross/>
                </div>
                <div className="popup__inner">
                    <h3 className="popup__title">Popup 1</h3>
                    <p className="popup__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum ullam dolore architecto quia impedit hic quos dolor accusamus neque nihil necessitatibus doloribus magnam amet dolores veniam consectetur, voluptatem veritatis? </p>
                    <p className="popup__text popup__text--last">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum ullam dolore architecto quia impedit hic quos dolor accusamus neque nihil necessitatibus doloribus magnam amet dolores veniam consectetur, voluptatem veritatis?</p>
                </div>
            </div>
            <div id="popup2" className="popup">
                <div className="popup__close" onClick={handleHidePopup}>
                    <IconCross/>
                </div>
                <div className="popup__inner">
                    <h3 className="popup__title">Popup 2</h3>
                    <p className="popup__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum accusantium repellendus, temporibus asperiores iusto ullam nisi aspernatur itaque maxime laudantium mollitia similique repellat vero officia atque libero exercitationem eligendi.</p>
                    <p className="popup__text popup__text--last">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum accusantium repellendus, temporibus asperiores iusto ullam nisi aspernatur itaque maxime laudantium mollitia similique repellat vero officia atque libero exercitationem eligendi.</p>
                </div>
            </div>
            <div id="popup3" className="popup">
                <div className="popup__close" onClick={handleHidePopup}>
                    <IconCross/>
                </div>
                <div className="popup__inner">
                    <h3 className="popup__title">Popup 3</h3>
                    <p className="popup__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fugiat similique, nam reiciendis veniam illo? Eos, ex! Maiores aperiam, iure itaque debitis et illum molestiae est similique temporibus accusantium voluptates!</p>
                    <p className="popup__text popup__text--last">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fugiat similique, nam reiciendis veniam illo? Eos, ex! Maiores aperiam, iure itaque debitis et illum molestiae est similique temporibus accusantium voluptates!</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer