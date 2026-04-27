"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog34() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Insights</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Thought on capital
            </h1>
            <p className="md:text-md">
              Clear perspectives on private finance and complex lending
              scenarios
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Lending
              </p>
              <p className="inline text-sm font-semibold">7 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                When banks say no, alternatives emerge
              </h2>
            </a>
            <p>Understanding non-conforming lending and when it makes sense</p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Strategy
              </p>
              <p className="inline text-sm font-semibold">6 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Structuring capital for development projects
              </h2>
            </a>
            <p>
              How developers navigate complex financing across multiple stages
            </p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Investing
              </p>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Private capital and portfolio diversification
              </h2>
            </a>
            <p>
              Why sophisticated investors consider structured lending
              opportunities
            </p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
