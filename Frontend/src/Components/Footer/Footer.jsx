import React from 'react'
import "./style.scss"
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import FooterLogo from '../../Assets/Images/logo_big.png'
import instagram_icon from '../../Assets/Images/instagram_icon.png'
import whatsapp_icon from '../../Assets/Images/whatsapp_icon.png'
import pintester_icon from '../../Assets/Images/pintester_icon.png'
import { NavLink } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="footer-logo">
                            <Link to="/"><img src={FooterLogo} alt="Footer Logo" /> Trend</Link>
                        </div>
                        <ul className="footerNav">
                            <li>
                                <NavLink>Company</NavLink>
                            </li>
                            <li>
                                <NavLink>Products</NavLink>
                            </li>
                            <li>
                                <NavLink>Offices</NavLink>
                            </li>
                            <li>
                                <NavLink>About</NavLink>
                            </li>
                            <li>
                                <NavLink>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link><img src={instagram_icon} alt="instagram_icon" /></Link>
                            <Link><img src={whatsapp_icon} alt="whatsapp_icon" /></Link>
                            <Link><img src={pintester_icon} alt="pintester_icon" /></Link>
                        </div>
                        <p>Copyright @ 2024 - All Rights Reserved</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer