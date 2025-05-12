import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  useEffect(() => {
    const maski = document.querySelectorAll(".mainabout2");

    maski.forEach((maskl) => {
      const image2 = maskl.querySelector(".abouts2");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: maskl,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(maskl, { autoAlpha: 1 })
        .from(maskl, 1.5, {
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
      <div className="w-full flex sm-block items-center py40 md-py30 sm-py20">
        <div className="mainabout2 relative overflow-hidden w-50 sm-w-full">
          <img
            src="https://www.eschoolnews.com/files/2024/05/AI-skills-education-workforce-readiness-AI-skill-development.jpeg"
            className="abouts2 object-cover h-450px filter-0 rounded-5 w-full flex"
            alt="An elegant Peugeot car"
          />
        </div>
        <div className="w-50 sm-w-full sm-mtpx25 plpx30 md-plpx20 sm-plpx1">
          <p className="fsize20 md-fsize18 sm-fsize16 textprimary font-500">
            Skills
          </p>
          <h4 className="font-600 fsize30 md-fsize26 sm-fsize24 my1 textgray">
            Technologies I Work With
          </h4>
          <p className="fsize16 md-fsize15 sm-fsize14 leading-m textgray mtpx8">
            Proficient in JavaScript (ES6+), HTML5, CSS3, and SCSS, with a
            strong command of modern frameworks and libraries like React.js,
            Next.js, Vue.js, Redux, Tailwind CSS, and Material-UI. Skilled in
            using tools such as Git, GitHub, VS Code, and Chrome DevTools, with
            a focus on cross-browser compatibility, SEO optimization, and smooth
            UI animations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
