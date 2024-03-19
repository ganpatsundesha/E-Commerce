import React from 'react'
import './style.scss'
import Container from '../../Components/Container/Container'
import all_product from '../../Assets/Data/all_product'
import dropdown_icon from '../../Assets/Images/dropdown_icon.png'
import Item from '../../Components/Item/Item'
import CtaBtn from '../../Components/CtaBtn/CtaBtn'

const ShopCategory = (props) => {
    return (
        <section className="sectionCategory">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <img src={props.banner} alt="BannerImage" />
                        <div className="d-flex">
                            <p><span>Showing 1-12</span> Out of {all_product.length} Products</p>
                            <div className="shortBy">
                                Sort by <img src={dropdown_icon} alt={dropdown_icon} />
                            </div>
                        </div>
                    </div>
                    {
                        all_product.map((item, index) => {
                            if (props.category === item.category) {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                        <Item item={item} />
                                    </div>
                                )
                            }
                        })
                    }
                    <div className="col-12">
                        <div className="text-center">
                            <CtaBtn path="#">Explore More</CtaBtn>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ShopCategory