// app/terms-of-use/page.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
            TERMS OF USE
          </h1>
          <p className="text-2xl md:text-2xl text-gray-600 font-lora mb-1">
            Awaken Purpose Network (APN)
          </p>
          <div className="mt-1 h-1 w-24 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* 1. Acceptance of Terms */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                {` These Terms of Use govern your access to and use of APN's website, content, resources,
                training, events, and any related services (collectively, the "Services").`}
              </p>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                By using the Services, you confirm that you:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 font-body">
                <li>
                  Are at least 18 years old (or have parental/guardian consent
                  if younger)
                </li>
                <li>
                  Agree to follow these Terms of Use and any other policies or
                  guidelines APN provides
                </li>
              </ul>
            </div>

            {/* 2. About Awaken Purpose Network */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                2. About Awaken Purpose Network
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-4">
                Awaken Purpose Network is a global, faith-based leadership and
                formation network dedicated to awakening purpose, strengthening
                faith, and equipping individuals, leaders, churches, and
                institutions through teaching, mentorship, leadership
                development, discipleship, and gospel-centered training.
              </p>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                Our Services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 font-body">
                <li>Online courses and training programs</li>
                <li>Ministry resources, devotionals, and insights</li>
                <li>Events, summits, and conferences</li>
                <li>Leadership development and mentorship programs</li>
              </ul>
            </div>

            {/* 3. Use of Our Services */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                3. Use of Our Services
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                You agree to use APN Services for lawful and respectful purposes
                only. You must not:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 font-body mb-3">
                <li>Violate any applicable local or international law</li>
                <li>Impersonate APN or any individual</li>
                <li>
                  Post or transmit harmful, abusive, offensive, or inappropriate
                  content
                </li>
                <li>
                  Attempt to disrupt, hack, or damage our website, servers, or
                  services
                </li>
                <li>{`Use Services for commercial purposes without APN's prior written consent<v`}</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-300 p-4 rounded-lg mt-3">
                <p className="text-sm text-gray-600 font-body">
                  Violation of these terms may result in immediate termination
                  of access to APN Services.
                </p>
              </div>
            </div>

            {/* 4. Intellectual Property */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                All content, resources, and materials provided by APN, including
                but not limited to text, graphics, logos, images, audio, video,
                courses, and teaching materials, are the exclusive property of
                APN or its licensors and are protected by copyright, trademark,
                and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed font-body mb-2 font-semibold">
                You may:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 font-body mb-3">
                <li>
                  Access and download materials for personal, educational, or
                  ministry use
                </li>
                <li>Share APN resources responsibly with proper attribution</li>
              </ul>
              <p className="text-gray-600 leading-relaxed font-body mb-2 font-semibold">
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 font-body">
                <li>
                  Copy, distribute, sell, reproduce, or modify content for
                  commercial purposes
                </li>
                <li>
                  Claim ownership of APN materials or intellectual property
                </li>
              </ul>
            </div>

            {/* 5. Registration and Accounts */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                5. Registration and Accounts
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                Some APN Services, such as courses, events, or newsletters, may
                require registration. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 font-body mb-3">
                <li>Provide accurate and complete information</li>
                <li>Keep your account credentials secure</li>
                <li>Notify APN immediately of unauthorized account use</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-body">
                  APN reserves the right to suspend or terminate your account if
                  these terms are violated.
                </p>
              </div>
            </div>

            {/* 6. Third-Party Links */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                6. Third-Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed font-body">
                APN may provide links to external websites or resources. These
                links are provided for convenience and do not imply endorsement.
                APN is not responsible for the content, privacy, or practices of
                third-party websites.
              </p>
            </div>

            {/* 7. Disclaimers */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                7. Disclaimers
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                APN Services are provided for educational, ministry, and
                informational purposes only. APN does not guarantee specific
                outcomes or results from using our resources, courses, or
                programs.
              </p>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                {` All content is provided "as is," without warranties of any kind, either expressed or implied,
                including but not limited to:`}
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 font-body">
                <li>Accuracy or completeness of content</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property</li>
              </ul>
            </div>

            {/* 8. Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                To the maximum extent permitted by law, APN and its affiliates,
                officers, employees, and partners shall not be liable for any
                indirect, incidental, special, or consequential damages arising
                from your use of our Services, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 font-body">
                <li>Loss of data or content</li>
                <li>Personal injury or property damage</li>
                <li>Financial or spiritual loss</li>
              </ul>
            </div>

            {/* 9. Indemnification */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                9. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                You agree to indemnify and hold APN harmless from any claims,
                liabilities, damages, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 font-body">
                <li>Your misuse of Services</li>
                <li>Violation of these Terms of Use</li>
                <li>Infringement of any third-party rights</li>
              </ul>
            </div>

            {/* 10. Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                10. Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed font-body">
                Your use of APN Services is also governed by our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-400 hover:underline"
                >
                  Privacy Policy
                </Link>
                , which explains how we collect, use, and protect your personal
                information.
              </p>
            </div>

            {/* 11. Changes to Terms */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed font-body">
                {`APN reserves the right to modify or update these Terms of Use at any time. Changes will be
                posted on this page with a revised "Effective Date." Continued use of Services after changes
                constitutes acceptance of the updated terms.`}
              </p>
            </div>

            {/* 12. Governing Law */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                12. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed font-body">
                These Terms of Use are governed by the laws of the Republic of
                Cameroon, without regard to conflict-of-law principles. By using
                our Services, you consent to the jurisdiction of Cameroonian
                courts for any dispute arising from these Terms.
              </p>
            </div>

            {/* 13. Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                13. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-4">
                If you have questions, concerns, or requests regarding these
                Terms of Use, please contact us:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl text-gray-800 font-lora mb-3">
                  Awaken Purpose Network
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Icon
                      icon="mdi:map-marker"
                      className="w-5 h-5 text-gray-400 mr-3 mt-0.5"
                    />
                    <span className="text-gray-600 font-body">
                      Opposite Chefferie Nomayos 1, Yaoundé, Cameroon
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
                    <p className="text-gray-600 font-body flex items-center">
                      <Icon
                        icon="mdi:phone"
                        className="w-5 h-5 text-gray-400 mr-2"
                      />
                      +237 650 898 613
                    </p>
                    <span className="hidden sm:inline text-gray-400">|</span>
                    <p className="text-gray-600 font-body flex items-center">
                      +237 656 596 734
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      icon="mdi:email"
                      className="w-5 h-5 text-gray-400 mr-3"
                    />
                    <span className="text-gray-600 font-body">
                      info@awakenpurposenetwork.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <p className="text-gray-600 leading-relaxed font-body text-center">
                By accessing APN Services, you acknowledge your understanding of
                and agreement with these Terms of Use. We appreciate your
                commitment to using our resources responsibly, respectfully, and
                for the advancement of faith, purpose, and leadership globally.
              </p>
            </div>

            {/* Effective Date Note */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 font-body">
                Effective Date: January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
