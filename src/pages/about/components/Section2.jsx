import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import img1 from '../../../assets/img8.png'
import img2 from '../../../assets/img3.png'
import img3 from '../../../assets/img2.png'

const Section2 = () => {
  const data = [
    {
      image: img1,
      subtitle: "Basic",
      title: "Dashboard UI",
      desc: "Designed and developed a responsive Dashboard UI using React, HTML, and CSS, featuring dynamic components and a clean layout. Implemented interactive UI elements for improved user experience and deployed the project on Netlify for live access.",
    },
    {
      image: img2,
      subtitle: "Advanced",
      title: "Deevior Website",
      desc: "Developed the Deevior website using Vue.js with a unique horizontal scroll layout. Focused on smooth scroll interactions, component-based architecture, and responsive design to deliver an engaging and modern user experience.",
    },
    {
      image: img3,
      subtitle: "Expert",
      title: "Carboncircle Website",
      desc: "Built an advanced Carbon Circle brand website using Vue.js, focusing on performance, modular components, and responsive design. Ensured seamless navigation and maintainable code architecture for a smooth user experience.",
    },
  ];
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".ab_images:not(:first-child)", { opacity: 0, scale: 0.5 });
      const animation = gsap.to(".ab_images:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
        ease: "power3.out",
      });
      ScrollTrigger.create({
        trigger: ".ab_product",
        start: "top top",
        end: "bottom bottom",
        pin: ".pin_sec_ab",
        scrub: true,
        markers: true,
        animation: animation,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="ab_product relative">
      <div className="flex sm-flex-column-reverse sm-py30">
        <div className="w-50 sm-w-full">
          {data?.map((e, index) => {
            return (
              <div className="ab_pr_100 w-full flex items-center" key={index}>
                <div className="prpx40 md-prpx30 sm-prpx1 sm-py20">
                  <p className="fsize18 md-fsize16 sm-fsize14 textprimary font-500">
                    {e?.subtitle}
                  </p>
                  <h4 className="font-600 fsize30 md-fsize26 sm-fsize24 my1 textgray">
                    {e?.title}
                  </h4>
                  <p className="fsize16 md-fsize15 sm-fsize14 leading-m textgray mtpx8">
                    {e?.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-50 sm-w-full">
          <div className="w-full ab_pr_100 pin_sec_ab flex items-center">
            <div className="w-full h-450px relative">
              {data?.map((item, i) => {
                return (
                  <img
                    key={i}
                    src={item?.image}
                    alt={item?.image}
                    className="object-contain h-450px rounded-5 w-full ab_images absolute"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
