import Link from "next/link";
import { Icon } from "@iconify/react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
            PRIVACY POLICY
          </h1>
          <p className="text-2xl md:text-2xl text-gray-600 font-lora mb-6">
            Awaken Purpose Network (APN)
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-lg leading-relaxed text-gray-600 font-body mx-auto mb-4">
                Awaken Purpose Network (APN) is committed to protecting your
                privacy and handling your personal information with integrity,
                care, and transparency. This Privacy Policy explains how we
                collect, use, store, and protect personal information when you
                visit our website, engage with our resources, or connect with
                our ministry and services.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <p className="text-sm text-gray-700 font-body">
                  By using this website or submitting information to APN, you
                  agree to the practices described in this Privacy Policy.
                </p>
              </div>
            </div>

            {/* 1. Who We Are */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                1. Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed font-body">
                Awaken Purpose Network (APN) is a faith-based leadership and
                formation network committed to awakening purpose, strengthening
                faith, and equipping individuals and institutions for
                transformational impact through teaching, discipleship,
                mentorship, leadership development, and gospel-centered
                training.
              </p>
              <p className="text-gray-700 leading-relaxed font-body mt-3">
                APN serves individuals, churches, leaders, institutions, and
                partners globally through online platforms, in-person
                engagements, courses, events, summits, and resources.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed font-body mb-3">
                We collect personal information only when it is voluntarily
                provided by you. This may include:
              </p>

              <h3 className="text-xl text-gray-700 font-body mt-4 mb-2">
                a. Personal Information
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 font-body mb-3">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number / WhatsApp (optional)</li>
                <li>Organization, church, or institution (if applicable)</li>
                <li>Country and location</li>
                <li>Event or ministry-related details</li>
              </ul>

              <p className="text-gray-700 leading-relaxed font-body mb-2">
                This information may be collected when you:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 font-body mb-4">
                <li>Complete a contact form</li>
                <li>Request a speaking engagement or ministry invitation</li>
                <li>Register for courses, events, or summits</li>
                <li>Subscribe to newsletters, devotionals, or resources</li>
                <li>
                  Make inquiries about books, mentorship, partnerships, or
                  programs
                </li>
              </ul>

              <h3 className="text-xl text-gray-700 font-body mt-4 mb-2">
                b. Non-Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed font-body mb-2">
                We may collect limited non-personal data automatically, such as:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 font-body">
                <li>Browser type</li>
                <li>Device type</li>
                <li>Pages visited</li>
                <li>Time spent on the website</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2 font-body">
                This data is used for website performance, analytics, and
                improvement purposes only.
              </p>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed font-body mb-3">
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 font-body mb-3">
                <li>Respond to inquiries and contact requests</li>
                <li>Process speaking, training, or partnership invitations</li>
                <li>Provide access to courses, resources, and events</li>
                <li>
                  Send devotionals, updates, insights, or relevant
                  communications (only when you opt in)
                </li>
                <li>Improve our website, programs, and services</li>
                <li>
                  Fulfill ministry, leadership development, and training
                  purposes
                </li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <p className="text-sm text-gray-700 font-body">
                  APN does not sell, rent, or trade your personal information to
                  third parties.
                </p>
              </div>
            </div>

            {/* 4. Email Communication & Subscriptions */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                4. Email Communication & Subscriptions
              </h2>
              <p className="text-gray-700 leading-relaxed font-body mb-3">
                If you subscribe to APN updates, devotionals, or resources:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 font-body mb-2">
                <li>
                  You may receive emails related to teachings, events,
                  resources, or ministry updates
                </li>
                <li>
                  You may unsubscribe at any time using the link provided in our
                  emails
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-body">
                APN respects your inbox and communicates purposefully and
                responsibly.
              </p>
            </div>

            {/* 5. Cookies & Website Analytics */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                5. Cookies & Website Analytics
              </h2>
              <p className="text-gray-700 leading-relaxed font-body mb-3">
                Our website may use cookies or similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 font-body mb-2">
                <li>Improve user experience</li>
                <li>Understand how visitors interact with our website</li>
                <li>Support analytics and performance monitoring</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-body">
                You may disable cookies through your browser settings. Disabling
                cookies may affect some website functionality.
              </p>
            </div>

            {/* 6. Data Protection & Security */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                6. Data Protection & Security
              </h2>
              <p className="text-gray-700 leading-relaxed font-body mb-3">
                APN takes reasonable and appropriate measures to protect your
                personal information from:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 font-body mb-2">
                <li>Unauthorized access</li>
                <li>Misuse</li>
                <li>Disclosure or alteration</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-body">
                While no online platform can guarantee absolute security, we are
                committed to safeguarding the information entrusted to us.
              </p>
            </div>

            {/* 7. Sharing of Information */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                7. Sharing of Information
              </h2>
              <p className="text-gray-700 leading-relaxed font-body mb-3">
                APN may share personal information only:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 font-body mb-2">
                <li>When required by law</li>
                <li>
                  When necessary to fulfill a ministry request or service (e.g.,
                  event coordination)
                </li>
                <li>
                  With trusted service providers who assist with website hosting
                  or communication tools, under confidentiality obligations
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-body">
                We do not share personal data for commercial or marketing
                purposes.
              </p>
            </div>

            {/* 8. International Use */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                8. International Use
              </h2>
              <p className="text-gray-700 leading-relaxed font-body">
                Awaken Purpose Network operates internationally and serves
                individuals across multiple countries. By using our website or
                services, you acknowledge that your information may be processed
                or stored in different locations where APN or its service
                providers operate.
              </p>
            </div>

            {/* 9. Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">{`9. Children's Privacy`}</h2>
              <p className="text-gray-700 leading-relaxed font-body">
                APN does not knowingly collect personal information from
                children under the age of 13. If you believe a child has
                provided personal information without parental consent, please
                contact us so we can take appropriate action.
              </p>
            </div>

            {/* 10. Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                10. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed font-body mb-3">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 font-body mb-2">
                <li>Request access to your personal information</li>
                <li>Request correction or deletion of your information</li>
                <li>Withdraw consent for communications at any time</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-body">
                To exercise these rights, please contact us using the
                information below.
              </p>
            </div>

            {/* 11. Changes to This Privacy Policy */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed font-body">
                APN may update this Privacy Policy periodically to reflect
                changes in our practices or services. Any updates will be posted
                on this page with a revised effective date. We encourage you to
                review this page periodically.
              </p>
            </div>

            {/* 12. Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                12. Contact Information
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 font-body mx-auto mb-4">
                If you have questions or concerns regarding this Privacy Policy
                or how your information is handled, please contact us:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-600 font-body mb-3">
                  Awaken Purpose Network
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Icon
                      icon="mdi:map-marker"
                      className="w-5 h-5 text-blue-400 mr-3 mt-0.5"
                    />
                    <span className="text-gray-700 font-body">
                      Opposite Chefferie Nomayos 1, Yaoundé, Cameroon
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      icon="mdi:phone"
                      className="w-5 h-5 text-blue-400 mr-3"
                    />
                    <span className="text-gray-700 font-body">
                      +237 650 898 613
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      icon="mdi:email"
                      className="w-5 h-5 text-blue-400 mr-3"
                    />
                    <span className="text-gray-700 font-body">
                      info@awakenpurposenetwork.com
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4 font-body">
                For the most efficient response, we recommend using the contact
                form on our website.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <p className="text-gray-600 leading-relaxed font-body text-center">
                Awaken Purpose Network is committed to honoring trust,
                protecting privacy, and stewarding every relationship with
                integrity.
              </p>
              <p className="text-gray-600 leading-relaxed font-body text-center mt-3">
                Thank you for connecting with us and for being part of a
                purpose-driven community committed to faith, leadership, and
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
