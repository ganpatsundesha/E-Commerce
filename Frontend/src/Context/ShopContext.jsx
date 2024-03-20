import React, { createContext, useContext, useState } from 'react'
import AllProducts from "../Assets/Data/all_product"

export const ShopContext = createContext(null)

export const UseShopContext = () => {
    const shopData = useContext(ShopContext)
    return shopData;
}

const getDefaultCart = () => {

    let cart = {}

    for (let index = 0; index < AllProducts.length + 1; index++) {
        cart[index] = 0;
    }
    return cart
}

export const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItem((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            return updatedCart;
        });
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
            return updatedCart;
        });
    }

    const contextValue = { AllProducts, cartItem, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}