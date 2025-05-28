import React from "react";
import Home from "views/Home";
import Browse from "views/Browse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
