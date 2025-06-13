import React from "react";

const CartModal = () => {
  return (
    <>
      <dialog id="CartModal" className="modal">
        <div className="modal-box">
          <div>
            <h1 className="text-2xl font-bold text-pink-400">
              You will see your cart here
            </h1>
          </div>
          <div></div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartModal;
