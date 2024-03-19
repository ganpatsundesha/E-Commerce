import React, { useEffect } from 'react'
import './style.scss'
import Container from '../../Components/Container/Container'
import { useParams } from 'react-router-dom'
import { UseShopContext } from '../../Context/ShopContext'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'

const Product = () => {

    const { AllProducts } = UseShopContext()
    const { productId } = useParams()
    const product = AllProducts?.find((e) => e.id === Number(productId))

    useEffect(() => {

    }, [product])


    return (
        <ProductDisplay product={product} />
    )
}

export default Product