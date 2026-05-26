import { FiArrowRight, FiCheck } from "react-icons/fi";
import { useMediaQuery } from "usehooks-ts";
import useScrollReveal from "../hooks/useScrollReveal";

const features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc.)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

function LaptopFrame({ src, alt, className = "", isLeft = true }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-t-md border-2 border-[#071820] p-2 ring-1 ring-[#00a7ff]">
        <img
          className="block w-full select-none"
          src={src}
          alt={alt}
          draggable="false"
        />
      </div>
      <div
        className={`mt-0 h-3 rounded-b-[10px] border border-[#0079d9] bg-[#001720] sm:h-5.25 ${
          isLeft ? "-ml-6 sm:-ml-15" : "-mr-6 sm:-mr-10"
        }`}
      />
    </div>
  );
}

function CoreBanking() {
  const isBelow1280 = useMediaQuery("(max-width: 1279px)");
  const isAtLeast1310 = useMediaQuery("(min-width: 1310px)");
  const isBetween1280And1309 = !isBelow1280 && !isAtLeast1310;

  const [topRef, topVisible] = useScrollReveal();
  const [bottomRef, bottomVisible] = useScrollReveal();

  return (
    <section
      className={`relative isolate overflow-hidden bg-[#000d12] text-white ${
        isBelow1280 ? "" : "min-h-275"
      }`}
    >
      <img
        className="pointer-events-none absolute -left-90 top-15 -z-10 w-245 max-w-none opacity-35 sm:-left-65 sm:w-275 md:-left-45 lg:-left-24 lg:top-12 lg:w-245 lg:opacity-40"
        src="/assets/images/CB7.png"
        alt=""
        aria-hidden="true"
      />

      {!isBelow1280 ? (
        <LaptopFrame
          className={`absolute top-4.5 ${
            isAtLeast1310
              ? "-right-8.5 w-130 min-[1700px]:w-160"
              : "-right-4.5 w-103.5"
          }`}
          src="/assets/images/request-mac-book.png"
          alt="AML dashboard"
        />
      ) : null}

      {!isBelow1280 ? (
        <LaptopFrame
          className={`absolute ${
            isAtLeast1310
              ? "-left-0.5 top-116.5 w-131.25 min-[1900px]:w-162.5"
              : "-left-1 top-112 w-117.5"
          }`}
          src="/assets/images/features-mac.png"
          alt="KYC dashboard"
          isLeft={false}
        />
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-307.5 px-5 py-16 sm:px-8 sm:py-20 lg:px-6 lg:py-0">
        <div
          ref={topRef}
          className={`max-w-130 text-center sm:mx-auto lg:mx-0 lg:pt-19 lg:text-left min-[1300px]:max-w-152.5 ${topVisible ? "animate-[fade-up_0.7s_ease-out_both]" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-[34px] font-normal leading-[1.05] text-[#edf7ff] sm:text-[42px] lg:text-[46px] min-[1300px]:text-[54px]">
            A complete cloud-based
            <br />
            core banking.
          </h2>

          <p className="mt-7 text-[12px] font-light leading-[1.55] text-[#9eb1bb] sm:text-[13px] min-[1300px]:text-[15px]">
            Faster time to market with our cloud-based
            <br className="hidden sm:block" />
            core banking services
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start lg:items-start">
            <button className="flex h-10.5 w-full max-w-44 items-center justify-center rounded-[7px] bg-linear-to-r from-[#00B4FD] to-[#003ACE] font-mono text-[11px] font-light uppercase tracking-widest text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,180,253,0.35)] min-[1300px]:h-11.5 min-[1300px]:max-w-49 min-[1300px]:text-[12px]">
              Request Demo
            </button>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#00B4FD] transition-opacity hover:opacity-80 sm:text-[10px] mt-6"
          >
            <span className="underline underline-offset-[6px]">Learn</span>
            More
            <FiArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {isBelow1280 ? (
          <div className="mt-12 space-y-12 pb-4">
            <div className="flex justify-end">
              <LaptopFrame
                className="w-[min(520px,104vw)] translate-x-[12%] sm:w-[min(560px,96vw)] sm:translate-x-[8%]"
                src="/assets/images/request-mac-book.png"
                alt="AML dashboard"
              />
            </div>

            <div className="flex justify-start">
              <LaptopFrame
                className="w-[min(560px,106vw)] translate-x-[-12%] sm:w-[min(620px,98vw)] sm:translate-x-[-8%]"
                src="/assets/images/features-mac.png"
                alt="KYC dashboard"
                isLeft={false}
              />
            </div>
          </div>
        ) : null}

        <div
          ref={bottomRef}
          className={`mx-auto max-w-130 ${
            isBelow1280
              ? "mt-20 sm:mt-24"
              : isAtLeast1310
                ? "mt-65 ml-auto -mr-10 max-w-155 min-[1700px]:mr-30"
                : isBetween1280And1309
                  ? "mt-37.5 ml-auto mr-17.5"
                  : ""
          } ${bottomVisible ? "animate-[fade-up_0.7s_ease-out_both]" : "opacity-0 translate-y-4"}`}
        >
          <h3 className="text-center text-[21px] font-normal leading-[1.22] text-[#edf7ff] sm:text-[22px] lg:text-left min-[1300px]:text-[27px]">
            Run a more efficient, flexible,and digitally
            <br className="hidden sm:block" />
            connected corebanking system
          </h3>

          <p className="mt-9 text-center text-[12px] font-semibold text-[#edf7ff] lg:text-left">
            What you will get:
          </p>

          <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 min-[1300px]:gap-x-14 min-[1300px]:gap-y-4">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-[12px] font-light leading-[1.35] text-[#c2d0d7] min-[1300px]:text-[13px]"
              >
                <span className="mt-px flex size-3.75 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(90deg,#00B4FD_0%,#003ACE_82%)] text-white">
                  <FiCheck className="text-[10px] stroke-3" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CoreBanking;
