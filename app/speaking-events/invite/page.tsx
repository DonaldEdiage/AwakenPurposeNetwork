// app/speaking-events/invite/page.tsx
"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

const SpeakingEngagementsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    eventName: "",
    eventDates: "",
    eventLocation: "",
    audienceType: "",
    attendance: "",
    eventDescription: "",
    message: "",
  });

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
  };

  // Check if required fields are filled
  const isFormValid = () => {
    const requiredFields: (keyof typeof formData)[] = [
      "fullName",
      "email",
      "phone",
      "organization",
      "eventName",
      "eventDates",
      "eventLocation",
      "audienceType",
      "attendance",
      "eventDescription",
      "message",
    ];
    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/speaking-invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            result.error ||
            "Failed to send invitation request. Please try again.",
        });
        setIsSubmitting(false);
        return;
      }

      // Success!
      setStatus({
        type: "success",
        message:
          result.message ||
          "Your invitation request has been sent successfully! We'll respond within 24-48 hours.",
      });

      // Auto-hide message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        eventName: "",
        eventDates: "",
        eventLocation: "",
        audienceType: "",
        attendance: "",
        eventDescription: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white py-10">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-body mb-6">
            Invite APN to Speak & Train
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
            Thank you for your interest in inviting Awaken Purpose Network (APN)
            to contribute to your event, training program, conference, or
            learning initiative.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 font-body leading-relaxed mb-6">
              APN partners with educational institutions, organizations, NGOs,
              leadership networks, and communities to deliver purpose-driven
              speaking engagements, leadership training, workshops, and
              high-impact learning experiences.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
              Through practical teaching, leadership insights, and values-based
              development, APN equips individuals and organizations to
              strengthen leadership capacity, discover purpose, and create
              lasting impact.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Speaking and training engagements are delivered by M. Esene Ekole,
              Founder of Awaken Purpose Network, and other qualified APN
              facilitators, depending on the nature, audience, and objectives of
              each engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking Areas & Types of Engagements */}
      <section className="py-5 bg-white pb-11">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Speaking Areas */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Title with Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="inline-flex items-center rounded-full">
                    <h2 className="text-2xl md:text-3xl text-gray-600 font-lora">
                      Speaking & Training Areas
                    </h2>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ml-4">
                  <Icon
                    icon="mdi:microphone"
                    className="w-9 h-9 text-blue-300"
                  />
                </div>
              </div>

              <p className="text-gray-700 font-body mb-6">
                Sessions can be customized to meet the goals and needs of your
                audience.
              </p>

              {/* List with Titles and Descriptions */}
              <div className="space-y-4">
                {[
                  {
                    title: "Purpose, Identity & Personal Development",
                    description:
                      "Helping individuals discover purpose, develop self-awareness, and pursue meaningful personal growth.",
                  },
                  {
                    title: "Leadership Development & Character Formation",
                    description:
                      "Equipping leaders with practical principles for integrity, influence, effective decision-making, and servant leadership.",
                  },
                  {
                    title: "Education, Youth & Emerging Leaders",
                    description:
                      "Supporting students and young leaders with knowledge, skills, and values needed for academic, professional, and personal success.",
                  },
                  {
                    title: "Faith, Values & Ethical Leadership",
                    description:
                      "Exploring the role of biblical principles, faith, and values in developing resilient individuals and responsible leaders.",
                  },
                  {
                    title: "Professional Growth & Capacity Building",
                    description:
                      "Providing learning experiences that strengthen skills, performance, teamwork, and organizational effectiveness.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up bg-gray-50 rounded-xl p-4 hover:bg-yellow-50 transition-all duration-300 border border-gray-100 hover:border-yellow-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-base font-semibold text-gray-800 font-body">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-body mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of Engagements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
              {/* Title Section - Stays at top */}

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="inline-flex items-center rounded-full">
                    <h2 className="text-2xl md:text-3xl text-gray-600 font-lora">
                      Types of Engagements
                    </h2>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ml-4">
                  <Icon
                    icon="mdi:calendar-check"
                    className="w-9 h-9 text-blue-400"
                  />
                </div>
              </div>

              <p className="text-gray-700 font-body mb-6">
                APN provides customized sessions for:
              </p>

              {/* List - Centered vertically  */}
              <div className="flex-1 flex flex-col justify-center">
                <ul className="space-y-3">
                  {[
                    "Leadership conferences and forums",
                    "Workshops and training programs",
                    "Educational institutions (schools and universities)",
                    "Churches and faith-based organizations",
                    "NGO and community development programs",
                    "Professional and organizational events",
                    "Seminars, panels, and special gatherings",
                    "Virtual and hybrid learning events",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center group cursor-pointer animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-3 group-hover:bg-blue-300 group-hover:text-white transition-all duration-300"></div>
                      <span className="text-gray-700 font-lato group-hover:text-blue-300 transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </ul>
              </div>

              {/* Footer - Stays at bottom */}
              <div className="mt-6">
                <p className="text-gray-600 font-body">
                  APN serves individuals and organizations locally in Cameroon
                  and internationally through both physical and digital
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Location Banner */}
      <section className="py-8 bg-gradient-to-r from-blue-300 to-blue-400">
        <div className="text-center mb-7">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body">
            Location and Availability
          </h2>
          {/* <p className="text-lg text-gray-600 font-body">
              Please complete the form below to request a speaking engagement
            </p> */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-white gap-8">
            {/* Left Column */}
            <div className="flex items-center mb-4 md:mb-0">
              <div>
                <h3 className="text-xl font-body">Based in Cameroon</h3>
                <p className="text-white/90">
                  APN delivers speaking engagements, leadership training, and
                  learning experiences locally and internationally.
                </p>
              </div>
            </div>

            {/* Right Column - Tags */}
            <div>
              <h3 className="text-xl font-body mb-3">Available through:</h3>
              <div className="flex flex-wrap gap-2">
                {["In-person", "Virtual", "Hybrid"].map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-body border border-white/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-white/70 text-sm mt-2">
                Engagements & training sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Request Form */}
      <section className="py-10 bg-white" id="invite-to-speak-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-4">
              Speaking & Training Request Form{" "}
            </h2>
            <p className="text-lg text-gray-600 font-body">
              Please complete the form below to request an APN speaking or
              training engagement.{" "}
            </p>
          </div>

          {/* Form Container with Single Faded Logo Background */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 relative overflow-hidden">
            {/* Single Faded Logo Background */}

            {/* Content - Relative to stay above background */}
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-8">
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

                {/* Personal Information */}
                <div className="rounded-xl p-6">
                  <h3 className="text-xl font-body text-gray-700 mb-6 flex items-center">
                    <Icon
                      icon="mdi:account"
                      className="w-6 h-6 mr-2 text-blue-400"
                    />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Organization / Institution{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter organization name"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Event Information */}
                <div className="rounded-xl p-6">
                  <h3 className="text-xl font-body text-gray-700 mb-6 flex items-center">
                    <Icon
                      icon="mdi:calendar-clock"
                      className="w-6 h-6 mr-2 text-blue-400"
                    />
                    Event Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Event Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter event name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Event Date(s) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="eventDates"
                        value={formData.eventDates}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="e.g., June 15-17, 2026"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Event Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="City & Country / Virtual"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Type of Audience <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="audienceType"
                        value={formData.audienceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="e.g., Students, leaders, professionals, church community, organization members"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Estimated Attendance{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="attendance"
                        value={formData.attendance}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="e.g., 100-200 people"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm text-gray-700 mb-2">
                      Event Theme / Description{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="eventDescription"
                      rows={4}
                      value={formData.eventDescription}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Please share the purpose, objectives, and focus of your event."
                      required
                    ></textarea>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Please provide any additional details, questions, or information relevant to your request."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="">
                  <button
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                    className={`group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-12 py-5 rounded-full font-body text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer w-fit mx-auto block
                ${!isFormValid() || isSubmitting ? "cursor-not-allowed hover:scale-100" : ""}`}
                  >
                    <span className="relative z-10">
                      {isSubmitting
                        ? "Sending..."
                        : "Submit Invitation Request"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes & Office Hours */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Important Notes */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Icon
                    icon="mdi:information"
                    className="w-9 h-9 text-blue-400"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-600 font-body">
                  Important Information{" "}
                </h3>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <ul className="space-y-3">
                  {[
                    "All requests are reviewed carefully by the APN team.",
                    "Submission of a request does not guarantee availability.",
                    "A member of the APN team will respond with next steps where applicable.",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center group cursor-pointer animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-3 group-hover:bg-blue-300 group-hover:text-white transition-all duration-300"></div> */}
                      <span className="text-gray-700 font-lato group-hover:text-blue-300 transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Icon
                    icon="mdi:clock-outline"
                    className="w-9 h-9 text-blue-400"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-600 font-body">
                  Office Hours & Availability
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  {/* <Icon
                    icon="mdi:calendar"
                    className="w-5 h-5 text-blue-400 mr-3"
                  /> */}
                  <span className="text-gray-700 font-body">
                    Working Days: Monday – Saturday
                  </span>
                </div>
                <div className="flex items-center">
                  {/* <Icon
                    icon="mdi:clock"
                    className="w-5 h-5 text-blue-400 mr-3"
                  /> */}
                  <span className="text-gray-700 font-body">
                    8:30 AM – 8:00 PM (WAT, UTC+1)
                  </span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 font-body">
                    <span className="font-semibold">Note:</span> Requests
                    received outside business hours will be addressed on the
                    next working day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-10 bg-gradient-to-r from-blue-300 to-blue-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Icon
            icon="mdi:heart"
            className="w-16 h-16 mx-auto mb-6 text-white-300"
          />
          <h2 className="text-3xl font-body mb-4 text-gray-700">
            We Look Forward to Partnering with You
          </h2>
          <p className="text-xl text-white/90 font-body leading-relaxed">
            At Awaken Purpose Network (APN), we believe meaningful partnerships
            create opportunities to develop people, strengthen leadership, and
            advance positive impact. We welcome the opportunity to collaborate
            with individuals and organizations through purpose-driven speaking
            engagements, training programs, and learning experiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SpeakingEngagementsPage;
