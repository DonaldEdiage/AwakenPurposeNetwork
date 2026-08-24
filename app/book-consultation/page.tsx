// app/book-consultation/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function BookConsultationPage() {
  const [step, setStep] = useState(1);
  const [consultationType, setConsultationType] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    background: "",
    message: "",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsultationSelect = (type: string) => {
    setConsultationType(type);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (consultationType === "free") {
      // Free option - submit to eligibility check function
      setIsSubmitting(true);

      try {
        // ✅ FIXED: Call eligibility-check, not payment-upload
        const response = await fetch("/api/eligibility-check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            whatsapp: formData.whatsapp,
            background: formData.background,
            message: formData.message,
            date: formData.date,
            time: formData.time,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setIsConfirmed(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          alert(result.error || "Submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Paid option - show payment
      setShowPayment(true);
    }
  };

  const handlePayment = () => {
    if (paymentMethod) {
      // ✅ Redirect to consultation-payment-upload instead
      const url = `/consultation-payment-upload?method=${paymentMethod}&name=${encodeURIComponent(formData.fullName)}&email=${encodeURIComponent(formData.email)}&whatsapp=${encodeURIComponent(formData.whatsapp)}&date=${formData.date}&time=${formData.time}`;
      window.location.href = url;
    }
  };

  const handleFinalConfirmation = () => {
    setIsConfirmed(true);
    setShowPayment(false);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon="mdi:check" className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-lora mb-4">
              {consultationType === "free"
                ? "Your Request Has Been Received"
                : "🎉 Booking Confirmed Successfully"}
            </h2>
            <p className="text-gray-600 font-body mb-6">
              {consultationType === "free"
                ? "Thank you for completing the eligibility check request. We'll review your profile and get back to you shortly."
                : "Please check your email."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg font-body font-semibold hover:shadow-lg transition-all duration-300"
              >
                OK
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-body font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon="mdi:check" className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-lora mb-4">
              ✅ Payment Successful
            </h2>
            <p className="text-gray-600 font-body mb-6">
              Your payment has been confirmed. Please continue to complete your
              booking.
            </p>
            <button
              onClick={handleFinalConfirmation}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-body font-semibold hover:shadow-lg transition-all duration-300"
            >
              Continue to Booking
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 font-lora mb-4 text-center">
              Complete Your Payment
            </h2>
            <p className="text-gray-600 font-body text-center mb-8">
              Amount:{" "}
              <span className="font-bold text-blue-400">30,000 FCFA</span>
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Select Payment Method <span className="text-red-500">*</span>
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      value: "mtn",
                      label: "MTN Mobile Money",
                      icon: "mdi:cellphone",
                    },
                    {
                      value: "orange",
                      label: "Orange Money",
                      icon: "mdi:cellphone",
                    },
                  ].map((method) => (
                    <div
                      key={method.value}
                      onClick={() => setPaymentMethod(method.value)}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                        paymentMethod === method.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          icon={method.icon}
                          className="w-6 h-6 text-gray-600"
                        />
                        <span className="text-sm font-body text-gray-700">
                          {method.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {!paymentMethod && (
                  <p className="text-xs text-red-500 mt-2">
                    Please select a payment method
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-between pt-4">
                <button
                  onClick={() => setShowPayment(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-body hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={handlePayment}
                  disabled={!paymentMethod || isSubmitting}
                  className={`px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-500  text-white rounded-lg font-body font-semibold transition-all cursor-pointer duration-300 ${
                    !paymentMethod || isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? "Processing..." : "Pay Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Consultation Type Selection
  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto id='consultation-booking'">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl text-gray-600 font-body tracking-tight mb-4">
              Book Your Global Mobility Consultation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Get a Personalized Strategy for Studying, Working, or Researching
              Abroad
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-400 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Consultation Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Option */}
            {/* Free Option */}
            <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/50 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <div className="mb-6">
                  {/* Icon - Centered with white rounded background */}
                  <div className="flex justify-center">
                    <div className="w-20 h-20 mb-4 rounded-full overflow-hidden bg-white  flex items-center justify-center">
                      <Image
                        src="/images/logo-apn.jpeg"
                        alt="APN Logo"
                        width={80}
                        height={80}
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                  {/* Text - Left aligned */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-700 font-body">
                      Free
                    </h3>
                    <p className="text-gray-700 font-body">15-Minute</p>
                  </div>
                  <p className="text-lg text-gray-700 font-body flex justify-center font-semibold">
                    Eligibility Check
                  </p>
                </div>
                <p className="text-gray-600 font-body text-sm mb-4">
                  A quick screening session to help you understand where you
                  stand and what pathways may be available to you.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  {[
                    "Quick review of your academic or professional profile",
                    "Basic recommendation of your best-fit pathway",
                    "Clarity on whether you qualify for advanced support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Icon
                        icon="gg:user-list"
                        className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-600 font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button - Always at bottom */}
              <button
                onClick={() => handleConsultationSelect("free")}
                className="w-full py-3 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-full font-body font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer mt-auto"
              >
                Book Free Eligibility Check
              </button>
            </div>

            {/* Paid Option - Highlighted */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg border-2 border-blue-400 p-8 hover:shadow-xl transition-all duration-300 relative flex flex-col">
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-300 to-amber-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                ⭐ Recommended
              </div>
              <div className="flex-1">
                <div className="mb-6">
                  {/* Icon - Centered */}
                  <div className="flex justify-center">
                    <div className="w-20 h-20 mb-4 rounded-full overflow-hidden bg-transparent">
                      <Image
                        src="/images/logo-apn.jpeg"
                        alt="APN Logo"
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Text - Left aligned */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-700 font-body">
                      Paid
                    </h3>
                    <p className="text-gray-700 font-body">45-Minute</p>
                  </div>
                  <p className="text-lg text-gray-700 font-body flex justify-center font-semibold">
                    Global Mobility Strategy Consultation
                  </p>
                </div>
                <p className="text-gray-600 font-body text-sm mb-4">
                  A deep, personalized strategy session designed to give you a
                  clear, actionable roadmap.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  {[
                    "Full profile evaluation and positioning strategy",
                    "Personalized country and program recommendations",
                    "Step-by-step application roadmap tailored to your goals",
                    "Clear action plan to maximize your chances of success",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Icon
                        icon="gg:user-list"
                        className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-600 font-body">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">
                    30,000 FCFA
                  </span>
                </div>
              </div>

              {/* Button - Always at bottom */}
              <button
                onClick={() => handleConsultationSelect("paid")}
                className="w-full py-3 bg-gradient-to-r from-purple-300 to-purple-500 text-white rounded-full font-body font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer mt-auto"
              >
                Book Strategy Consultation
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 font-body mt-8">
            Speak directly with a GOES advisor and receive a clear, structured
            roadmap tailored to your goals.
          </p>
        </div>
      </div>
    );
  }

  // Step 2: Booking Form
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-gray-700 font-lora text-center mb-2">
          Book Your Session
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full mb-5"></div>

        {/* Form Container with Faded Single Logo Background */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 relative overflow-hidden">
          {/* Single Faded Logo Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05] bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('/images/logo-apn.jpeg')`,
              backgroundSize: "contain", // Adjusts to container, single image
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Content - Relative to stay above background */}
          <div className="relative z-10">
            <div className="mb-8">
              <div className="text-center text-gray-600 font-body mt-2">
                {consultationType === "free" ? (
                  <>
                    <div>
                      <div className="text-2xl font-semibold text-gray-700 font-body">
                        Free
                      </div>
                      <div className="text-gray-700 font-body">15-Minute</div>
                    </div>
                    <div className="text-lg text-gray-700 font-body flex justify-center ">
                      Eligibility Check
                    </div>
                  </>
                ) : (
                  "45-Minute Global Mobility Strategy Consultation"
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Calendar/Date Picker - Simplified */}
              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Choose a Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-body text-gray-700 mb-2">
                  Choose a Time <span className="text-red-500">*</span>
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  required
                >
                  <option value="">Select a time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>

              {/* Personal Information */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-bold text-gray-800 font-lora mb-4">
                  Your Details
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-gray-700 mb-1">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                      placeholder="Enter WhatsApp number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-gray-700 mb-1">
                      Background Category (Optional)
                    </label>
                    <select
                      name="background"
                      value={formData.background}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                    >
                      <option value="">Select your background</option>
                      <option value="study">Study</option>
                      <option value="work">Work</option>
                      <option value="internship">Internship</option>
                      <option value="research">Research</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Brief Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  placeholder="Briefly describe your goal"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-body hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-body font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  {consultationType === "free"
                    ? "Submit Request"
                    : "Continue to Payment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
