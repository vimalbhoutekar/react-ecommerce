import React from 'react'
import arrow_icon from '../../assets/arrow_icon.png'


const Bredcrums = (props) => {
    const { product } = props;
    return (
        <nav className="w-full py-4 px-4 md:px-0 flex items-center gap-2 text-gray-500 text-base font-medium bg-gradient-to-r from-blue-50 to-pink-50 rounded-xl shadow mb-6">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span>
            <img src={arrow_icon} alt="arrow" className="w-4 h-4 mx-1" />
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Shop</span>
            <img src={arrow_icon} alt="arrow" className="w-4 h-4 mx-1" />
            <span className="capitalize hover:text-blue-600 cursor-pointer transition-colors">{product.category}</span>
            <img src={arrow_icon} alt="arrow" className="w-4 h-4 mx-1" />
            <span className="font-semibold text-blue-700 truncate max-w-[150px] md:max-w-xs" title={product.name}>{product.name}</span>
        </nav>
    )
}

export default Bredcrums