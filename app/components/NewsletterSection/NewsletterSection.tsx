"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = () => {
    return formData.name.trim() !== "" && formData.email.trim() !== "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid() || isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/.netlify/functions/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            result.message ||
            "Successfully subscribed! Check your email for confirmation.",
        });
        // Reset form
        setFormData({ name: "", email: "" });

        // Clear success message after 5 seconds
        setTimeout(() => setStatus({ type: null, message: "" }), 5000);
      } else {
        setStatus({
          type: "error",
          message: result.error || "Subscription failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full py-24 relative overflow-hidden bg-transparent"
      id="daily-spiritual-newsletter"
    >
      {/* Content */}
      <div
        className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 relative z-10 font-body text-gray-600 dark:text-white tracking-tight leading-none tracking-wider"
        id="daily-spiritual-nourishment"
      >
        <div className="text-center mb-16">
          {/* Decorative Icon */}
          <div className="w-20 h-20 bg-white bg-opacity-90 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-blue-100">
            <svg
              className="w-10 h-10 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
            Daily Spiritual Nourishment
          </h2>
          <p className="text-lg text-gray-600 font-body mx-auto leading-relaxed">
            Receive transformative devotionals and spiritual insights that
            awaken your purpose, delivered with grace to your inbox each
            morning.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-m font-medium text-gray-600 mb-2 font-body"
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 font-body bg-white"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-m font-medium text-gray-600 font-body mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 font-body bg-white"
                    placeholder="your_email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="">
              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-12 py-4 rounded-full font-body text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer w-fit mx-auto block ${
                  !isFormValid() || isSubmitting
                    ? "opacity-50 cursor-not-allowed hover:scale-100"
                    : ""
                }`}
              >
                <span className="relative z-10">
                  {isSubmitting ? "Subscribing..." : "Begin Your Daily Journey"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600 font-body mt-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Daily Inspiration
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Unsubscribe Anytime
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
