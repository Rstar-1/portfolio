import React from "react";
import Banner from "./components/Banner";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <Banner />
      <div className="py40 md-py30 sm-py40">
        <div className="container2">
          <div className="flex gap-12 w-full">
            <div className="w-70">
              <Section2 />
            </div>
            <div className="w-30 plpx10">
              <Section3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
