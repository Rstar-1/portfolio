import React from "react";
import img14 from "../../../assets/img15.png";
import img15 from "../../../assets/img16.png";
import img16 from "../../../assets/img17.png";
import img17 from "../../../assets/img18.png";
import img18 from "../../../assets/img19.png";
import img19 from "../../../assets/img20.png";

const Section2 = () => {
  const projectcard = [
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

  return (
    <div>
      <h4 className="my1 fsize24 textdark font-600">Latest Collection</h4>
      <p className="fsize14 textgray leading font-500">20 Assets</p>
      <div className="mtpx16 grid-cols-2 sm-grid-cols-1 gap-12">
        {projectcard?.map((e, index) => (
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
  );
};

export default Section2;
