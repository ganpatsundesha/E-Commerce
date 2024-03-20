import React from 'react'
import "./style.scss";
import data from '../../Assets/Data/relatedProducts'
import Item from '../Item/Item';
import Container from '../Container/Container';

const RelatedProducts = () => {
    return (
        <section className="sectionRelatedProducts">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h3>Related Products</h3>
                    </div>
                    {
                        data.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                    <Item item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default RelatedProducts