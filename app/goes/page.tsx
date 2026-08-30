// app/goes/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function GOESPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  // Add to your existing state declarations
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    qualification: "",
    opportunity: "",
    targetCountry: "",
    contact: "",
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Add these functions
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const isFormValid = () => {
    const {
      fullName,
      country,
      qualification,
      opportunity,
      targetCountry,
      contact,
    } = formData;
    return (
      fullName.trim() !== "" &&
      country.trim() !== "" &&
      qualification !== "" &&
      opportunity !== "" &&
      targetCountry.trim() !== "" &&
      contact.trim() !== ""
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid() || isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Create FormData to send files
    const formDataToSend = new FormData();

    // Append all text fields
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("qualification", formData.qualification);
    formDataToSend.append("opportunity", formData.opportunity);
    formDataToSend.append("targetCountry", formData.targetCountry);
    formDataToSend.append("contact", formData.contact);

    // Append files
    selectedFiles.forEach((file) => {
      formDataToSend.append("documents", file);
    });

    try {
      const response = await fetch("/api/goes-application/", {
        method: "POST",
        // Don't set Content-Type header - browser will set it with boundary for FormData
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            result.message ||
            "Application submitted successfully! We will contact you within 24-48 hours.",
        });
        // Reset form
        setFormData({
          fullName: "",
          country: "",
          qualification: "",
          opportunity: "",
          targetCountry: "",
          contact: "",
        });
        setSelectedFiles([]);
        if (fileInputRef.current) fileInputRef.current.value = "";

        // Clear success message after 5 seconds
        setTimeout(() => setStatus({ type: null, message: "" }), 5000);
      } else {
        setStatus({
          type: "error",
          message: result.error || "Submission failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        {/* Full Width Row - Hero Image */}
        <div className="w-full">
          <div className="relative w-full">
            <Image
              src="/images/goes-hero.png"
              alt="Global Opportunities & Educational Services"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Centered Row - Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center bg-yellow-200 rounded-full px-4 py-2">
                <Icon icon="mdi:earth" className="w-9 h-9 mr-2 text-gray-600" />
                <span className="text-sm font-body text-gray-600">
                  Global Opportunities & Educational Services
                </span>
              </div>
            </div>

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
              We provide structured international mobility solutions for
              students, graduates, and professionals seeking global
              opportunities. Through expert consultancy, guided application
              support, professional writing services, and full end-to-end
              execution, we help you move from ambition to successful relocation
              abroad.
            </p>

            {/* Core Promise */}
            {/* <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 mb-8 border border-yellow-100 max-w-2xl">
              <p className="text-gray-600 font-body text-lg">
                <span className="font-bold">{`We don't just guide you`} —</span>{" "}
                we design and execute your complete global journey.
              </p>
            </div> */}

            {/* Trust Line */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                "End-to-end support",
                "Admission",
                "Visa",
                "Travel",
                "Settlement",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-2 group-hover:bg-blue-200 transition-all duration-300">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-body">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/apply-for-assessment"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-body text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Apply For Assessment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              <Link
                href="/book-consultation"
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
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Centered Top Content */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                Who We Are
              </h2>
              <h2 className="text-2xl md:text-3xl text-gray-600 font-lora mb-6">
                A Structured Global Mobility System
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-6">
                Global Opportunities & Educational Services (GOES), a division
                of APN, is a structured international mobility and placement
                system that helps individuals transition from local academic or
                professional backgrounds into competitive global opportunities
                across education, employment, internships, and research
                pathways.
              </p>
              <p className="text-gray-600 leading-relaxed font-body">
                We operate as a strategic support system, combining consulting,
                application development, and structured execution to position
                candidates effectively for international success.
              </p>
            </div>
          </div>

          {/* Three Columns - Core Focus Areas | Who We Work With | Our Approach */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Column 1: Core Focus Areas */}
            <div className="animate-slide-in-left bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 h-full">
              <h3 className="text-xl text-gray-700 font-body mb-4">
                Core Focus Areas
              </h3>
              <ul className="space-y-3">
                {[
                  "Study Abroad Applications and Admissions",
                  "Master's and PhD Placement Strategies",
                  "Research Proposal Development and Academic Positioning",
                  "Professional and Academic Profile Structuring",
                  "International Career and Mobility Strategy",
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-3 mt-1 group-hover:bg-blue-200 group-hover:text-white transition-all duration-300">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Who We Work With */}
            <div className="animate-fade-in-up bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 h-full">
              <h3 className="text-xl  text-gray-700 font-body mb-4">
                Who We Work With
              </h3>
              <p className="text-gray-600 font-body">
                We support students, graduates, and professionals across global
                regions by developing structured pathways that align their
                academic and professional profiles with international standards
                and opportunities.
              </p>
            </div>

            {/* Column 3: Our Approach */}
            <div className="animate-slide-in-right bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 h-full">
              <h3 className="text-xl text-gray-700 font-body mb-4">
                Our Approach
              </h3>
              <p className="text-gray-600 font-body">
                We work through a structured system that integrates strategy,
                documentation, and execution support to improve candidate
                positioning and increase access to international opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
              OUR CORE SERVICES
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 font-lora mb-6">
              Structured support for international education, employment,
              internships, and global mobility success.
            </p>
          </div>

          {/* First Row - Cards 1 & 2 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Service Card 1 */}
            <Link
              href="#"
              className="animate-fade-in-up group"
              style={{ animationDelay: "0s" }}
            >
              <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    icon="emojione-v1:world-map"
                    className="w-10 h-10 text-white"
                  />
                </div>
                <h3 className="text-lg text-gray-600 font-lora mb-2">
                  Global Strategy & Eligibility Consulting
                </h3>
                <p className="text-gray-600 font-body text-sm mb-4">
                  We assess your profile and design the most suitable
                  international pathway across education, work, internships, or
                  research.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500 font-body">
                    Includes: Academic & professional profile evaluation,
                    Country and pathway selection strategy, Eligibility and
                    readiness assessment, Long-term international positioning
                    plan, Global mobility roadmap
                  </p>
                </div>
                <p className="text-xs text-blue-400 font-body mb-4">
                  Best for: Understanding your ideal international pathway
                  before applying
                </p>
                <div className="flex items-center text-blue-400 transition-colors duration-300 mt-auto">
                  <span className="text-sm font-body">
                    Explore Strategy Support
                  </span>
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>

            {/* Service Card 2 */}
            <Link
              href="#"
              className="animate-fade-in-up group"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    icon="hugeicons:course"
                    className="w-10 h-10 text-white"
                  />
                </div>
                <h3 className="text-lg text-gray-600 font-lora mb-2">
                  Education & Admissions Support
                </h3>
                <p className="text-gray-600 font-body text-sm mb-4">
                  We support applications for international study programs
                  across universities and institutions worldwide.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500 font-body">
                    Includes: Application strategy, University selection,
                    Submission support, Scholarship guidance
                  </p>
                </div>
                <p className="text-xs text-blue-400 font-body mb-4">
                  {`Best for: Students applying for undergraduate, Master's, or PhD programs`}
                </p>
                <div className="flex items-center text-blue-400 transition-colors duration-300 mt-auto">
                  <span className="text-sm font-body">
                    Apply for Admission Support
                  </span>
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Second Row - Cards 3 & 4 */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Service Card 3 */}
            <Link
              href="#"
              className="animate-fade-in-up group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-green-300 to-green-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon="mdi:briefcase" className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg text-gray-600 font-lora mb-2">
                  Global Employment & Internship Support
                </h3>
                <p className="text-gray-600 font-body text-sm mb-4">
                  We support individuals seeking international work
                  opportunities and internship placements.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500 font-body">
                    Includes: Job positioning strategy, Internship application
                    support, CV optimization, Work eligibility guidance,
                    Documentation support
                  </p>
                </div>
                <p className="text-xs text-blue-600 font-body mb-4">
                  Best for: Professionals and graduates seeking jobs or
                  internships abroad
                </p>
                <div className="flex items-center text-blue-500 transition-colors duration-300 mt-auto">
                  <span className="text-sm font-body">Speak to an Advisor</span>
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>

            {/* Service Card 4 */}
            <Link
              href="#"
              className="animate-fade-in-up group"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-200 to-amber-300 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon="mdi:microscope" className="w-10 h-8 text-white" />
                </div>
                <h3 className="text-lg text-gray-600 font-lora mb-2">
                  Research & Academic Development Support
                </h3>
                <p className="text-gray-600 font-body text-sm mb-4">
                  {`We support advanced academic pathways for Master's, PhD, and research-focused applicants.`}
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500 font-body">
                    Includes: Research proposal development, Supervisor
                    identification strategy, SOP writing support, Academic CV
                    structuring, Doctoral application positioning, Research
                    pathway planning
                  </p>
                </div>
                <p className="text-xs text-blue-400 font-body mb-4">
                  {`Best for: Master's, PhD, and research-oriented candidates`}
                </p>
                <div className="flex items-center text-blue-400 transition-colors duration-300 mt-auto">
                  <span className="text-sm font-body">
                    Get Strategy Consultation
                  </span>
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Professional Writing Services Banner */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto animate-fade-in-up bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 h-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-300 to-indigo-400 rounded-xl flex items-center justify-center">
                  <Icon icon="mdi:pen" className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-700 font-body">
                    Professional Writing Services
                  </h3>
                  <p className="text-gray-600 font-body text-sm">
                    CV writing • SOP / Motivation Letter writing • Personal
                    statement development • Research proposal writing
                  </p>
                </div>
              </div>
              <Link
                href="/book-consultation#consultation-booking"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-12 py-1 rounded-full font-body text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer w-fit mx-auto block text-center"
              >
                <span className="relative z-10">Order Writing Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
              How the Process Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Application / Intake Form",
                desc: "Submit your academic or professional profile for evaluation across education, employment, internship, or research pathways.",
                icon: "mdi:clipboard-list",
              },
              {
                step: "02",
                title: "Profile Assessment",
                desc: "We analyze your eligibility and determine the most suitable international pathway — including study, work, internship, or research opportunities.",
                icon: "mdi:chart-line",
              },
              {
                step: "03",
                title: "Strategy Development",
                desc: "We design your personalized global mobility pathway based on your goals, background, and target destination.",
                icon: "mdi:lightbulb",
              },
              {
                step: "04",
                title: "Application Support",
                desc: "We guide you through documentation, application preparation, and positioning for your selected pathway.",
                icon: "mdi:file-document",
              },
              {
                step: "05",
                title: "Admission / Selection Outcome Support",
                desc: "We support you through admission decisions, job offers, internship placements, or research approvals.",
                icon: "mdi:email-check",
              },
              {
                step: "06",
                title: "Visa, Travel & Settlement Support",
                desc: "We provide visa guidance, travel coordination, flight assistance, and relocation support including airport pickup and accommodation guidance.",
                icon: "mdi:airplane",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl font-bold text-gray-200 font-lora">
                    {item.step}
                  </div>
                  <Icon icon={item.icon} className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg text-gray-600 font-lora mb-3 font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-body text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PREMIUM DIGITAL PRODUCTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
              Digital Academic Resources & Training
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              These resources are designed for individuals who want to improve
              their applications independently, strengthen their profile before
              applying for full GOES support, or apply on their own.
            </p>
            <p className="font-body text-center text-gray-600 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
              They complement all four pathways:{" "}
              <span className="inline-flex items-center gap-2">
                <Icon icon="carbon:education" className="w-5 h-5" />
                <span>Education</span>
              </span>
              <span className="w-px h-4 bg-gray-400"></span>
              <span className="inline-flex items-center gap-2">
                <Icon icon="hugeicons:work-alert" className="w-5 h-5" />
                <span>Employment</span>
              </span>
              <span className="w-px h-4 bg-gray-400"></span>
              <span className="inline-flex items-center gap-2">
                <Icon
                  icon="fluent-mdl2:internal-investigation"
                  className="w-5 h-5"
                />
                <span>Internships</span>
              </span>
              <span className="w-px h-4 bg-gray-400"></span>
              <span className="inline-flex items-center gap-2">
                <Icon icon="marketeq:research" className="w-5 h-5" />
                <span>Research</span>
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="flex text-lg text-gray-600 font-body mb-3 font-semibold">
                <Icon
                  icon="grommet-icons:resources"
                  className="w-6 h-6 text-blue-400 mr-3"
                />
                Available Resources
              </h3>
              <ul className="space-y-3">
                {[
                  "PhD Research Proposal Templates",
                  "SOP Writing Frameworks",
                  "Academic CV Templates",
                  "Study Abroad Guides",
                  "Research Writing Manuals",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Icon
                      icon="mdi:file-document"
                      className="w-5 h-5 text-blue-400 mr-3"
                    />
                    <span className="text-gray-600 font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="flex text-lg text-gray-600 font-body mb-3 font-semibold">
                <Icon
                  icon="oui:training"
                  className="w-6 h-6 text-purple-400 mr-3"
                />
                Training Programs
              </h3>
              <ul className="space-y-3">
                {[
                  "PhD Preparation Masterclass",
                  "Research Writing Bootcamp",
                  "Study Abroad Strategy Workshop",
                  "Academic Success Coaching Sessions",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Icon
                      icon="mdi:play-circle"
                      className="w-5 h-5 text-purple-400 mr-3"
                    />
                    <span className="text-gray-600 font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="text-sm text-gray-700 font-body">
                <span className="font-semibold"> WHO THIS IS FOR:</span>{" "}
                <span className="inline-flex flex-wrap items-center gap-2">
                  <span>Applicants preparing before full application</span>
                  <span className="w-px h-4 bg-gray-400"></span>
                  <span>Clients who prefer self-application support</span>
                  <span className="w-px h-4 bg-gray-400"></span>
                  <span>Individuals improving their academic profile</span>
                  <span className="w-px h-4 bg-gray-400"></span>
                  <span>Students not yet ready for full GOES services</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPLICATION FORM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Start Your Application
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Begin your journey by submitting your academic or professional
              profile for evaluation across education, employment, internships,
              or research pathways.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Country of Residence */}
              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Country of Residence <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  placeholder="Enter your country"
                  required
                />
              </div>

              {/* Highest Qualification */}
              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Highest Qualification <span className="text-red-500">*</span>
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  required
                >
                  <option value="">Select qualification</option>
                  <option value="high-school">High School / Secondary</option>
                  <option value="bachelors">{`Bachelor's Degree`}</option>
                  <option value="masters">{`Master's Degree`}</option>
                  <option value="phd">PhD / Doctorate</option>
                  <option value="diploma">Diploma / Certificate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Desired Program or Opportunity */}
              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Desired Program or Opportunity{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="opportunity"
                  value={formData.opportunity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  required
                >
                  <option value="">Select opportunity type</option>
                  <option value="study">Study / Education</option>
                  <option value="work">Work / Employment</option>
                  <option value="internship">Internship</option>
                  <option value="research">Research / PhD</option>
                </select>
              </div>

              {/* Target Country */}
              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Target Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="targetCountry"
                  value={formData.targetCountry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  placeholder="e.g., USA, Canada, UK, Germany"
                  required
                />
              </div>

              {/* Email / WhatsApp Contact */}
              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Email / WhatsApp Contact{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  placeholder="Email address or WhatsApp number"
                  required
                />
              </div>

              {/* Upload Supporting Documents */}
              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Upload Supporting Documents{" "}
                  <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200 cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Icon
                    icon="mdi:cloud-upload"
                    className="w-10 h-10 text-gray-400 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-500 font-body">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 font-body mt-1">
                    CV, Certificates, Transcripts (PDF, DOC, JPG)
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                  />
                </div>
                {selectedFiles.length > 0 && (
                  <div className="mt-3 space-y-1">
                    {selectedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-gray-50 rounded-lg p-2 text-sm"
                      >
                        <span className="text-gray-600 font-body">
                          {file.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {(file.size / 1024).toFixed(1)} KB
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center pt-4">
                {/* <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className={`px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-body font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 ${
                    !isFormValid() || isSubmitting
                      ? "opacity-50 cursor-not-allowed hover:scale-100"
                      : ""
                  }`}
                >
                  <Icon icon="mdi:send" className="w-5 h-5" />
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button> */}
                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-8 py-3 rounded-full font-body text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer w-fit mx-auto block"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Icon icon="mdi:send" className="w-5 h-5" />
                    <span>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center font-body mt-4">
                After submission, our team will review your profile and provide
                a structured evaluation with the best recommended pathway and
                service option.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER STORY & VISION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                Founder Story & Global Vision
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                <p>
                  Global Opportunities & Educational Services (GOES) was founded
                  from a deep understanding of the challenges individuals face
                  when trying to access international education, employment,
                  internships, and research opportunities.
                </p>
                <p>
                  With over 10 years of international exposure across multiple
                  countries, the founder has developed first-hand insight into
                  global academic systems, visa processes, career pathways, and
                  relocation structures.
                </p>
                <p>
                  {`Academically, the founder holds a Bachelor's degree from the United States, a Master's degree from the Philippines, 
                  and is currently pursuing a PhD in Europe. This academic journey across different education systems has shaped 
                  a practical, results-driven understanding of international mobility.`}
                </p>
                <p>
                  Having lived, studied, and worked across multiple regions and
                  visited more than 10 countries, this experience has been
                  translated into a structured support system designed to help
                  others navigate global opportunities more effectively.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="text-center mb-6">
                  <Icon
                    icon="mdi:target"
                    className="w-16 h-16 text-blue-500 mx-auto"
                  />
                  <h3 className="text-xl font-bold text-gray-800 font-lora mt-4">
                    Vision Behind GOES
                  </h3>
                </div>
                <p className="text-gray-700 font-body text-center mb-6">
                  GOES was created with a clear mission:{" "}
                  <span className="font-semibold">
                    To transform how individuals access global opportunities
                  </span>{" "}
                  by providing structured, strategy-driven, and execution-based
                  international mobility support.
                </p>
                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <p className="text-gray-700 font-body text-center italic">
                    {`"We believe success in international pathways should not be based on guesswork — but on clarity, structure, and the right system."`}
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm text-gray-600 font-body">
                      250+ individuals supported globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Core Philosophy */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 text-center">
              <h3 className="text-xl font-bold text-gray-800 font-lora mb-3">
                Core Philosophy
              </h3>
              <p className="text-gray-700 font-body">
                At GOES, we do not simply advise. We design pathways, structure
                applications, and support execution — ensuring that individuals
                are properly positioned for international success across
                education, work, internships, and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
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
                    <span className="font-body font-semibold text-gray-800 text-base pr-4">
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
                    <div className="p-5 pt-0 bg-gray-50 border-t border-gray-100">
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

      {/* 8. FINAL CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
            Ready to Begin Your Global Opportunity Journey?
          </h2>
          <p className="text-xl text-white/90 font-body mb-10 max-w-2xl mx-auto">
            Take the first step toward accessing international education,
            employment, internships, or research opportunities through
            structured guidance, strategic positioning, and professional
            execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-for-assessment#global-assesement-application"
              className="px-8 py-4 bg-white text-blue-400 rounded-full font-body font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Icon icon="mdi:clipboard-list" className="w-7 h-7" />
              Apply for Assessment
            </Link>
            <Link
              href="/book-consultation"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-body font-semibold hover:bg-white hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Icon icon="mdi:calendar-clock" className="w-7 h-7" />
              Book Consultation
            </Link>
          </div>

          <p className="mt-8 text-white/70 text-sm font-body">
            Still have questions? Speak directly with our team.
          </p>
        </div>
      </section>
    </div>
  );
}
