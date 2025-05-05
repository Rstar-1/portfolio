import React, { useRef } from "react";

const Section2 = () => {
  const videoRef = useRef([]);
  const handleMouseEnter = (videoid) => {
    if (videoRef.current[videoid]) {
      videoRef.current[videoid].play();
    }
  };
  const handleMouseLeave = (videoid) => {
    if (videoRef.current[videoid]) {
      videoRef.current[videoid].pause();
    }
  };

  const cards = [
    {
      name: "Deployment & Hosting",
      video: "https://cdn.jsdelivr.net/gh/madebykin/jasper/Jasper_Chat.webm",
      videoid1: "1",
      name2: "Frontend Development",
      video4:
        "https://cdn.jsdelivr.net/gh/madebykin/jasper/Jasper_Marketing (1).webm",
      videoid2: 2,
    },
    {
      name: "SEO Optimization",
      video:
        "https://cdn.jsdelivr.net/gh/madebykin/jasper/Jasper_Brand%20(2).webm",
      videoid1: "3",
      name2: "API Integration",
      video4:
        "https://cdn.jsdelivr.net/gh/madebykin/jasper/Jasper_Style%20(1).webm",
      videoid2: 4,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="w-full">
        {cards.map((e, index) => (
          <div key={index} className="w-full mbpx10">
            <div
              className={
                index % 2 === 0
                  ? "flex sm-block items-center gap-12"
                  : "flex sm-block flex-row-reverse items-center gap-12"
              }
            >
              <div
                className="w-60 md-w-50 sm-w-full"
                onMouseEnter={() => handleMouseEnter(e.videoid1)}
                onMouseLeave={() => handleMouseLeave(e.videoid1)}
              >
                <div className="p30 sm-p20 bg-f6f5f3 rounded-5">
                  <h5 className="font-600 fsize24 md-fsize22 sm-fsize18 my1 textgray">
                    {e?.name}
                  </h5>
                  <div className="h-video mtpx5">
                    <video
                      ref={(el) => (videoRef.current[e.videoid1] = el)}
                      src={e.video}
                      width="100%"
                      height="100%"
                      muted
                      loop
                      style={{ objectFit: index === 1 ? "cover" : "contain" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-40 md-w-50 sm-w-full sm-mtpx14"
                onMouseEnter={() => handleMouseEnter(e.videoid2)}
                onMouseLeave={() => handleMouseLeave(e.videoid2)}
              >
                <div className="p30 sm-p20 bg-f6f5f3 rounded-5">
                  <h5 className="font-600 fsize24 md-fsize22 sm-fsize18 my1 textgray">
                    {e?.name2}
                  </h5>
                  <div className="h-video mtpx5">
                    <video
                      ref={(el) => (videoRef.current[e.videoid2] = el)} // Reference the second video
                      src={e.video4}
                      width="100%"
                      height="100%"
                      muted
                      loop
                      style={{ objectFit: index === 1 ? "cover" : "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
