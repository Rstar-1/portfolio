import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg_hero">
      <div className="container mx-auto">
        <div className="flex sm-flex-column-reverse items-center w-full py60 md-py35 sm-py30">
          <div className="w-50 sm-w-full sm-mtpx20">
            <p className="fsize22 md-fsize20 sm-fsize18 textprimary font-500 mbpx8">
              Our Service
            </p>
            <h2 className="font-600 fsize50 md-fsize38 sm-fsize32 my1 textgray text-left">
              Designing <span className="textprimary">Better world</span> and
              Care
            </h2>
            <p className="fsize16 md-fsize15 sm-fsize14 leading-m textgray text-left mtpx10">
              Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development to fill dummy or
              placeholder text commonly empty spaces in a layout that do not yet
              have content.
            </p>
            <div className="flex items-center gap-12 mtpx28 md-mtpx20 sm-mtpx18">
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
          </div>
          <div className="w-50 sm-w-full plpx20 sm-plpx1">
            <img
              src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
              alt="Herosection"
              className="object-cover h-400px flex w-full rounded-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
