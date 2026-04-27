"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout396() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Resources</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Three ways to get clarity
          </h1>
          <p className="md:text-md">
            Each resource is designed to help you understand your options and
            make informed decisions with confidence.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col justify-center border border-border-primary p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                In-depth guides for borrowers
              </h2>
              <p>
                Downloadable frameworks covering loan structures, assessment
                criteria, and strategic capital planning.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="View all"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View all
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center border border-border-primary p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Practical calculators and tools
              </h2>
              <p>
                Simple, functional tools to model scenarios and understand the
                mechanics of your financing.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
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
          <div className="flex flex-col justify-center border border-border-primary p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Calm, expert articles
              </h2>
              <p>
                Thoughtful commentary on private finance, market conditions, and
                strategic decision-making.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
