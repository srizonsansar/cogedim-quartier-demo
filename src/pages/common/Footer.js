import IconFacebook from '../svg-icons/Icon-Facebook';
import IconTwitter from '../svg-icons/Icon-Twitter';
import IconInstagram from '../svg-icons/Icon-Instagram';

const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer__topLinks">
                <span className="footer__topLinks__item" data-name="popup1">Popup 1</span>
                <span className="footer__topLinks__item" data-name="popup2">Popup 2</span>
                <span className="footer__topLinks__item" data-name="popup3">Popup 3</span>
            </div>
            <div className="footer__social">
                <a href="/" class="footer__social__item"><IconFacebook /></a>
                <a href="/" class="footer__social__item"><IconTwitter /></a>
                <a href="/" class="footer__social__item"><IconInstagram /></a>
            </div>
        </footer>
    )

}

export default Footer