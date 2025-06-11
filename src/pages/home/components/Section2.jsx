import React from "react";
import img7 from "../../../assets/img8.png";
import img14 from "../../../assets/img15.png";
import img15 from "../../../assets/img16.png";
import img16 from "../../../assets/img17.png";
import img17 from "../../../assets/img18.png";
import img18 from "../../../assets/img19.png";
import img19 from "../../../assets/img20.png";
import img20 from "../../../assets/img21.png";
import { NavLink } from "react-router-dom";

const Section2 = () => {
  const projectcard2 = [
    {
      href: "https://joyful-sunshine-15dd0f.netlify.app/",
      image: img7,
    },
  ];
  const projectcard4 = [
    {
      href: "Project 1",
      image: img14,
    },
    {
      href: "Project 2",
      image: img15,
    },
    {
      href: "Project 3",
      image: img16,
    },
    {
      href: "Project 4",
      image: img17,
    },
    {
      href: "Project 5",
      image: img18,
    },
    {
      href: "Project 6",
      image: img19,
    },
  ];
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
    <div className="py40 md-py30 sm-py40">
      <div className="container2">
        <div className="flex gap-12 w-full">
          <div className="w-70">
            <h4 className="my1 fsize24 textdark font-600">Latest Collection</h4>
            <p className="fsize14 textgray leading font-500">200 Assets</p>
            <div className="mtpx16 grid-cols-2 sm-grid-cols-1 gap-12">
              {projectcard4?.map((e, index) => (
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
          <div className="w-30 plpx10">
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
            <div className="mtpx16">
              <div className="">
                <p className="bgdark w-max px20 sm-px20 py2 textwhite fsize14 flex cust_round">
                  Popular
                </p>
                <hr className="flex border-0 bgdark py2 minus_hr" />
              </div>
              <div className="mtpx16 grid-cols-1 gap-12">
                {projectcard2?.map((e, index) => (
                  <div className="bg-fa" key={index}>
                    <NavLink to={e?.href} target="_blank">
                      <img
                        src={e?.image}
                        alt={e?.title}
                        className="w-full h-250px object-cover flex"
                      />
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
