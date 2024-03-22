import React, { useState } from 'react'
import "./style.scss";
import Container from '../../Components/Container/Container';
import Input from '../../Components/Input/Input';
import { useNavigate } from 'react-router-dom';

const LoginSingup = () => {

    const naviagte = useNavigate()

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        privacy: false,
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        privacy: '',
    });

    const handelSubmit = (e) => {
        e.preventDefault()
        handelRegister(user)
    }

    const handelChange = (e) => {
        const { name, value, type, checked } = e.target
        setUser((prevData) => ({ ...prevData, [name]: value }))

        setUser(prevData => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }))
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }

    const handelRegister = (userData) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let newErrors = {};

        if (userData.name.length > 3 && emailRegex.test(userData.email) && ((userData.password.length > 4) && (userData.password.length < 12)) && userData.privacy == true) {
            naviagte('/')
            console.log(user);
        }
        else {
            if (userData.name.length === 0) {
                newErrors = { ...newErrors, name: 'Please Enter Your Name' };
            }
            else if (userData.name.length <= 3) {
                newErrors = { ...newErrors, name: 'Name has Must be more then 4 Chr...' };
            }
            else if (!emailRegex.test(userData.email)) {
                newErrors = { ...newErrors, email: 'Invalid email format' };
            }
            else if (userData.password.length === 0) {
                newErrors = { ...newErrors, password: 'Please add your password' };
            } else if (userData.password.length < 4) {
                newErrors = { ...newErrors, password: 'Password must be at least 4 characters' };
            } else if (userData.password.length > 12) {
                newErrors = { ...newErrors, password: 'Password must be less than or equal to 12 characters' };
            }
            else if (!userData.privacy == true) {
                newErrors = { ...newErrors, privacy: 'Please agree the privacy policy' };
            }
            setErrors(newErrors);
        }
    }

    return (
        <section className="sectionLogin">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handelSubmit}>
                            <h3>SingUp</h3>
                            <Input type="text" placeholder="Your Name" value={user.name} name='name' onChange={(e) => handelChange(e)} />
                            {errors.name && <p className="error">{errors.name}</p>}
                            <Input type="email" placeholder="Your Email" value={user.email} name='email' onChange={(e) => handelChange(e)} />
                            {errors.email && <p className="error">{errors.email}</p>}
                            <Input type="password" placeholder="Your Password" value={user.password} name='password' onChange={(e) => handelChange(e)} />
                            {errors.password && <p className="error">{errors.password}</p>}
                            <div className="d-flex">
                                <Input type="checkbox" value={user.privacy} name='privacy' onChange={(e) => handelChange(e)} />
                                <p>by Clicking, I agree to our privacy policy for a secure journey ahead.</p>
                            </div>
                            {errors.privacy && <p className="error">{errors.privacy}</p>}
                            <Input type="submit" value="Continue" />
                            <p>Already have an account? <span>Login here</span></p>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LoginSingup