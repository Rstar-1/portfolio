import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const NavData = [
    { href: "/home", label: "All Category" },
    { href: "/", label: "Web Templates" },
    { href: "/", label: "Admin Templates" },
    { href: "/", label: "CMS Templates" },
    { href: "/", label: "WordPress" },
    { href: "/", label: "Shopify" },
    { href: "/", label: "Digital Marketing" },
    { href: "/", label: "Graphic Templates" },
    { href: "/", label: "Video Templates" },
    { href: "/", label: "3D Models" },
    { href: "/", label: "Digital Cards" },
    { href: "/", label: "Brochure" },
  ];
  const [sidebarshow, setsidebarshow] = useState(false);
  return (
    <div className="w-full navbar bgdark">
      <div
        className={
          sidebarshow === true
            ? "fixed h-100 md-block sm-block z-99 navview"
            : "fixed h-100 md-block sm-block z-99 navhide"
        }
      >
        <div className="bgwhite b-shadow w-30 md-w-40 sm-w-full h-100 absolute right-0 top-0">
          <div className="bgdark p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <h2 className="font-500 fsize19 textprimary uppercase my1">
                AI<span className="textwhite mlpx2">PING</span>
              </h2>
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
                <div className="px20 mbpx16" key={item?.label}>
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
        </div>
      </div>
      <div className="container2">
        <div className="flex items-center justify-between py12 w-full">
          <h1 className="font-500 fsize24 textprimary uppercase my1">
            AI<span className="textwhite mlpx2">PING</span>
          </h1>
          <div className="flex items-center gap-12">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="var(--white)"
              strokeWidth="2"
              fill="none"
              className="flex cursor-pointer"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              stroke="var(--white)"
              strokeWidth="2"
              fill="none"
              className="flex"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <svg
              viewBox="0 0 26 26"
              width="26"
              height="26"
              stroke="white"
              strokeWidth="2"
              fill="none"
              className="cursor-pointer flex"
              onClick={() => setsidebarshow(true)}
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
