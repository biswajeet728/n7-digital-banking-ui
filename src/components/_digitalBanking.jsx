import { FiArrowRight, FiCheck } from "react-icons/fi";
import { useMediaQuery } from "usehooks-ts";
import useScrollReveal from "../hooks/useScrollReveal";

const sections = [
  {
    title: "Fully compliant with regulatory requirement",
    body: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    bullets: [
      "Pre-integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
  },
  {
    title: "No legacy IT systems",
    body: "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    bullets: [
      "Adaptive UI intelligent API monetization",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
  },
  {
    title: "No traditional branches",
    body: "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimizing operational costs for a seamless branchless experience.",
    bullets: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimized, Adaptable and Scalable",
    ],
  },
];

function Star({ className = "" }) {
  return (
    <img
      className={`h-4.5 w-4.5 shrink-0 object-contain opacity-75 sm:h-5.5 sm:w-5.5 md:h-7 md:w-7 ${className}`}
      src="/assets/icons/star.png"
      alt=""
      aria-hidden="true"
    />
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[12px] font-light leading-[1.35] text-[#15313e]"
        >
          <span className="mt-px flex size-3.75 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(90deg,#00B4FD_0%,#003ACE_82%)] text-white">
            <FiCheck className="text-[10px] stroke-3" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DigitalBanking() {
  const isBelow1280 = useMediaQuery("(max-width: 1279px)");
  const isAtLeast1310 = useMediaQuery("(min-width: 1310px)");
  const isBetween1280And1309 = !isBelow1280 && !isAtLeast1310;

  const [topRef, topVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section className="overflow-hidden bg-[#eaf8ff] text-[#06151d]">
      <div className="flex h-14 w-full items-center justify-between gap-2 overflow-hidden border-b border-[#d7ebf5] bg-white px-3 text-[14px] font-semibold text-[#071018] sm:h-16 sm:gap-3 sm:px-4 sm:text-[16px] md:h-18 md:gap-5 md:px-7 md:text-[24px]">
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-5">
          <Star />
          <span className="text-[#0078ff]">N7</span>
          <span className="hidden text-[#0078ff] md:inline">N7</span>
          <Star className="hidden md:block" />
          <Star className="hidden lg:block" />
          <span className="hidden text-[#0078ff] lg:inline">N7</span>
          <Star className="hidden lg:block" />
          <Star className="hidden lg:block" />
          <Star className="hidden lg:block" />
          <span>Say</span>
          <img
            className="h-6 w-6 object-contain sm:h-12.5 sm:w-12.5"
            src="/assets/images/wave.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <span className="min-w-0 flex-1 whitespace-nowrap text-center text-[14px] sm:text-[18px] md:text-[24px]">
          to the new way of banking
        </span>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-5">
          <Star />
          <span className="hidden text-[#0078ff] lg:inline">CB7</span>
          <span className="hidden text-[#0078ff] lg:inline">CB7</span>
          <Star className="hidden md:block" />
          <Star className="hidden lg:block" />
          <span>Say</span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-307.5 overflow-hidden px-5 py-16 sm:px-8 lg:overflow-visible lg:px-6 lg:py-20">
        <img
          className="pointer-events-none absolute left-[24%] top-12 hidden w-107.5 max-w-none opacity-50 sm:left-[28%] sm:block sm:w-130 lg:left-[23%] lg:top-13.5 lg:w-140"
          src="/assets/images/N7.png"
          alt=""
          aria-hidden="true"
        />

        <img
          className="pointer-events-none absolute left-0 top-92.5 w-50 max-w-none opacity-100 sm:w-65 md:w-[320px] lg:-left-15 lg:w-97.5 hidden max-[1400px]:block"
          src="/assets/icons/blade.png"
          alt=""
          aria-hidden="true"
        />

        <img
          className="pointer-events-none absolute mt-20 right-0 top-307.5 w-50 max-w-none opacity-100 sm:w-65 md:w-[320px] lg:-right-15 lg:w-122.5 hidden max-[1400px]:block"
          src="/assets/icons/7.png"
          alt=""
          aria-hidden="true"
        />

        <div
          ref={topRef}
          className={`relative z-10 grid grid-cols-1 gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:gap-10 ${topVisible ? "animate-[fade-up_0.7s_ease-out_both]" : "opacity-0 translate-y-4"}`}
        >
          <div className="max-w-90 text-center sm:mx-auto md:mx-0 md:text-left">
            <h2 className="text-[28px] font-normal leading-[1.08] text-[#07151d] sm:text-[34px] md:text-[38px] lg:text-[42px]">
              Digital banking
              <br />
              out-of-the-box
            </h2>
            <p className="mt-6 text-[12px] font-light leading-normal text-[#46606b] md:text-[13px]">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>
            <button className="mt-7 flex h-10.5 w-full max-w-43.5 items-center justify-center rounded-[7px] bg-linear-to-r from-[#00B4FD] to-[#003ACE] font-mono text-[11px] font-light uppercase tracking-widest text-white transition hover:shadow-[0_0_24px_rgba(0,180,253,0.35)] max-md:mx-auto">
              Request Demo
            </button>
            <a
              href="#"
              className="group inline-flex items-center gap-2 font-mono font-medium text-[11px] uppercase tracking-[0.14em] bg-linear-to-r from-[#00B4FD] to-[#003ACE] bg-clip-text text-transparent transition-opacity hover:opacity-80 sm:text-[10px] mt-5"
            >
              <span className="underline underline-offset-[6px] decoration-[#00B4FD]">
                Learn
              </span>
              More
              <FiArrowRight size={15} className="text-[#00B4FD]" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start md:gap-x-8 md:gap-y-20 lg:gap-x-12 lg:gap-y-36">
            <div className="flex justify-center md:justify-start">
              <img
                className="w-50 max-w-full select-none sm:w-57.5 md:w-52.5 lg:w-59"
                src="/assets/images/iPhone 13 Pro.png"
                alt="Digital banking home screen"
                draggable="false"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
            </div>

            <article className="mx-auto max-w-70 text-center sm:max-w-75 md:mx-0 md:max-w-60 md:pt-16 md:text-left lg:max-w-52.5 lg:pt-20">
              <h3 className="text-[14px] font-semibold leading-[1.35] text-[#07151d]">
                {sections[0].title}
              </h3>
              <p className="mt-5 text-[12px] font-light leading-[1.45] text-[#46606b]">
                {sections[0].body}
              </p>
              <BulletList items={sections[0].bullets} />
            </article>

            <article className="mx-auto max-w-70 text-center sm:max-w-75 md:mx-0 md:max-w-60 md:pt-6 md:text-left lg:max-w-52.5 lg:pt-8">
              <h3 className="text-[14px] font-semibold leading-[1.35] text-[#07151d]">
                {sections[1].title}
              </h3>
              <p className="mt-5 text-[12px] font-light leading-[1.45] text-[#46606b]">
                {sections[1].body}
              </p>
              <BulletList items={sections[1].bullets} />
            </article>

            <div className="flex justify-center md:justify-start md:pt-2">
              <img
                className="w-50 max-w-full select-none sm:w-57.5 md:w-52.5 lg:w-59"
                src="/assets/images/iPhone 13 Pro-1.png"
                alt="Digital banking analytics screen"
                draggable="false"
                style={{ animation: "float 6s ease-in-out 1s infinite" }}
              />
            </div>

            <div className="flex justify-center md:justify-start md:pt-4">
              <img
                className="w-50 max-w-full select-none sm:w-57.5 md:w-52.5 lg:w-59"
                src="/assets/images/iPhone 13 Pro-2.png"
                alt="Digital banking profile screen"
                draggable="false"
              />
            </div>

            <article className="mx-auto max-w-70 text-center sm:max-w-75 md:mx-0 md:max-w-60 md:pt-20 md:text-left lg:max-w-52.5 lg:pt-24">
              <h3 className="text-[14px] font-semibold leading-[1.35] text-[#07151d]">
                {sections[2].title}
              </h3>
              <p className="mt-5 text-[12px] font-light leading-[1.45] text-[#46606b]">
                {sections[2].body}
              </p>
              <BulletList items={sections[2].bullets} />
            </article>
          </div>
        </div>
      </div>

      <div ref={gridRef} className={`relative mx-auto w-full max-w-307.5 mb-10 px-4 py-5 sm:px-6 lg:px-8 ${gridVisible ? "animate-[fade-up_0.7s_ease-out_both]" : "opacity-0 translate-y-4"}`}>
        <div className="mx-auto w-full max-w-307.5">
          <div className="relative isolate overflow-hidden rounded-[14px] bg-[linear-gradient(90deg,#031E2A_0%,#031E2A_17%,#000D12_42%)] px-5 py-10 sm:rounded-[18px] sm:px-10 sm:py-14 md:px-12 lg:min-h-105 lg:px-14 lg:py-0">
            <img
              className="pointer-events-none absolute right-[-42%] top-4.5 -z-10 h-65 w-auto max-w-none sm:right-[2%] sm:-top-2.5 sm:h-82.5 md:right-[10%] md:h-87.5 lg:-right-10 lg:-top-1.25 lg:h-86.25 opacity-55"
              src="/assets/images/N7.png"
              alt=""
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(to top, #031E2A 0%, #031E2Acc 20%, #031E2A00 50%), linear-gradient(to left, #031E2A80 0%, #031E2A40 25%, transparent 55%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid min-h-full grid-cols-1 items-center gap-9 text-center lg:min-h-105 lg:grid-cols-[1fr_0.82fr] lg:gap-10 lg:text-left">
              <div>
                <h2 className="text-[26px] font-normal leading-[1.1] text-[#edf7ff] min-[380px]:text-[30px] sm:text-[38px] lg:text-[42px]">
                  Take the full advantage of
                  <br />
                  going paper-less now.
                </h2>

                <p className="mx-auto mt-5 max-w-120 text-[12px] font-light leading-[1.55] text-[#9eb1bb] sm:mt-7 sm:text-[13px] lg:mx-0">
                  CB7 helps your financial institution improve the client
                  experience,
                  <br className="hidden sm:block" />
                  automate and optimize procedures, simplify banking operations
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-center">
                <button className="flex h-10.5 w-full max-w-46 items-center justify-center rounded-[7px] border border-[#c1d5dd]/80 bg-transparent font-mono text-[11px] font-light uppercase tracking-widest text-white transition hover:bg-white hover:text-[#001216]">
                  Contact Us
                </button>
                <button className="flex h-10.5 w-full max-w-46.5 items-center justify-center rounded-[7px] bg-linear-to-r from-[#00B4FD] to-[#003ACE] font-mono text-[11px] font-light uppercase tracking-widest text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,180,253,0.35)]">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalBanking;
