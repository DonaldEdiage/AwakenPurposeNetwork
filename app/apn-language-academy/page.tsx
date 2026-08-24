// app/apn-language-academy/page.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function APNLanguageAcademyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
            <span className="text-sm font-body tracking-wider">
              APN Language Academy
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-body tracking-tight mb-6">
            {`We're Updating This Page`}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto leading-relaxed">
            Thank you for your interest in APN Language Academy. We are
            currently updating this page with full details about our language
            programs, course structure, and learning pathways.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="mdi:school" className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-lora mb-4">
                Page Under Construction
              </h2>
            </div>

            <p className="text-gray-600 font-body leading-relaxed mb-6">
              Our Language Academy services are already available at our
              headquarters in
              <span className="font-semibold"> Yaoundé, Cameroon</span>, and we
              are currently accepting students for enrollment and placement.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
              <p className="text-gray-700 font-body">
                If you would like to learn more, register, or speak with our
                team, please contact us or book a consultation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-body text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <span className="relative z-10">Book a Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              <Link
                href="/contact"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-600 text-blue-600 rounded-full font-body text-base md:text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Icon icon="mdi:email" className="w-5 h-5 md:w-6 md:h-6" />
                Contact Us
              </Link>
            </div>

            {/* Back Link */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center text-gray-500 hover:text-blue-500 font-body text-sm transition-colors duration-300"
              >
                <Icon icon="mdi:arrow-left" className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
