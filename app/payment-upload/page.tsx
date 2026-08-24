"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";

// ---- Types ----
type Lang = "en" | "fr";

type Translations = {
  title: string;
  subtitle: string;
  uploadLabel: string;
  dragDrop: string;
  or: string;
  browseFiles: string;
  supportedFormats: string;
  removeFile: string;
  back: string;
  submit: string;
  submitting: string;
  confirmTitle: string;
  confirmMessage: string;
  returnToBooks: string;
  goHome: string;
  payTo: string;
  mtnLabel: string;
  orangeLabel: string;
};

const translations: Record<Lang, Translations> = {
  en: {
    title: "Upload Payment Confirmation",
    subtitle:
      "Please save the screenshot or photo of your payment confirmation in your name, before uploading.",
    uploadLabel: "Payment Confirmation",
    dragDrop: "Drag and drop your payment confirmation here",
    or: "or",
    browseFiles: "Browse Files",
    supportedFormats: "Supported formats: JPG, PNG, PDF",
    removeFile: "Remove file",
    back: "Back",
    submit: "Submit Payment Confirmation",
    submitting: "Uploading...",
    confirmTitle: "Payment Confirmation Received",
    confirmMessage:
      "Your payment confirmation has been received. We will verify your payment and confirm your order within 24 hours.",
    returnToBooks: "Return to Books",
    goHome: "Go to Home",
    payTo: "Pay to:",
    mtnLabel: "MTN Mobile Money",
    orangeLabel: "Orange Money",
  },
  fr: {
    title: "Télécharger la confirmation de paiement",
    subtitle:
      "Avant de télécharger, veuillez nommer votre fichier (capture d'écran ou photo) avec votre nom.",
    uploadLabel: "Confirmation de paiement",
    dragDrop: "Glissez-déposez votre confirmation de paiement ici",
    or: "ou",
    browseFiles: "Parcourir les fichiers",
    supportedFormats: "Formats pris en charge : JPG, PNG, PDF",
    removeFile: "Supprimer le fichier",
    back: "Retour",
    submit: "Soumettre la confirmation de paiement",
    submitting: "Téléchargement...",
    confirmTitle: "Confirmation de paiement reçue",
    confirmMessage:
      "Votre confirmation de paiement a été reçue. Nous vérifierons votre paiement et confirmerons votre commande sous 24 heures.",
    returnToBooks: "Retour aux livres",
    goHome: "Accueil",
    payTo: "Payer à :",
    mtnLabel: "MTN Mobile Money",
    orangeLabel: "Orange Money",
  },
};

// ---- Inner component that uses useSearchParams ----
function PaymentUploadContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read book‑specific parameters
  const method = searchParams.get("method") || "";
  const langParam = searchParams.get("lang") as Lang | null;
  const price = searchParams.get("price") || "15000";
  const title = searchParams.get("title") || "Book";
  const bookId = searchParams.get("bookId") || ""; // ✅ Added

  const currentLang: Lang = langParam === "fr" ? "fr" : "en";
  const t = translations[currentLang];

  // Payment numbers
  const mtnNumber = "650898613";
  const orangeNumber = "656596734";

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      // Book-specific fields
      formData.append("paymentMethod", method);
      formData.append("price", price);
      formData.append("title", title);
      formData.append("bookId", bookId);
      formData.append("lang", currentLang);
      formData.append("paymentFile", file);

      // ✅ FIXED: Call the CORRECT function for books
      const response = await fetch("/api/book-payment-upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert(result.error || "Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon="mdi:check" className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-body mb-4">
              {t.confirmTitle}
            </h2>
            <p className="text-gray-600 font-body mb-6">{t.confirmMessage}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/books"
                className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-body font-semibold hover:shadow-lg transition-all duration-300"
              >
                {t.returnToBooks}
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-body font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                {t.goHome}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl text-gray-700 font-lora mb-2">
            {t.title}
          </h1>
          <p className="text-gray-600 font-body">{t.subtitle}</p>
          <p className="text-sm text-gray-500 font-body mt-2">
            {title} – {price} FCFA
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
          {/* Payment Method Display */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <Icon icon="mdi:cellphone" className="w-6 h-6 text-blue-400" />
                <span className="font-body font-semibold text-gray-700">
                  {method === "mtn" ? t.mtnLabel : t.orangeLabel}
                </span>
              </div>
              <div className="text-sm font-body text-gray-600">
                {t.payTo}{" "}
                <span className="font-bold text-blue-400">
                  {method === "mtn" ? mtnNumber : orangeNumber}
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* File Upload Area */}
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                isDragging
                  ? "border-blue-500 bg-blue-50"
                  : file
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-300 hover:border-blue-400"
              }`}
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />

              {file ? (
                <div className="space-y-3">
                  <Icon
                    icon="mdi:file-check"
                    className="w-12 h-12 text-blue-400 mx-auto"
                  />
                  <p className="text-gray-700 font-body font-semibold">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500 font-body">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="text-sm text-red-500 hover:text-red-300 font-body cursor-pointer"
                  >
                    {t.removeFile}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Icon
                    icon="mdi:cloud-upload"
                    className="w-12 h-12 text-gray-400 mx-auto"
                  />
                  <p className="text-gray-600 font-body">{t.dragDrop}</p>
                  <p className="text-sm text-gray-400 font-body">{t.or}</p>
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-400 rounded-lg font-body text-sm hover:bg-blue-200 transition-colors duration-300">
                    {t.browseFiles}
                  </span>
                  <p className="text-xs text-gray-400 font-body">
                    {t.supportedFormats}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between pt-6 mt-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-body hover:bg-gray-50 transition-all duration-300 text-center cursor-pointer"
              >
                {t.back}
              </button>
              <button
                type="submit"
                disabled={!file || isSubmitting}
                className={`px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-body font-semibold transition-all duration-300 cursor-pointer ${
                  !file || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-lg"
                }`}
              >
                {isSubmitting ? t.submitting : t.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ---- Main page component with Suspense boundary ----
export default function PaymentUploadPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <PaymentUploadContent />
    </Suspense>
  );
}
