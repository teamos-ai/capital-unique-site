"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { BiSolidStar } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

const useAnimation = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 767px)");

  const leftCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const leftCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10rem", "5rem"],
  );
  const rightCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const rightCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["10rem", "-5rem"],
  );

  const leftCards = isMobile ? leftCardsMobile : leftCardsDesktop;
  const rightCards = isMobile ? rightCardsMobile : rightCardsDesktop;

  return {
    sectionRef,
    leftCards,
    rightCards,
  };
};

export function Testimonial33() {
  const animationState = useAnimation();
  return (
    <section
      id="relume"
      ref={animationState.sectionRef}
      className="overflow-hidden px-[5%] py-12 md:py-16 lg:py-20"
      ref={animationState.sectionRef}
    >
      <div className="border-border-primary container grid min-h-svh auto-cols-fr grid-cols-1 overflow-hidden border lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div>
            <h2 className="lg:text-10xl mb-5 text-6xl font-bold md:mb-6 md:text-9xl">
              What clients say
            </h2>
            <p className="md:text-md">
              Those who've worked with us speak to the difference clarity and
              speed make.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button title="Read more" variant="secondary">
              Read more
            </Button>
            <Button
              title="View"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              View
            </Button>
          </div>
        </div>
        <div className="border-border-primary grid h-screen auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pl-0 lg:pr-12">
          <motion.div
            className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
            style={{ y: animationState.leftCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Capital Unique moved with precision where others moved with
                    hesitation."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">James Morrison</p>
                    <p>Property developer, Melbourne</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "The process was transparent from start to finish, no hidden
                    costs or surprises."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Sarah Winters</p>
                    <p>Business owner, Brisbane</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Real partnership, not just a transaction, that's what we
                    found here."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Victoria Lane</p>
                    <p>Real estate investor, Hobart</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "They delivered exactly what they promised, on time and with
                    integrity."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Marcus Webb</p>
                    <p>Construction company owner, Gold Coast</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="grid size-full auto-cols-fr grid-cols-1 gap-4"
            style={{ y: animationState.rightCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "They understood the deal when banks wouldn't even look at
                    it."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 5"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p>Developer, Sydney</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Fast decisions without cutting corners, that's what sets
                    them apart."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 6"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Emma Chen</p>
                    <p>Entrepreneur, Perth</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "They treated our capital with the same care we do, which is
                    rare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 7"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">David Rothschild</p>
                    <p>Investor, Sydney</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Capital Unique proved that speed and thoughtfulness aren't
                    mutually exclusive."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 8"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Nicole Hartley</p>
                    <p>Investment advisor, Canberra</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "They listened more than they talked, which told me
                    everything I needed to know."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 9"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Robert Keane</p>
                    <p>Family office director, Adelaide</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
