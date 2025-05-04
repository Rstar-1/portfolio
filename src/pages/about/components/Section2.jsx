import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const data = [
    {
      image:
        "http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg",
      subtitle: "Basic",
      title: "Product Marketers",
      desc: "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Lorem ipsum dolor sit consectetur.",
    },
    {
      image:
        "http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg",
      subtitle: "Advanced",
      title: "Product Marketers 2",
      desc: "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Lorem ipsum dolor sit consectetur.",
    },
    {
      image:
        "http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg",
      subtitle: "Pro Advanced",
      title: "Product Marketers 3",
      desc: "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Lorem ipsum dolor sit consectetur.",
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
                  <p className="fsize20 md-fsize18 sm-fsize16 textprimary font-500">
                    {e?.subtitle}
                  </p>
                  <h4 className="font-600 fsize36 md-fsize26 sm-fsize24 my1 textgray">
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
                    className="object-cover h-450px filter-0 rounded-5 w-full ab_images absolute object-cover"
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
