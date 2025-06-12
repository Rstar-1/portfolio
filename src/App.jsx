import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/navfoot/Navbar";
// import Footer from "./components/navfoot/Footer";
// import UseScroll from "./components/UseScroll";
import ScrollTop from "./components/ScrollTop";
import Loader from "./components/Loader";

// Lazy load page components
const Home = lazy(() => import("./pages/home/Home"));
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
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
