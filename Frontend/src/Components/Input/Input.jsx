import React from 'react'
import "./style.scss";

const Input = ({ type, placeholder, value }) => {
    return (
        <input type={type} placeholder={placeholder} value={value} />
    )
}

export default Input