import React from "react";
import Banner from "./components/Banner";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

const About = () => {
  return (
    <div className="relative section_bg overflow-hidden">
      <Banner />
      <div className="container mx-auto">
        <Section2 />
      </div>
      <div className="py10 bgwhite">
        <Section3 />
      </div>
    </div>
  );
};

export default About;
