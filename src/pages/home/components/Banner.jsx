import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg_hero py80 md-py50 sm-py40">
      <div className="container mx-auto">
        <p className="fsize22 md-fsize20 sm-fsize18 textprimary font-500 flex justify-center sm-justify-start sm-mbpx8">
          Our Service
        </p>
        <h2 className="font-600 fsize60 md-fsize38 sm-fsize32 my1 leading-hsm textgray text-center sm-text-left">
          Designing <span className="textprimary">Better world</span> and Care
        </h2>
        <p className="fsize16 md-fsize15 sm-fsize14 leading-m textgray text-center sm-text-left mtpx20 md-mtpx16 sm-mtpx8 w-70 md-w-80 sm-w-full mx-auto">
          Creative and detail-oriented frontend developer with a strong
          foundation in modern web technologies including HTML5, CSS3,
          JavaScript (ES6+), React, and Tailwind CSS.
        </p>
        <div className="flex justify-center sm-justify-start items-center gap-12 mtpx28 md-mtpx20 sm-mtpx18">
          <NavLink to="/project">
            <button className="px25 py8 sm-px18 sm-py6 fsize18 sm-fsize15 rounded-5 btn-style8 font-400 cursor-pointer click-btn">
              <span className="relative z-50">Know More</span>
            </button>
          </NavLink>
          <NavLink to="/expertise">
            <button className="px25 py8 sm-px18 sm-py6 fsize18 sm-fsize15 rounded-5 btn-style11 font-400 cursor-pointer click-btn">
              <span>How It Works</span>
            </button>
          </NavLink>
        </div>
        <img
          src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
          alt="Herosection"
          className="object-cover h-400px filter-0 rounded-10 mtpx40 sm-mtpx20 flex mx-auto flex w-80 sm-w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
