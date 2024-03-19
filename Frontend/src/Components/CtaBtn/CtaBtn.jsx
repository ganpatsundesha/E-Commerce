import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const CtaBtn = ({ children, path, type }) => {
    return (
        <Link to={path} type={type} className='cta-btn'>{children}</Link>
    )
}

export default CtaBtn