import React from "react";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import Footer from "components/Footer";
import Cards from "components/Cards";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <div className="text-center mt-16">
        <button
          className="btn bg-green-700 text-white"
          onClick={() => navigate("/browse")}
        >
          Browse All Products
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
