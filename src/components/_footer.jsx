import React from "react";
import { FiArrowRight } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";

const solutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const companyLinks = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

const socials = ["LinkedIn", "X"];

function FooterLink({ text }) {
  return (
    <a
      href="#"
      className="group flex items-start gap-4 text-[#9AA6AC] transition-colors duration-300 hover:text-white"
    >
      <span className="leading-[1.35] w-34">{text}</span>

      <FiArrowRight className="mt-0.5 shrink-0 text-[#00B4FD] transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Footer() {
  const [ref, visible] = useScrollReveal();

  return (
    <footer className="relative overflow-hidden px-5 pb-8 pt-12 text-white sm:px-8 sm:pt-14 md:pb-10 lg:px-12 lg:pt-16">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-4 left-1/2 z-0 h-[50%] w-[70%] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, #00B4FD 0%, #003ACE 35%, transparent 70%)",
          opacity: 0.12,
          filter: "blur(100px)",
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-345 ${visible ? "animate-[fade-up_0.7s_ease-out_both]" : "opacity-0 translate-y-4"}`}
      >
        <div className="grid gap-y-10 sm:gap-y-12 lg:grid-cols-[minmax(280px,420px)_1fr] lg:gap-x-16">
          {/* Left Logo */}
          <div>
            <img
              src="assets/images/n7-logo.png"
              alt="N7"
              className="w-50 object-contain sm:w-65 lg:w-70"
            />
          </div>

          {/* Right Content */}
          <div className="grid gap-y-10 sm:gap-y-12 lg:gap-y-16">
            {/* Top Locations */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
              {/* London */}
              <div>
                <h3 className="mb-5 text-[17px] font-medium text-white sm:text-[18px]">
                  London
                </h3>

                <p className="text-[14px] leading-[1.45] text-[#9AA6AC] sm:text-[17px]">
                  Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14
                  6EP, England, United Kingdom.
                </p>
              </div>

              {/* Dubai */}
              <div>
                <h3 className="mb-5 text-[17px] font-medium text-white sm:text-[18px]">
                  Dubai
                </h3>

                <p className="text-[14px] leading-[1.45] text-[#9AA6AC] sm:text-[17px]">
                  Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5
                  Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
                </p>
              </div>

              {/* India */}
              <div>
                <h3 className="mb-5 text-[17px] font-medium text-white sm:text-[18px]">
                  India
                </h3>

                <p className="text-[14px] leading-[1.45] text-[#9AA6AC] sm:text-[17px]">
                  Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity
                  Road, Pune, <br /> Maharashtra, 411041, India
                </p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
              {/* Solutions */}
              <div>
                <h3 className="mb-5 text-[17px] font-medium text-white sm:mb-6 sm:text-[18px]">
                  Solutions
                </h3>

                <div className="space-y-4">
                  {solutions.map((item) => (
                    <FooterLink key={item} text={item} />
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="mb-5 text-[17px] font-medium text-white sm:mb-6 sm:text-[18px]">
                  N7 Banking
                </h3>

                <div className="space-y-4">
                  {companyLinks.map((item) => (
                    <FooterLink key={item} text={item} />
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="mb-5 text-[17px] font-medium text-white sm:mb-6 sm:text-[18px]">
                  Our Socials
                </h3>

                <div className="space-y-4">
                  {socials.map((item) => (
                    <FooterLink key={item} text={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-4">
              <p className="max-w-225 text-[14px] leading-normal text-[#4F5C62]">
                Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
                Commercial Brand] — [Registered under the Companies Act 2006 in
                England and Wales | Number of Incorporation 13100992]
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
