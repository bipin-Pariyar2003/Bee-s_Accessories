import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center space-y-8 mt-10 ">
        <div className="mt-10 space-y-4 text-center">
          <h1 className="text-2xl text-pink-500 font-semibold">Get in Touch 💌</h1>
          <p>
            We'd love to hear from you! Whether you have a question, feedback,
            collaboration idea, or just want to say hi — our inbox is always open.
          </p>
          <button
            className="bg-pink-500 text-white px-5 py-2 hover:bg-pink-600 rounded-lg"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        <div className="w-full max-w-md p-6 bg-white space-y-4 shadow-md rounded-lg">
          <form
            className=""
            action="https://formsubmit.co/bipin.pariyar2002@gmail.com"
            method="POST"
            onSubmit={() => navigate("/thank-you")}
          >
            <input
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="w-full p-2 h-40 border border-gray-300 rounded-lg mb-4"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <input type="hidden" name="_captcha" value="false" />
            {/* <input
              type="hidden"
              name="_next"
              value="https://yourdomain.com/thank-you.html"
            /> */}
            <div>
              <button
                className="bg-pink-500 text-white px-5 py-2 hover:bg-pink-600 rounded-lg"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
