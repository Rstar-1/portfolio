import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navfoot/Navbar";
import Footer from "./components/navfoot/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Project from "./pages/project/Project";
import Connect from "./pages/connect/Connect";
import UpSign from "./assets/arrow.png";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
      <div className="fixed bottom-0 right-0 mx10 sm-mx5">
        {isVisible && (
          <div
            style={{ transition: "1s ease-in" }}
            className="mbpx10 up-box bgprimary rounded-full flex items-center justify-center cursor-pointer"
            onClick={scrollToTop}
          >
            <img src={UpSign} alt="arrow" className="up-img object-contain" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
