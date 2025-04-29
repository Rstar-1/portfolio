// import { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const useScrollAnimation = ({ triggerSelector, targetSelector, animationProps, fromProps }) => {
//   useEffect(() => {
//     const triggerElement = document.querySelector(triggerSelector);
//     const targetElement = document.querySelector(targetSelector);

//     if (!triggerElement || !targetElement) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerElement,
//         // start: "top 10%",
//         end: "+=500",
//         scrub: 1,
//         markers: false,
//         toggleActions: "play none none reverse",
//       },
//     });

//     if (fromProps) {
//       tl.from(targetElement, fromProps);
//     }

//     tl.to(targetElement, animationProps);

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };

//   }, [triggerSelector, targetSelector, animationProps, fromProps]);

// };

// export default useScrollAnimation;

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = ({
  triggerSelector,
  targetSelector,
  animationProps,
  fromProps,
  triggerSelector2,
  targetSelector2,
  animationProps2,
  fromProps2,
}) => {
  useEffect(() => {
    // Function to create and return a GSAP animation timeline
    const createScrollAnimation = (
      triggerElement,
      targetElement,
      fromProps,
      animationProps
    ) => {
      if (!triggerElement || !targetElement) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 80%", // You can customize the trigger point
          end: "+=500", // You can adjust this as needed
          scrub: 1,
          markers: false,
          toggleActions: "play none none reverse",
        },
      });

      if (fromProps) {
        tl.from(targetElement, fromProps);
      }

      tl.to(targetElement, animationProps);
    };

    // Trigger and target 1
    const triggerElement1 = document.querySelector(triggerSelector);
    const targetElement1 = document.querySelector(targetSelector);
    createScrollAnimation(
      triggerElement1,
      targetElement1,
      fromProps,
      animationProps
    );

    // Trigger and target 2 (if they exist)
    const triggerElement2 = document.querySelector(triggerSelector2);
    const targetElement2 = document.querySelector(targetSelector2);
    createScrollAnimation(
      triggerElement2,
      targetElement2,
      fromProps2,
      animationProps2
    );

    // Cleanup function to kill all scroll triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    triggerSelector,
    targetSelector,
    animationProps,
    fromProps,
    triggerSelector2,
    targetSelector2,
    animationProps2,
    fromProps2,
  ]);
};

export default useScrollAnimation;
