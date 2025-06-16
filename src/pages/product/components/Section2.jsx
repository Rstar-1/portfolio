import React from "react";
import { NavLink } from "react-router-dom";

const Section2 = () => {
    const product = [
      {
        img: "https://i.ibb.co/F3hPQMP/product-2.jpg",
        title: "Electronics",
        description: "Lorem psum",
        price: "400",
      },
      {
        img: "https://i.ibb.co/FhzmCxJ/product-3.jpg",
        title: "Electronics",
        description: "Lorem psum",
        price: "400",
      },
      {
        img: "https://i.ibb.co/ncm9NFx/product-6.jpg",
        title: "Electronics",
        description: "Lorem psum",
        price: "400",
      },
      {
        img: "https://i.ibb.co/2dDcxYr/product-1.jpg",
        title: "Electronics",
        description: "Lorem psum",
        price: "400",
      },
      {
        img: "https://i.ibb.co/FWFHb8W/product-9.jpg",
        title: "Electronics",
        description: "Lorem psum",
        price: "400",
      },
      {
        img: "https://i.ibb.co/x81YysG/product-5.jpg",
        title: "Electronics",
        description: "Lorem psum",
        price: "400",
      },
      {
        img: "https://i.ibb.co/qdks33N/product-11.jpg",
        title: "Electronics",
        description: "Lorem psum",
        price: "400",
      },
      {
        img: "https://i.ibb.co/FY0k703/product-4.jpg",
        title: "Electronics",
        description: "Lorem psum",
        price: "400",
      },
    ];
  return (
    <div className="py20">
      <div className="container2">
        <div className="w-full">
          <div className="border-ec w-full py16">
            <div className="px25 flex items-center justify-between">
              <p className="textgray fsize16 font-400">
                Showing 1–9 of 27 results
              </p>
              <div className="flex items-center gap-10">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="gray"
                  strokeWidth="2"
                  fill="none"
                  className="cursor-pointer flex"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <svg
                  viewBox="0 0 26 26"
                  width="26"
                  height="26"
                  stroke="gray"
                  strokeWidth="2"
                  fill="none"
                  className="cursor-pointer flex"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>
          <div className="grid-cols-4 sm-grid-cols-2 gap-12 mtpx20">
            {product?.map((e, index) => {
              return (
                <div key={index}>
                  <NavLink to="/overview">
                    <img
                      src={e?.img}
                      alt="section2"
                      className="w-full flex object-cover h-300px mbpx5"
                    />
                  </NavLink>
                  <h6 className="textforth line-clamp2 fsize18 font-500 my1">
                    {e?.title}
                  </h6>
                  <p className="textgray font-400 fsize13">$1200</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
