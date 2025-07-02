import React from 'react'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory category="men" />} />
        <Route path='/women' element={<ShopCategory category="women"/>} />
        <Route path='/kids' element={<ShopCategory category="kids"/>} />
        <Route path='/product' element={<Product/>} />
        <Route path=':productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />

       </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App