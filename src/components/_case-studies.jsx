import React from "react";
import { FiArrowLeft, FiArrowRight, FiZap } from "react-icons/fi";

function CaseStudyCard({ active = false }) {
  return (
    <article
      className={`
        relative shrink-0 overflow-hidden rounded-[18px] sm:rounded-[22px] lg:rounded-[28px]
        border border-white/5 bg-[#04171b]
        transition-all duration-300
        ${
          active
            ? "w-full max-w-245 opacity-100"
            : "w-full max-w-230 opacity-[0.18] scale-[0.92]"
        }
      `}
    >
      <div className="grid gap-6 p-4 sm:gap-8 sm:p-6 lg:min-h-105 lg:grid-cols-[420px_1fr] lg:items-center lg:gap-10 lg:p-8">
        {/* Placeholder image */}
        <div className="overflow-hidden rounded-[14px] sm:rounded-[18px] lg:rounded-[20px] bg-[#072060]">
          <img
            src="assets/images/insight-img.png"
            alt="Case study"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex h-full flex-col justify-between py-1 sm:py-2">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[#0ea5df] sm:mb-5 sm:text-[11px]">
              Getting started
            </p>

            <h3 className="max-w-[16ch] text-[24px] font-normal leading-[1.08] tracking-[-0.04em] text-white sm:text-[30px] lg:text-[42px]">
              How we help brand reach out to more people
            </h3>

            <div className="mt-5 flex items-center gap-3 sm:mt-8">
              <img src="assets/companies/Vector-1.png" alt="Zoomerr Logo" />

              <span className="text-[15px] font-semibold text-[#6c8193] sm:text-[18px]">
                Zoomerr
              </span>
            </div>
          </div>

          <button className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-[10px] border border-white/20 font-mono text-[11px] uppercase tracking-[0.22em] text-[#7d9299] transition-all duration-300 hover:border-white/40 hover:text-white sm:mt-10 sm:h-12 sm:rounded-xl sm:text-[12px]">
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}

function CaseStudies() {
  return (
    <section className="overflow-hidden bg-[#021015] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14 lg:mb-16">
          <h2 className="text-[30px] font-normal tracking-[-0.04em] text-[#eef6f8] sm:text-[42px] lg:text-[56px]">
            Our Case Studies
          </h2>
        </div>

        {/* Slider Area */}
        <div className="relative flex items-center justify-center">
          {/* Left faded card */}
          <div className="absolute -left-2.5 top-1/2 hidden -translate-y-1/2 lg:block">
            <CaseStudyCard />
          </div>

          {/* Active card */}
          <div className="relative z-10 w-full flex items-center justify-center">
            <CaseStudyCard active />
          </div>

          {/* Right faded card */}
          <div className="absolute -right-7.5 top-1/2 hidden -translate-y-1/2 lg:block">
            <CaseStudyCard />
          </div>
        </div>

        {/* Bottom controls */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:mt-12 sm:flex-row sm:gap-8">
          {/* Navigation */}
          <div className="flex items-center justify-center w-full gap-5 sm:gap-7">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-all duration-300 hover:bg-[#00B4FD] hover:text-black sm:h-10 sm:w-10">
              <FiArrowLeft className="text-[18px] sm:text-[22px]" />
            </button>

            {/* Pagination */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="h-2 w-8 rounded-full bg-[#0a6c97] sm:h-2.5 sm:w-10.5" />
              <span className="h-2 w-2 rounded-full border border-[#0a6c97] sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full border border-[#0a6c97] sm:h-2.5 sm:w-2.5" />
            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-all duration-300 hover:bg-[#00B4FD] hover:text-black sm:h-10 sm:w-10">
              <FiArrowRight className="text-[18px] sm:text-[22px]" />
            </button>
          </div>

          {/* View all */}
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#00B4FD] transition-opacity hover:opacity-80 sm:text-[12px]"
          >
            <span className="underline underline-offset-[6px]">View</span>
            all
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
