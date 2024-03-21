import React from 'react'
import "./style.scss"
import Container from '../Container/Container'
import Input from '..//Input/Input'
import { UseShopContext } from '../../Context/ShopContext'
import cart_cross_icon from '../../Assets/Images/cart_cross_icon.png'
import emptyCart from '../../Assets/Images/emptyCart.webp'
import CtaBtn from '../CtaBtn/CtaBtn'

const CartItems = () => {
    const { cartItem, removeFromCart, updateCart } = UseShopContext()
    const changeQuantity = (e, item) => {
        const newQuantity = parseInt(e.target.value);
        item.qty = newQuantity;
        updateCart(item);
    }

    return (
        <section className="sectionCartDeatils">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h4>Your Cart Details</h4>
                        <div className="itemBox">
                            {
                                cartItem.length <= 0 ? <>
                                    <div className="empty">
                                        <img src={emptyCart} alt="" />
                                        <p>Cart is Empty</p>
                                        <CtaBtn path="/">Shop Now</CtaBtn>
                                    </div>
                                </> : <>
                                    {
                                        cartItem.map((item, index) => {
                                            return (
                                                <div className="d-flex" key={index}>
                                                    <img src={item.image} alt="" />
                                                    <div className="detailsBox">
                                                        <p>{item.name}</p>
                                                        <p>Price:- <span>₹ {item.cur_price}</span></p>
                                                        <p>Quantity:- <Input type="number" min="1" defaultValue={item.qty} onInput={(e) => changeQuantity(e, item)} /></p>
                                                        <p>Total Price:- <span>₹ {item.cur_price * item.qty}</span></p>
                                                        <button onClick={(e) => { removeFromCart(item.id) }}><img src={cart_cross_icon} alt="Close" /></button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }</>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CartItems