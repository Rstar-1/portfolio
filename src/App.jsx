import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navfoot/Navbar";
import Footer from "./components/navfoot/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Project from "./pages/project/Project";
import Connect from "./pages/connect/Connect";
import UseScroll from "./components/UseScroll";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  const isMobile = window.innerWidth <= 912;

  return (
    <div>
      {isMobile ? <ScrollTop /> : <UseScroll />}
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
    </div>
  );
};

export default App;
