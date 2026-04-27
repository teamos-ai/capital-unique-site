"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Header6() {
  const formState = useForm();
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              One advisor, one standard, one outcome
            </h1>
            <p className="text-text-alternative md:text-md">
              Capital Unique does not operate as a product distributor or volume
              broker. Each opportunity is approached as a standalone problem to
              be understood, structured, and assessed on its own merits. The
              work begins with listening—objectives, constraints, timing—and
              moves toward a structure that aligns capital with reality, not
              templates.
            </p>
            <div className="mt-6 max-w-sm md:mt-8">
              <form
                className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Stay informed">Stay informed</Button>
              </form>
              <p className="text-xs text-text-alternative">
                By signing up, you agree to our terms and privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
