import { createContext } from "react";
import all_product from "../assets/all_product";
import { useState } from "react";
export const ShopContext = createContext();
export const ShopProvider = ({ children }) => {
     const getDefaultCart = () => {
    let cart = {};
    all_product.forEach((item) => {
      cart[item.id] = 0;
    });
    return cart;
  };
  const [cart, setCart] = useState(getDefaultCart());
  console.log(cart);
  const contextValue = {
    all_product,cart
  };
 
  const addToCart = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] + 1,
    }));
  };
    const removeFromCart = (itemId) => {
        setCart((prevCart) => ({
        ...prevCart,
        [itemId]: prevCart[itemId] > 0 ? prevCart[itemId] - 1 : 0,
        }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cart) {
            if (cart[itemId] > 0) {
                const item = all_product.find((prod) => prod.id === Number(itemId));
                totalAmount += item.new_price * cart[itemId];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const itemId in cart) {
            if (cart[itemId] > 0) {
                totalItems += cart[itemId];
            }
        }
        return totalItems;
    };

  return (
    <ShopContext.Provider value={{...contextValue, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems }}>{children}</ShopContext.Provider>
  );
};
