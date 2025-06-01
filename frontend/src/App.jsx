import React from "react";
import Home from "views/Home";
import Browse from "views/Browse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import SignUp from "./views/SignUp";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="dark:bg-gray-800 dark:text-white">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
        <Toaster />
      </div>
    </>
  );
};

export default App;
