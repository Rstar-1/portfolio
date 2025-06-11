import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
        alt="Herosection"
        className="object-cover h-300px flex w-full"
      />
      <div className="absolute h-300px top-0 left-0 flex items-center justify-center w-full">
        <div>
          <p className="fsize22 md-fsize20 sm-fsize18 textwhite font-500 flex justify-center sm-justify-start sm-mbpx8">
            Digital World
          </p>
          <h2 className="font-600 fsize60 md-fsize38 sm-fsize32 my1 leading-hsm textwhite text-center sm-text-left">
            Designing Better world and Care
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
