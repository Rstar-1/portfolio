import React from "react";
import { NavLink } from "react-router-dom";

const Section2 = () => {
  const cardimg = [
    {
      img: "https://i.ibb.co/58zCBkK/product-cat-2.jpg",
    },
    {
      img: "https://i.ibb.co/7Y7RjMq/product-cat-5.jpg",
    },
    {
      img: "https://i.ibb.co/p004GJX/product-cat-4.jpg",
    },
    {
      img: "https://i.ibb.co/ydM73jB/product-cat-5.jpg",
    },
    {
      img: "https://i.ibb.co/QHTxCfc/product-cat-3.jpg",
    },
    // {
    //   img: "https://i.ibb.co/zfTZRSf/product-cat-1.jpg",
    // },
    // {
    //   img: "https://i.ibb.co/9hsZsq3/product-cat-7.jpg",
    // },
  ];
  return (
    <div className="py30">
      <div className="container2">
        <div className="grid-cols-5 sm-grid-cols-2 gap-12">
          {cardimg?.map((e, index) => {
            return (
              <div key={index}>
                <NavLink to="/shop">
                  <img
                    src={e?.img}
                    alt="section2"
                    className="w-full flex object-contain h-200px"
                  />
                </NavLink>
                <p className="text-center textgray fsize14 font-500 mtpx5">
                  Electronics
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section2;
