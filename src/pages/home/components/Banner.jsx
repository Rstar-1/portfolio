import React from "react";

const Banner = () => {
  return (
    <div className="relative ptpx20 bgtertiary">
      <div className="container2">
        <div className="flex sm-block items-center w-full">
          <div className="w-40 md-w-50 sm-w-full">
            <p className="fsize16 textgray font-400 mbpx8">
              Digital World
            </p>
            <h2 className="font-600 fsize60 md-fsize38 sm-fsize30 my1 leading-lsm textforth">
              Designing <br />
              world and Care
            </h2>
            <button className="cursor-pointer px20 py8 fsize14 font-400 mtpx20 btn-style7">Shop Now</button>
          </div>
          <div className="w-60 md-w-50 sm-w-full sm-mtpx20">
            <img
              src="https://harri-vue-nuxt.vercel.app/images/slider/13/slider-1.png"
              alt="Banner"
              className="w-full h-500px object-contain flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
