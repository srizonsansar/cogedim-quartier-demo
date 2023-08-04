// Assets
import MainLogo from '../../../assets/images/logo-quartier.png';
import sliderImg1 from '../../../assets/images/slider-1.jpg';

const HomeIntro = () => {
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
                    <img src={sliderImg1} alt="" className="homeIntro__pic__img" alt="Banner" />
                </picture>
            </div>
        </section>
    )
}

export default HomeIntro;