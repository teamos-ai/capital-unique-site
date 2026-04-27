"use client";

import { Button, Input } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";

export function Cta58() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <h2>
            <motion.span
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="block text-6xl font-bold md:text-9xl lg:text-10xl"
            >
              Access our
            </motion.span>
          </h2>
          <h2>
            <motion.span
              initial={{ x: "50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="mb-5 block text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl"
            >
              complete library
            </motion.span>
          </h2>
          <p className="md:text-md">
            Receive curated guides, frameworks, and insights delivered directly
            to your inbox.
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button title="Get access">Get access</Button>
            </form>
            <p className="text-xs">
              By signing up, you agree to our Terms and Conditions and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
