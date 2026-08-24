// app/goes/services/page.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
const faqs = [
  {
    question: "Do you guarantee admission or visa approval?",
    answer:
      "No. Final decisions are made by universities and embassies. However, GOES significantly improves your chances through structured academic positioning, high-quality documentation, and strategic application execution, giving you a strong competitive advantage throughout the process.",
  },
  {
    question: "Can I choose only consultancy services?",
    answer:
      "Yes. GOES is designed with flexibility. You can choose between consultancy, hybrid support, or full end-to-end placement, depending on your needs and budget.",
  },
  {
    question: "Do you handle full relocation and travel arrangements?",
    answer:
      "Yes. Our Full Placement (VIP) Service includes visa guidance, flight coordination, and relocation support — including airport pickup, accommodation assistance, and 3–6 months post-arrival support.",
  },
  {
    question: "Can I relocate with my family?",
    answer:
      "Yes, in many cases it is possible to relocate with your family, depending on the country, visa type, and your eligibility. Some study and work pathways allow for spouse and dependent applications. GOES provides guidance on family relocation options and helps structure your application to align with the requirements of your chosen destination.",
  },
  {
    question: "Do your packages include tuition fees and flight tickets?",
    answer:
      "For clients on the Full Placement package, support may include first semester tuition coordination and flight booking assistance, depending on the selected destination and package level.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "We support a wide range of global destinations across: USA, Canada, UK, Schengen countries (Europe), Asia (including emerging study destinations), and other strategic international pathways. Your final destination is determined through a structured evaluation of your profile, eligibility, and strategic positioning.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes. We offer a structured installment payment plan, allowing you to pay across key stages: Application phase, Visa processing phase, and Travel & relocation phase.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Timelines vary depending on the country and program: Admissions: typically 4–12 weeks, Visa processing: varies by country, Full relocation: 2–6 months (average). A clear timeline is provided after your evaluation.",
  },
  {
    question: "What happens if my visa is refused?",
    answer:
      "In the event of visa refusal: We guide you on reapplication strategies. You may be eligible for partial refunds based on our service agreement. Administrative and already-incurred costs are deducted.",
  },
  {
    question: "Can I apply without IELTS or TOEFL?",
    answer:
      "In some cases, yes. Certain institutions accept alternative English proficiency proofs or waivers. We assess your profile and guide you accordingly.",
  },
  {
    question: "What documents do I need to get started?",
    answer:
      "Basic requirements include: Academic certificates and transcripts, CV or resume, Passport, Personal statement or motivation letter. Additional documents may be required depending on your selected pathway.",
  },
  {
    question: "Can you help with scholarships or funded programs?",
    answer:
      "Yes. We provide scholarship guidance, positioning strategies, and application support. However, scholarships are competitive and not guaranteed.",
  },
  {
    question: "Do you support PhD applications specifically?",
    answer:
      "Yes. GOES provides specialized PhD support, including: Research proposal development, Supervisor matching strategy, Academic CV optimization, and Doctoral application positioning.",
  },
  {
    question: "Can I join if I already started the process myself?",
    answer:
      "Yes. We can step in at any stage to provide document review, application correction, visa preparation, or full process takeover if needed.",
  },
  {
    question: "What happens after I arrive abroad?",
    answer:
      "Depending on your package, GOES provides 3–6 months post-arrival support, including: Accommodation guidance, Settlement assistance, Cultural adaptation support, and Career integration coaching (selected packages).",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply apply for assessment or book a consultation. We will evaluate your profile and guide you toward the best pathway and service level.",
  },
];

export default function GOESServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-600 font-body tracking-tight mb-6">
              International Education, <br />
              Career & Research Support
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-lora mb-6">
              Structured, end-to-end services to secure global opportunities in
              study, work, internships, and research.
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 max-w-3xl font-body mb-8">
              We guide you through every stage of your international journey —
              from selecting the right pathway to preparing applications,
              strengthening your profile, and executing successful outcomes. Our
              expert support ensures you move with clarity, structure, and
              confidence toward opportunities abroad.
            </p>

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
                <Icon icon="mdi:chat" className="w-5 h-5 md:w-7 md:h-7" />
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </div>

        {/* Global Strategy & Eligibility Consulting */}
        <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
                  Global Strategy & Eligibility Consulting
                </h2>
                <p className="text-lg text-gray-700 font-body italic mb-4">
                  Get a clear roadmap to your global opportunities with expert
                  guidance.
                </p>
                <p className="text-gray-600 leading-relaxed font-body mb-6">
                  This service helps you understand your full potential for
                  international study, work, internships, or research. We
                  evaluate your profile, identify the most suitable pathways,
                  and create a detailed mobility roadmap — giving you a clear,
                  actionable plan to achieve your global goals.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 font-body mb-3">{`What's Included`}</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Profile Evaluation: Comprehensive review of academic, professional, and personal background.",
                    "Pathway Selection: Identify the opportunities best suited to your goals.",
                    "Eligibility Assessment: Understand your readiness and requirements for each pathway.",
                    "Mobility Roadmap: Step-by-step plan to navigate your international journey efficiently.",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center group cursor-pointer animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-blue-300 group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-lato group-hover:text-blue-300 transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </ul>

                <Link
                  href="/apply-for-assessment#goes-consultation"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-full font-body text-sm hover:shadow-lg transition-all duration-300"
                >
                  Apply for Assessment
                  <Icon icon="mdi:arrow-right" className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-blue-100 to-purple-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex justify-center mb-4">
                    <Icon
                      icon="mdi:compass"
                      className="w-20 h-20 text-blue-400"
                    />
                  </div>
                  <p className="text-gray-700 font-body text-center italic">
                    {`Your global journey starts with a clear roadmap. Let us help you find your path.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Admissions Support */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-right order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-purple-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex justify-center mb-4">
                    <Icon
                      icon="mdi:school"
                      className="w-20 h-20"
                      color="#4A90E2 "
                    />
                  </div>
                  <p className="text-gray-700 font-body text-center italic">
                    {`Secure your place at top universities worldwide with structured admissions support.`}
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-left order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
                  Education & Admissions Support
                </h2>
                <p className="text-lg text-gray-700 font-body italic mb-4">
                  Secure admission into international universities with
                  structured application and positioning support.
                </p>
                <p className="text-gray-600 leading-relaxed font-body mb-4">
                  {`We support students and graduates in successfully applying to undergraduate, Master's, and PhD programs worldwide. 
                From choosing the right universities to preparing competitive applications and strengthening your profile, 
                we guide you through a structured process designed to improve your chances of admission and scholarship opportunities.`}
                </p>

                <h3 className="text-xl font-semibold text-gray-700 font-body mb-3">{`What's Included`}</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Undergraduate Admissions: Guidance for university applications and entry requirements",
                    "Master's Admissions: Program selection, application preparation, and positioning strategy",
                    "PhD Admissions: Research-focused applications, supervisor targeting, and proposal support",
                    "Scholarship Guidance: Identification and application support for funding opportunities",
                    "University Selection: Matching your profile with suitable international institutions",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center group cursor-pointer animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-blue-300 group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-lato group-hover:text-blue-300 transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </ul>

                <Link
                  href="/apply-for-assessment#goes-consultation"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-full font-body text-sm hover:shadow-lg transition-all duration-300"
                >
                  Apply for Admission Support
                  <Icon icon="mdi:arrow-right" className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global Employment & Internship Support */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
                  Global Employment & Internship Support
                </h2>
                <p className="text-lg text-gray-700 font-body italic mb-4">
                  Position yourself for international careers and internships
                  with expert guidance.
                </p>
                <p className="text-gray-600 leading-relaxed font-body mb-4">
                  We help graduates and early-career professionals gain access
                  to global employment and internship opportunities. From
                  optimizing your CV to navigating application processes and
                  meeting eligibility requirements, our structured approach
                  increases your chances of landing roles that align with your
                  career goals.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 font-body mb-3">{`What's Included`}</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "International Job Support: Guidance on finding and applying for positions abroad",
                    "Internship Applications: End-to-end assistance with applications to global internship programs",
                    "CV & Profile Optimization: Tailoring your CV and professional profile to meet international standards",
                    "Documentation Support: Support with motivation letters, recommendation letters, and other key documents",
                    "Work Eligibility Guidance: Expert advice on visas, work permits, and eligibility criteria",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center group cursor-pointer animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-blue-300 group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-lato group-hover:text-blue-300 transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </ul>

                <Link
                  href="/book-consultation#consultation-booking"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-full font-body text-sm hover:shadow-lg transition-all duration-300"
                >
                  Speak to an Advisor
                  <Icon icon="mdi:arrow-right" className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-blue-100 to-purple-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex justify-center mb-4">
                    <Icon
                      icon="mdi:briefcase"
                      className="w-20 h-20 text-blue-400"
                    />
                  </div>
                  <p className="text-gray-700 font-body text-center italic">
                    {`Launch your international career with confidence. Let us help you stand out.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Academic Development Support */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-right order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-purple-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex justify-center mb-4">
                    <Icon
                      icon="mdi:microscope"
                      className="w-20 h-20 text-blue-400"
                    />
                  </div>
                  <p className="text-gray-700 font-body text-center italic">
                    {`Advance your academic career with strategic research and doctoral support.`}
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-left order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
                  Research & Academic Development Support
                </h2>
                <p className="text-lg text-gray-700 font-body italic mb-4">
                  Advance your academic career with strategic guidance and
                  professional support for research and doctoral pathways.
                </p>
                <p className="text-gray-600 leading-relaxed font-body mb-4">
                  We provide tailored support for researchers and aspiring PhD
                  candidates seeking international opportunities. From
                  developing compelling research proposals to identifying
                  potential supervisors and refining your academic profile, our
                  structured services help you present a competitive application
                  and position yourself for success in global academic
                  environments.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 font-body mb-3">
                  {" "}
                  {`What's Included`}
                </h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Research Proposal Development: Craft a strong, well-structured proposal tailored to your field",
                    "Supervisor Identification: Strategic guidance on finding and approaching the right academic mentors",
                    "SOP & Academic Document Support: Assistance with statements of purpose, motivation letters",
                    "Academic CV Development: Optimize your research profile for international standards",
                    "PhD Positioning: Personalized strategies to strengthen your candidacy for doctoral programs",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center group cursor-pointer animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-blue-300 group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-lato group-hover:text-blue-300 transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </ul>

                <Link
                  href="/book-consultation#consultation-booking"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-full font-body text-sm hover:shadow-lg transition-all duration-300"
                >
                  Get Strategy Consultation
                  <Icon icon="mdi:arrow-right" className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Writing Services Banner */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <div className="max-w-7xl mx-auto">
            {/* <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50"> */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon icon="mdi:pen" className="w-10 h-10 text-gray-600 " />
                  <h2 className="text-3xl md:text-4xl font-bod text-gray-600 y">
                    Professional Writing Services
                  </h2>
                </div>
                <p className="text-lg text-gray-700 font-body italic mb-4">
                  High-impact, expertly crafted documents to strengthen your
                  applications and global opportunities.
                </p>
                <p className="text-gray-600 font-body">
                  GOES provides professional writing support to help you present
                  your best self to universities, employers, and research
                  programs. Our team creates polished, persuasive, and
                  customized documents that meet international standards.
                </p>
              </div>

              <div className=" backdrop-blur-sm rounded-xl p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-semibold font-body mb-3 text-gray-600">{`What's Included`}</h3>
                <ul className="space-y-2">
                  {[
                    "CV Writing: Professionally structured CVs highlighting your strengths",
                    "SOP Writing: Compelling Statements of Purpose tailored to your goals",
                    "Motivation Letters: Persuasive letters communicating your vision",
                    "Personal Statements: Well-crafted narratives of your journey",
                    "Research Proposals: Strong, methodically developed proposals",
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
                </ul>
                <div className="mt-6 text-center">
                  <Link
                    href="/book-consultation#consultation-booking"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-400 rounded-full font-body  hover:shadow-lg transition-all duration-300"
                  >
                    Order Writing Services
                    <Icon icon="mdi:arrow-right" className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-7 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
          <div className="max-w-4xl mx-auto text-center mb-4">
            <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-4">
              Ready to Start Your Global Journey?
            </h2>
            <p className="text-xl opacity-90 mb-10 font-body">
              Take the first step toward studying, working, or conducting
              research abroad with structured, end-to-end support.
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
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-7">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto font-body">
                Before You Apply
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-body font-semibold text-gray-800 text-base pr-4 cursor-pointer">
                        {faq.question}
                      </span>
                      <Icon
                        icon={
                          openFaq === index
                            ? "mdi:chevron-up"
                            : "mdi:chevron-down"
                        }
                        className="w-6 h-6 text-blue-500 flex-shrink-0 transition-transform duration-300 cursor-pointer"
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-5 pt-5 bg-blue-100 border-t border-gray-100">
                        <p className="text-gray-600 font-body leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
