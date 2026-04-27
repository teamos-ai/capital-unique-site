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
              <p className="mb-3 text-center font-semibold md:mb-4">Approach</p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                How we structure private capital
              </h2>
              <p className="text-center md:text-md">
                Private capital requires a different mindset. We start with your
                constraints, not our criteria.
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
                Structure before solution
              </h3>
              <p className="text-center">
                We understand your situation first, then design the arrangement
                that works.
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
                Discretion and confidentiality
              </h3>
              <p className="text-center">
                Your circumstances remain private. We assess and advise without
                unnecessary disclosure.
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
                Clear terms before commitment
              </h3>
              <p className="text-center">
                You know exactly what you are agreeing to before anything moves
                forward.
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
                Principal-led assessment
              </h3>
              <p className="text-center">
                Decisions are made by experienced principals, not committees or
                automated systems.
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
