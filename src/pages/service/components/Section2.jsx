import React from "react";
import img7 from "../../../assets/img8.png";

const Section2 = () => {
  const category = [
    {
      title: "Portfolio",
      assets: 8,
    },
    {
      title: "Blogs",
      assets: 7,
    },
    {
      title: "Admin",
      assets: 8,
    },
    {
      title: "Landing Page",
      assets: 12,
    },
    {
      title: "E-Learning",
      assets: 5,
    },
    {
      title: "Ecommerce",
      assets: 20,
    },
  ];
  return (
    <div className="py20 md-py30 sm-py40">
      <div className="container2">
        <div className="flex gap-12 w-full">
          <div className="w-70">
            <img
              src={img7}
              alt='new'
              className="w-full h-450px object-cover flex"
            />
          </div>
          <div className="w-30 plpx10 sticky top-0">
            <div>
              <h4 className="my1 fsize22 textdark font-600">
                Ecommerce HTML Template
              </h4>
              <p className="fsize14 textgray leading font-500">
                By Gramentheme
              </p>
              <button className="px25 py8 sm-px18 sm-py6 fsize15 rounded-5 font-400 cursor-pointer w-full bgdark border-dark textwhite mtpx10">
                Live Preview
              </button>
              <button className="px25 py8 sm-px18 sm-py6 fsize15 rounded-5 font-400 cursor-pointer w-full bgwhite border-dark textdark mtpx10">
                Add to Collection
              </button>
            </div>
            <div className="mtpx20">
              <div className="">
                <p className="bgdark w-max px20 sm-px20 py2 textwhite fsize14 flex cust_round">
                  Category
                </p>
                <hr className="flex border-0 bgdark py2 minus_hr" />
              </div>
              <div className="grid-cols-1 gap-10 p8">
                {category.map((cat, index) => {
                  return (
                    <div
                      className="flex items-center justify-between"
                      key={index}
                    >
                      <h6 className="my1 fsize16 textdark font-500">
                        {cat?.title}
                      </h6>
                      <p className="fsize13 textgray text-right font-500">
                        {cat?.assets}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
