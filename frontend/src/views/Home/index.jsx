import React from "react";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import Footer from "components/Footer";
import Cards from "components/Cards";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
