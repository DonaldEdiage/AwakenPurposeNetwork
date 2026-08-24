"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Awaken Purpose Network (APN)?",
      answer:
        "Awaken Purpose Network (APN) is a faith-based leadership and formation network committed to awakening purpose, strengthening faith, and equipping individuals and institutions to live, lead, and serve with clarity, courage, and impact. APN bridges spiritual formation with practical leadership and real-world application.",
    },
    {
      question: "Is APN a church?",
      answer:
        "No. APN is not a local church. It is a leadership, discipleship, and training network that partners with churches, ministries, institutions, and individuals to equip leaders and strengthen purpose-driven impact.",
    },
    {
      question: "Who is Awaken Purpose Network for?",
      answer:
        "APN serves:\n• Individuals seeking clarity of purpose and spiritual growth\n• Church leaders and ministry teams\n• Emerging leaders and five-fold ministry workers\n• Churches, schools, and institutions seeking leadership and discipleship training",
    },
    {
      question: "Do I need to be a leader or pastor to engage with APN?",
      answer:
        "No. APN serves individuals at all stages of life and leadership. Whether you are discovering your purpose or leading an organization, APN provides tools, training, and mentorship to support your journey.",
    },
    {
      question: "What types of courses does APN offer?",
      answer:
        "APN offers courses in two main tracks:\n• Church & Ministry Development – focusing on leadership, discipleship, mentorship, and equipping churches to thrive.\n• Leadership & Organizational Development – focusing on personal growth, leadership skills, team building, and creating purposeful impact in organizations and communities.",
      cta: {
        text: "Explore Courses",
        href: "/teachings/courses",
      },
    },
    {
      question: "Are APN courses available online?",
      answer:
        "Yes. Courses are available in multiple formats, including self-paced online learning, virtual cohorts, and in-person workshops, allowing global participation.",
    },
    {
      question: "Can APN courses be used by churches and groups?",
      answer:
        "Yes. Many APN courses are designed for churches, leadership teams, small groups, and institutions. Customized training options are also available upon request.",
    },
    {
      question: "Who writes the books published by APN?",
      answer:
        "All books published by Awaken Purpose Network are written by M. Esene Ekole, Founder of APN.",
    },
    {
      question: "What are APN books used for?",
      answer:
        "APN books are designed for:\n• Personal spiritual growth\n• Small groups and Bible studies\n• Leadership development\n• Mentorship and discipleship programs\n• Church teaching and ministry training\n\nMany titles are supported by workbooks, courses, and teaching resources.",
    },
    {
      question: "What are APN Summits?",
      answer:
        "APN Summits are high-level leadership gatherings that unite leaders, inspire vision, and mobilize faith-driven impact across communities, institutions, and nations.",
      cta: {
        text: "Learn About Summits",
        href: "/speaking-events/summits",
      },
    },
    {
      question: "Who should attend an APN Summit?",
      answer:
        "APN Summits are ideal for:\n• Church and ministry leaders\n• Emerging and seasoned leaders\n• Professionals in education, business, and civic sectors\n• Institutions seeking leadership development and collaboration",
    },
    {
      question: "Are APN Summits available virtually?",
      answer:
        "Yes. APN Summits are hosted both locally and internationally, with virtual participation options to ensure global accessibility.",
    },
    {
      question: "Does APN offer speaking engagements and workshops?",
      answer:
        "Yes, M. Esene Ekole speaks at churches, conferences, schools, leadership workshops, retreats, and virtual events. All sessions are prayerfully prepared and tailored to the audience.",
    },
    {
      question: "What topics does M. Esene Ekole speak on?",
      answer:
        "Speaking topics include:\n• Purpose, calling, and identity\n• Faith, leadership, and character development\n• Personal growth and life direction\n• Education and next-generation leadership\n• Ministry leadership and church growth",
    },
    {
      question: "Does APN partner with organizations and institutions?",
      answer:
        "Yes. APN partners with churches, schools, non-profits, and leadership organizations to deliver training, host events, and develop purpose-driven programs and resources.",
    },
    {
      question: "How can I partner with Awaken Purpose Network?",
      answer:
        "Partnership opportunities include:\n• Leadership and training programs\n• Hosting APN Summits or forums\n• Educational and institutional partnerships\n• Resource development and distribution\n\nAll partnerships are approached strategically and prayerfully.",
      cta: {
        text: "Explore Partnerships",
        href: "/about/partners",
      },
    },
    {
      question: "How do I contact Awaken Purpose Network?",
      answer:
        "The best way to contact APN is through the website contact form. All inquiries are reviewed carefully, and a member of the APN team will respond as soon as possible.",
      cta: {
        text: "Contact Us",
        href: "/contact#contact-form",
      },
    },
    {
      question: "Where is Awaken Purpose Network based?",
      answer:
        "Awaken Purpose Network (APN) is based in Yaoundé, Cameroon, and serves individuals, leaders, and institutions across Cameroon and internationally through education, leadership development, and capacity-building programs.",
    },
    {
      question: "What is the heart behind everything APN does?",
      answer:
        "Everything APN does flows from one conviction: When purpose is awakened, lives are transformed—and God's work advances.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
            FREQUENTLY ASKED <br />
            QUESTIONS
          </h1>
          <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Awaken Purpose Network, our
            courses, books, events, and how you can get involved.
          </p>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="font-body text-gray-600 text-lg pr-4">
                      {faq.question}
                    </span>
                    <Icon
                      icon={
                        openIndex === index
                          ? "mdi:chevron-up"
                          : "mdi:chevron-down"
                      }
                      className="w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300"
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-5 pt-5 bg-blue-100 border-t border-gray-100">
                      <div className="text-gray-600 font-body leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                      {/* CTA Button */}
                      {faq.cta && (
                        <div className="mt-4">
                          <Link
                            href={faq.cta.href}
                            className="inline-flex items-center px-4 py-2 bg-blue-400 text-white text-sm font-body font-semibold rounded-full hover:bg-blue-500 transition-colors duration-300 shadow-md hover:shadow-lg"
                          >
                            {faq.cta.text}
                            <Icon
                              icon="mdi:arrow-right"
                              className="w-4 h-4 ml-2"
                            />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-body mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/90 font-body mb-8 max-w-2xl mx-auto">
            {`Can't find the answer you're looking for? We're here to help!`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/#contact-form"
              className="px-8 py-4 bg-white text-blue-400 rounded-lg font-body hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Icon icon="mdi:email" className="w-9 h-9 mr-2" />
              Contact Us
            </Link>

            <Link
              href="/teachings/resources"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-body hover:bg-white hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Icon
                icon="mdi:book-open-page-variant"
                className="w-9 h-9 mr-2"
              />
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links to Popular Pages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gray-800 font-lora">
              Popular Resources
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/about/apn"
              className="text-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
            >
              <Icon
                icon="mdi:information"
                className="w-6 h-6 text-blue-400 mx-auto mb-1"
              />
              <span className="text-sm text-gray-700 font-body">About APN</span>
            </Link>
            <Link
              href="/teachings/courses"
              className="text-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
            >
              <Icon
                icon="mdi:school"
                className="w-6 h-6 text-blue-400 mx-auto mb-1"
              />
              <span className="text-sm text-gray-700 font-body">Courses</span>
            </Link>
            <Link
              href="/books"
              className="text-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
            >
              <Icon
                icon="mdi:book-open-variant"
                className="w-6 h-6 text-blue-400 mx-auto mb-1"
              />
              <span className="text-sm text-gray-700 font-body">Books</span>
            </Link>
            <Link
              href="/speaking-events/overview"
              className="text-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
            >
              <Icon
                icon="mdi:microphone"
                className="w-6 h-6 text-blue-400 mx-auto mb-1"
              />
              <span className="text-sm text-gray-700 font-body">Speaking</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
