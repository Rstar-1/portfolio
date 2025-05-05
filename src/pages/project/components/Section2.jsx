import React from "react";
import img1 from "../../../assets/img.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img6.png";
import img6 from "../../../assets/img7.png";
import img7 from "../../../assets/img8.png";
import img8 from "../../../assets/img9.png";
import img9 from "../../../assets/img10.png";
import img10 from "../../../assets/img11.png";
import img11 from "../../../assets/img12.png";
import img12 from "../../../assets/img13.png";
import img13 from "../../../assets/img14.png";
import img14 from "../../../assets/img15.png";
import img15 from "../../../assets/img16.png";
import img16 from "../../../assets/img17.png";
import img17 from "../../../assets/img18.png";
import img18 from "../../../assets/img19.png";
import img19 from "../../../assets/img20.png";
import img20 from "../../../assets/img21.png";
import { NavLink } from "react-router-dom";

const Section2 = () => {
  const projectcard = [
    {
      href: "https://idyllic-cassata-487cea.netlify.app/",
      image: img6,
    },
    {
      href: "https://strong-sprite-1b113f.netlify.app/",
      image: img11,
    },
    {
      href: "https://timely-bavarois-4a5691.netlify.app/",
      image: img20,
    },
  ];
  const projectcard1 = [
    {
      href: "https://eurobondacp.com/",
      image: img4,
    },
    {
      href: "https://hrx.aiab.in/",
      image: img5,
    },
    {
      href: "https://sbi-foundation.brained.in/",
      image: img10,
    },
    {
      href: "https://nhrdn-vue.aiab.in/",
      image: img8,
    },
  ];
  const projectcard2 = [
    {
      href: "https://joyful-sunshine-15dd0f.netlify.app/",
      image: img7,
    },
  ];
  const projectcard3 = [
    {
      href: "https://www.agramconsulting.com/",
      image: img1,
    },
    {
      href: "https://carboncircle.in/",
      image: img2,
    },
    {
      href: "https://deevoir.com/",
      image: img3,
    },
    {
      href: "https://youthforindia.aiab.in/",
      image: img12,
    },
    {
      href: "https://scvengineering.com/",
      image: img13,
    },
    {
      href: "https://scvengineering.com/",
      image: img9,
    },
  ];
  const projectcard4 = [
    {
      href: "Project 7",
      image: img14,
    },
    {
      href: "Project 7",
      image: img15,
    },
    {
      href: "Project 7",
      image: img16,
    },
    {
      href: "Project 7",
      image: img17,
    },
    {
      href: "Project 7",
      image: img18,
    },
    {
      href: "Project 7",
      image: img19,
    },
  ];

  return (
    <div className="py40 md-py35 sm-py30">
      <div className="container mx-auto">
        <div>
          <div className="">
            <p className="bgprimary w-max px30 sm-px20 py5 textwhite fsize14 flex cust_round">
              Website
            </p>
            <hr className="flex border-0 bgprimary py2 minus_hr" />
          </div>
          <div className="mtpx16 grid-cols-3 sm-grid-cols-1 gap-12">
            {projectcard?.map((e, index) => (
              <div className="bg-fa px10" key={index}>
                <NavLink to={e?.href} target="_blank">
                  <img
                    src={e?.image}
                    alt={e?.title}
                    className="w-full h-250px object-contain flex"
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="mtpx20">
          <div className="">
            <p className="bgprimary w-max px30 sm-px20 py5 textwhite fsize14 flex cust_round">
              Dynamic
            </p>
            <hr className="flex border-0 bgprimary py2 minus_hr" />
          </div>
          <div className="mtpx16 grid-cols-3 sm-grid-cols-1 gap-12">
            {projectcard1?.map((e, index) => (
              <div className="bg-fa px10" key={index}>
                <NavLink to={e?.href} target="_blank">
                  <img
                    src={e?.image}
                    alt={e?.title}
                    className="w-full h-250px object-contain flex"
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="mtpx20">
          <div className="">
            <p className="bgprimary w-max px30 sm-px20 py5 textwhite fsize14 flex cust_round">
              Dashboard
            </p>
            <hr className="flex border-0 bgprimary py2 minus_hr" />
          </div>
          <div className="mtpx16 grid-cols-3 sm-grid-cols-1 gap-12">
            {projectcard2?.map((e, index) => (
              <div className="bg-fa px10" key={index}>
                <NavLink to={e?.href} target="_blank">
                  <img
                    src={e?.image}
                    alt={e?.title}
                    className="w-full h-250px object-contain flex"
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="mtpx20">
          <div className="">
            <p className="bgprimary w-max px30 sm-px20 py5 textwhite fsize14 flex cust_round">
              UI Website
            </p>
            <hr className="flex border-0 bgprimary py2 minus_hr" />
          </div>
          <div className="mtpx16 grid-cols-3 sm-grid-cols-1 gap-12">
            {projectcard3?.map((e, index) => (
              <div className="bg-fa px10" key={index}>
                <NavLink to={e?.href} target="_blank">
                  <img
                    src={e?.image}
                    alt={e?.title}
                    className="w-full h-250px object-contain flex"
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="mtpx20">
          <div className="">
            <p className="bgprimary w-max px30 sm-px20 py5 textwhite fsize14 flex cust_round">
              HeroSection
            </p>
            <hr className="flex border-0 bgprimary py2 minus_hr" />
          </div>
          <div className="mtpx16 grid-cols-3 sm-grid-cols-1 gap-12">
            {projectcard4?.map((e, index) => (
              <div className="bg-fa px10" key={index}>
                  <img
                    src={e?.image}
                    alt={e?.title}
                    className="w-full h-250px object-contain flex"
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
