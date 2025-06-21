import React, { createContext, useContext, useState, useEffect } from "react";
import { getCart, updateCart } from "../../services/cartService";
import { useAuth } from "context/AuthProvider";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { authUser } = useAuth(); // ✅ get current user

  useEffect(() => {
    if (authUser === undefined) return;
    if (authUser) {
      getCart()
        .then((res) => setCart(res.data))
        .catch((err) => {
          console.error("Failed to fetch cart:", err.message);
          setCart([]); // fallback
        });
    } else {
      setCart([]); // Clear cart when user logs out
    }
  }, [authUser]);

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
