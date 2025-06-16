import React from "react";

const Section5 = () => {
  const category = [
    {
      img: "https://designing-world.com/suha-3.3.0/img/product/17.jpg",
      title: "Electronics",
    },
    {
      img: "https://designing-world.com/suha-3.3.0/img/product/19.jpg",
      title: "Electronics",
    },
    {
      img: "https://designing-world.com/suha-3.3.0/img/product/18.jpg",
      title: "Electronics",
    },
    {
      img: "https://designing-world.com/suha-3.3.0/img/product/22.jpg",
      title: "Electronics",
    },
    {
      img: "https://designing-world.com/suha-3.3.0/img/product/23.jpg",
      title: "Electronics",
    },
  ];
  return (
    <div className="py40">
      <div className="container2">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h4 className="fsize30 sm-fsize22 my1 textforth font-500">
              Collection
            </h4>
            <button className="cursor-pointer px16 py6 fsize14 font-400 btn-style7">
              View All
            </button>
          </div>
          <div className="grid-cols-5 sm-grid-cols-2 gap-12 mtpx20">
            {category?.map((e, index) => {
              return (
                <div className="relative" key={index}>
                  <img
                    src={e?.img}
                    alt="section2"
                    className="w-full flex object-cover h-300px mbpx5 rounded-5"
                  />
                  <div className="absolute bottom-0 left-0 w-full mbpx10">
                    <div className="flex justify-between items-center bgwhite w-85 mx-auto px10 py5 rounded-5">
                      <p className="textgray line-clamp1 fsize15 font-500">
                        {e?.title}
                      </p>
                      <p className="textgray line-clamp1 fsize15 font-500">8</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
