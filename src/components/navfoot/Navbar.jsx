import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Resume from '../../assets/portfolio.pdf'

const Navbar = () => {
  const NavData = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/project", label: "Project" },
    { href: "/connect", label: "Connect" },
  ];
  const [sidebarshow, setsidebarshow] = useState(false);
  return (
    <div className="w-full navbar">
      <div
        className={
          sidebarshow === true
            ? "fixed hidden h-100 md-block sm-block z-99 navview"
            : "fixed hidden h-100 md-block sm-block z-99 navhide"
        }
      >
        <div className="bgwhite b-shadow w-90 md-w-40 h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                RS Developers
              </p>
              <div onClick={() => setsidebarshow(false)}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  className="flex cursor-pointer"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>
          <div className="mtpx20">
            {NavData.map((item) => (
              <>
                <div className="plpx20 prpx20 mbpx25" key={item?.label}>
                  <NavLink
                    to={item?.href}
                    activeClass="active"
                    className="fsize15 textgray flex items-center gap-8 cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="gray"
                      strokeWidth="2"
                      fill="none"
                      className="flex"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <p
                      className="my-0 mlpx6"
                      onClick={() => setsidebarshow(false)}
                    >
                      {item?.label}
                    </p>
                  </NavLink>
                </div>
              </>
            ))}
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <div className="px20 pbpx20">
              <a href={Resume} download>
                <button className="px18 py8 bgprimary border-0 textwhite rounded-5 fsize12 cursor-pointer">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py12">
          <h1 className="font-500 fsize19 textgray my1">
            RAJ<span className="textprimary mlpx2">Shetye</span>
          </h1>
          <div className="flex md-hidden sm-hidden items-center gap-12">
            {NavData.map((e, index) => (
              <NavLink
                key={index}
                to={e?.href}
                className="activetext font-400 mx12 fsize14"
                activeClass="active"
              >
                {e?.label}
              </NavLink>
            ))}
          </div>
          <div className="flex md-hidden sm-hidden">
           <a href={Resume} download>
              <button className="px18 py8 bgprimary border-0 textwhite rounded-5 fsize12 cursor-pointer">
                Download CV
              </button>
            </a>
          </div>
          <div className="hidden md-block sm-block">
            <div
              className="bgprimary p6 justify-center items-center flex rounded-5"
              onClick={() => setsidebarshow(true)}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="white"
                strokeWidth="2"
                fill="none"
                className="flex"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
