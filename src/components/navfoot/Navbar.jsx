import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavData = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/project", label: "Project" },
    { href: "/connect", label: "Connect" },
  ];
  return (
    <div className="py12 w-full navbar">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
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
         <button className="px18 py8 bgprimary border-0 textwhite rounded-5 fsize12 cursor-pointer">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
