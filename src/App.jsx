import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navfoot/Navbar";
import Footer from "./components/navfoot/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
