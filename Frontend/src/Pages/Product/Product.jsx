import React, { useEffect } from 'react'
import './style.scss'
import Container from '../../Components/Container/Container'
import { useParams } from 'react-router-dom'
import { UseShopContext } from '../../Context/ShopContext'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts'

const Product = () => {

    const { AllProducts } = UseShopContext()
    const { productId } = useParams()
    const product = AllProducts?.find((e) => e.id === Number(productId))

    useEffect(() => {

    }, [product])


    return (
        <>
            <ProductDisplay product={product} />
            <RelatedProducts />
        </>
    )
}

export default Product