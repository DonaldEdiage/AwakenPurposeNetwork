// app/about/apn/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function APNPage() {
  const divisions = [
    {
      icon: "mdi:school",
      title: "APN Language Academy",
      description:
        "Empowering individuals through language education and cultural exchange programs.",
      // Classic Sky Blue (#4A90E2 → #357ABD)
      color: "from-[#4A90E2] to-[#357ABD]",
      path: "/apn-language-academy",
      bgColor: "text-[#4A90E2]",
    },
    {
      icon: "mdi:earth",
      title: "Global Opportunities & Educational Services (GOES)",
      description:
        "Connecting local potential with international education and career opportunities.",
      // Vibrant Sky Blue (#1E90FF → #1876D6)
      color: "from-[#1E90FF] to-[#1876D6]",
      path: "/goes/overview",
      bgColor: "text-[#1E90FF]",
    },
    {
      icon: "mdi:office-building",
      title: "APN Corporate Training",
      description:
        "Professional development solutions for organizations and institutions.",
      // Muted Sky Blue (#7BA7C4 → #5F8BA8)
      color: "from-[#7BA7C4] to-[#5F8BA8]",
      path: "/apn-corporate-training",
      bgColor: "text-[#7BA7C4]",
    },
    {
      icon: "carbon:user-sponsor",
      title: "GOES Global Scholarships Initiative (GGSI)",
      description:
        "Merit-based scholarship access and selection for international education.",
      // Soft Sky Blue (#A8D5E2 → #89C0D4)
      color: "from-[#A8D5E2] to-[#89C0D4]",
      path: "/goes/scholarship",
      bgColor: "text-[#A8D5E2]",
    },
  ];

  const speakingEvents = [
    {
      id: "mdi:scholarship",
      city: "Yaounde",
      date: "06/05/2025",
      topic: "Global scholarships",
    },
    {
      id: "mdi:csdbdjdjj",
      city: "Douala",
      date: "23/08/2025",
      topic: "Health",
    },
    {
      id: "mdi:fvmrmpweom",
      city: "Buea",
      date: "o5/03/2026",
      topic: "Wellness",
    },
  ];

  const features = [
    {
      icon: "mdi:earth",
      title: "International Experience",
      description: "Real international academic and professional expertise.",
    },
    {
      icon: "mdi:school",
      title: "Education Excellence",
      description: "Structured learning with measurable outcomes.",
    },
    {
      icon: "mdi:handshake",
      title: "End-to-End Support",
      description: "From consultation to successful placement.",
    },
    {
      icon: "mdi:heart",
      title: "Faith-Based Values",
      description: "Integrity. Service. Excellence. Purpose.",
    },
    {
      icon: "mdi:office-building",
      title: "Corporate Solutions",
      description: "Professional development for organizations.",
    },
    {
      icon: "mdi:earth",
      title: "Global Opportunities",
      description:
        "Connecting local potential with international possibilities.",
    },
  ];

  const stats = [
    {
      number: "4",
      label: "Specialized Divisions",
      icon: "fluent-mdl2:calendar-year",
    },
    {
      number: "10+",
      label: "Years International Experience",
      icon: "hugeicons:hand-prayer",
    },
    { number: "10+", label: "Countries", icon: "emojione-v1:world-map" },
    {
      number: "250+",
      label: "Individuals Supported",
      icon: "carbon:events",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-4">
            Who We Are
          </h2>
          <p className="text-xl opacity-90 mb-10 font-body">
            Awaken Purpose Network (APN) is a faith-based education and
            leadership organization committed to developing people through
            language education, corporate training, international mobility, and
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

      {/* 3. Our Four Divisions */}
      <section className="py-18 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              One Organization
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body py-5">
              Four Specialized Divisions
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-lora">
              Empowering individuals, professionals, organizations, and
              institutions through education, leadership, and global
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                  {/* Icon */}
                  <Icon
                    icon={`${division.icon}`}
                    width="50"
                    height="50"
                    className={division.bgColor}
                    color={division.bgColor}
                  />

                  {/* Title */}
                  <h3 className={`text-lg text-gray-600 font-body mt-2`}>
                    {division.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-body text-sm mb-4 mt-2 leading-relaxed flex-grow">
                    {division.description}
                  </p>

                  {/* Learn More Link - Always at bottom */}
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <Link
                      href={division.path}
                      className={`text-sm font-body font-body flex items-center ${division.bgColor} transition-colors duration-300`}
                    >
                      Explore More
                      <Icon
                        icon="mdi:arrow-right"
                        className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Circular Container with World Map */}
        <div className="flex justify-center mt-20">
          <div
            className="w-96 h-96 rounded-full border-4 border-blue-300 shadow-2xl bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: 'url("/images/world-map.jpg")',
              backgroundSize: "cover",
            }}
          >
            {/* Two Columns Inside Circle - Using flex instead of absolute */}
            <div className="rounded-full flex w-full h-full">
              {/* Left Column - Book Engagement Button */}
              <div className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6">
                <Link
                  href="/speaking-events/invite/#invite-to-speak-form"
                  className="border border-blue-300 text-blue-400 px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full font-body backdrop-blur-sm bg-white hover:bg-gray-500 hover:text-white transition-all duration-300 hover:px-4 sm:hover:px-6 md:hover:px-8 shadow-lg cursor-pointer inline-block text-[10px] sm:text-xs md:text-sm text-center"
                >
                  Book Engagement
                </Link>
              </div>

              {/* Right Column - Events List */}
              <div className="flex-1 flex flex-col justify-center p-2 sm:p-3 md:p-4 space-y-1.5 sm:space-y-2 md:space-y-2.5 font-body text-gray-600 dark:text-white tracking-tight leading-none overflow-y-auto max-h-[700px] min-h-[400px]">
                {speakingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 md:p-3 shadow-md hover:shadow-lg transition-all duration-300 flex cursor-pointer w-full"
                  >
                    {/* Left Side - City on top, Date below with more space */}
                    <div className="w-1/2 border-r border-gray-300 pr-2 sm:pr-3 flex flex-col justify-center">
                      <div className="text-[10px] sm:text-xs font-body font-semibold text-blue-400 leading-tight">
                        {event.city}
                      </div>
                      <div className="text-[9px] sm:text-[11px] text-gray-500 font-body leading-tight mt-0.5 sm:mt-1">
                        {event.date}
                      </div>
                    </div>

                    {/* Right Side - Topic */}
                    <div className="flex-1 pl-2 sm:pl-3 flex items-center">
                      <div className="text-[9px] sm:text-[11px] font-body text-gray-600 leading-tight line-clamp-2">
                        {event.topic}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose APN? */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Why Students, Professionals & Organizations Choose APN
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                // href={feature.path}
                className="animate-fade-in-up group rounded-xl p-8 bg-gradient-to-br from-blue-200 to-blue-300  transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-white cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center items-center mb-2">
                  <Icon icon={feature.icon} width="50" height="50" />
                </div>
                <h3 className="text-lg leading-relaxed text-gray-600 font-body mb-3">
                  {feature.title}
                </h3>
                <p className="font-body opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
            Testimonial
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Card – light blue background is preserved */}
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-6 md:p-10 relative overflow-hidden shadow-xl">
              {/* Creative decorative blurs (light & airy) */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/30 rounded-full blur-2xl"></div>

              {/* Main content – flex row on desktop */}
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                {/* PHOTO SECTION – fixed for mobile */}
                <div className="w-full md:w-1/3 lg:w-2/5 flex-shrink-0">
                  <div className="relative w-full aspect-[4/5] max-w-[280px] mx-auto md:max-w-full rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
                    <Image
                      src="/images/testimonial-One.jpeg" // 👈 REPLACE with your photo path
                      alt="C.M., Cameroon - GOES Testimonial"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </div>

                {/* TEXT SECTION */}
                <div className="w-full md:w-2/3 lg:w-3/5">
                  <Icon
                    icon="mdi:format-quote-open"
                    className="w-10 h-10 md:w-12 md:h-12 text-blue-400/80 mb-4"
                  />

                  <p className="text-base md:text-xl lg:text-2xl text-gray-700 font-body leading-relaxed mb-6">
                    {`I secured admission to the Master of Science in Meteorology at LMU Munich with GOES support. 
              Their structured guidance made my application and relocation process smooth, 
              and I continue to benefit from their mentorship.`}
                  </p>

                  <div>
                    <p className="text-lg font-bold text-gray-700 font-lora">
                      Christian M., Cameroon
                    </p>
                    <p className="text-sm text-blue-700 font-body font-medium">
                      {`Master's admission at LMU Munich, Germany + successful relocation`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Statistics */}

      <section className="py-1 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body py-5">
            Our commitment to education, leadership, and global opportunities is
            reflected in the people and communities we serve.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* First 4 items in a grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {stats.slice(0, 4).map((stat, index) => (
              <div key={index} className="text-center text-gray-600">
                <div className="flex justify-center items-center mb-2">
                  <Icon icon={`${stat.icon}`} className="w-9 h-9" />
                </div>
                <div className="text-2xl font-body mb-2">{stat.number}</div>
                <p className="font-body opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Last 2 items centered below */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-md mx-auto">
            {stats.slice(4, 6).map((stat, index) => (
              <div key={index} className="text-center text-gray-600">
                <div className="flex justify-center items-center mb-2">
                  <Icon icon={`${stat.icon}`} className="w-9 h-9" />
                </div>
                <div className="text-2xl font-body mb-2">{stat.number}</div>
                <p className="font-body opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-4">
            Ready to Take the Next Step?{" "}
          </h2>
          <p className="text-xl opacity-90 mb-10 font-body">
            Book your free consultation today and discover how APN can help you
            achieve your academic, professional, and leadership goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-consultation#consultation-booking"
              className="px-8 py-4 bg-white text-blue-400 rounded-lg font-body hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Icon
                icon="material-symbols-light:explore-off-outline-rounded"
                className="w-9 h-9 mr-2"
              />
              Book Consultation
            </Link>

            <Link
              href="/contact#contact-form"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-body  hover:bg-white hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Icon
                icon="mdi:book-open-page-variant"
                className="w-9 h-9 mr-2"
              />
              Contact Us{" "}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
