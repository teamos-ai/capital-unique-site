"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Ready to structure your build
        </h2>
        <p className="md:text-md">
          Construction capital works when timing, draws, and risk are clear from
          the start.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Use Charles A.I">Use Charles A.I</Button>
          <Button title="Book a call" variant="secondary">
            Book a call
          </Button>
        </div>
      </div>
    </section>
  );
}
