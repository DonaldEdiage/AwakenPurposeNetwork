// app/apply-for-assessment/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ApplyForAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Basic Profile
    fullName: "",
    email: "",
    phone: "",
    country: "",
    ageRange: "",
    // Step 2: Background
    highestEducation: "",
    fieldOfStudy: "",
    currentStatus: "",
    yearOfCompletion: "",
    // Step 3: Goal Selection
    goal: "",
    // Step 4: Target Preferences
    preferredCountries: "",
    budgetRange: "",
    timeline: "",
    // Step 5: Supporting Details
    cv: null as File | null,
    motivation: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const totalSteps = 5;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
      if (errors[name]) {
        const newErrors = { ...errors };
        delete newErrors[name];
        setErrors(newErrors);
      }
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    switch (step) {
      case 1:
        if (!formData.fullName.trim())
          newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phone.trim())
          newErrors.phone = "Phone number is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";
        if (!formData.ageRange) newErrors.ageRange = "Age range is required";
        break;
      case 2:
        if (!formData.highestEducation)
          newErrors.highestEducation = "Highest education is required";
        if (!formData.fieldOfStudy.trim())
          newErrors.fieldOfStudy = "Field of study is required";
        if (!formData.currentStatus)
          newErrors.currentStatus = "Current status is required";
        break;
      case 3:
        if (!formData.goal) newErrors.goal = "Please select a goal";
        break;
      case 4:
        if (!formData.preferredCountries.trim())
          newErrors.preferredCountries = "Preferred countries are required";
        if (!formData.timeline) newErrors.timeline = "Timeline is required";
        break;
      case 5:
        if (!formData.motivation.trim())
          newErrors.motivation = "Motivation text is required";
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const formDataToSend = new FormData();

      // Append all text fields
      Object.keys(formData).forEach((key) => {
        if (key !== "cv") {
          const value = formData[key as keyof typeof formData];
          if (value !== null && value !== undefined && value !== "") {
            formDataToSend.append(key, String(value));
          }
        }
      });

      // Append CV file
      if (formData.cv) {
        formDataToSend.append("cv", formData.cv);
      }

      const response = await fetch("/api/assessment-application", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Submission failed. Please try again.",
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora">
              Basic Profile Information
            </h3>
            <p className="text-sm text-gray-500 font-body">
              Tell us about yourself
            </p>
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <ul className="list-disc pl-5 text-sm text-red-600 font-body">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Country of Residence <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.country ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter your country"
                />
                {errors.country && (
                  <p className="text-xs text-red-500 mt-1">{errors.country}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Age Range <span className="text-red-500">*</span>
                </label>
                <select
                  name="ageRange"
                  value={formData.ageRange}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.ageRange ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                >
                  <option value="">Select age range</option>
                  <option value="18-24">18–24</option>
                  <option value="25-34">25–34</option>
                  <option value="35-44">35–44</option>
                  <option value="45+">45+</option>
                </select>
                {errors.ageRange && (
                  <p className="text-xs text-red-500 mt-1">{errors.ageRange}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora">
              Background Information
            </h3>
            <p className="text-sm text-gray-500 font-body">
              Tell us about your academic and professional background
            </p>
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <ul className="list-disc pl-5 text-sm text-red-600 font-body">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Highest Level of Education{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="highestEducation"
                  value={formData.highestEducation}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.highestEducation ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                >
                  <option value="">Select education level</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">{`Bachelor's Degree`}</option>
                  <option value="masters">{`Master's Degree`}</option>
                  <option value="phd">PhD / Doctorate</option>
                  <option value="diploma">Diploma / Certificate</option>
                  <option value="other">Other</option>
                </select>
                {errors.highestEducation && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.highestEducation}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Field of Study <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.fieldOfStudy ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="e.g., Computer Science, Business, Medicine"
                />
                {errors.fieldOfStudy && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.fieldOfStudy}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Current Status <span className="text-red-500">*</span>
                </label>
                <select
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.currentStatus ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                >
                  <option value="">Select current status</option>
                  <option value="student">Student</option>
                  <option value="graduate">Graduate</option>
                  <option value="employed">Employed</option>
                  <option value="researcher">Researcher</option>
                </select>
                {errors.currentStatus && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.currentStatus}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Year of Completion (or Expected)
                </label>
                <input
                  type="text"
                  name="yearOfCompletion"
                  value={formData.yearOfCompletion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                  placeholder="e.g., 2024"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora">
              What are you looking for?
            </h3>
            <p className="text-sm text-gray-500 font-body">
              Select the pathway that matches your goals
            </p>
            {errors.goal && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-sm text-red-600 font-body">{errors.goal}</p>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  value: "study-bachelor",
                  label: "Study Abroad (Bachelor)",
                  icon: "mdi:school",
                },
                {
                  value: "study-master",
                  label: "Study Abroad (Master)",
                  icon: "mdi:school",
                },
                {
                  value: "study-phd",
                  label: "Study Abroad (PhD)",
                  icon: "mdi:school",
                },
                {
                  value: "employment",
                  label: "International Employment",
                  icon: "mdi:briefcase",
                },
                {
                  value: "internship",
                  label: "Internship Opportunities",
                  icon: "mdi:account-tie",
                },
                {
                  value: "research",
                  label: "Research / PhD Pathway",
                  icon: "mdi:microscope",
                },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.goal === option.value
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={option.value}
                    checked={formData.goal === option.value}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <Icon
                    icon={option.icon}
                    className={`w-6 h-6 mr-3 ${formData.goal === option.value ? "text-blue-500" : "text-gray-400"}`}
                  />
                  <span className="text-sm font-body text-gray-700">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora">
              Target Preferences
            </h3>
            <p className="text-sm text-gray-500 font-body">
              Tell us about your preferences
            </p>
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <ul className="list-disc pl-5 text-sm text-red-600 font-body">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Preferred Countries <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="preferredCountries"
                  value={formData.preferredCountries}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.preferredCountries ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="e.g., USA, Canada, UK, Germany"
                />
                {errors.preferredCountries && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.preferredCountries}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Budget Range (Optional)
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-20k">$10,000 – $20,000</option>
                  <option value="20k-30k">$20,000 – $30,000</option>
                  <option value="30k-50k">$30,000 – $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                  <option value="prefer-not">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Timeline <span className="text-red-500">*</span>
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.timeline ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="3-6-months">3–6 months</option>
                  <option value="6-12-months">6–12 months</option>
                  <option value="flexible">Flexible</option>
                </select>
                {errors.timeline && (
                  <p className="text-xs text-red-500 mt-1">{errors.timeline}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora">
              Supporting Details
            </h3>
            <p className="text-sm text-gray-500 font-body">
              Help us understand your goals better
            </p>
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <ul className="list-disc pl-5 text-sm text-red-600 font-body">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <label className="block text-sm font-body text-gray-700 mb-1">
                Upload CV (Optional)
              </label>
              <div
                className={`border-2 border-dashed ${errors.cv ? "border-red-500" : "border-gray-300"} rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200`}
              >
                <Icon
                  icon="mdi:cloud-upload"
                  className="w-10 h-10 text-gray-400 mx-auto mb-2"
                />
                <p className="text-sm text-gray-600 font-body">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400 font-body">
                  PDF, DOC, JPG (Max 5MB)
                </p>
                <input
                  type="file"
                  name="cv"
                  onChange={handleFileChange}
                  className="hidden"
                  id="cv-upload"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="cv-upload"
                  className="cursor-pointer inline-block mt-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-body hover:bg-blue-100 transition-colors duration-200"
                >
                  Choose File
                </label>
                {formData.cv && (
                  <p className="text-xs text-green-500 font-body mt-2">
                    ✓ {(formData.cv as File).name}
                  </p>
                )}
                {errors.cv && (
                  <p className="text-xs text-red-500 mt-1">{errors.cv}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-body text-gray-700 mb-1">
                Tell us about your goal and what you are trying to achieve
                abroad <span className="text-red-500">*</span>
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 border ${errors.motivation ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                placeholder="What motivates you to pursue opportunities abroad? What are your goals?"
              />
              {errors.motivation && (
                <p className="text-xs text-red-500 mt-1">{errors.motivation}</p>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Confirmation Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
            {/* Success Message */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="mdi:check" className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-lora">
                Your application has been received
              </h1>
            </div>

            {/* Next Steps Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 font-body mb-4">
                What happens next:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon
                    icon="mdi:clock"
                    className="w-5 h-5 text-blue-500 mr-3 mt-0.5"
                  />
                  <span className="text-gray-600 font-body">
                    We review your profile within{" "}
                    <span className="font-semibold">48 hours</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon
                    icon="mdi:file-document"
                    className="w-5 h-5 text-blue-500 mr-3 mt-0.5"
                  />
                  <span className="text-gray-600 font-body">
                    You will receive a{" "}
                    <span className="font-semibold">
                      personalized feedback report
                    </span>{" "}
                    or an invitation to consultation
                  </span>
                </li>
              </ul>
            </div>

            {/* Secondary CTA */}
            <div className="text-center">
              <Link
                href="/book-consultation"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full font-body font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Icon
                  icon="mdi:calendar-clock"
                  className="w-5 h-5 inline mr-2"
                />
                Book Consultation Now
              </Link>
              <p className="text-xs text-gray-400 font-body mt-4">
                A member of our team will reach out to you shortly
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Form
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-8 px-4 sm:px-6 lg:px-8 id='global-assesement-application'">
      <div className="max-w-3xl mx-auto">
        {/* Header  */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl text-gray-600 font-body tracking-tight mb-2 id='goes-consultation'">
            Global Assessment Application
          </h1>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            Tell us about your academic or professional background. We will
            evaluate your profile and match you with the best international
            pathway (Study, Work, Internship, or Research).
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Icon icon="mdi:clock-outline" className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400 font-body">
              Takes 5–10 minutes. All information is confidential.
            </span>
          </div>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto rounded-full mt-4"></div> */}
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-300 to-blue-500 transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-blue-500 font-body">
            Step {currentStep} of {totalSteps}
          </span>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {renderStep()}

            <div className="flex flex-wrap gap-4 justify-between mt-8 pt-6 border-t border-gray-200">
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-body hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                  >
                    <Icon
                      icon="mdi:arrow-left"
                      className="w-4 h-4 inline mr-2"
                    />
                    Back
                  </button>
                )}
              </div>
              <div>
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-body hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    Next
                    <Icon
                      icon="mdi:arrow-right"
                      className="w-4 h-4 inline ml-2"
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-body font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit for Assessment"}
                    <Icon icon="mdi:send" className="w-4 h-4 inline ml-2" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
