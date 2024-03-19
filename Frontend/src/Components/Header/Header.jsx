import React, { useState } from 'react';
import "./style.scss";
import Container from '../Container/Container';
import Logo from '../../Assets/Images/logo.png';
import Cart from '../../Assets/Images/cart_icon.png';
import { Link, NavLink } from 'react-router-dom';
import CtaBtn from '../CtaBtn/CtaBtn';

const Header = () => {

    const [menu, setMenu] = useState("shop")

    return (
        <header className='header'>
            <Container>
                <div className="dekstop">
                    <div className="site-logo">
                        <Link to="/"><img src={Logo} alt="Logo" /> Trend</Link>
                    </div>
                    <ul className="nav">
                        <li><NavLink to="/">Shop</NavLink></li>
                        <li><NavLink to="/men">Mens</NavLink></li>
                        <li><NavLink to="/women">Womens</NavLink></li>
                        <li><NavLink to="/Kid">Kids</NavLink></li>
                    </ul>
                    <div className="loginCart">
                        <CtaBtn path="login">Login</CtaBtn>
                        <Link to="cart"><img src={Cart} alt="cart" /></Link>
                        <div className="cart-counter">2</div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header