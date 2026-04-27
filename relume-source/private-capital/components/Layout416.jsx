"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const useRelume = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["20% start", "end end"] : ["start start", "end end"],
  });
  const totalSections = featureSections.length;
  const transforms = (index) => {
    const sectionScrollStart = index / totalSections;
    const sectionScrollEnd = (index + 1) / totalSections;
    const rotate = useTransform(
      scrollYProgress,
      [sectionScrollStart, sectionScrollEnd],
      [0 + index * 3, -30],
    );
    const translateY = useTransform(
      scrollYProgress,
      [sectionScrollStart, sectionScrollEnd],
      ["0vh", "-100vh"],
    );
    const translateX = useTransform(
      scrollYProgress,
      [sectionScrollStart, sectionScrollEnd],
      ["0vw", "-10vw"],
    );
    const style = {
      rotate,
      translateY,
      translateX,
      zIndex: totalSections - index,
    };
    return { style };
  };
  return {
    containerRef,
    transforms,
  };
};

export function Layout416() {
  const useActive = useRelume({
    featureSections: [
      {
        icon: {
          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
          alt: "Relume logo 1",
        },
        title: "Subheading one",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      },
      {
        icon: {
          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
          alt: "Relume logo 2",
        },
        title: "Subheading two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      },
      {
        icon: {
          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
          alt: "Relume logo 3",
        },
        title: "Subheading three",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      },
    ],
  });
  return (
    <section
      id="relume"
      ref={useActive.containerRef}
      className="px-[5%]"
      ref={useActive.containerRef}
    >
      <div className="container">
        <div className="relative h-[300svh] lg:h-[300vh]">
          <div className="static grid h-full grid-cols-1 content-start items-center gap-x-20 gap-y-16 py-16 md:sticky md:top-0 md:h-svh md:grid-cols-2 md:content-normal md:py-0 lg:h-screen">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Scenarios</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                When private capital makes sense
              </h2>
              <p className="md:text-md">
                Your wealth sits in trusts, companies, or family structures.
                Banks struggle with these arrangements. Private capital is built
                for them.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">
                  Explore
                </Button>
                <Button
                  title="Arrow"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Arrow
                </Button>
              </div>
            </div>
            <div className="sticky top-[25%] flex min-h-[24.5rem] flex-col items-center justify-center md:relative md:top-0 md:min-h-[auto]">
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:ml-0"
                style={useActive.transforms(0).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-12"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Asset-rich, income-complex
                </h3>
                <p>
                  You need bridging capital while you transition between
                  positions or complete a transaction. Private capital moves on
                  your timeline, not a bank's approval schedule.
                </p>
              </motion.div>
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:ml-0"
                style={useActive.transforms(1).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 2"
                    className="size-12"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Trust or company-held assets
                </h3>
                <p>
                  You need bridging capital while you transition between
                  positions or complete a transaction. Private capital moves on
                  your timeline, not a bank's approval schedule.
                </p>
              </motion.div>
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:ml-0"
                style={useActive.transforms(2).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 3"
                    className="size-12"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Equity release or repositioning
                </h3>
                <p>
                  You need bridging capital while you transition between
                  positions or complete a transaction. Private capital moves on
                  your timeline, not a bank's approval schedule.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
