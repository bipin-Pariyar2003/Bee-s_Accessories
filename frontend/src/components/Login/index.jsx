import React from "react";

const Login = () => {
  return (
    <>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box w-96">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg underline text-2xl">Log In</h3>
          <div className="py-6 ">
            <form className="flex flex-col gap-6 mt-4">
              <input
                type="email"
                placeholder="Email"
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
                <button className="btn bg-pink-500 text-white w-20">Log In</button>
              </div>
            </form>
          </div>
          <p className="text-center text-sm">
            Don't have an account? &nbsp;
            <a href="/signup" className="text-pink-500 underline">
              Sign Up
            </a>
          </p>
        </div>
      </dialog>
    </>
  );
};
export default Login;
