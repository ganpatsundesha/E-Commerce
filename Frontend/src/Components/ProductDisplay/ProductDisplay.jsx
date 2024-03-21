import React from 'react'
import "./style.scss"
import CtaBtn from '../CtaBtn/CtaBtn'
import star_icon from '../../Assets/Images/star_icon.png'
import star_dull_icon from '../../Assets/Images/star_dull_icon.png'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import { UseShopContext } from '../../Context/ShopContext'

const ProductDisplay = ({ product }) => {

    const { addToCart } = UseShopContext()
    return (
        <section className='sectionProductPage'>
            <Container>
                <div className="row ">
                    <div className="col-lg-6">
                        <div className="imageBox">
                            <div className="d-flex">
                                <div className='mainImage'><img src={product?.image} alt="Images" /></div>
                                <div className="demo">
                                    <img src={product?.image} alt="Images" />
                                    <img src={product?.image} alt="Images" />
                                    <img src={product?.image} alt="Images" />
                                    <img src={product?.image} alt="Images" />
                                    <img src={product?.image} alt="Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="textBox">
                            <h4>{product?.name}</h4>
                            <div className="d-flex stars">
                                <img src={star_icon} alt="Star" />
                                <img src={star_icon} alt="Star" />
                                <img src={star_icon} alt="Star" />
                                <img src={star_icon} alt="Star" />
                                <img src={star_dull_icon} alt="Star" />
                                <p>({product?.review})</p>
                            </div>
                            <div className="price">
                                <h6 className='old'>₹ {product?.old_price}</h6>
                                <h6>₹ {product?.cur_price}</h6>
                            </div>
                            <div className="subtitle">
                                <p>{product.description}</p>
                            </div>
                            <div className="size">
                                <h5>Select Size</h5>
                                <div className="d-flex">
                                    <a href="#">S</a>
                                    <a href="#">M</a>
                                    <a href="#">L</a>
                                    <a href="#">XL</a>
                                    <a href="#">XXL</a>
                                </div>
                            </div>
                            <CtaBtn onClick={() => { addToCart(product) }}>Add to Cart</CtaBtn>
                            <p><strong>Category:</strong> <Link to={"/" + product?.category} onClick={(e) => scrollTo(0, 0)}>{product?.category}</Link></p>
                            <p><strong>Tags:</strong> {product?.category}, Modern, Latest, Popular</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="discriptionBox">
                            <div className="box">
                                <p>Description</p>
                                <p>Review ({product.review})</p>
                            </div>
                            <div className="discription">
                                <p>{product.description}</p>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProductDisplay