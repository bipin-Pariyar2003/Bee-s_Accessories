import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SignUp = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col space-y-8 items-center justify-center h-screen  ">
          <div
            id="my_modal_3"
            className=" border-2 border-gray-300 rounded-lg shadow-xl p-12 w-96"
          >
            <div className="max-w-md mx-auto">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
              </form>
              <h3 className="font-bold text-lg underline text-2xl">Sign Up</h3>
              <div className="py-6 ">
                <form className="flex flex-col gap-6 mt-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input w-full outline-none"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div className="flex items-center justify-center gap-4">
                    <button className="btn bg-pink-500 text-white w-20">Register</button>
                  </div>
                </form>
              </div>
              <p className="text-center text-sm">
                Already have an account? &nbsp;
                <a href="/" className="text-pink-500 underline">
                  Log In
                </a>
              </p>
            </div>
          </div>

          <div>
            <button className="btn bg-pink-500 text-white w-max rounded-md py-2 px-4">
              Go Back
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
