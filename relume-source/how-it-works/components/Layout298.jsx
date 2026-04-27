"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout298() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">
                Expectations
              </p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                What happens when you engage with us
              </h2>
              <p className="text-center md:text-md">
                Capital Unique moves with purpose and transparency. Here is what
                you can expect from the moment you reach out.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Timeline
              </h3>
              <p className="text-center">
                From enquiry to capital deployment typically takes one to four
                weeks, depending on scenario complexity.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                What we need
              </h3>
              <p className="text-center">
                Business background, scenario details, and supporting
                documentation allow us to assess properly.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                How we decide
              </h3>
              <p className="text-center">
                Each scenario receives structured, experienced judgement from
                our team, not algorithmic scoring.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                When it's not a fit
              </h3>
              <p className="text-center">
                We provide clarity quickly if a scenario cannot proceed, without
                wasting your time.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Learn more" variant="secondary">
              Learn more
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
      </div>
    </section>
  );
}
