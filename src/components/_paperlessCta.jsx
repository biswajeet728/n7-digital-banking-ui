function PaperlessCta({ bgColorEnabled = true }) {
  return (
    <section
      className={
        bgColorEnabled
          ? "relative overflow-hidden bg-[#000d12] px-5 py-14 text-white sm:px-8 sm:py-18 lg:px-6 lg:py-24"
          : ""
      }
    >
      <div className="mx-auto w-full max-w-307.5">
        <div
          className={`relative isolate overflow-hidden rounded-[14px] px-5 py-10 sm:rounded-[18px] sm:px-10 sm:py-14 md:px-12 lg:min-h-87.5 lg:px-14 lg:py-0 ${bgColorEnabled ? "bg-[linear-gradient(90deg,#031E2A_0%,#031E2A_17%,#000D12_42%)]" : ""}`}
        >
          {bgColorEnabled && (
            <img
              className="pointer-events-none absolute left-[-42%] top-4.5 -z-10 h-65 w-auto max-w-none opacity-35 sm:left-[2%] sm:-top-2.5 sm:h-82.5 sm:opacity-45 md:left-[10%] md:h-87.5 lg:left-[16%] lg:top-0 lg:h-91.25 lg:opacity-55"
              src="/assets/images/CB7.png"
              alt=""
              aria-hidden="true"
            />
          )}

          <div className="relative z-10 grid min-h-full grid-cols-1 items-center gap-9 text-center lg:min-h-87.5 lg:grid-cols-[1fr_0.82fr] lg:gap-10 lg:text-left">
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
              <button className="flex h-10.5 w-full max-w-46.5 items-center justify-center rounded-[7px] bg-linear-to-r from-[#00B4FD] to-[#003ACE] font-mono text-[11px] font-light uppercase tracking-widest text-white transition">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaperlessCta;
