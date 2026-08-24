// app/goes/overview/page.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function GOESOverviewPage() {
  const successStories = [
    {
      quote:
        "I secured admission to the Master of Science in Meteorology at LMU Munich with GOES support. Their structured guidance made my application and relocation process smooth, and I continue to benefit from their mentorship.",
      author: "C.M., Cameroon",
      outcome:
        "Master's admission at LMU Munich, Germany + successful relocation",
    },
    {
      quote:
        "With GOES support, I gained admission into the Master of Educational Leadership program at the University of Jyväskylä after months of unsuccessful applications on my own.",
      author: "A.A., Cameroon",
      outcome: "Master's admission, University of Jyväskylä, Finland",
    },
    {
      quote:
        "GOES helped me restructure my CV and application strategy, which led to multiple international internship interviews and a confirmed placement in Michigan.",
      author: "K.A., Nigeria",
      outcome: "International internship placement, Michigan, USA",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-600 font-body tracking-tight mb-6">
            Global Opportunities & <br />
            Educational Services (GOES)
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-lora mb-6">
            Study Abroad. PhD Admissions. Academic Advancement. Global Career
            Positioning.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-3xl font-body mb-8">
            We provide structured international mobility solutions for students,
            graduates, and professionals seeking global opportunities. Through
            expert consultancy, guided application support, professional writing
            services, and full end-to-end execution, we help you move from
            ambition to successful relocation abroad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/apply-for-assessment#global-assesement-application"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-body text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Apply For Assessment</span>
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

      {/* Who We Are */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
                  Who We Are
                </h2>
                <h2 className="text-2xl md:text-3xl text-gray-600 font-lora mb-4">
                  A Structured Global Mobility System
                </h2>
                <p className="text-gray-600 leading-relaxed font-body mb-4">
                  Global Opportunities & Educational Services (GOES), a division
                  of APN, is a structured international mobility and placement
                  system that helps individuals transition from local academic
                  or professional backgrounds into competitive global
                  opportunities across education, employment, internships, and
                  research pathways.
                </p>
                <p className="text-gray-600 leading-relaxed font-body">
                  We operate as a strategic support system, combining
                  consulting, application development, and structured execution
                  to position candidates effectively for international success.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-700 font-body mb-4">
                  Who We Work With
                </h3>
                <ul className="space-y-3">
                  {[
                    "Students preparing for undergraduate, Master's, or PhD programs abroad",
                    "Graduates seeking international employment or internships",
                    "Researchers and academics aiming for advanced global opportunities",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      {/* <Icon
                          icon="mdi:check-circle"
                          className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0"
                        /> */}
                      <span className="text-gray-700 font-body text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 font-body text-sm mt-4 italic">
                  Every pathway is tailored to your profile, aligning with
                  international standards to ensure you are competitively
                  positioned for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-lora">
              GOES delivers practical, end-to-end support for individuals
              pursuing study, work, internship, or research opportunities
              abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Assessment & Planning",
                description:
                  "Evaluate your profile and design a personalized roadmap for your goals.",
                icon: "pajamas:planning",
              },
              {
                title: "Application Support",
                description:
                  "Guidance on CVs, SOPs, motivation letters, research proposals, and applications.",
                icon: "mdi:file-document",
              },
              {
                title: "Strategic Positioning",
                description:
                  "Align your profile with international standards to maximize competitiveness.",
                icon: "mdi:target",
              },
              {
                title: "Execution Support",
                description:
                  "Assistance with admissions, interviews, visas, travel, and relocation logistics.",
                icon: "mdi:airplane",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up group rounded-xl p-8 bg-gradient-to-br from-blue-200 to-blue-300  transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-white">
                  <div className="flex justify-center items-center mb-2">
                    <Icon
                      icon={item.icon}
                      width="50"
                      height="50"
                      color="#fff"
                    />
                  </div>
                  <h3 className="text-lg leading-relaxed text-gray-600 font-body mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GOES */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
            Why GOES
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body mb-12">
            Your Complete Global Mobility Solution
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                title: "End-to-End Support",
                description:
                  "From initial assessment to successful relocation.",
                icon: "bx:support",
              },
              {
                title: "Admissions",
                description:
                  "Expert help with applications, program selection, and documents.",
                icon: "mdi:school",
              },
              {
                title: "Visa Guidance",
                description:
                  "Step-by-step support for visa preparation and submission.",
                icon: "mdi:passport",
              },
              {
                title: "Travel Planning",
                description:
                  "Coordinate your move smoothly, from flights to logistics.",
                icon: "mdi:airplane-takeoff",
              },
              {
                title: "Settlement Assistance",
                description:
                  "Practical help settling into your new environment.",
                icon: "mdi:home",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up group hover:transform hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                  <div className="flex justify-center items-center mb-2 text-gray-500">
                    <Icon icon={item.icon} width="50" height="50" />
                  </div>
                  <h3 className="text-xl text-gray-700 font-body mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Four Opportunity Pathways */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto mb-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              The Four Opportunity Pathways
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Choose the pathway that matches your goals and we guide you
              through every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Study Abroad",
                description:
                  "Access structured support for undergraduate, Master's, and PhD programs. We guide you through applications, scholarships, and admissions.",
                icon: "mdi:school",
                link: "Explore Study Abroad Services",
                path: "/goes/services",
                bgColor: "#4A90E2",
              },
              {
                title: "Employment",
                description:
                  "Position yourself for international job opportunities with support on CVs, applications, and work eligibility.",
                icon: "mdi:briefcase",
                link: "Explore Employment Services",
                path: "/goes/services",
                bgColor: "#4A90E2",
              },
              {
                title: "Internships",
                description:
                  "Gain international experience through structured internship applications, documentation support, and positioning strategies.",
                icon: "mdi:account-tie",
                link: "Explore Internship Services",
                path: "/goes/services",
                bgColor: "#7BA7C4",
              },
              {
                title: "Research",
                description:
                  "Advance your academic journey with PhD applications, research proposals, and supervisor identification support.",
                icon: "mdi:microscope",
                link: "Explore Research Services",
                path: "/goes/services",
                bgColor: "#A8D5E2",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                  {/* Icon */}
                  <Icon
                    icon={`${item.icon}`}
                    width="50"
                    height="50"
                    className={item.bgColor}
                    color={item.bgColor}
                  />

                  {/* Title */}
                  <h3 className={`text-lg text-gray-700 font-body mt-2`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-body text-sm mb-4 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Learn More Link */}
                  <div
                    className={`flex items-center ${item.bgColor} transition-colors duration-300`}
                  >
                    <span className="text-sm font-body font-body">
                      {item.link}
                      {/* Explore insights */}
                    </span>
                    <Icon
                      icon="mdi:arrow-right"
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How the Process Works */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              How the Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              A clear step-by-step system that guides you from your initial
              application to successful international relocation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
            {[
              {
                step: "01",
                title: "Application / Intake Form",
                description:
                  "Submit your profile so we can understand your academic or professional background and goals.",
                icon: "mdi:clipboard-list",
              },
              {
                step: "02",
                title: "Profile Assessment",
                description:
                  "We evaluate your eligibility and identify the most suitable international pathway.",
                icon: "mdi:chart-line",
              },
              {
                step: "03",
                title: "Strategy Development",
                description:
                  "A personalized roadmap is created based on your goals, profile, and target country.",
                icon: "mdi:lightbulb",
              },
              {
                step: "04",
                title: "Application Support",
                description:
                  "We assist with key documents including CVs, SOPs, motivation letters, and applications.",
                icon: "mdi:file-document",
              },
              {
                step: "05",
                title: "Selection Outcome Support",
                description:
                  "Support through interviews, admissions, offers, and selection decisions.",
                icon: "mdi:email-check",
              },
              {
                step: "06",
                title: "Visa, Travel & Settlement Support",
                description:
                  "Final-stage guidance covering visa processes, travel planning, and relocation support.",
                icon: "mdi:airplane",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl font-bold text-gray-200 font-lora">
                    {item.step}
                  </div>
                  {/* <Icon icon={item.icon} className="w-8 h-8 text-blue-400" /> */}
                </div>
                <h3 className="text-lg font-bold text-gray-600 font-lora mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-body text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story & Global Vision */}
      <section className="py-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                Founder Story & Global Vision
              </h2>
              <p className="text-gray-600 font-lora italic mb-4">
                Built from Real Global Experience. Designed for Real Global
                Outcomes.
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                <p>
                  GOES was founded from first-hand experience navigating the
                  challenges of international education, employment,
                  internships, and research pathways.
                </p>
                <p>
                  {`The founder is an international mobility expert with over a
                  decade of experience across global education and career
                  systems. He holds a Bachelor's degree from the United States,
                  a Master's degree from the Philippines, and is currently
                  pursuing a PhD in Europe. Alongside his academic journey, he
                  has spent over 10 years working in Thailand and has lived,
                  studied, and engaged professionally across multiple countries
                  worldwide, including exposure to more than ten nations.`}
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="text-center mb-6">
                  <Icon
                    icon="hugeicons:vision"
                    className="w-16 h-16 text-blue-400 mx-auto"
                  />
                  <h3 className="text-xl font-bold text-gray-800 font-lora mt-4">
                    Vision Behind GOES
                  </h3>
                </div>
                <p className="text-gray-700 font-body text-center mb-6">
                  GOES was created to replace uncertainty in global applications
                  with a structured, strategy-driven system that produces clear
                  and achievable outcomes.
                </p>
                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <p className="text-gray-700 font-body text-center italic">
                    {`Success in international pathways is not left to chance. It
                    is built through clarity, structure, and execution.`}
                  </p>
                </div>
                <p className="text-gray-700 font-body text-center mt-6">
                  At GOES, we do not just advise — we design pathways and
                  support execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-15 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                number: "250+",
                label:
                  "Individuals supported across study, work, internships, and research pathways",
                icon: "mdi:account-group",
              },
              {
                number: "10+",
                label:
                  "Countries engaged through academic and professional experience",
                icon: "emojione-v1:world-map",
              },
              {
                number: "10+",
                label:
                  "Years of international exposure across global education and mobility systems",
                icon: "fluent-mdl2:calendar-year",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <Icon
                  icon={metric.icon}
                  className="w-12 h-12 text-blue-400 mx-auto mb-4"
                />
                <div className="text-4xl font-bold text-gray-600 font-lora mb-2">
                  {metric.number}
                </div>
                <p className="text-gray-600 font-body text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Structured Support. Real Results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col h-full"
              >
                {/* Quote - Takes flexible space */}
                <div className="flex-1">
                  <Icon
                    icon="mdi:format-quote-open"
                    className="w-10 h-10 text-blue-300 mb-4"
                  />
                  <p className="text-gray-700 font-body italic mb-6">
                    {story.quote}
                  </p>
                </div>

                {/* Author & Outcome - Always at bottom */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-gray-800 font-body font-semibold">
                    {story.author}
                  </p>
                  <p className="text-sm text-blue-400 font-body mt-1">
                    {story.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-4">
            Start Your Global Opportunity Journey Today
          </h2>
          <p className="text-xl opacity-90 mb-5 font-body">
            Take the first step toward studying, working, interning, or
            conducting research abroad with structured, end-to-end support. GOES
            turns uncertainty into a clear, actionable pathway tailored to your
            goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
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
              <Icon
                icon="mdi:book-open-page-variant"
                className="w-9 h-9 mr-2"
              />
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
