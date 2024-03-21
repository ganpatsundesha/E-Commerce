import React from 'react'
import "./style.scss"
import Container from '../Container/Container'
import Input from '../Input/Input'
import { UseShopContext } from '../../Context/ShopContext'
import cart_cross_icon from '../../Assets/Images/cart_cross_icon.png'
import emptyCart from '../../Assets/Images/emptyCart.webp'
import CtaBtn from '../CtaBtn/CtaBtn'

const CartItems = () => {
    const { cartItem, removeFromCart, updateCart } = UseShopContext()

    const totalPrice = cartItem.reduce((acc, item) => {
        return acc + item.totalPrice
    }, 0)

    const shippingCharge = totalPrice === 0 ? 0 : (totalPrice > 500 ? 0 : 80);

    const changeQuantity = (e, item) => {
        const newQuantity = parseInt(e.target.value);
        item.qty = newQuantity;
        updateCart(item);
    }

    const formSubmit = (e) => {
        e.preventDefault()
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
                        {
                            cartItem.length > 0 ? <>
                            <div className="cartTotal">
                                <h5>Cart Totals</h5>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="promoCode">
                                            <p>If you have any <span>Promo code</span>, Enter it here</p>
                                            <form action="#" onSubmit={formSubmit}>
                                                <Input type="text" placeholder="Promo Code" />
                                                <Input type="submit" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="total-box">
                                            <div className="d-flex">
                                                <p>subtotal</p>
                                                <span>₹ {totalPrice}</span>
                                            </div>
                                            <div className="d-flex">
                                                <div>
                                                    <p>Shipping Fee</p>
                                                </div>
                                                <span>₹ {shippingCharge}</span>
                                            </div>
                                            <div className="d-flex">
                                                <p><span>Total</span></p>
                                                <span>₹ {totalPrice + shippingCharge}</span>
                                            </div>
                                            <p>Enjoy free delivery on orders above ₹ 500</p>
                                            <CtaBtn>proceed to payment</CtaBtn>
                                        </div>
                                    </div>
                                </div>
                            </div></> : <></>
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CartItems