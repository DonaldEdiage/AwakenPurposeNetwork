// app/goes/scholarship/apply/form/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function GGSIApplicationForm() {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    dateOfBirth: "",
    gender: "",
    region: "",
    email: "",
    whatsapp: "",
    // Academic Information
    highestQualification: "",
    institution: "",
    fieldOfStudy: "",
    studyDestination: "",
    // Documents
    idDocument: null as File | null,
    birthCertificate: null as File | null,
    academicCertificates: null as File | null,
    cv: null as File | null,
    // Motivational Assessment
    academicGoals: "",
    careerAspirations: "",
    leadershipExperience: "",
    communityImpact: "",
    motivationForGGSI: "",
    // Referee 1
    referee1Name: "",
    referee1Relationship: "",
    referee1Institution: "",
    referee1Position: "",
    referee1Email: "",
    referee1Phone: "",
    // Referee 2
    referee2Name: "",
    referee2Relationship: "",
    referee2Institution: "",
    referee2Position: "",
    referee2Email: "",
    referee2Phone: "",
    // Declaration
    declaration: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const clearSectionErrors = () => {
    setErrors({});
  };
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const totalSections = 6;
  const progress = Math.round((currentSection / totalSections) * 100);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    // Clear error for this field when user types
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      if (errors[name]) {
        const newErrors = { ...errors };
        delete newErrors[name];
        setErrors(newErrors);
      }
    }
  };

  const validateSection = (section: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    switch (section) {
      case 1: // Personal Information
        if (!formData.fullName.trim())
          newErrors.fullName = "Full name is required";
        if (!formData.dateOfBirth)
          newErrors.dateOfBirth = "Date of birth is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.region.trim()) newErrors.region = "Region is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        // WhatsApp validation - exactly 9 digits
        if (!formData.whatsapp.trim()) {
          newErrors.whatsapp = "WhatsApp number is required";
        } else if (!/^\d{9}$/.test(formData.whatsapp.trim())) {
          newErrors.whatsapp = "WhatsApp number must be exactly 9 digits";
        }
        break;

      case 2: // Academic Information
        if (!formData.highestQualification)
          newErrors.highestQualification = "Highest qualification is required";
        if (!formData.institution.trim())
          newErrors.institution = "Institution is required";
        if (!formData.fieldOfStudy.trim())
          newErrors.fieldOfStudy = "Field of study is required";
        if (!formData.studyDestination)
          newErrors.studyDestination = "Study destination is required";
        break;

      case 3: // Document Uploads
        if (!formData.idDocument)
          newErrors.idDocument = "National ID or Passport is required";
        if (!formData.birthCertificate)
          newErrors.birthCertificate = "Birth certificate is required";
        if (!formData.academicCertificates)
          newErrors.academicCertificates = "Academic certificates are required";
        if (!formData.cv) newErrors.cv = "CV is required";
        break;

      case 4: // Motivational Assessment
        if (!formData.academicGoals.trim())
          newErrors.academicGoals = "Academic goals are required";
        if (!formData.careerAspirations.trim())
          newErrors.careerAspirations = "Career aspirations are required";
        if (!formData.leadershipExperience.trim())
          newErrors.leadershipExperience = "Leadership experience is required";
        if (!formData.communityImpact.trim())
          newErrors.communityImpact = "Community impact is required";
        if (!formData.motivationForGGSI.trim())
          newErrors.motivationForGGSI = "Motivation for applying is required";
        break;

      case 5: // Referee Information
        if (!formData.referee1Name.trim())
          newErrors.referee1Name = "Referee 1 name is required";
        if (!formData.referee1Relationship)
          newErrors.referee1Relationship = "Referee 1 relationship is required";
        if (!formData.referee1Institution.trim())
          newErrors.referee1Institution = "Referee 1 institution is required";
        if (!formData.referee1Position.trim())
          newErrors.referee1Position = "Referee 1 position is required";
        if (!formData.referee1Email.trim()) {
          newErrors.referee1Email = "Referee 1 email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.referee1Email)) {
          newErrors.referee1Email = "Please enter a valid email address";
        }
        if (!formData.referee1Phone.trim())
          newErrors.referee1Phone = "Referee 1 phone is required";

        if (!formData.referee2Name.trim())
          newErrors.referee2Name = "Referee 2 name is required";
        if (!formData.referee2Relationship)
          newErrors.referee2Relationship = "Referee 2 relationship is required";
        if (!formData.referee2Institution.trim())
          newErrors.referee2Institution = "Referee 2 institution is required";
        if (!formData.referee2Position.trim())
          newErrors.referee2Position = "Referee 2 position is required";
        if (!formData.referee2Email.trim()) {
          newErrors.referee2Email = "Referee 2 email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.referee2Email)) {
          newErrors.referee2Email = "Please enter a valid email address";
        }
        if (!formData.referee2Phone.trim())
          newErrors.referee2Phone = "Referee 2 phone is required";
        break;

      case 6: // Declaration
        if (!formData.declaration)
          newErrors.declaration = "You must accept the declaration to submit";
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextSection = () => {
    if (validateSection(currentSection)) {
      if (currentSection < totalSections) {
        setCurrentSection(currentSection + 1);
        clearSectionErrors(); // Clear errors when moving to next section
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
      clearSectionErrors(); // Clear errors when moving to previous section
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateSection(6)) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const formDataToSend = new FormData();

      // Append all text fields
      Object.keys(formData).forEach((key) => {
        if (
          key !== "idDocument" &&
          key !== "birthCertificate" &&
          key !== "academicCertificates" &&
          key !== "cv"
        ) {
          const value = formData[key as keyof typeof formData];
          if (value !== null && value !== undefined) {
            formDataToSend.append(key, String(value));
          }
        }
      });

      // ✅ Append all files with key "documents"
      if (formData.idDocument) {
        formDataToSend.append("documents", formData.idDocument);
      }
      if (formData.birthCertificate) {
        formDataToSend.append("documents", formData.birthCertificate);
      }
      if (formData.academicCertificates) {
        formDataToSend.append("documents", formData.academicCertificates);
      }
      if (formData.cv) {
        formDataToSend.append("documents", formData.cv);
      }

      const response = await fetch("/api/ggsi-application/", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = "/goes/scholarship/apply/confirmation";
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
  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-700 font-lora mb-4">
              Personal Information
            </h3>
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-sm text-red-700 font-body">
                  Please fix the following errors before proceeding:
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-red-600 font-body">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Full Legal Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter your full name"
                  required
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  required
                />
                {errors.dateOfBirth && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.gender ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.gender}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Region of Origin <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.region ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter your region"
                  required
                />
                {errors.region && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.region}
                  </p>
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
                  required
                />
                {errors.email && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              {/* <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.whatsapp ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter WhatsApp number"
                  required
                />
                {errors.whatsapp && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.whatsapp}
                  </p>
                )}
              </div> */}
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    // Allow: backspace, delete, tab, escape, enter
                    if (
                      e.key === "Backspace" ||
                      e.key === "Delete" ||
                      e.key === "Tab" ||
                      e.key === "Escape" ||
                      e.key === "Enter"
                    ) {
                      return;
                    }
                    // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                    if (
                      e.ctrlKey &&
                      (e.key === "a" ||
                        e.key === "c" ||
                        e.key === "v" ||
                        e.key === "x")
                    ) {
                      return;
                    }
                    // Prevent letters and special characters, only allow numbers
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  maxLength={9}
                  className={`w-full px-4 py-3 border ${errors.whatsapp ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter WhatsApp number (9 digits)"
                  required
                />
                {errors.whatsapp && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.whatsapp}
                  </p>
                )}
                <p className="text-xs text-gray-400 font-body mt-1">
                  Enter exactly 9 digits (e.g., 651234567)
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora mb-4">
              Academic Information
            </h3>
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-sm text-red-700 font-body">
                  Please fix the following errors before proceeding:
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-red-600 font-body">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Highest Qualification Obtained{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.highestQualification ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  required
                >
                  <option value="">Select qualification</option>
                  <option value="bachelors">{`Bachelor's Degree`}</option>
                  <option value="masters">{`Master's Degree`}</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                  <option value="high-school">High School</option>
                  <option value="other">Other</option>
                </select>
                {errors.highestQualification && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.highestQualification}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Institution Attended <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.institution ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter institution name"
                  required
                />
                {errors.institution && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.institution}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Intended Field of Study{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.fieldOfStudy ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  placeholder="Enter your intended field"
                  required
                />
                {errors.fieldOfStudy && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.fieldOfStudy}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-body text-gray-700 mb-1">
                  Preferred Study Destination{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="studyDestination"
                  value={formData.studyDestination}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.studyDestination ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                  required
                >
                  <option value="">Select destination</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="australia">Australia</option>
                  <option value="other">Other</option>
                </select>
                {errors.studyDestination && (
                  <p className="text-xs text-red-500 font-body mt-1">
                    {errors.studyDestination}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora mb-4">
              Document Uploads
            </h3>
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-sm text-red-700 font-body">
                  Please fix the following errors before proceeding:
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-red-600 font-body">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-sm text-gray-500 font-body mb-4">
              Please upload clear scanned copies of the following documents
              (PDF, JPG, or PNG format, max 5MB each)
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "idDocument",
                  label: "National ID or Passport",
                  required: true,
                },
                {
                  name: "birthCertificate",
                  label: "Birth Certificate",
                  required: true,
                },
                {
                  name: "academicCertificates",
                  label: "Academic Certificates & Transcripts",
                  required: true,
                },
                { name: "cv", label: "Curriculum Vitae (CV)", required: true },
              ].map((doc) => (
                <div
                  key={doc.name}
                  className={`border-2 border-dashed ${errors[doc.name] ? "border-red-500" : "border-gray-300"} rounded-lg p-4 text-center hover:border-blue-400 transition-colors duration-200`}
                >
                  <Icon
                    icon="mdi:cloud-upload"
                    className="w-10 h-10 text-gray-400 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600 font-body">
                    {doc.label}{" "}
                    {doc.required && <span className="text-red-500">*</span>}
                  </p>
                  {errors[doc.name] && (
                    <p className="text-xs text-red-500 font-body mt-1">
                      {errors[doc.name]}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 font-body mt-1">
                    {formData[doc.name as keyof typeof formData]
                      ? "File uploaded"
                      : "Click to upload"}
                  </p>
                  <input
                    type="file"
                    name={doc.name}
                    onChange={handleFileChange}
                    className="hidden"
                    id={doc.name}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required={doc.required}
                  />
                  <label htmlFor={doc.name} className="cursor-pointer">
                    <span className="text-xs text-blue-500 font-body hover:text-blue-600">
                      Choose file
                    </span>
                  </label>
                  {formData[doc.name as keyof typeof formData] && (
                    <p className="text-xs text-green-500 font-body mt-1">
                      {
                        (formData[doc.name as keyof typeof formData] as File)
                          .name
                      }
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora mb-4">
              Motivational Assessment
            </h3>
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-sm text-red-700 font-body">
                  Please fix the following errors before proceeding:
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-red-600 font-body">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-sm text-gray-500 font-body mb-4">
              Please provide thoughtful responses to the following questions.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "academicGoals",
                  label: "Academic Goals",
                  placeholder:
                    "Describe your academic goals and what you hope to achieve...",
                },
                {
                  name: "careerAspirations",
                  label: "Career Aspirations",
                  placeholder: "What are your long-term career aspirations?",
                },
                {
                  name: "leadershipExperience",
                  label: "Leadership Experience",
                  placeholder:
                    "Describe any leadership roles or experiences...",
                },
                {
                  name: "communityImpact",
                  label: "Community Impact",
                  placeholder: "How have you contributed to your community?",
                },
                {
                  name: "motivationForGGSI",
                  label: "Motivation for Applying to GGSI",
                  placeholder: "Why are you applying to the GGSI program?",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-body text-gray-700 mb-1">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name={field.name}
                    value={
                      formData[field.name as keyof typeof formData] as string
                    }
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 border ${errors[field.name] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                    placeholder={field.placeholder}
                    required
                  />
                  {errors[field.name] && (
                    <p className="text-xs text-red-500 font-body mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora mb-4">
              Referee Information
            </h3>
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-sm text-red-700 font-body">
                  Please fix the following errors before proceeding:
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-red-600 font-body">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-sm text-gray-500 font-body mb-4">
              Please provide details of two referees who can verify your
              academic, leadership, or professional background.
            </p>
            {[1, 2].map((num) => (
              <div
                key={num}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h4 className="text-lg font-semibold text-gray-700 font-body mb-4">
                  Referee {num}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name={`referee${num}Name`}
                      value={
                        formData[
                          `referee${num}Name` as keyof typeof formData
                        ] as string
                      }
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors[`referee${num}Name`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                      placeholder="Enter full name"
                      required
                    />
                    {errors[`referee${num}Name`] && (
                      <p className="text-xs text-red-500 font-body mt-1">
                        {errors[`referee${num}Name`]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-body text-gray-700 mb-1">
                      Relationship <span className="text-red-500">*</span>
                    </label>
                    <select
                      name={`referee${num}Relationship`}
                      value={
                        formData[
                          `referee${num}Relationship` as keyof typeof formData
                        ] as string
                      }
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors[`referee${num}Relationship`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                      required
                    >
                      <option value="">Select relationship</option>
                      <option value="lecturer">Lecturer / Teacher</option>
                      <option value="supervisor">Supervisor / Employer</option>
                      <option value="academic-advisor">Academic Advisor</option>
                      <option value="mentor">Mentor</option>
                      <option value="other">Other</option>
                    </select>
                    {errors[`referee${num}Relationship`] && (
                      <p className="text-xs text-red-500 font-body mt-1">
                        {errors[`referee${num}Relationship`]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-body text-gray-700 mb-1">
                      Institution / Organization{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name={`referee${num}Institution`}
                      value={
                        formData[
                          `referee${num}Institution` as keyof typeof formData
                        ] as string
                      }
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors[`referee${num}Institution`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                      placeholder="Enter institution"
                      required
                    />
                    {errors[`referee${num}Institution`] && (
                      <p className="text-xs text-red-500 font-body mt-1">
                        {errors[`referee${num}Institution`]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-body text-gray-700 mb-1">
                      Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name={`referee${num}Position`}
                      value={
                        formData[
                          `referee${num}Position` as keyof typeof formData
                        ] as string
                      }
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors[`referee${num}Position`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                      placeholder="Enter position"
                      required
                    />
                    {errors[`referee${num}Position`] && (
                      <p className="text-xs text-red-500 font-body mt-1">
                        {errors[`referee${num}Position`]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-body text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name={`referee${num}Email`}
                      value={
                        formData[
                          `referee${num}Email` as keyof typeof formData
                        ] as string
                      }
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors[`referee${num}Email`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                      placeholder="Enter email"
                      required
                    />
                    {errors[`referee${num}Email`] && (
                      <p className="text-xs text-red-500 font-body mt-1">
                        {errors[`referee${num}Email`]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-body text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name={`referee${num}Phone`}
                      value={
                        formData[
                          `referee${num}Phone` as keyof typeof formData
                        ] as string
                      }
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors[`referee${num}Phone`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent font-body`}
                      placeholder="Enter phone number"
                      required
                    />
                    {errors[`referee${num}Phone`] && (
                      <p className="text-xs text-red-500 font-body mt-1">
                        {errors[`referee${num}Phone`]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 font-lora mb-4">
              Declaration & Consent
            </h3>
            {errors.declaration && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-sm text-red-700 font-body">
                  {errors.declaration}
                </p>
              </div>
            )}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 font-body">
                  I certify that all information provided in this application is
                  accurate and complete to the best of my knowledge. I
                  understand that providing false information may result in
                  disqualification from the GGSI selection process.
                </span>
              </label>
              {errors.declaration && (
                <p className="text-xs text-red-500 font-body mt-2">
                  {errors.declaration}
                </p>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      {/* Progress Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-0">
          {/* Centered Badge with Progress Bar inside */}
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center bg-yellow-200 rounded-full px-4 py-2">
              <Icon
                icon="mdi:scholarship"
                className="w-5 h-5 mr-2 text-gray-600"
              />
              <span className="text-xs font-body text-gray-600 mr-3">
                GGSI Application Progress
              </span>
              {/* Progress Bar inside the yellow banner */}
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-white/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-300 to-blue-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-blue-600 font-body">
                  {progress}%
                </span>
              </div>
            </div>
          </div>

          {/* Centered Title */}
          <h1 className="text-center text-xl text-gray-700 font-body mt-3">
            GGSI Application Form
          </h1>

          {/* Centered Step */}
          <p className="text-center text-sm text-gray-500 font-body mt-1">
            Step {currentSection} of {totalSections}
          </p>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {renderSection()}

            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-4 justify-between mt-8 pt-6">
              <div>
                {currentSection > 1 && (
                  <button
                    type="button"
                    onClick={prevSection}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-body hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                  >
                    <Icon
                      icon="mdi:arrow-left"
                      className="w-4 h-4 inline mr-2"
                    />
                    Previous
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                {currentSection < totalSections ? (
                  <button
                    type="button"
                    onClick={nextSection}
                    className="px-6 py-2 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg font-body hover:shadow-lg transition-all duration-300 cursor-pointer"
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
                    className={`px-8 py-3 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg font-body font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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
