import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import ShopCategory from './Pages/ShopCategory/ShopCategory'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import LoginSingup from './Pages/LoginSingup/LoginSingup'
import Footer from './Components/Footer/Footer'
import Page404 from './Components/404Page/Page404'
import banner_kids from './Assets/Images/banner_kids.png'
import banner_mens from './Assets/Images/banner_mens.png'
import banner_women from './Assets/Images/banner_women.png'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/men" element={<ShopCategory banner={banner_mens} category="men" />} />
                        <Route path="/women" element={<ShopCategory banner={banner_women} category="women" />} />
                        <Route path="/kid" element={<ShopCategory banner={banner_kids} category="kid" />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/product" element={<Product />} >
                            <Route path=':productId' element={<Product />} />
                        </Route>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<LoginSingup />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App