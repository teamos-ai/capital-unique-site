"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout312() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Principles</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              How we approach commercial capital
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Commercial capital works when assessment is grounded in business
              reality, not policy. We structure solutions around what your
              operation can actually service.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Business first
            </h3>
            <p>
              We assess what your business generates and what it can service,
              not what lending policies permit.
            </p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Structure before solution
            </h3>
            <p>
              The right capital structure depends on your cash flow, assets, and
              timeline. We confirm this before moving forward.
            </p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Clear terms
            </h3>
            <p>
              You understand exactly what is required, what is expected, and
              what happens next. No ambiguity.
            </p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Principal judgment
            </h3>
            <p>
              Decisions are made by experienced operators who understand
              commercial business, not automated systems or rigid criteria.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="Learn" variant="secondary">
            Learn
          </Button>
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
    </section>
  );
}
