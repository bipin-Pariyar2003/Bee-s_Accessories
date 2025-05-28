import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1>About Page</h1>
          <p>Lorem ipsum dolor sit amet c</p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
