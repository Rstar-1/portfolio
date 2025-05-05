import React from "react";

const Section3 = () => {
  const servicecard = [
    {
      title: "Knowledge",
      description:
        "Skilled in creating clean, maintainable code and development.",
      img: "https://html.themeholy.com/haona/demo/assets/img/icon/process-icon1-1.svg",
    },
    {
      title: "Working",
      description: "I am working on React, VueJs and NextJS in Frontend.",
      img: "https://html.themeholy.com/haona/demo/assets/img/icon/process-icon1-2.svg",
    },
    {
      title: "Solution",
      description:
        "Highly skilled in frontend R&D, with a quickly analyze requirements",
      img: "https://html.themeholy.com/haona/demo/assets/img/icon/process-icon1-3.svg",
    },
  ];
  return (
    <div className="ptpx40 pbpx40 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="relative">
          <img
            src="https://html.themeholy.com/haona/demo/assets/img/shape/process-bg-shape1.png"
            className="service4-img md-hidden sm-hidden"
            alt="service4-img"
          />
          <div className="absolute sm-relative md-relative top-0 left-0 w-full flex items-center service4-img">
            <div className="flex flex-wrap justify-between md-justify-center sm-justify-center plpx20 prpx20 md-plpx1 md-prpx1 sm-plpx1 sm-prpx1 items-center w-full">
              {servicecard.map((e, index) => (
                <div
                  key={index}
                  className="service4-circle bgwhite d-shadow p10 md-p1 sm-p1 rounded-full sm-mbpx10 md-mlpx6 md-mrpx6 md-rounded-10 sm-rounded-10 flex items-center justify-center"
                >
                  <div className="sm-p10 md-p10">
                    <div className="flex justify-center">
                      <img
                        src={e.img}
                        className="servicesecond4-img object-contain"
                        alt="servicesecond4-img"
                      />
                    </div>
                    <h4 className="fsize18 md-fsize16 sm-fsize16 mtpx8 mbpx1 text-center font-500 textforth">
                      {e.title}
                    </h4>
                    <p className="mtpx4 plpx4 prpx4 fsize13 sm-fsize13 text-center md-fsize13 textgray">
                      {e.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
