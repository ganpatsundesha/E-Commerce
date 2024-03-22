import React, { useEffect, useState } from 'react';
import "./style.scss";
import Container from '../Container/Container';
import Logo from '../../Assets/Images/logo.png';
import Cart from '../../Assets/Images/cart_icon.png';
import { Link, NavLink } from 'react-router-dom';
import CtaBtn from '../CtaBtn/CtaBtn';
import { UseShopContext } from '../../Context/ShopContext';

const Header = () => {
    const { cartItem, login, setLogin } = UseShopContext()

    // Responsive Menu
    const [mobileNav, setMobileNav] = useState(false)

    // Header scroll Ups and down while scroll page
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const handelScroll = () => {
            let moving = window.pageYOffset
            setPosition(moving)
            setVisible(position > moving)
        }
        window.addEventListener("scroll", handelScroll);
    }, [position])


    const logOutHandel = () => {
        setLogin(false)
    }
    return (
        <header className={`header ${visible}`}>
            <Container>
                <div className="dekstop">
                    <div className="site-logo">
                        <Link to="/"><img src={Logo} alt="Logo" /> Trend</Link>
                    </div>
                    <ul className="nav">
                        <li><NavLink to="/" onClick={(e) => scrollTo(0, 0)}>Shop</NavLink></li>
                        <li><NavLink to="/men" onClick={(e) => scrollTo(0, 0)}>Mens</NavLink></li>
                        <li><NavLink to="/women" onClick={(e) => scrollTo(0, 0)}>Womens</NavLink></li>
                        <li><NavLink to="/Kid" onClick={(e) => scrollTo(0, 0)}>Kids</NavLink></li>
                    </ul>
                    <div className="loginCart">
                        <CtaBtn onClick={logOutHandel} path="login">{login ? "Logout" : "Login"}</CtaBtn>
                        {
                            login ? <><Link to="cart" onClick={(e) => scrollTo(0, 0)}><img src={Cart} alt="cart" /></Link>
                                <div className="cart-counter">{cartItem.length > 9 ? '9+' : cartItem.length}</div></> : <></>
                        }
                    </div>
                    <div className={`toggle ${mobileNav ? "active" : ""}`} onClick={() => setMobileNav(!mobileNav)}><span></span></div>
                </div>
                <div className={`mobile ${mobileNav ? "active" : ""}`}>
                    <ul className="nav">
                        <li><NavLink to="/" onClick={() => { setMobileNav(false); scrollTo(0, 0); }}>Shop</NavLink></li>
                        <li><NavLink to="/men" onClick={() => { setMobileNav(false); scrollTo(0, 0); }}>Mens</NavLink></li>
                        <li><NavLink to="/women" onClick={() => { setMobileNav(false); scrollTo(0, 0); }}>Womens</NavLink></li>
                        <li><NavLink to="/Kid" onClick={() => { setMobileNav(false); scrollTo(0, 0); }}>Kids</NavLink></li>
                    </ul>
                </div>
            </Container>
        </header >
    )
}

export default Header