"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout308() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Scenarios</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Property situations we support
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              These are the kinds of property and development scenarios where
              Capital Unique typically structures capital. If your situation
              resembles one of these, you're likely a fit for our approach.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Development
            </h3>
            <p>
              Projects that need funding aligned to stages, delivery, and exit —
              not bank templates.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Construction
            </h3>
            <p>
              Cost overruns, timing gaps, or lender issues that must be solved
              fast.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Bridging
            </h3>
            <p>
              Short-term capital to acquire, refinance, or exit before delays
              cost you the deal.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Complexity
            </h3>
            <p>
              Assets, valuations, or exits that don’t fit standard lending
              rules.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
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
    </section>
  );
}
