import React from 'react';
import Slider from 'react-slick';

// Slider Images
import sliderImg1 from '../../../assets/images/slider-1.jpg';
import sliderImg2 from '../../../assets/images/slider-2.jpg';
import sliderImg3 from '../../../assets/images/slider-3.jpg';

const LesEquipments = () => {

    const lesEquipmentsSlider = {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    }

    return(
        <section className="lesEquipments bottom-space">
            <div className="lesEquipments__container">
                <div className="lesEquipments__slider">
                    <Slider {...lesEquipmentsSlider} className="js__les-equipments-slider">
                        <div className="lesEquipments__slider__item">
                            <picture className="lesEquipments__slider__pic">
                                <img src={sliderImg1} className="lesEquipments__slider__pic__img" alt="Slider Image 1" />
                            </picture>
                        </div>
                        <div className="lesEquipments__slider__item">
                            <picture className="lesEquipments__slider__pic">
                                <img src={sliderImg2} className="lesEquipments__slider__pic__img" alt="Slider Image 2" />
                            </picture>
                        </div>
                        <div className="lesEquipments__slider__item">
                            <picture className="lesEquipments__slider__pic">
                                <img src={sliderImg3} className="lesEquipments__slider__pic__img" alt="Slider Image 3" />
                            </picture>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )

}

export default LesEquipments;