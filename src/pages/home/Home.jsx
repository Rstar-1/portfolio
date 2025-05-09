import React from "react";
import Banner from "./components/Banner";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

const Home = () => {
  return (
    <div className="relative section_bg overflow-hidden">
      <Banner />
      <Section2 />
      <Section3 />
      <div className="bgwhite">
        <Section4 />
      </div>
        <Section5 />
    </div>
  );
};

export default Home;
