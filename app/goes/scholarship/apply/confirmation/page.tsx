// app/goes/scholarship/apply/confirmation/page.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function GGSIConfirmationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon icon="mdi:check" className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-lora mb-4">
            Application Received Successfully
          </h1>

          <div className="space-y-4 text-left text-gray-600 font-body">
            <p>
              The GGSI Selection Team will review your profile and supporting
              documents. If your application meets the eligibility requirements,
              you will be contacted within{" "}
              <span className="font-semibold">48 hours</span> regarding the next
              stage of the selection process.
            </p>
            <p>
              All official communication regarding your application will be sent
              to the email address provided, and in some cases, you may also be
              contacted via WhatsApp if necessary.
            </p>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-700 font-body">
              <Icon icon="mdi:email" className="w-4 h-4 inline mr-2" />
              Keep an eye on your email and WhatsApp for updates.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/goes/scholarship"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-body hover:shadow-lg transition-all duration-300"
            >
              <Icon icon="mdi:arrow-left" className="w-4 h-4 inline mr-2" />
              Back to Scholarship Page
            </Link>
            <Link
              href="/"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-body hover:bg-gray-50 transition-all duration-300"
            >
              Go to Homepage
            </Link>
          </div>

          <p className="text-xs text-gray-400 font-body mt-6">
            Thank you for applying to the GOES Global Scholarships Initiative
            (GGSI).
          </p>
        </div>
      </div>
    </div>
  );
}
