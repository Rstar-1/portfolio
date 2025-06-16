import React, { useState } from "react";

const Section2 = () => {
  const [check, setCheck] = useState(0);
  const overviewimg = [
    { img: "https://i.ibb.co/KjVfq5j/product-17.jpg", id: 0 },
    { img: "https://i.ibb.co/Fn76XBt/product-rel-17-1.jpg", id: 1 },
    { img: "https://i.ibb.co/q5tWD7B/product-rel-17-2.jpg", id: 2 },
    { img: "https://i.ibb.co/7Y8dxKZ/product-rel-17-3.jpg", id: 3 },
  ];
  return (
    <div className="py20">
      <div className="container2">
        <div className="w-full flex sm-block">
          <div className="w-50 md-w-50 sm-w-full prpx16 sm-prpx1">
            <img
              src={overviewimg[check]?.img}
              alt="img"
              className="flex h-450px bgtertiary object-contain w-full"
            />
            <div className="grid-cols-4 gap-6 mtpx16">
              {overviewimg?.map((e, index) => {
                return (
                  <div onClick={() => setCheck(index)} key={index}>
                    <img
                      src={e?.img}
                      alt="img"
                      className="flex h-150px object-cover w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-50 md-w-50 sm-w-full plpx16 sm-plpx1 sm-mtpx20">
            <p className="border-secondary textsecondary fsize14 font-400 w-max px15 py2 mbpx20">
              40 Stock
            </p>
            <h4 className="my1 fsize30 sm-fsize24 textforth font-600">
              Microsoft's Surface Hub 2S
            </h4>
            <p className="fsize16 sm-fsize14 textgray font-400 my10">
              Shop Harry.com for every day low prices. Free shipping on orders
              $35+ or Pickup In-store and get
            </p>
            <p className="fsize20 sm-fsize18 textforth font-600 my20">
              ₹12,00,000 - ₹20,00,000
            </p>
            <div className="grid-cols-2 w-80 sm-w-full gap-12">
              <button className="cursor-pointer w-full py8 fsize16 sm-fsize14 font-400 mtpx20 sm-mtpx1 btn-style5">
                Call Now
              </button>
              <button className="cursor-pointer w-full py8 fsize16 sm-fsize14 font-400 mtpx20 sm-mtpx1 btn-style7">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
