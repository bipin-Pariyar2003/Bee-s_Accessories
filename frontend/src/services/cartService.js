import axios from "axios";

const API_BASE = "http://localhost:4001"; // Your backend URL

axios.defaults.withCredentials = true; // To send cookies (for JWT auth if you store JWT in cookie)

export const getCart = async () => {
  return axios.get(`${API_BASE}/cart`);
};

export const updateCart = async (cartItems) => {
  return axios.put(`${API_BASE}/cart`, { cart: cartItems });
};
