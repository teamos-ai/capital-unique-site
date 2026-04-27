"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Questions
        </h2>
        <p className="md:text-md">
          Clarity on our guides, access, and approach to financial education.
        </p>
        <div className="mt-6 md:mt-8">
          <Button title="Contact" variant="secondary">
            Contact
          </Button>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Who are these guides for?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our guides serve borrowers navigating non-bank lending, developers
              structuring complex deals, and investors building private lending
              portfolios. Each guide addresses real scenarios where traditional
              finance falls short.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Do I need to register to download?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes. Registration ensures we can deliver guides tailored to your
              situation and keep you informed of new resources. It takes a
              moment and opens access to our complete library.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How current are these frameworks?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our guides reflect current Australian lending practices and
              regulatory environments. We update them regularly as market
              conditions and lending structures evolve.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Can I share these with my team?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Guides are for your personal use. If your team needs access,
              contact us and we can discuss options that suit your situation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What if I need specific advice?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              These guides provide education and frameworks, not personal
              financial advice. For scenarios specific to your circumstances,
              our team is ready to discuss your situation directly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
