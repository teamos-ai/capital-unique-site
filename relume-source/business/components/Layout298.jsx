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
              <p className="mb-3 text-center font-semibold md:mb-4">Process</p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                How business capital moves
              </h2>
              <p className="text-center md:text-md">
                Every scenario is assessed on its own merits. We focus on
                clarity, structure, and suitability before moving forward.
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
                Clarity
              </h3>
              <p className="text-center">
                We start by understanding what you are trying to achieve and why
                the capital is needed.
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
                Structure
              </h3>
              <p className="text-center">
                We look at the full picture—business activity, assets,
                ownership, and cash movement—together.
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
                Suitability
              </h3>
              <p className="text-center">
                We assess whether the structure makes sense before discussing
                terms or timelines.
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
                Judgement
              </h3>
              <p className="text-center">
                Your scenario is reviewed personally, with experience, not
                automated filters or committees.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
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
      </div>
    </section>
  );
}
