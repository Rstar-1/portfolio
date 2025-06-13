import React from "react";
import img7 from "../../../assets/img15.png";

const Section3 = () => {
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
  const popular = [
    {
      href: "https://joyful-sunshine-15dd0f.netlify.app/",
      image: img7,
    },
  ];
  return (
    <div>
      <div>
        <div className="">
          <p className="bgdark w-max px20 sm-px20 py2 textwhite fsize14 flex cust_round">
            Category
          </p>
          <hr className="flex border-0 bgdark py2 minus_hr" />
        </div>
        <div className="grid-cols-1 gap-10 p8">
          {category.map((cat, index) => {
            return (
              <div className="flex items-center justify-between" key={index}>
                <h6 className="my1 fsize16 textdark font-500">{cat?.title}</h6>
                <p className="fsize13 textgray text-right font-500">
                  {cat?.assets}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mtpx16">
        <div className="">
          <p className="bgdark w-max px20 sm-px20 py2 textwhite fsize14 flex cust_round">
            Popular
          </p>
          <hr className="flex border-0 bgdark py2 minus_hr" />
        </div>
        <div className="mtpx16 grid-cols-1 gap-12">
          {popular?.map((e, index) => (
            <div className="bg-fa" key={index}>
                <img
                  src={e?.image}
                  alt={e?.title}
                  className="w-full h-250px object-cover flex"
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
