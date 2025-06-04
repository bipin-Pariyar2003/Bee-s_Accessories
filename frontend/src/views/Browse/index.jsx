import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import axios from "axios";

import ReusableCards from "components/ReusableCards";
import { useNavigate } from "react-router-dom";
const Browse = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:4001/accessories");
        setData(res.data);
        console.log("Data fetched successfully:", res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    getData();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen container mx-auto px-4 md:px-20">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl ">
            Hey!! We’ve curated something just for you{"\n"}
            <span className="text-pink-500"> ~dive in!</span>
          </h1>
          <p className="mt-5 md:mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quaerat minima
            sunt obcaecati? Porro nemo eaque maiores quos sit, suscipit, nesciunt velit id
            architecto doloribus, asperiores quaerat magnam ad ea.
          </p>
          <button
            className="bg-pink-500 text-white rounded-xl font-light  px-5 py-2 mt-10 hover:bg-pink-600 transition-all duration-300"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  mt-3">
          {data.map((item, index) => (
            <ReusableCards key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
