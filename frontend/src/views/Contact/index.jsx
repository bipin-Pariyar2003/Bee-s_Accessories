import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col space-y-8 items-center mt-28">
        <h1 className="text-2xl text-pink-500">Get in Touch 💌</h1>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, collaboration
          idea, or just want to say hi — our inbox is always open.
        </p>
        <button
          className="bg-pink-500 text-white px-5 py-2 hover:bg-pink-600 rounded-lg"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
