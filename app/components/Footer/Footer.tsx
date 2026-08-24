import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Content with background image wrapper */}
      <div className="relative bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Background image container with opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/logo-apn.jpeg")',
            backgroundSize: "contain", // ADJUST SIZE HERE
            backgroundPosition: "center",
            backgroundRepeat: "repeat-x",
            backgroundAttachment: "local",
            opacity: 0.1, // IMAGE OPACITY ONLY - ADJUST THIS VALUE (0-1)
          }}
        ></div>

        {/* Fade effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-0 opacity-50"></div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 font-body text-gray-500 dark:text-white tracking-tight leading-none tracking-wider">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Column - Vertical Menu */}
            <div className="flex flex-col gap-3 text-gray-600">
              {/* First Row: Logo with horizontal lines */}
              <Link
                href="/about/founder"
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                About
              </Link>
              <Link
                href="/books"
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                Books
              </Link>
              <Link
                href="/teachings/courses"
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                Other Works
              </Link>
              <Link
                href="/shop"
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                Store
              </Link>
              <Link
                href="/speaking-events/invite"
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                Speaking Events
              </Link>
              <Link
                href="/faq"
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                Frequently Asked Questions
              </Link>
            </div>

            {/* Second Column - Awaken Purpose Network */}
            <div className="flex flex-col text-left justify-end">
              {/* <h3 className="text-xl font-body text-gray-900 mb-4">
                Awaken Purpose Network
              </h3> */}
              <div className="text-gray-700 font-body space-y-2">
                <p>Opposite Chefferie Nomayos I,</p>
                <p>Yaounde, Cameroon.</p>
                {/**Opposite Chefferie Nomayos 1, Yaounde, Cameroon */}
              </div>
              <div className="mt-6">
                <h4 className="font-body text-gray-600 mb-2 text-xl">
                  Contact Hours
                </h4>
                <p className="text-gray-700 font-body">
                  Monday – Saturday, 8:30 AM – 8:00 PM (WAT)
                </p>
              </div>
            </div>

            {/* Third Column - Contact Us */}
            <div className="flex flex-col text-left justify-end">
              <h3 className="text-xl text-gray-600 mb-4">Contact Us</h3>
              <div className="text-gray-700 font-body space-y-2">
                {/* Phone numbers - Horizontal on large screens, stacked on small */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
                  <p>Phone: +237 650 898 613</p>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <p>+237 656 596 734</p>
                </div>
                <p>Email: info@awakenpurposenetwork.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Copyright - NO background image */}
      <div className="bg-blue-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Copyright - Centered with proper spacing */}
          <div className="py-4 text-center font-body text-gray-600 tracking-tight leading-none tracking-wider flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Left - Copyright with dynamic year */}
            <div className="text-sm order-2 md:order-1">
              Copyright © Awaken Purpose Network (APN){" "}
              {new Date().getFullYear()} All rights reserved.
            </div>

            {/* Right - Links */}
            <div className="text-sm flex flex-wrap justify-center gap-4 md:gap-6 order-1 md:order-2">
              <Link
                href="/privacy-policy"
                className="hover:text-gray-800 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="hover:text-gray-800 transition-colors duration-200"
              >
                Terms of Use
              </Link>
              <Link
                href="/sales-refunds"
                className="hover:text-gray-800 transition-colors duration-200"
              >
                Sales and Refunds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
