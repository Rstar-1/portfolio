import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navfoot/Navbar";
import Footer from "./components/navfoot/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
