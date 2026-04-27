"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout253() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Comparison</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How private capital differs from bank lending
            </h2>
            <p className="md:text-md">
              Banks operate within policy. Private capital operates within
              structure. The distinction matters when your circumstances demand
              flexibility, discretion, or assessment beyond standard lending
              rules.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Explore</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Arrow
              </Button>
            </div>
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Structure over policy
              </h1>
              <p>
                Banks assess whether you fit their lending policy. Private
                capital assesses how to structure your situation to work.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Discretion over standardisation
              </h1>
              <p>
                Banks apply uniform criteria to all borrowers. Private capital
                treats each situation on its merits with confidentiality.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Timing over process
              </h1>
              <p>
                Banks follow fixed approval timelines. Private capital moves
                according to your requirements and market conditions.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Judgement over committees
              </h1>
              <p>
                Banks require committee approval. Private capital relies on
                principal assessment and direct decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
