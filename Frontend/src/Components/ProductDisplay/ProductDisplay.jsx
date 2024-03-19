import React from 'react'
import "./style.scss"
import Container from '../Container/Container'

const ProductDisplay = ({ product }) => {
    return (
        <div className="row sectionProductPage">
            <div className="col-lg-6">
                <div className="d-flex">
                    <div className="demo">
                        <img src={product.image} alt="Images" />
                        <img src={product.image} alt="Images" />
                        <img src={product.image} alt="Images" />
                        <img src={product.image} alt="Images" />
                        <img src={product.image} alt="Images" />
                    </div>
                    <img src={product.image} alt="Images" />
                </div>
            </div>
            <div className="col-lg-6">
                <h3>{product.name}</h3>
            </div>
        </div>
    )
}

export default ProductDisplay