import React from "react";
import img1 from "../../../assets/img.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img6.png";
import img6 from "../../../assets/img7.png";
import img8 from "../../../assets/img9.png";
import img9 from "../../../assets/img10.png";
import img10 from "../../../assets/img11.png";
import img11 from "../../../assets/img12.png";
import img12 from "../../../assets/img13.png";
import img20 from "../../../assets/img21.png";

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
    {
      href: "https://scvengineering.com/",
      image: img9,
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
  ];

  return (
    <div className="py40 md-py35 sm-py30">
      <div className="container2">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h4 className="my1 fsize20 textdark font-600">Web Templates</h4>
              <p className="fsize14 textgray leading font-500">50 Assets</p>
            </div>
            <p className="fsize15 textgray font-500">Show All</p>
          </div>
          <div className="grid-cols-4 sm-grid-cols-1 gap-12 mtpx12">
            {projectcard1?.map((e, index) => (
              <div className="bg-fa" key={index}>
                <img
                  src={e?.image}
                  alt={e?.title}
                  className="w-full h-250px object-cover flex"
                />
              </div>
            ))}
          </div>
          <div className="flex items-start justify-between mtpx30">
            <div>
              <h4 className="my1 fsize20 textdark font-600">CMS Templates</h4>
              <p className="fsize14 textgray leading font-500">20 Assets</p>
            </div>
            <p className="fsize15 textgray font-500">Show All</p>
          </div>
          <div className="grid-cols-4 sm-grid-cols-1 gap-12 mtpx12">
            {projectcard3?.map((e, index) => (
              <div className="bg-fa" key={index}>
                <img
                  src={e?.image}
                  alt={e?.title}
                  className="w-full h-250px object-cover flex"
                />
              </div>
            ))}
          </div>
          <div className="flex items-start justify-between mtpx30">
            <div>
              <h4 className="my1 fsize20 textdark font-600">Wordpress</h4>
              <p className="fsize14 textgray leading font-500">120 Assets</p>
            </div>
            <p className="fsize15 textgray font-500">Show All</p>
          </div>
          <div className="grid-cols-4 sm-grid-cols-1 gap-12 mtpx12">
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
      </div>
    </div>
  );
};

export default Section2;
