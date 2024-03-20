import React from 'react'
import "./style.scss"
import Container from '../Container/Container'

const CartItems = () => {
    return (
        <section className="sectionCartDeatils">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h4>Your Cart Details</h4>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CartItems