const companyLogos = [
  { src: "/assets/companies/Vector.png", alt: "Kontrast", label: "shells" },
  { src: "/assets/companies/Group 45.png", alt: "Shells", label: "shells" },
  {
    src: "/assets/companies/Vector-1.png",
    alt: "SmartFinder",
    label: "smartfinder",
  },
  { src: "/assets/companies/Vector-2.png", alt: "Zoomerr", label: "zoomerr" },
  { src: "/assets/companies/Group 46.png", alt: "ArtVenue", label: "artvenue" },
  {
    src: "/assets/companies/Group 47.png",
    alt: "Wavesmarathon",
    label: "wavesmarathon",
  },
];

function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#000d12] pt-29 text-white sm:pt-35 lg:min-h-190 lg:pt-42.5">
      <div className="pointer-events-none absolute left-1/2 top-95 -z-10 h-62.5 w-75 -translate-x-1/2 rounded-full bg-[#00458f]/80 blur-[56px] sm:top-77.5 sm:h-75 sm:w-95 lg:left-[64%] lg:top-44.5 lg:h-78.75 lg:w-101.25 lg:blur-[62px]" />

      <div className="mx-auto grid w-full max-w-307.5 grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(460px,1fr)] lg:gap-16 lg:px-6">
        <div className="mx-auto max-w-140 text-center lg:mx-0 lg:max-w-130 lg:text-left">
          <h1 className="text-[40px] font-normal leading-[1.04] text-[#edf7ff] sm:text-[48px] lg:text-[54px]">
            The new foundation
            <br />
            of modern banking
          </h1>

          <p className="mx-auto mt-6 max-w-110 text-[13px] font-light leading-[1.6] text-[#9eb1bb] sm:text-[15px] lg:mx-0 lg:text-[16px]">
            We drive innovation and growth, provide seamless{" "}
            <br className="hidden lg:block" /> customer experience and
            operational excellence
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:mt-10 lg:justify-start">
            <button className="flex h-11 w-full max-w-46.5 items-center justify-center rounded-[7px] bg-linear-to-r from-[#00B4FD] to-[#003ACE] font-mono text-[12px] font-light uppercase tracking-widest text-white transition">
              Request Demo
            </button>
            <button className="flex h-11 w-full max-w-46 items-center justify-center rounded-[7px] border border-[#c1d5dd]/80 bg-transparent font-mono text-[12px] font-light uppercase tracking-widest text-white transition hover:bg-white hover:text-[#001216]">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative mx-auto mt-2 flex w-full max-w-155 justify-center lg:-mr-6 lg:mt-3 lg:max-w-none lg:justify-end">
          <img
            className="w-full max-w-115 select-none sm:w-[86%] lg:w-140 lg:max-w-none"
            src="/assets/images/hero-banner.png"
            alt="Digital banking dashboard preview"
            draggable="false"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-307.5 px-5 pb-16 text-center sm:px-8 lg:mt-17 lg:px-6 lg:text-left">
        <p className="font-open-sans text-[14px] font-normal leading-none text-[#a8b4bc]">
          Trusted By:
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-y-4 opacity-80 sm:gap-x-5 lg:justify-start">
          {companyLogos.map((logo) => (
            <div className="flex items-center gap-1">
              <img
                key={logo.src}
                className="h-4 w-auto object-contain sm:h-4"
                src={logo.src}
                alt={logo.alt}
              />
              <span className="uppercase text-[#586E84] text-xs font-mono tracking-[0.08em]">
                {logo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
