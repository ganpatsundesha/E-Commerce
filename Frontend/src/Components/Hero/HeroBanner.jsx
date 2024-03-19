import React from 'react';
import "./style.scss";
import Container from '../Container/Container';
import CtaBtn from '../CtaBtn/CtaBtn';
import HeroImage from '../../Assets/Images/hero_image.png';

const HeroBanner = () => {
    return (
        <section className="sectionHeroBanner">
            <Container>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="heroImage">
                            <img src={HeroImage} alt="HeroImage" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="heroText">
                            <span>Shop the latest trends now!</span>
                            <h1>Discover fashion that speaks volumes. Unveil your style today!</h1>
                            <CtaBtn path="/">latest collection</CtaBtn>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroBanner