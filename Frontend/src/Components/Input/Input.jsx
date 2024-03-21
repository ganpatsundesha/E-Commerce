import React from 'react'
import "./style.scss";

const Input = ({ type, placeholder, value, ...rest }) => {
    return (
        <input type={type} placeholder={placeholder} value={value} {...rest} />
    )
}

export default Input