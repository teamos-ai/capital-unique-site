"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout508() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Distinction</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            How we differ from banks
          </h1>
          <p className="md:text-md">
            Banks follow policy. Commercial capital follows business. The
            difference matters when your operation doesn't fit standard lending
            templates.
          </p>
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 gap-x-12 border border-border-primary lg:gap-x-0">
          <Tabs defaultValue="tab-1" className="grid">
            <TabsList className="order-2 flex-col md:order-1 md:flex-row">
              <TabsTrigger
                value="tab-1"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-0 data-[state=active]:bg-background-primary data-[state=active]:text-text-primary md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_#fff]"
              >
                Business reality
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-0 data-[state=active]:bg-background-primary data-[state=active]:text-text-primary md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_#fff]"
              >
                Cash flow context
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-0 data-[state=active]:bg-background-primary data-[state=active]:text-text-primary md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_#fff]"
              >
                Asset focus
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-0 data-[state=active]:bg-background-primary data-[state=active]:text-text-primary md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_#fff]"
              >
                Timing awareness
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-0 data-[state=active]:bg-background-primary data-[state=active]:text-text-primary md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_#fff]"
              >
                Business reality
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-t p-6 text-md font-bold leading-[1.4] duration-0 data-[state=active]:bg-background-primary data-[state=active]:text-text-primary md:items-center md:justify-center md:border-b md:border-r md:border-t-0 md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_#fff]"
              >
                Timing matters
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="tab-1"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Assessment</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Policy rules versus operating reality
                  </h2>
                  <p>
                    Banks apply fixed lending criteria regardless of industry or
                    business model. We assess the actual cash flow and asset
                    position of your operation.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Learn" variant="secondary">
                      Learn
                    </Button>
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
            </TabsContent>
            <TabsContent
              value="tab-2"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Assessment</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Policy rules versus operating reality
                  </h2>
                  <p>
                    Banks apply fixed lending criteria regardless of industry or
                    business model. We assess the actual cash flow and asset
                    position of your operation.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Learn" variant="secondary">
                      Learn
                    </Button>
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
            </TabsContent>
            <TabsContent
              value="tab-3"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Assessment</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Policy rules versus operating reality
                  </h2>
                  <p>
                    Banks apply fixed lending criteria regardless of industry or
                    business model. We assess the actual cash flow and asset
                    position of your operation.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Learn" variant="secondary">
                      Learn
                    </Button>
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
            </TabsContent>
            <TabsContent
              value="tab-4"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Assessment</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Policy rules versus operating reality
                  </h2>
                  <p>
                    Banks apply fixed lending criteria regardless of industry or
                    business model. We assess the actual cash flow and asset
                    position of your operation.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Learn" variant="secondary">
                      Learn
                    </Button>
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
            </TabsContent>
            <TabsContent
              value="tab-5"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Assessment</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Policy rules versus operating reality
                  </h2>
                  <p>
                    Banks apply fixed lending criteria regardless of industry or
                    business model. We assess the actual cash flow and asset
                    position of your operation.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Learn" variant="secondary">
                      Learn
                    </Button>
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
            </TabsContent>
            <TabsContent
              value="tab-6"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Assessment</p>
                  <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Policy rules versus operating reality
                  </h2>
                  <p>
                    Banks apply fixed lending criteria regardless of industry or
                    business model. We assess the actual cash flow and asset
                    position of your operation.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Learn" variant="secondary">
                      Learn
                    </Button>
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
