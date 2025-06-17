import React from "react";
import { useNavigate } from "react-router-dom";

const CartModal = () => {
  const navigate = useNavigate();
  return (
    <>
      <dialog id="CartModal" className="modal">
        <div className="modal-box bg-blue-100">
          <div className="bg-pink-100 p-12 rounded-lg w-full h-full flex-1">
            <h1 className="underline">Cart Details</h1>
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
                Total: <span className="text-green-700 font-bold">Rs. 600</span>
              </h1>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              {/* if there is a button in form, it will close the modal */}
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
