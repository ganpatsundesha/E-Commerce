import React from 'react'
import "./style.scss"
import Container from '../Container/Container'
import data_product from '../../Assets/Data/data'
import Item from '../Item/Item'
import CtaBtn from '../CtaBtn/CtaBtn'

const Popular = () => {
    return (
        <section className="sectionPopular">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h2>Popular In Womens</h2>
                    </div>
                    {
                        data_product.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                    <Item item={item} />
                                </div>
                            )
                        })
                    }
                    <div className="col-12">
                        <div className="text-center">
                            <CtaBtn path="/women" onClick={() => scrollTo(0, 0,)}>Explore More</CtaBtn>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Popular