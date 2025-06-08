import React from "react";
import Navbar from "../../components/Navbar";
import Fotoer from "../../components/Footer";

const Thankyou = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 mt-10">
        <Navbar />
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-pink-500">Thank You! 🙏</h1>
          <p className="text-lg">
            Your message has been sent successfully. We will get back to you soon!
          </p>
          <p className="text-sm text-gray-500">
            If you have any further questions, feel free to reach out to us.
          </p>
          <button
            className="bg-pink-500 text-white px-5 py-2 hover:bg-pink-600 rounded-lg"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </button>
        </div>
      </div>
      <Fotoer />
    </>
  );
};

export default Thankyou;
