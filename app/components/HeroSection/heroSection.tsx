"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <Image
          src="/images/scholarship_hero.png"
          alt="Global Opportunities & Educational Services"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,24,52,0.85)] via-[rgba(7,24,52,0.50)] via-[50%] to-[rgba(7,24,52,0.15)]"></div>

        {/* Content - Left Side */}
        <div className="absolute inset-0 flex items-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[500px] xs:max-w-[550px] sm:max-w-[600px] text-white w-full">
            {/* Headline - Playfair Display, two separate lines on all screens */}
            <h1 className="font-playfair text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-[-0.5px] sm:tracking-[-1px] mb-1.5 sm:mb-2 md:mb-3 text-blue-400">
              {/* Each phrase stays on one line on large screens */}
              <span className="block lg:whitespace-nowrap">
                Awaken Your Purpose.
              </span>
              <span className="block lg:whitespace-nowrap">
                Unlock Global Opportunities.
              </span>
            </h1>

            {/* Subheading - Poppins SemiBold */}
            <p className="font-poppins font-semibold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-500 leading-[1.4] mb-1.5 sm:mb-2 md:mb-3">
              Global Education. Leadership Development.{" "}
              <br className="xs:block" /> Capacity Building. International
              Mobility.
            </p>

            {/* Body Text - Poppins Regular */}
            <p className="font-poppins font-normal text-[9px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base text-blue-300 leading-[1.7] mb-3 sm:mb-4 md:mb-6 max-w-[450px] xs:max-w-[500px]">
              Awaken Purpose Network (APN) equips students, professionals,
              organizations, and institutions with the knowledge, skills, and
              opportunities to thrive locally and globally.
            </p>

            {/* Button with World Map Icon and Right Triangle Pointer */}
            <Link
              href="/apply-for-assessment"
              className="inline-flex items-center gap-2 border-2 border-blue-400 text-blue-400 rounded-lg font-body transition-all duration-300 px-2.5 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap group"
            >
              {/* World Map Icon */}
              <Icon
                icon="mdi:earth"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-600"
              />
              <span className="text-white">Start Your Global Journey</span>
              {/* Right Triangle Pointer (Chevron Right) */}
              <Icon
                icon="mdi:chevron-right"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-600 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
