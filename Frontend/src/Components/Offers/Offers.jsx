import React from 'react'
import './style.scss'
import Container from '../Container/Container'
import CtaBtn from '../CtaBtn/CtaBtn'
import OfferImage from '../../Assets/Images/exclusive_image.png'

const Offers = () => {
    return (
        <section className="sectionOffers">
            <Container>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="offerText">
                            <h2>Exclusive Offers For You!</h2>
                            <p>Only on best seller Products</p>
                            <CtaBtn>Check Now</CtaBtn>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="offerImage">
                            <img src={OfferImage} alt="Image" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Offers