import React from "react";

const PaymentModal = () => {
  return (
    <>
      <dialog id="paymentModal" className="modal">
        <div className="modal-box bg-purple-100">
          <div className="">
            <h1>
              Payment Processing{" "}
              <span className="text-pink-500 ml-2 animate-pulse">
                Read the Instructions
              </span>
            </h1>
            <ul>
              <li className="text-sm text-gray-600">
                1. Please pay the total amount to the following eSewa account:
              </li>

              <li className="text-sm text-gray-600">
                2. After payment, please send us a screenshot of the transaction.
              </li>
            </ul>

            <div className="flex flex-col items-center justify-center mt-4 space-y-4">
              <img src="/images/bipin-esewa.jpeg" className="w-40 h-40" alt="" />
              <p>
                Send the screenshot here:{" "}
                <a
                  href="https://www.instagram.com/bees.accessories_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Click here
                </a>
              </p>
            </div>
          </div>

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

export default PaymentModal;
