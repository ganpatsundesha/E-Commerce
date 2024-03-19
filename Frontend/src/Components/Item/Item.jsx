import React from 'react'
import "./style.scss";
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <Link to={`/product/${item.id}`}>
            <div className="item">
                <div className="img-box">
                    <img src={item.image} alt={`${item.name} Image `} />
                </div>
                <p>{item.name}</p>
                <div className="item-prices">
                    <p className="new">₹ {item.cur_price}</p>
                    <p className="old">{item.old_price ? "₹" : <></>} {item.old_price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item