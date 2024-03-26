import React, { createContext, useContext, useState } from 'react'
import AllProducts from "../Assets/Data/all_product"

const getTotalPrice = (qty, cur_price) => {
    0
    return parseInt(qty) * parseInt(cur_price)
}

export const ShopContext = createContext(null)

export const UseShopContext = () => {
    const shopData = useContext(ShopContext)
    return shopData;
}

export const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState([])
    const [login, setLogin] = useState(false)

    const addToCart = (item) => {
        if (login) {
            const existingItem = cartItem.find(x => x.id === item.id);
            if (existingItem) {
                const updatedCart = cartItem.map(x =>
                    x.id === item.id ? { ...x, qty: x.qty + 1, totalPrice: getTotalPrice(x.qty + 1, x.cur_price) } : x
                );
                setCartItem(updatedCart);
            }
            else {
                setCartItem(prev => [...prev, { ...item, qty: 1, totalPrice: getTotalPrice(1, item.cur_price) }]);
            }
        }
        else {
            console.log("still not logedin");
        }
    };

    const updateCart = (updatedItem) => {
        const updatedCart = cartItem.map(item =>
            item.id === updatedItem.id ? { ...item, qty: updatedItem.qty, totalPrice: updatedItem.qty * item.cur_price } : item
        );
        setCartItem(updatedCart);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItem.filter(item => item.id !== itemId);
        setCartItem(updatedCart);
    };

    const contextValue = { AllProducts, cartItem, addToCart, removeFromCart, updateCart, setLogin, login };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}