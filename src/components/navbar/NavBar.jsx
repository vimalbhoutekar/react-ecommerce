import React from 'react'
import logo from '../../assets/logo.jpg'
import cart from '../../assets/cart.jpg'

const NavBar = () => {
  return (
    <div>
        <div>
            <img src={logo} alt="" height="50px" />
            <p>Ecommerce</p>
        </div>
        <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div>
            <button>Login</button>
            <img src={cart} alt="" />
        </div>
    </div>
  )
}

export default NavBar