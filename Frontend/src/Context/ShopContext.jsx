import React, { createContext, useContext, useState } from 'react'
import AllProducts from "../Assets/Data/all_product"

export const ShopContext = createContext(null)

export const UseShopContext = () => {
    const shopData = useContext(ShopContext)
    return shopData;
}

export const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState([])

    const addToCart = (item) => {
        const existingItem = cartItem.find(x => x.id === item.id);
        if (existingItem) {
            const updatedCart = cartItem.map(x =>
                x.id === item.id ? { ...x, qty: x.qty + 1 } : x
            );
            setCartItem(updatedCart);
        }
        else {
            setCartItem(prev => [...prev, { ...item, qty: 1 }]);
        }
    };

    const updateCart = (updatedItem) => {
        const updatedCart = cartItem.map(item =>
            item.id === updatedItem.id ? { ...item, qty: updatedItem.qty } : item
        );
        setCartItem(updatedCart);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItem.filter(item => item.id !== itemId);
        setCartItem(updatedCart);
    };

    const contextValue = { AllProducts, cartItem, addToCart, removeFromCart, updateCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}