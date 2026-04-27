"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout399() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How we move from scenario to funding
            </h2>
            <p className="md:text-md">Simple. Direct. No wasted steps.</p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Step one</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Understand
                </h3>
                <p>We review the deal, timeline, and exit.</p>
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Step two</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Assess
                </h3>
                <p>We test feasibility, value, and downside.</p>
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Step three</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Confirm
                </h3>
                <p>Terms are agreed before moving forward.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Next"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Step four</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Execute
                </h3>
                <p>Capital is deployed as structured.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Next"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
