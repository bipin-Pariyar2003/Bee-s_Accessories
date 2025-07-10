import React from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Login Data:", data);
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/users/login", userInfo)
      .then((response) => {
        console.log("User logged in  successfully:", response.data);
        if (response.data) {
          toast.success("Login successful!");
          document.getElementById("my_modal_3").close(); // Close the modal after a short delay

          setTimeout(() => {
            window.location.reload(); // Reload the page to reflect the changes
            navigate("/"); // Redirect to home page after login
          }, 1000);
        }
        localStorage.setItem("Users", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        console.error("Error logging user:", error);
        toast.error("Error logging in. Please check your credentials.");
        setTimeout(() => {
          () => {}, 2000;
        }); // Optional: Close modal after error
      });
    reset(); // Optional: Reset form after submit
    // close modal manually if needed: document.getElementById('my_modal_3').close()
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-96 bg-pink-100">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-2xl underline text-center">Log In</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-6">
            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-center">
              <button type="submit" className="btn bg-pink-500 text-white w-24">
                Log In
              </button>
            </div>
          </form>

          <p className="text-center  text-sm mt-4">
            Don't have an account? &nbsp;
            <a href="/signup" className="text-pink-500 underline hover:text-pink-700">
              Sign Up
            </a>
          </p>
        </div>
      </dialog>
    </>
  );
};

export default Login;
