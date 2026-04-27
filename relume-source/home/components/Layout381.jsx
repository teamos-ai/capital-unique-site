"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout381() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Approach</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Built for those who think differently
          </h1>
          <p className="md:text-md">
            Capital Unique exists where traditional banking ends. We understand
            complex deals, unconventional scenarios, and the investors who fund
            them.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <div className="flex flex-col border border-border-primary sm:col-span-2 sm:row-span-2">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Borrowers</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    For borrowers seeking finance
                  </h2>
                  <p>
                    Fast decisions on deals banks decline, with transparent
                    terms and no unnecessary friction.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Explore" variant="secondary">
                    Explore
                  </Button>
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary sm:col-span-2 sm:grid sm:auto-cols-fr sm:grid-cols-2">
              <div className="flex size-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-bento-portrait2.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="block flex-col justify-center p-6 sm:flex">
                <div>
                  <p className="mb-2 font-semibold">Investors</p>
                  <h2 className="mb-2 text-xl font-bold md:text-2xl">
                    For investors seeking returns
                  </h2>
                  <p>
                    Structured opportunities with clear governance, managed
                    risk, and meaningful partnerships.
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
          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] gap-6 md:gap-8">
            <div className="flex flex-col border border-border-primary">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 1"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Intelligent, discreet, reliable
                  </h3>
                  <p>
                    We move quietly, think carefully, and deliver with
                    precision.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            <div className="flex flex-col border border-border-primary">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 2"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Intelligent, discreet, reliable
                  </h3>
                  <p>
                    We move quietly, think carefully, and deliver with
                    precision.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            <div className="flex flex-col border border-border-primary sm:col-span-2 sm:row-span-2">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Partners</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Deploy capital with clarity
                  </h2>
                  <p>
                    Structured deals, managed risk, genuine partnerships built
                    to endure.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Explore" variant="secondary">
                    Explore
                  </Button>
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
