import React from 'react'

const Section4 = () => {
  return (
    <div className="py20">
      <div className="container2">
        <div className="flex sm-block items-center w-full bgtertiary py20 px50 rounded-10">
          <div className="w-60 md-w-50 sm-w-full">
            <p className="fsize16 textgray font-400 mbpx8">Digital World</p>
            <h2 className="font-600 fsize60 md-fsize38 sm-fsize30 my1 leading-lsm textforth">
              Designing <br />
              world and Care
            </h2>
            <button className="cursor-pointer px20 py8 fsize14 font-400 mtpx20 btn-style7">
              Shop Now
            </button>
          </div>
          <div className="w-40 md-w-50 sm-w-full sm-mtpx20">
            <img
              src="https://laravel.agiletech.wowtheme7.com/assets/img/home-10/9.png"
              alt="Banner"
              className="w-full h-400px object-contain flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4
