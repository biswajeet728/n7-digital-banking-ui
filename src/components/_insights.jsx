import React from "react";
import { FiArrowRight } from "react-icons/fi";

function InsightCard({ featured = false, title, author, date }) {
  return (
    <article
      className={`rounded-[22px] border border-white/5 bg-[#07181c] shadow-[0_18px_50px_rgba(0,0,0,0.28)] ${
        featured ? "p-5 lg:p-6" : "p-5 lg:p-6"
      }`}
    >
      {featured ? (
        <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
          <div className="min-h-60 overflow-hidden rounded-2xl">
            <img src="assets/images/insight-img.png" alt="" />
          </div>

          <div className="flex min-h-60 flex-col justify-between py-2 lg:py-3">
            <div>
              <p className="mb-4 text-[11px] font-normal font-mono uppercase tracking-[0.22em] text-[#1f9bd1]">
                Getting started
              </p>
              <h3 className="max-w-[18ch] text-[28px] font-medium leading-[1.12] tracking-[-0.03em] text-white sm:text-[32px]">
                {title}
              </h3>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#64A8C4]">
                <span>{author}</span>
                <span>{date}</span>
              </div>
            </div>

            <button className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl border-2 border-white/50 text-[13px] font-medium font-mono uppercase tracking-[0.22em] text-[#8c9fa6] transition-colors hover:border-white/35 hover:text-white sm:max-w-60">
              Read more
            </button>
          </div>
        </div>
      ) : (
        <div className="flex h-full min-h-66.25 flex-col justify-between">
          <div>
            <p className="mb-4 text-[11px] font-normal font-mono uppercase tracking-[0.22em] text-[#1f9bd1]">
              Getting started
            </p>
            <h3 className="max-w-[18ch] text-[24px] font-medium leading-[1.12] tracking-[-0.03em] text-white sm:text-[27px]">
              {title}
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#64A8C4]">
              <span>{author}</span>
              <span>{date}</span>
            </div>
          </div>

          <button className="inline-flex h-11 w-full items-center justify-center rounded-xl border-2 border-white/50 text-[13px] font-medium font-mono uppercase tracking-[0.22em] text-[#8c9fa6] transition-colors hover:border-white/35 hover:text-white">
            Read more
          </button>
        </div>
      )}
    </article>
  );
}

function Insights() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#031116] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-340">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:items-start xl:gap-10">
          {/* Left hero */}
          <div className="relative pt-2 lg:sticky lg:top-10 isolate">
            {/* glow sits behind the hero content only */}
            <div className="pointer-events-none absolute left-1/3 top-76.25 -translate-x-1/2 z-0 hidden lg:block">
              <div
                className="h-50 w-50 rounded-full opacity-[0.18] blur-[85px]"
                style={{
                  background:
                    "radial-gradient(circle, #00B4FD 0%, #003ACE 55%, transparent 78%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <h1 className="max-w-full md:max-w-[19ch] text-[30px] font-normal leading-[1.08] tracking-[-0.04em] text-[#f2f6f7] sm:text-[48px] lg:text-[45px]">
                Get yourself up-to-speed on all the things happening in fintech
              </h1>

              <button className="mt-12 inline-flex h-12 w-39.5 items-center justify-center rounded-xl border-2 border-white/55 px-5 text-[12px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:border-white/60 hover:bg-white/5 font-mono">
                Insights
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="grid gap-8">
            <InsightCard
              featured
              title="How to transition from a traditional to a digital bank"
              author="David Grohl"
              date="17/08/24"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <InsightCard
                title="How to transition from a traditional to a digital bank"
                author="David Grohl"
                date="17/08/24"
              />
              <InsightCard
                title="How to transition from a traditional to a digital bank"
                author="David Grohl"
                date="17/08/24"
              />
            </div>

            <div className="flex justify-start sm:justify-end pt-1">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.24em] text-[#16b8ff] transition-opacity hover:opacity-80"
              >
                <span className="underline underline-offset-7">Read</span> all
                insights
                <FiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Insights;
