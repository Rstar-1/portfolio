import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/navfoot/Navbar";
import Footer from "./components/navfoot/Footer";
import UseScroll from "./components/UseScroll";
import ScrollTop from "./components/ScrollTop";
import Loader from "./components/Loader";

// Lazy load page components
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Service = lazy(() => import("./pages/service/Service"));
const Project = lazy(() => import("./pages/project/Project"));
const Connect = lazy(() => import("./pages/connect/Connect"));

const App = () => {
  // const isMobile = window.innerWidth <= 912;

  return (
    <div>
      {/* {isMobile ? <ScrollTop /> : <UseScroll />} */}
      <ScrollTop />
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
