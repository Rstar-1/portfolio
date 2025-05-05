import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".scrollx .summary");
    const mask1 = document.querySelector(".maskline");
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scrollx",
        pin: true,
        scrub: 1,
        end: "+=3000",
        markers: true,
      },
    });
    gsap.to(mask1, {
      width: "110%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
      },
    });
    sections.forEach((section) => {
      const text = section.querySelectorAll(".anim");
      if (text.length === 0) return;

      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          markers: true,
        },
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="wrapper container mx-auto relative sm-overflow-hidden">
      <div className="scrollx w-full flex items-center gap-12">
        <svg
          viewBox="0 0 900 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
            fill="#D9D9D9"
          />
          <mask
            id="mask0_0_1"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="900"
            height="10"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect className="maskline" y="-49" height="99" fill="black" />
          </g>
        </svg>

        <div className="summary">
          <div className="">
            <p className="fsize18 md-fsize16 sm-fsize14 textprimary font-500">
              Brained
            </p>
            <h4 className="font-600 fsize28 md-fsize26 sm-fsize22 my1 textgray">
              Associate Frontend Developer
            </h4>
            <p className="fsize15 md-fsize15 sm-fsize14 leading-m textgray mtpx8">
              Feb 2025 - Present<br></br>
              Developed and optimized dynamic web applications using Next.js for
              server-side rendering and frontend development.
            </p>
          </div>
        </div>
        <div className="summary">
          <div className="">
            <p className="fsize18 md-fsize16 sm-fsize14 textprimary font-500">
              Brained
            </p>
            <h4 className="font-600 fsize28 md-fsize26 sm-fsize22 my1 textgray">
              Junior Executive UI Developer
            </h4>
            <p className="fsize15 md-fsize15 sm-fsize14 leading-m textgray mtpx8">
              Feb 2024 - Jan 2025<br></br>
              Developed and optimized dynamic web applications using Redux for
              state management and React for frontend development.
            </p>
          </div>
        </div>
        <div className="summary">
          <div className="">
            <p className="fsize18 md-fsize16 sm-fsize14 textprimary font-500">
              Brained
            </p>
            <h4 className="font-600 fsize28 md-fsize26 sm-fsize22 my1 textgray">
              Associate UI Developer
            </h4>
            <p className="fsize15 md-fsize15 sm-fsize14 leading-m textgray mtpx8">
              Feb 2023 - Jan 2024<br></br>
              Developed and maintained dynamic user interfaces using React,
              ensuring responsiveness and interactivity across web applications.
            </p>
          </div>
        </div>
        <div className="summary">
          <div className="">
            <p className="fsize18 md-fsize16 sm-fsize14 textprimary font-500">
              Brained
            </p>
            <h4 className="font-600 fsize28 md-fsize26 sm-fsize22 my1 textgray">
              UI Developer Intern
            </h4>
            <p className="fsize15 md-fsize15 sm-fsize14 leading-m textgray mtpx8">
              Jul 2022 - Jan 2023<br></br>
              Utilized HTML, CSS, and Vue.js to design and develop responsive
              and user-friendly interfaces for websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
