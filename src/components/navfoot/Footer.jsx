import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const footData = [
      { href: "/about", label: "About" },
      { href: "/expertise", label: "Expertise" },
      { href: "/project", label: "Project" },
      { href: "/connect", label: "Connect" },
    ];
  return (
    <div className="bgdark py20">
      <div className="container mx-auto">
        <div className="flex sm-flex-wrap sm-justify-center items-center gap-12 py25 bordb">
          {footData.map((e, index) => (
            <NavLink
              key={index}
              to={e?.href}
              className="font-400 textwhite mx12 fsize14"
            >
              {e?.label}
            </NavLink>
          ))}
        </div>
        <p className="text-center fsize14 sm-fsize13 textwhite ptpx25">
          Created By RAJ Shetye | © 2025 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
