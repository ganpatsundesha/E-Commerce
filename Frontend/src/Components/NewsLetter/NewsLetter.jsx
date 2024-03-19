import React from 'react'
import "./style.scss"
import Container from '../Container/Container'
import Input from '../Input/Input'

const NewsLetter = () => {
    return (
        <section className="sectionNewsLetter">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h2>Get Exclusive Offers On your Email</h2>
                        <p>Subscribe our newsleter and stay Updated</p>
                        <form action="#">
                            <Input type="email" placeholder="Enter Your Email" />
                            <Input type="submit" />
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default NewsLetter