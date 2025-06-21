import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartModal = () => {
  const navigate = useNavigate();
  const { cart = [] } = useCart() || {}; // safe fallback

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <dialog id="CartModal" className="modal">
        <div className="modal-box bg-blue-100">
          <div className="bg-pink-100 p-12 rounded-lg w-full h-full flex-1">
            <h1 className="underline">My Cart</h1>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Particulars</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center">
                        Your cart is empty
                      </td>
                    </tr>
                  ) : (
                    cart.map((item, index) => (
                      <tr key={item.product._id}>
                        <th>{index + 1}</th>
                        <td>{item.product.name}</td>
                        <td>{item.quantity}</td>
                        <td>Rs. {item.product.price}</td>
                        <td>Rs. {item.product.price * item.quantity}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <h1>
                Total: <span className="text-green-700 font-bold">Rs. {totalPrice}</span>
              </h1>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              <button className="btn btn-primary" onClick={() => navigate("/check-out")}>
                Check Out
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartModal;
