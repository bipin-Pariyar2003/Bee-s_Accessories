import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import PaymentModal from "../../components/PaymentModal";
import { useNavigate } from "react-router-dom";
const CheckOut = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-20">
        <Navbar />

        <h1 className="text-lg md:text-2xl font-bold text-pink-500 mt-16 md:mt-6 text-center">
          Check out the cart details, fill out the form and proceed to payment
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center min-h-1/2  max-w-4xl p-6 bg-white shadow-md rounded-lg gap-6">
          <div className="bg-pink-100 p-12 rounded-lg w-full h-full flex-1">
            <h1>Cart Details</h1>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
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
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Phone Charms</td>
                    <td>2</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Chunky Ring</td>
                    <td>1</td>
                    <td>200</td>
                    <td>200</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Phone Charms</td>
                    <td>2</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                </tbody>
              </table>
              <h1>
                Total: <span className="text-red-500">Rs. 600</span>
              </h1>
            </div>
          </div>
          <div className="flex-1 bg-blue-100  min-w-[450px] p-12 rounded-lg space-y-4">
            <h1>Fill Out Form</h1>

            <div className="justify-center items-center flex flex-col">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  document.getElementById("paymentModal").showModal();
                }}
              >
                <input
                  required
                  type="text"
                  id="fullname"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full mb-4"
                />
                <input
                  required
                  type="text"
                  id="address"
                  placeholder="Enter your full address"
                  className="input input-bordered w-full mb-4"
                />
                <input
                  required
                  type="number"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full mb-4"
                />
                <input
                  type="number"
                  id="phone"
                  placeholder="Alternate phone number"
                  className="input input-bordered w-full mb-4"
                />

                <button className="btn btn-primary w-full">Place Order</button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn bg-pink-500 text-white rounded-lg"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
      <Footer />
      <PaymentModal />
    </>
  );
};

export default CheckOut;
