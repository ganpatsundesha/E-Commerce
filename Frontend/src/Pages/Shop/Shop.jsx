import React from 'react'
import "./style.scss"
import HeroBanner from '../../Components/Hero/HeroBanner'
import Popular from '../../Components/Popular/Popular'
import Offers from '../../Components/Offers/Offers'
import NewCollections from '../../Components/NewCollections/NewCollections'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'

const Shop = () => {
    return (
        <>
            <HeroBanner />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </>
    )
}

export default Shop