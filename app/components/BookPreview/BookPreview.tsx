"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function BookPreview() {
  return (
    <div className="w-full py-15">
      <section className="py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link
            href="/book-consultation/#consultation-booking"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 md:px-12 py-1 md:py-4 rounded-full font-body text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Book a Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
          <Link
            href="/teachings/courses/"
            className="px-6 md:px-8 py-1 md:py-4 border-2 border-blue-300 text-blue-400 rounded-full font-body text-base md:text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Icon icon="mdi:calendar-clock" className="w-5 h-5 md:w-7 md:h-7" />
            Explore Our Programs
          </Link>
        </div>
      </section>
    </div>
  );
}
