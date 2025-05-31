import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/users/signup", userInfo)
      .then((response) => {
        console.log("User registered successfully:", response.data);
        if (response.data) {
          alert("User registered successfully");
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        alert("Error registering user. Please try again.");
      });
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col space-y-8 items-center justify-center h-screen">
          <div className="border-2 border-gray-300 rounded-lg shadow-xl p-12 w-96">
            <div className="max-w-md mx-auto">
              <h3 className="font-bold text-2xl underline text-center">Sign Up</h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 mt-6"
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    {...register("fullname", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.fullname && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
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

                {/* Password */}
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
                    Register
                  </button>
                </div>
              </form>

              <p className="text-center text-sm mt-4">
                Already have an account? &nbsp;
                <a
                  className="text-pink-500 underline cursor-pointer hover:text-pink-700"
                  onClick={() => document.getElementById("my_modal_3")?.showModal()}
                >
                  Log In
                </a>
              </p>
            </div>
          </div>

          <div>
            <button
              className="btn bg-pink-500 text-white w-max rounded-md py-2 px-4"
              onClick={() => navigate("/")}
            >
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
