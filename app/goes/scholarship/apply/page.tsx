// app/goes/scholarship/apply/page.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function GGSIApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      {/* HERO SECTION */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-600 font-body tracking-tight mb-6">
            Welcome to the <br />
            GGSI Application Portal
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-body mb-6">
            Apply for international scholarship opportunities and academic
            advancement pathways.
          </p>
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center bg-yellow-200 rounded-full px-4 py-2">
              <Icon
                icon="mdi:scholarship"
                className="w-9 h-9 mr-2 text-gray-600"
              />
              <span className="text-sm font-body text-gray-600">
                Estimated time: 20–30 minutes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK INFO CARDS */}
      <section className=" px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                icon: "mdi:clock-outline",
                label: "Levels",
                value: "Bachelor's & Master's",
                color: "from-blue-50 to-blue-100",
              },
              {
                icon: "mdi:school",
                label: "Process",
                value: "Selection-based review",
                color: "from-blue-100 to-blue-200",
              },
              {
                icon: "mdi:file-check",
                label: "Duration",
                value: "20–30 mins",
                color: "from-blue-200 to-blue-300",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${card.color} rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 w-[200px]`}
              >
                <Icon
                  icon={card.icon}
                  className="w-6 h-6 text-gray-700 mx-auto mb-2"
                />
                <p className="text-xs text-gray-500 font-body">{card.label}</p>
                <p className="text-sm font-semibold text-gray-800 font-body">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION OVERVIEW */}
      <section className="py-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-10 text-center">
            Application Overview
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed font-body">
              The GGSI application is the official gateway for students,
              graduates, and professionals in Cameroon seeking access to
              international scholarship opportunities, academic advancement, and
              global education pathways.
            </p>
            <p className="text-gray-600 leading-relaxed font-body mt-4">
              Through a structured and competitive selection process, GGSI
              identifies individuals who demonstrate academic potential,
              leadership qualities, and a strong commitment to furthering their
              education and career goals.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE YOU BEGIN - DOCUMENT CHECKLIST */}
      <section className="py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-6 text-center">
            Before You Begin
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 font-body mb-6">
              Please ensure you have clear scanned copies of the following
              documents ready for upload:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: "mdi:card-account-details",
                  label: "National ID or Passport",
                },
                { icon: "mdi:file-certificate", label: "Birth Certificate" },
                {
                  icon: "mdi:school",
                  label: "Academic Certificates & Transcripts",
                },
                { icon: "mdi:file-account", label: "CV (Curriculum Vitae)" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200"
                >
                  <Icon
                    icon={item.icon}
                    className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700 font-body">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFEREES REQUIREMENT */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-6 text-center">
            Referees Requirement
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Icon
                  icon="mdi:account-check"
                  className="w-5 h-5 text-blue-400"
                />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed font-body">
                  You must provide details of{" "}
                  <span className="font-semibold">two referees</span> who can
                  verify your academic, leadership, or professional background.
                </p>
                <p className="text-gray-600 leading-relaxed font-body mt-3">
                  Ensure all contact details are accurate, as referees may be
                  contacted during the selection process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-6 text-center">
            Application Process
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-4">
              {[
                "Submit application",
                "Review by GGSI Selection Team",
                "Shortlisting (if eligible)",
                "Interview / assessment (if required)",
                "Final decision communicated",
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-600">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-gray-700 font-body pt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL NOTICE BAR */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-amber-200 shadow-sm">
            <Icon
              icon="mdi:alert-circle"
              className="w-8 h-8 text-amber-500 flex-shrink-0"
            />
            <p className="text-sm text-gray-700 font-body">
              <span className="font-semibold">Please ensure</span> all
              information provided is accurate and complete. Incomplete or false
              information may affect your eligibility.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN ACTION BUTTON - Start Application */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/goes/scholarship/apply/form"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-12 md:px-16 py-4 md:py-5 rounded-full font-body text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block"
          >
            <span className="relative z-10">Start Application</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
          <p className="text-sm text-gray-500 font-body mt-6">
            Estimated completion time: 20–30 minutes
          </p>
        </div>
      </section>

      {/* Back to Scholarship Page */}
      <div className="text-center pb-6">
        <Link
          href="/goes/scholarship"
          className="text-blue-500 hover:text-blue-600 font-body text-sm inline-flex items-center"
        >
          <Icon icon="mdi:arrow-left" className="w-4 h-4 mr-2" />
          Back to Scholarship Page
        </Link>
      </div>
    </div>
  );
}
