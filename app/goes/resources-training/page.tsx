// app/goes/resources-training/page.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function GOESResourcesTrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-600 font-body tracking-tight mb-6">
            Digital Academic Resources <br />& Training
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-body mb-6">
            Build stronger applications, improve your profile, and prepare for
            global opportunities independently.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-3xl font-body mb-8">
            These resources are designed for individuals who want to improve
            their applications independently, strengthen their profile before
            applying for full GOES support, or apply on their own.
          </p>

          {/* Complement line */}
          <div className="mb-8">
            <p className="text-gray-600 font-body">
              <span className="mr-1">They complement all four pathways: </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-px h-4 bg-gray-400"></span>
                <Icon icon="carbon:education" className="w-5 h-5" />
                <span>Study</span>
                <span className="w-px h-4 bg-gray-400"></span>
                <Icon icon="hugeicons:work-alert" className="w-5 h-5" />
                <span>Work</span>
                <span className="w-px h-4 bg-gray-400"></span>
                <Icon
                  icon="fluent-mdl2:internal-investigation"
                  className="w-5 h-5"
                />
                <span>Internships</span>
                <span className="w-px h-4 bg-gray-400"></span>
                <Icon icon="marketeq:research" className="w-5 h-5" />
                <span>Research</span>
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/apply-for-assessment#global-assesement-application"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-body text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Apply for Assessment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link
              href="/book-consultation#consultation-booking"
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-400 text-blue-400 rounded-full font-body text-base md:text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Icon
                icon="mdi:calendar-clock"
                className="w-5 h-5 md:w-7 md:h-7"
              />
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Available Resources Section */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Available Resources
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "PhD Research Proposal Templates",
                description:
                  "Structured templates to help you craft compelling research proposals for doctoral applications.",
                icon: "mdi:file-document-outline",
                bgColor: "text-gray-500",
                format: "PDF Template",
                download: "#",
              },
              {
                title: "SOP Writing Frameworks",
                description:
                  "Step-by-step frameworks for writing powerful Statements of Purpose that stand out.",
                icon: "mdi:pen",
                bgColor: "text-gray-500",
                format: "PDF Guide",
                download: "#",
              },
              {
                title: "Academic CV Templates",
                description:
                  "Professionally designed CV templates formatted for international academic standards.",
                icon: "mdi:file-account",
                bgColor: "text-gray-500",
                format: "Word + PDF",
                download: "#",
              },
              {
                title: "Study Abroad Guides",
                description:
                  "Comprehensive guides covering application processes, visa requirements, and country selection.",
                icon: "mdi:earth",
                bgColor: "text-gray-500",
                format: "PDF Guide",
                download: "#",
              },
              {
                title: "Research Writing Manuals",
                description:
                  "Detailed manuals on academic writing, research methodology, and publication standards.",
                icon: "mdi:book-open-variant",
                bgColor: "text-gray-500",
                format: "Digital Book",
                download: "#",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Icon */}
                  <Icon
                    icon={`${resource.icon}`}
                    width="50"
                    height="50"
                    className={resource.bgColor}
                    color={resource.bgColor}
                  />

                  {/* Title */}
                  <h3 className={`text-lg text-gray-700 font-body mt-2`}>
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-body text-sm mb-4 mt-2 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Learn More Link */}

                  <div className="flex items-center justify-between mt-auto pt-3">
                    <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-full cursor-pointer">
                      {resource.format}
                    </span>
                    <Link
                      href={resource.download}
                      className="inline-flex items-center text-blue-500 font-body text-sm hover:text-blue-500 cursor-pointer"
                    >
                      Soon Available
                      <Icon icon="mdi:download" className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Training Programs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "PhD Preparation Masterclass",
                description:
                  "Comprehensive training on PhD applications, research proposals, and supervisor selection.",
                icon: "mdi:school",
                duration: "4 weeks",
                format: "Live Online",
                bgColor: "from-indigo-400 to-indigo-600",
                link: "#",
              },
              {
                title: "Research Writing Bootcamp",
                description:
                  "Intensive program on academic writing, research methodology, and publication strategies.",
                icon: "mdi:typewriter",
                duration: "3 weeks",
                format: "Self-paced",
                bgColor: "from-pink-400 to-pink-600",
                link: "#",
              },
              {
                title: "Study Abroad Strategy Workshop",
                description:
                  "Learn how to select universities, navigate applications, and secure scholarships.",
                icon: "mdi:airplane",
                duration: "2 days",
                format: "Live Workshop",
                bgColor: "from-orange-400 to-orange-600",
                link: "#",
              },
              {
                title: "Academic Success Coaching Sessions",
                description:
                  "Personalized coaching for academic writing, research planning, and career development.",
                icon: "mdi:account-check",
                duration: "6 sessions",
                format: "1-on-1",
                bgColor: "from-teal-400 to-teal-600",
                link: "#",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="animate-fade-in-up group rounded-xl p-8 bg-gradient-to-br from-blue-200 to-blue-300 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  {/* Icon - Centered */}
                  <div className="flex justify-center items-center mb-4">
                    <Icon
                      icon={program.icon}
                      width="50"
                      height="50"
                      color="#fff"
                    />
                  </div>

                  {/* Title - Centered */}
                  <h3 className="text-xl font-bold text-gray-700 font-lora mb-3 text-center">
                    {program.title}
                  </h3>

                  {/* Description - Centered */}
                  <p className="text-gray-600 font-body text-sm mb-4 text-center">
                    {program.description}
                  </p>

                  {/* Duration & Format - Left and Right */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-600 bg-white/50 px-3 py-1 rounded-full">
                      <Icon
                        icon="mdi:clock-outline"
                        className="w-3 h-3 inline mr-1"
                      />
                      {program.duration}
                    </span>
                    <span className="text-xs text-gray-600 bg-white/50 px-3 py-1 rounded-full">
                      <Icon
                        icon="mdi:monitor"
                        className="w-3 h-3 inline mr-1"
                      />
                      {program.format}
                    </span>
                  </div>

                  {/* Learn More - Right aligned */}
                  <div className="flex justify-center">
                    <Link
                      href={program.link}
                      className="inline-flex items-center text-blue-500 font-body text-sm hover:text-blue-400 transition-colors duration-300"
                    >
                      Available very soon
                      <Icon icon="mdi:arrow-right" className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/book-consultation#consultation-booking"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-full font-body text-sm hover:shadow-lg transition-all duration-300"
            >
              <Icon icon="mdi:calendar-check" className="mr-2 w-4 h-4" />
              Book a Training Session
            </Link>
          </div>
        </div>
      </section>

      {/* Who These Resources Are For */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                Who These Resources Are For
              </h2>
              <div className="space-y-4">
                {[
                  {
                    text: "Applicants preparing before submitting full applications",
                    icon: "mdi:clipboard-list",
                    color: "text-blue-500",
                  },
                  {
                    text: "Self-applying students and professionals",
                    icon: "mdi:account",
                    color: "text-green-500",
                  },
                  {
                    text: "Individuals strengthening their academic or professional profiles",
                    icon: "mdi:chart-line",
                    color: "text-purple-500",
                  },
                  {
                    text: "Candidates not yet ready for full GOES support",
                    icon: "mdi:lightbulb",
                    color: "text-amber-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-gray-700 font-body">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 border border-blue-200 text-center">
                <Icon
                  icon="mdi:target"
                  className="w-16 h-16 text-blue-500 mx-auto mb-4"
                />
                <p className="text-gray-700 font-body italic">
                  {`Whether you're just starting your journey or preparing independently, 
                  these resources give you the tools you need to succeed.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use These Resources */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Why Use These Resources
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Single Centered Card */}
          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 md:p-5 border border-blue-200">
              <div className="space-y-2">
                {[
                  {
                    title: "Learn at Your Own Pace",
                    description:
                      "Access materials anytime, anywhere, and progress at your speed.",
                    icon: "dashicons:welcome-learn-more",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    title: "Improve Application Quality",
                    description:
                      "Create stronger, more competitive applications for global opportunities.",
                    icon: "arcticons:improvementroll",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    title: "Understand International Standards",
                    description:
                      "Learn what universities and employers expect from candidates.",
                    icon: "emojione-v1:world-map",
                    color: "from-amber-400 to-amber-600",
                  },
                  {
                    title: "Prepare Before Full Support",
                    description:
                      "Build a strong foundation before investing in complete consultancy.",
                    icon: "bx:support",
                    color: "from-purple-400 to-purple-600",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col">
                      {/* Row with icon and title */}
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-12 h-12  rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon
                            icon={benefit.icon}
                            className="w-12 h-12 text-white"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700 font-body">
                          {benefit.title}
                        </h3>
                      </div>
                      {/* Description below the title */}
                      <p className="text-gray-600 font-body">
                        {benefit.description}
                      </p>
                    </div>
                    {/* Divider between items (except last) */}
                    {index < 3 && (
                      <div className="border-t border-blue-200/50 my-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}

      <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center mb-4">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-4">
            Need Personalized Support Instead?
          </h2>
          <p className="text-xl opacity-90 mb-10 font-body">
            Let us guide you through every step of your international journey
            with customized, one-on-one support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-for-assessment#goes-consultation"
              className="px-8 py-4 bg-white text-blue-400 rounded-lg font-body hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Icon
                icon="material-symbols-light:explore-off-outline-rounded"
                className="w-9 h-9 mr-2"
              />
              Apply for Assessment
            </Link>

            <Link
              href="/book-consultation#consultation-booking"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-body  hover:bg-white hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Icon icon="mdi:chat" className="w-5 h-5" />
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
