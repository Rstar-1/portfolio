import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  useEffect(() => {
    const maski = document.querySelectorAll(".mainabout");

    maski.forEach((maskz) => {
      const image2 = maskz.querySelector(".abouts1");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: maskz,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(maskz, { autoAlpha: 1 })
        .from(maskz, 1.5, {
          yPercent: 0,
          ease: "power2.out",
        })
        .from(image2, 1.5, {
          yPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: "power2.out",
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="w-full flex sm-flex-column-reverse items-center py36 md-py30 sm-py20">
        <div className="w-50 sm-w-full prpx30 md-prpx20 sm-prpx1 sm-mtpx25">
          <p className="fsize20 md-fsize18 sm-fsize16 textprimary font-500 mbpx6">
            Info
          </p>
          <h4 className="font-600 fsize30 md-fsize26 sm-fsize24 my1 textgray">
            Hey, I am Raj Shetye
          </h4>
          <p className="fsize16 md-fsize15 sm-fsize14 leading-m textgray mtpx8">
            Passionate about building responsive, accessible, and user-friendly
            web interfaces. <br></br>Experienced in collaborating with
            cross-functional teams to deliver seamless digital experiences.
          </p>
          <div className="grid-cols-4 sm-grid-cols-2 gap-12 mtpx16">
            <div>
              <h6 className="fsize26 sm-fsize18 textdark font-600 my1">30+</h6>
              <p className="fsize14 textgray">Projects</p>
            </div>
            <div>
              <h6 className="fsize26 sm-fsize18 textdark font-600 my1">2.10Y</h6>
              <p className="fsize14 textgray">Experience</p>
            </div>
          </div>
        </div>
        <div className="mainabout relative overflow-hidden w-50 sm-w-full">
          <img
            src="https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fk22mqgz4qrzx3jcq6x13.png"
            className="abouts1 object-cover h-450px filter-0 rounded-5 w-full flex"
            alt="An elegant Peugeot car"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
