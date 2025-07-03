import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center gap-4 cursor-pointer group border border-blue-100 hover:border-blue-400">
      <NavLink to={`/product/${props.id}`} className="w-48 h-48 flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl overflow-hidden mb-2">
        <img src={props.image} alt={props.name} className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300" />
      </NavLink>
      <p className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-center line-clamp-2 min-h-[2.5rem]">{props.name}</p>
      <div className="flex gap-3 items-center mt-2">
        <div className="text-xl font-bold text-blue-600">₹{props.new_price}</div>
        <div className="text-base text-gray-400 line-through">₹{props.old_price}</div>
      </div>
      <button onClick={() => addToCart(props.id)} className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow transition-colors duration-200 text-sm tracking-wide cursor-pointer">Add to Cart</button>
    </div>
  )
}


export default Item