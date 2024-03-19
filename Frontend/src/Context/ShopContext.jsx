import React, { createContext, useContext } from 'react'
import AllProducts from "../Assets/Data/all_product"

export const ShopContext = createContext(null)

export const UseShopContext = () => {
    const shopData = useContext(ShopContext)
    return shopData;
}

export const ShopContextProvider = (props) => {

    const contextValue = { AllProducts };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}