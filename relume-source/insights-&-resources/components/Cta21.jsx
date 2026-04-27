"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta21() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-rows-1 items-start gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Next steps
            </h1>
          </div>
          <div>
            <p className="md:text-md">
              Explore our resources or speak with our team about your situation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore">Explore</Button>
              <Button title="Contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="size-full object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
