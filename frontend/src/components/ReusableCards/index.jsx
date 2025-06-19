import React from "react";
import { useAuth } from "context/AuthProvider";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import LogInAlert from "../alerts/LoginAlert";
import { set } from "react-hook-form";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";
const ReusableCards = ({ item }) => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  const [showLogInAlert, setShowLogInAlert] = React.useState(false);
  const { cart, setCart } = useCart();
  const handleBuyNow = () => {
    authUser ? navigate("/check-out") : setShowLogInAlert(true);
  };
  const handleAddToCart = () => {
    const existing = cart.find((c) => c.product._id === item._id);
    let newCart;
    if (existing) {
      newCart = cart.map((c) =>
        c.product._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
      );
    } else {
      newCart = [...cart, { product: item, quantity: 1 }];
    }
    toast.success("Item added to cart hot toaster");
    setCart(newCart); // updates context and sends to backend
  };

  return (
    <>
      <div className="max-w-screen-2xl my-10 container mx-auto px-4 md:px-20">
        <div className="card bg-base-100 w-92 md:w-96 shadow-xl hover:scale-105  shadow-2xl transition-all duration-300">
          <figure>
            <img
              src={item.image}
              alt={item.name}
              style={{ height: "350px", objectFit: "cover" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-thin">
              {item.name}{" "}
              <div className="badge badge-secondary font-thin text-xs  ">
                {item.category}
              </div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="badge badge-outline p-5">Rs. {item.price}/-</button>
              <button
                className="badge badge-outline p-5 bg-pink-500 text-white"
                onClick={handleAddToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-5 w-5 py-auto inline-block mr-2 hover:scale-110 cursor-pointer"
                  fill="currentColor"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </button>
              <button
                className="badge badge-primary p-5 max-w-full"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              {showLogInAlert && <LogInAlert />}
            </div>
          </div>
        </div>
      </div>
      <Login />
    </>
  );
};

export default ReusableCards;
