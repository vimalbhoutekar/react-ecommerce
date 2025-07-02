import React from "react";
import logo from "../../assets/logo.jpg";
import cart from "../../assets/cart.jpg";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 rounded-full object-cover border-2 border-blue-500"
        />
        <p className="text-2xl font-bold text-blue-600 tracking-wide ml-2">
          Ecommerce
        </p>
      </div>
      <ul className="flex gap-8 text-lg font-medium text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer transition-colors">
          Home
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">
          Men
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">
          Women
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">
          Kids
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors">
          Login
        </button>
        <div className="relative">
          <img
            src={cart}
            alt="Cart"
            className="h-8 w-8 object-contain cursor-pointer hover:scale-110 transition-transform"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
