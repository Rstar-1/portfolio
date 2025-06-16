import React from 'react'
import { NavLink } from 'react-router-dom';

const Section3 = () => {
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
    <div className="py40">
      <div className="container2">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h4 className="fsize30 sm-fsize22 my1 textforth font-500">
              Featured Products
            </h4>
            <button className="cursor-pointer px16 py6 fsize14 font-400 btn-style7">
              View All
            </button>
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
}

export default Section3
