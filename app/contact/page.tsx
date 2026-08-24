// app/contact/page.tsx
"use client";

import { useState } from "react";
// import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    reason: "",
    message: "",
  });
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "reason") setReason(value);
  };

  // Check if required fields are filled
  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "" &&
      formData.reason !== ""
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      // Send data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle API error
        setStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
        setIsSubmitting(false);
        return;
      }

      // Success!
      setStatus({
        type: "success",
        message: result.message || "Your message has been sent successfully!",
      });

      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        reason: "",
        message: "",
      });
      setReason("");
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
            CONTACT US
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-body mb-6">
            {`Let's Connect`}
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            Thank you for your interest in Awaken Purpose Network (APN).
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            {`Whether you have questions about our education and training programs, leadership development initiatives, capacity-building services, books and resources, events, or partnership opportunities, we'd be delighted to hear from you.`}
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            Every inquiry is carefully reviewed, and our team responds as
            promptly as possible during business hours.{" "}
          </p>
          <div className="mt-6 flex items-center justify-center mb-9">
            <span className="inline-block bg-yellow-200 text-body px-4 py-2 rounded-full text-sm font-body">
              Every message is reviewed carefully. A team member will respond as
              soon as possible.
            </span>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-3">
              Before You Contact Us
            </h2>
            <p className="text-gray-600 font-body">
              You may find the information you need by exploring the following
              sections of our website:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              {
                name: "Books & Resources",
                icon: "emojione-monotone:books",
                path: "/books",
              },
              {
                name: "Education & Training Programs",
                icon: "emojione:speaking-head",
                path: "/teachings/courses",
              },
              {
                name: "Leadership Development",
                icon: "fluent-mdl2:party-leader",
                path: "/speaking-events/invite",
              },
              {
                name: "Events & Learning Platforms",
                icon: "carbon:events",
                path: "/teachings/courses",
              },
              {
                name: "Partnership Opportunities",
                icon: "mdi:partnership",
                path: "/speaking-events/invite/#invite-to-speak-form",
              },
              {
                name: "Frequently Asked Questions",
                icon: "streamline-ultimate:contact-us-faq",
                path: "/faq",
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="animate-fade-in-up group rounded-xl p-8 bg-gradient-to-br from-blue-200 to-blue-300  transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-white">
                  <div className="flex justify-center items-center mb-2">
                    <Icon
                      icon={link.icon}
                      width="50"
                      height="50"
                      color="#fff"
                    />
                  </div>
                  <h3 className="text-lg leading-relaxed text-gray-600 font-body mb-3">
                    {link.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6 font-body">
            {`If you still need assistance, please complete the contact form below, and we'll get back to you as soon as possible.`}
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8" id="contact-form">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 relative overflow-hidden">
                {/* Single Faded Logo Background */}

                {/* Content - Relative to stay above background */}
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                    Contact Form
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-body text-gray-700 mb-4">
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-body text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-body text-gray-700 mb-1">
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-body text-gray-700 mb-1">
                            Phone / WhatsApp{" "}
                            <span className="text-gray-400 text-xs">
                              (optional)
                            </span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-body text-gray-700 mb-1">
                            Organization / Church{" "}
                            <span className="text-gray-400 text-xs">
                              (optional)
                            </span>
                          </label>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Reason for Contact */}
                    <div>
                      <h3 className="text-xl font-body text-gray-700 mb-4">
                        Reason for Contact
                      </h3>
                      <select
                        name="reason"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                        value={reason}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a reason</option>
                        <option value="book">General Inquiry</option>
                        <option value="speaking">
                          Education & Training Programs
                        </option>
                        <option value="workshop">Leadership Development</option>
                        <option value="mentorship">
                          Capacity-Building Services
                        </option>
                        <option value="courses">Institutional Training</option>
                        <option value="media">Books & Resources</option>
                        <option value="partnership">Events & Workshops</option>
                        <option value="general">Partnerships</option>
                        <option value="media-speaking">
                          Media & Speaking Engagements
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <h3 className="text-xl font-body text-gray-700 mb-4">
                        Message <span className="text-red-500">*</span>
                      </h3>
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                        placeholder="Please provide any details, questions, or information that will help us respond to your inquiry."
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button - Disabled until form is valid */}
                    <div className="">
                      {/* Status Message */}
                      {status.message && (
                        <div
                          className={`p-4 rounded-lg mb-4 ${
                            status.type === "success"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : "bg-red-50 text-red-700 border border-red-200"
                          }`}
                        >
                          {status.message}
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={!isFormValid() || isSubmitting}
                        className={`group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-12 py-4 rounded-full font-body text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer w-fit mx-auto block
    ${!isFormValid() || isSubmitting ? "opacity-50 cursor-not-allowed hover:scale-100" : ""}`}
                      >
                        <span className="relative z-10">
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>
                      {/* Add this after the submit button to show validation status */}
                      <div className="text-center mt-4">
                        {!isFormValid() && (
                          <p className="text-sm text-amber-600 font-body">
                            Fields marked with (*) are required.
                          </p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Icon
                      icon="mdi:clock-outline"
                      className="w-6 h-6 text-blue-400"
                    />
                  </div>
                  <h3 className="text-lg leading-relaxed text-gray-600 font-body font-semibold">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="text-gray-600 font-body">
                    <span className="font-semibold"> Monday – Saturday </span>

                    <div className="font-body">
                      <span className="font-body">
                        {`8:30 AM – 8:00 PM (WAT, UTC+1)`}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 font-body font-semibold">
                      Sunday
                    </p>
                    <span className="font-body text-gray-600">Closed</span>
                  </div>

                  <p className="text-sm text-gray-500 font-body mt-2">
                    Messages received outside business hours will be responded
                    to on the next working day.
                  </p>
                </div>
              </div>

              {/* Main Office */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Icon
                      icon="mdi:office-building"
                      className="w-6 h-6 text-blue-400"
                    />
                  </div>
                  <h3 className="text-lg leading-relaxed text-gray-600 font-body font-semibold">
                    Visit or Contact Us
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 font-body flex items-start">
                    <Icon
                      icon="mdi:map-marker"
                      className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5"
                    />
                    {`Opposite Chefferie Nomayos I,  Yaounde, Cameroon`}
                  </p>

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

                  <p className="text-gray-600 font-body flex items-center">
                    <Icon
                      icon="mdi:email"
                      className="w-5 h-5 text-gray-400 mr-2"
                    />
                    info@awakenpurposenetwork.com
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-4 font-body">
                  For official inquiries or time-sensitive requests, we
                  recommend using the contact form to ensure your message
                  reaches the appropriate team member.
                </p>
              </div>

              {/* Note */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <p className="text-sm text-gray-600 font-body">
                  <span className="font-semibold text-blue-400">
                    For official inquiries or time-sensitive requests,
                  </span>{" "}
                  we recommend using the contact form to ensure your message
                  reaches the appropriate team member.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Engagements Special Section */}
      {(reason === "speaking" || reason === "workshop") && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-amber-500">
              <div className="flex items-center mb-6">
                <Icon
                  icon="mdi:microphone"
                  className="w-8 h-8 text-amber-600 mr-3"
                />
                <h3 className="text-2xl font-bold font-lora text-gray-800">
                  Speaking, Workshops & Ministry Invitations
                </h3>
              </div>
              <p className="text-gray-600 font-body mb-4">
                For speaking engagements, conferences, workshops, school
                programs, or ministry invitations, please include the following
                details in your message:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Event Name *",
                  "Proposed Date(s) *",
                  "Location (City & Country / Virtual) *",
                  "Type of Audience *",
                  "Estimated Attendance *",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Icon
                      icon="mdi:check-circle"
                      className="w-5 h-5 text-amber-500 mr-2"
                    />
                    <span className="text-gray-700 font-body text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 font-body">
                Awaken Purpose Network serves both local and international
                audiences. Travel worldwide is available.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Closing Statement */}
      <section className="py-9 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Icon
              icon="hugeicons:hand-prayer"
              className="w-12 h-12 text-white"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-body mb-6">
            We Look Forward to Connecting with You
          </h2>
          <p className="text-xl opacity-90 font-body">
            At APN, we believe meaningful connections create opportunities for
            learning, collaboration, and lasting impact. Whether you are an
            individual pursuing personal or professional development, an
            organization exploring partnership opportunities, or an institution
            seeking leadership development and capacity-building solutions, we
            welcome the opportunity to connect and serve you.
          </p>
        </div>
      </section>
    </div>
  );
}
