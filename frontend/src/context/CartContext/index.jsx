import React, { createContext, useContext, useState, useEffect } from "react";
import { getCart, updateCart } from "../../services/cartService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart on mount (if user logged in)
    getCart()
      .then((res) => setCart(res.data))
      .catch(() => setCart([]));
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    updateCart(newCart).catch((err) => console.error("Failed to update cart", err));
  };

  return (
    <CartContext.Provider value={{ cart, setCart: saveCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
