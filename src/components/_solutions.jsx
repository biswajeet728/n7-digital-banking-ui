import { FiArrowRight } from "react-icons/fi";

const solutions = [
  {
    title: "Core Banking CB7",
    icon: "/assets/icons/core-banking.png",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    title: "Digital Banking N7",
    icon: "/assets/icons/digital-banking.png",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    title: "Open Banking",
    icon: "/assets/icons/open-banking.png",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    title: "Loan Origination System",
    icon: "/assets/icons/loan.png",
    badge: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    title: "Loan Management System",
    icon: "/assets/icons/loan-2.png",
    badge: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
];

function Solutions() {
  return (
    <section className="relative overflow-hidden bg-[#000d12] pb-24 text-white lg:pb-32">
      <div className="pointer-events-none absolute -right-40 top-35 h-130 w-110 rounded-full bg-[#003768]/35 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-307.5 grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(260px,0.72fr)_1.55fr] lg:gap-24 lg:px-6">
        <div className="lg:pt-2">
          <h2 className="max-w-97.5 text-[28px] font-normal leading-[1.06] text-[#f0f7fb] sm:text-[34px] lg:text-[30px]">
            All of our solutions are
            <br className="hidden sm:block" />
            tailor-made to your needs
          </h2>

          <button className="mt-10 flex h-11 w-full max-w-50 items-center justify-center rounded-[7px] border border-[#c1d5dd]/80 bg-transparent font-mono text-[12px] font-light uppercase tracking-widest text-white transition hover:bg-white hover:text-[#001216]">
            Request Demo
          </button>
        </div>

        <div className="grid grid-cols-1 gap-x-20 gap-y-16 sm:grid-cols-2 lg:gap-y-18">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className={
                index === solutions.length - 1
                  ? "sm:col-start-1 relative"
                  : "relative"
              }
            >
              <div className="flex min-h-10.5 items-start justify-between gap-4">
                <img
                  className="h-9.5 w-9.5 object-contain opacity-85"
                  src={solution.icon}
                  alt=""
                  aria-hidden="true"
                />
                {solution.badge ? (
                  <span className="mt-1 text-[11px] uppercase tracking-[0.08em] text-[#6f838e] absolute left-50 top-8">
                    {solution.badge}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-7 text-[19px] font-normal leading-tight text-[#edf7ff]">
                {solution.title}
              </h3>
              <p className="mt-7 max-w-58.75 text-[14px] font-normal leading-[1.48] text-[#9eb1bb]">
                {solution.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#00B4FD] transition-opacity hover:opacity-80 sm:text-[10px] mt-6"
              >
                <span className="underline underline-offset-[6px]">Learn</span>
                More
                <FiArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
