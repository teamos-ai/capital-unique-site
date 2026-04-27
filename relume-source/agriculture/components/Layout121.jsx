"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const AnimationSection = () => {
  const scrollSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start 55%", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return React.createElement(
    "div",
    {
      className:
        "absolute left-8 right-auto top-[10%] h-3/4 w-0.5 bg-black/15 md:left-[2.4375rem]",
    },
    React.createElement(motion.div, {
      ref: scrollSection,
      className: "bg-black",
      style: { height },
    }),
  );
};

export function Layout121() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Approach</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How we think about agricultural capital
            </h2>
          </div>
          <div className="relative">
            <AnimationSection />
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Seasonal Patters
                </h6>
                <p>Capital matches planting, growth, and harvest timing.</p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 2"
                    className="size-12"
                  />
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Asset Assessment
                </h6>
                <p>Land and equipment come first. Income follows.</p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 3"
                    className="size-12"
                  />
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Structure
                </h6>
                <p>We design the structure before discussing price.</p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 4"
                    className="size-12"
                  />
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Judgement
                </h6>
                <p>
                  Decisions are made by people who understand rural operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
