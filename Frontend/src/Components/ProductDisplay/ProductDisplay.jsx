import React from 'react'
import "./style.scss"
import CtaBtn from '../CtaBtn/CtaBtn'
import star_icon from '../../Assets/Images/star_icon.png'
import star_dull_icon from '../../Assets/Images/star_dull_icon.png'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'

const ProductDisplay = ({ product }) => {
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
                                <p>Wearing a huddy on a chilly day brings warmth and comfort. It's a cozy knitwear piece with a hood, perfect for staying snug outdoors. Huddies come in various styles, from sporty to chic, making them versatile and trendy</p>
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
                            <CtaBtn>Add to Cart</CtaBtn>
                            <p><strong>Category:</strong> <Link to={"/" + product?.category}>{product?.category}</Link></p>
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
                                <p>The Slim Fit Flannel Shirt is a versatile wardrobe essential that seamlessly combines style and comfort. Crafted from soft and durable flannel fabric, this shirt offers a cozy feel while providing a tailored silhouette with its slim fit design.</p>
                                <p>Perfect for casual outings or layering during cooler months, its timeless appeal makes it a go-to option for any occasion. Featuring classic flannel patterns and a button-down collar, it exudes a rugged yet refined charm.</p>
                                <p>Whether paired with jeans for a laid-back look or dressed up with chinos, this shirt effortlessly elevates your ensemble with its modern flair and superior quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProductDisplay