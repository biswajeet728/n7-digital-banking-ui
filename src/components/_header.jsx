import { useRef, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { useOnClickOutside } from "usehooks-ts";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <header className="fixed left-1/2 top-4 z-50 w-full -translate-x-1/2 px-4 sm:top-5">
      <div
        ref={menuRef}
        className="mx-auto w-full max-w-200 rounded-xl bg-[#212526] px-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:rounded-[14px] min-[1300px]:max-w-245"
      >
        <div className="flex h-14 items-center justify-between sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-[24px] font-medium leading-none tracking-[-0.08em] text-white sm:text-[28px]">
              N7
            </h1>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-4 md:flex lg:gap-6">
            <button className="flex items-center gap-0.75 text-[14px] font-mono font-light uppercase tracking-[0.08em] text-white/85 transition hover:text-white">
              Solutions
              <FiChevronDown className="mt-px text-[24px]" />
            </button>

            <button className="flex items-center gap-0.75 text-[14px] font-mono font-light uppercase tracking-[0.08em] text-white/85 transition hover:text-white">
              Resources
              <FiChevronDown className="mt-px text-[24px]" />
            </button>

            <button className="text-[14px] font-mono font-light uppercase tracking-[0.08em] text-white/85 transition hover:text-white">
              About Us
            </button>
          </nav>

          {/* CTA */}
          <button className="hidden h-9 min-w-37.5 items-center justify-center rounded-[7px] border border-white/70 px-6 text-[14px] font-mono font-light uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black md:flex">
            Request Demo
          </button>

          <button
            className="flex size-9 items-center justify-center rounded-[7px] border border-white/30 text-white md:hidden"
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <FiX className="text-[20px]" />
            ) : (
              <FiMenu className="text-[20px]" />
            )}
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div
              className={`border-t border-white/10 py-4 transition-transform duration-300 ease-out ${
                isMenuOpen ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              <nav className="flex flex-col gap-3">
                <button className="flex items-center justify-between rounded-[7px] px-1 py-2 text-left text-[13px] font-mono font-light uppercase tracking-[0.08em] text-white/85">
                  Solutions
                  <FiChevronDown className="text-[22px]" />
                </button>

                <button className="flex items-center justify-between rounded-[7px] px-1 py-2 text-left text-[13px] font-mono font-light uppercase tracking-[0.08em] text-white/85">
                  Resources
                  <FiChevronDown className="text-[22px]" />
                </button>

                <button className="rounded-[7px] px-1 py-2 text-left text-[13px] font-mono font-light uppercase tracking-[0.08em] text-white/85">
                  About Us
                </button>
              </nav>

              <button className="mt-4 flex h-10 w-full items-center justify-center rounded-[7px] border border-white/70 px-6 text-[13px] font-mono font-light uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
