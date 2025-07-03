import React from 'react'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/footer/Footer'
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory banner= {men_banner}  category="men"  />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />

       </Routes>
       <Footer/>
      </BrowserRouter>
     
    </div>
  )
}

export default App