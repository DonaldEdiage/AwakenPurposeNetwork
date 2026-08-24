// app/goes/scholarship/page.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function GOESScholarshipPage() {
  return (
    <div className="min-h-screen to-white">
      {/* <section className="relative w-full">
        <div className="relative w-full">
          <Image
            src="/images/goes_hero_lady.png"
            alt="Global Opportunities & Educational Services"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />

        
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
        </div>

       
        <div className="absolute inset-0 flex items-center px-3 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="max-w-xl sm:max-w-2xl w-full">
           
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-700 font-body tracking-tight leading-[0.9]">
              GOES
            </h1>

           
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 font-body mt-0.5 sm:mt-1 md:mt-2">
              Global Scholarship Initiative
            </h2>

         
            <div className="w-30 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full mt-1 sm:mt-2 md:mt-3"></div>

            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-yellow-600 font-body mt-1.5 sm:mt-2 md:mt-3">
              Your Journey to Global Education Starts Here
            </p>

          
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-600 font-body mt-1.5 sm:mt-2 md:mt-3 leading-relaxed max-w-lg sm:max-w-xl">
              Apply to the GOES Global Scholarships Initiative (GGSI) for
              structured guidance that helps strengthen your applications to
              international universities and scholarship opportunities through a
              transparent, merit-based selection process.
            </p>

           
            <Link
              href="/goes/scholarship/apply"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 md:px-6 py-1.5 sm:py-2.5 md:py-3 bg-blue-400 border border-amber-300 text-white rounded-lg font-body font-semibold hover:bg-blue-400 hover:border-amber-400 transition-all duration-300 mt-2 sm:mt-3 md:mt-4 group text-xs xs:text-sm sm:text-base"
            >
              Start Your Application
              <Icon
                icon="mdi:arrow-right"
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

            <div className="flex flex-wrap items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Icon
                  icon="ion:checkmark-done"
                  className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-amber-400"
                />
                <span className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-gray-700 font-body whitespace-nowrap">
                  Merit-Based Selection
                </span>
              </div>

              <span className="w-px h-3 xs:h-4 bg-gray-300 hidden xs:block"></span>

              <div className="flex items-center gap-1 sm:gap-1.5">
                <Icon
                  icon="ion:checkmark-done"
                  className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-amber-400"
                />
                <span className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-gray-700 font-body whitespace-nowrap">
                  5 Scholarship Tracks
                </span>
              </div>

              <span className="w-px h-3 xs:h-4 bg-gray-300 hidden xs:block"></span>

              <div className="flex items-center gap-1 sm:gap-1.5">
                <Icon
                  icon="ion:checkmark-done"
                  className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-amber-400"
                />
                <span className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-gray-700 font-body whitespace-nowrap">
                  Open Across Cameroon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative w-full">
        <div className="relative w-full">
          <Image
            src="/images/goes_hero_lady.png"
            alt="Global Opportunities & Educational Services"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
        </div>

        {/* Left Section - Text Overlay */}
        <div className="absolute inset-0 flex items-center px-3 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
          <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            {/* GOES - Large Bold with responsive sizing */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-gray-700 font-body tracking-tight leading-[0.9]">
              GOES
            </h1>

            {/* Subtitle */}
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-700 font-body mt-0.5 sm:mt-1 md:mt-2">
              Global Scholarship Initiative
            </h2>

            {/* Gold Line */}
            <div className="w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-32 2xl:w-40 h-0.5 sm:h-1 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full mt-1 sm:mt-2 md:mt-3"></div>

            {/* Tagline */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-yellow-600 font-body mt-1.5 sm:mt-2 md:mt-3">
              Your Journey to Global Education Starts Here
            </p>

            {/* Description */}
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 font-body mt-1.5 sm:mt-2 md:mt-3 leading-relaxed max-w-lg sm:max-w-xl xl:max-w-3xl 2xl:max-w-4xl">
              Apply to the GOES Global Scholarships Initiative (GGSI) for
              structured guidance that helps strengthen your applications to
              international universities and scholarship opportunities through a
              transparent, merit-based selection process.
            </p>

            {/* Button */}
            <Link
              href="/goes/scholarship/apply"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 md:px-6 xl:px-8 2xl:px-10 py-1.5 sm:py-2.5 md:py-3 xl:py-4 2xl:py-5 bg-blue-400 border border-amber-300 text-white rounded-lg font-body font-semibold hover:bg-blue-400 hover:border-amber-400 transition-all duration-300 mt-2 sm:mt-3 md:mt-4 group text-xs xs:text-sm sm:text-base xl:text-xl 2xl:text-2xl"
            >
              Start Your Application
              <Icon
                icon="mdi:arrow-right"
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

            {/* Feature Tags with Gold Checkmarks */}
            <div className="flex flex-wrap items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 xl:gap-5 2xl:gap-6 mt-2 sm:mt-3 md:mt-4 xl:mt-5 2xl:mt-6">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Icon
                  icon="ion:checkmark-done"
                  className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-amber-400"
                />
                <span className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm xl:text-base 2xl:text-lg text-gray-700 font-body whitespace-nowrap">
                  Merit-Based Selection
                </span>
              </div>

              <span className="w-px h-3 xs:h-4 bg-gray-300 hidden xs:block"></span>

              <div className="flex items-center gap-1 sm:gap-1.5">
                <Icon
                  icon="ion:checkmark-done"
                  className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-amber-400"
                />
                <span className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm xl:text-base 2xl:text-lg text-gray-700 font-body whitespace-nowrap">
                  5 Scholarship Tracks
                </span>
              </div>

              <span className="w-px h-3 xs:h-4 bg-gray-300 hidden xs:block"></span>

              <div className="flex items-center gap-1 sm:gap-1.5">
                <Icon
                  icon="ion:checkmark-done"
                  className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-amber-400"
                />
                <span className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm xl:text-base 2xl:text-lg text-gray-700 font-body whitespace-nowrap">
                  Open Across Cameroon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About GGSI */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                About GGSI
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-6">
                The GOES Global Scholarships Initiative (GGSI), under Global
                Opportunities & Educational Services (GOES), a division of APN,
                provides structured access to international education
                opportunities through a transparent, merit-based selection
                system.
              </p>
              <p className="text-gray-600 leading-relaxed font-body mb-6">
                The program identifies academically strong and
                leadership-oriented students and supports their preparation for
                global study pathways through guidance, evaluation, and
                structured academic positioning.
              </p>
              <p className="text-gray-600 leading-relaxed font-body">
                GGSI is designed to improve access to international education
                opportunities for students across Cameroon through a
                standardized and transparent selection process.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-100 to-purple-50 rounded-2xl p-8 border border-blue-200 text-center">
                <Icon
                  icon="mdi:target"
                  className="w-16 h-16 text-blue-500 mx-auto mb-4"
                />
                <p className="text-gray-700 font-body italic">
                  {`Identifying and supporting Cameroon's brightest minds for global education opportunities.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Tracks */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-100 to-purple-50 rounded-2xl p-8 md:p-5 border border-blue-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
                Scholarship Tracks
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Undergraduate Scholarship Track",
                  description:
                    "For students pursuing bachelor's degrees at international universities.",
                  icon: "mdi:school",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  title: "Master's Scholarship Track",
                  description:
                    "For graduates seeking master's programs at global institutions.",
                  icon: "tabler:track",
                  color: "from-purple-400 to-purple-600",
                },
                {
                  title: "Doctoral Scholarship Track",
                  description:
                    "For researchers and academics pursuing PhD opportunities.",
                  icon: "mdi:microscope",
                  color: "from-green-400 to-green-600",
                },
                {
                  title: "Research Fellowship Track",
                  description:
                    "For early-career researchers seeking fellowship programs.",
                  icon: "mdi:flask",
                  color: "from-amber-400 to-amber-600",
                },
                {
                  title: "Professional Development Track",
                  description:
                    "For professionals seeking short courses and executive programs.",
                  icon: "mdi:briefcase",
                  color: "from-cyan-400 to-cyan-600",
                },
              ].map((track, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col">
                    {/* Row with icon and title */}
                    <div className="flex items-center gap-4 ">
                      <div
                        className={`w-12 h-12  rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon
                          icon={track.icon}
                          className="w-12 h-12 text-white"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-700 font-lora">
                        {track.title}
                      </h3>
                    </div>
                    {/* Description below the title */}
                    <p className="text-gray-600 font-body pl-16">
                      {track.description}
                    </p>
                  </div>
                  {/* Divider between items (except last) */}
                  {index < 3 && (
                    <div className="border-t border-blue-200/50 my-3"></div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 font-body text-sm mt-8 italic">
              Each track is designed to align applicants with appropriate
              international education and funding opportunities based on
              academic background and career direction.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria & Selection Process */}
      <section className="py-1 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria */}
            <div className="animate-slide-in-left">
              <div className="rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-600 font-body">
                    Eligibility Criteria
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Be a citizen or legal resident of Cameroon",
                    "Be at least 18 years old at the time of application",
                    "Meet academic requirements of the intended study or scholarship destination",
                    "Demonstrate leadership potential and community engagement",
                    "Submit all required documents within the application period",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-gray-700 font-body">{item}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* Selection Process */}
            <div className="animate-slide-in-right">
              <div className="rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-600 font-body">
                    Selection Process
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Application Submission",
                      desc: "Applicants submit an online application with required documents.",
                    },
                    {
                      step: "2",
                      title: "Eligibility Screening",
                      desc: "Applications are reviewed for completeness and academic suitability.",
                    },
                    {
                      step: "3",
                      title: "Assessment Stage",
                      desc: "Shortlisted applicants complete a standardized evaluation.",
                    },
                    {
                      step: "4",
                      title: "Interview Stage",
                      desc: "Selected candidates participate in an interview with the selection panel.",
                    },
                    {
                      step: "5",
                      title: "Final Selection",
                      desc: "Final decisions are based on overall performance across all stages.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-600 font-body">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600 font-body">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process  */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Application Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <p className="text-gray-700 font-body mb-6">
                Applications are submitted through the official GGSI online
                portal. Applicants are required to provide:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Personal information",
                  "Academic records",
                  "Supporting documents",
                  "Motivation statement",
                  "Reference details",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Icon
                      icon="mdi:file-document"
                      className="w-5 h-5 text-gray-400 mr-2"
                    />
                    <span className="text-gray-700 font-body text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 font-body text-sm italic">
                All applications must be fully completed and submitted within
                the official application period for consideration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support for Selected Applicants */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                Support for Selected Applicants
              </h2>
              <p className="text-gray-700 leading-relaxed font-body mb-6">
                Selected applicants receive structured guidance to strengthen
                their international education applications.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Scholarship application guidance",
                  "University application support",
                  "CV and motivation letter development",
                  "Research guidance (where applicable)",
                  "Interview preparation",
                  "Academic positioning support",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-blue-300 group-hover:text-white transition-all duration-300 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700 font-lato group-hover:text-blue-300 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <p className="text-sm text-gray-600 font-body">
                  <span className="font-semibold">Note:</span> GGSI provides
                  advisory and preparatory support only. Admission decisions,
                  scholarship awards, and visa approvals are determined
                  independently by universities, scholarship providers, and
                  immigration authorities.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 text-center">
                <Icon
                  icon="mdi:handshake"
                  className="w-16 h-16 text-violet-200 mx-auto mb-4"
                />
                <p className="text-gray-700 font-body italic">
                  {`Structured guidance to help you present your strongest application.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Principles */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Selection Principles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 to-purple-50 rounded-2xl p-8 md:p-5 border border-blue-200">
              <div className="space-y-2">
                {[
                  {
                    title: "Merit-based selection",
                    icon: "mdi:star",
                    color: "from-yellow-400 to-yellow-600",
                  },
                  {
                    title: "Equal opportunity access",
                    icon: "mdi:account-group",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    title: "Regional and linguistic inclusion",
                    icon: "mdi:earth",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    title: "Transparent evaluation procedures",
                    icon: "mdi:file-check",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    title: "Secure handling of applicant data",
                    icon: "mdi:shield-lock",
                    color: "from-cyan-400 to-cyan-600",
                  },
                ].map((principle, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col">
                      {/* Row with icon and title */}
                      <div className="flex items-center gap-1">
                        <h3 className="text-xl text-gray-600 font-body">
                          {principle.title}
                        </h3>
                      </div>
                    </div>
                    {/* Divider between items (except last) */}
                    {index < 4 && (
                      <div className="border-t border-blue-200/50 my-3"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 font-body text-sm mt-8">
            These principles ensure a fair and consistent selection process for
            all applicants.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-4">
            Apply to GGSI
          </h2>
          <p className="text-xl opacity-90 mb-7 font-body">
            Begin your application for structured access to international
            scholarship opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/goes/scholarship/apply"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-body text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Start Your Application</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
