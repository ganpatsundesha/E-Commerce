import React from 'react'
import './style.scss'
import Container from '../Container/Container'
import CtaBtn from '../CtaBtn/CtaBtn'
import ErrorImage from '../../Assets/Images/errorImage.png'

const Page404 = () => {
    return (
        <div className='pageNotFound'>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <img src={ErrorImage} alt="" />
                        <p>Unfortunately the page you are looking for is Currently Not Exist</p>
                        <CtaBtn path='/'>Go to Home Page</CtaBtn>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Page404