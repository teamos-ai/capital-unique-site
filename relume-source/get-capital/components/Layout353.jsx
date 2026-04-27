"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout353() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <p className="mb-3 font-semibold md:mb-4">The Process</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How funding works
            </h2>
            <p className="md:text-md">
              We start by understanding your objectives and assessing the
              opportunity with care. From there, we structure the right solution
              and guide the process through to funding with clarity at every
              stage. The approach is deliberate, transparent, and designed to
              move forward with confidence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Book Quick Chat" variant="secondary">
                Book Quick Chat
              </Button>
              <Button
                title="Charles A.I"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Charles A.I
              </Button>
            </div>
          </div>
          <div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "30%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                01 Understand the deal
              </h3>
              <p>
                We discuss your objectives, timing, and structure so we can
                understand what you’re trying to achieve.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "32%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                02 Assess options
              </h3>
              <p>
                We review the information and identify the most suitable funding
                approach based on your needs.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "34%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                03 Confirm terms
              </h3>
              <p>
                We clearly explain the proposed terms, costs, and conditions
                before anything moves forward.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "36%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                04 Deploy funding
              </h3>
              <p>
                Once agreed, we manage the process through to funding and remain
                involved as the capital is deployed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
