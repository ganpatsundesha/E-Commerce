import React from 'react'
import "./style.scss";
import Container from '../../Components/Container/Container';
import Input from '../../Components/Input/Input';
import "./style.scss";

const LoginSingup = () => {
    return (
        <section className="sectionLogin">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <h3>SingUp</h3>
                            <Input type="text" placeholder="Your Name" />
                            <Input type="email" placeholder="Your Email" />
                            <Input type="password" placeholder="Your Password" />
                            <Input type="submit" value="Continue" />
                            <p>Already have an account? <span>Login here</span></p>
                            <div className="d-flex">
                                <Input type="checkbox" />
                                <p>by Clicking, I agree to our privacy policy for a secure journey ahead.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LoginSingup