"use client";

import { Suspense } from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";

// ---- Types ----
type Lang = "en" | "fr";

interface Translations {
  title: string;
  amountLabel: string;
  selectMethod: string;
  required: string;
  mtn: string;
  orange: string;
  pleaseSelect: string;
  back: string;
  payNow: string;
  processing: string;
}

const translations: Record<Lang, Translations> = {
  en: {
    title: "Complete Your Payment",
    amountLabel: "Amount:",
    selectMethod: "Select Payment Method",
    required: "*",
    mtn: "MTN Mobile Money",
    orange: "Orange Money",
    pleaseSelect: "Please select a payment method",
    back: "Back",
    payNow: "Pay Now",
    processing: "Processing...",
  },
  fr: {
    title: "Terminez votre paiement",
    amountLabel: "Montant :",
    selectMethod: "Choisissez le moyen de paiement",
    required: "*",
    mtn: "MTN Mobile Money",
    orange: "Orange Money",
    pleaseSelect: "Veuillez sélectionner un moyen de paiement",
    back: "Retour",
    payNow: "Payer maintenant",
    processing: "Traitement...",
  },
};

// ---- Inner component that uses useSearchParams ----
function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read all parameters from URL
  const langParam = searchParams.get("lang") as Lang | null;
  const priceParam = searchParams.get("price");
  const titleParam = searchParams.get("title");
  const bookIdParam = searchParams.get("bookId");

  // Determine language (default to 'en')
  const currentLang: Lang = langParam === "fr" ? "fr" : "en";
  const t = translations[currentLang];

  // Parse price, default to 15000 if missing/invalid
  const price = priceParam ? Number(priceParam) : 15000;
  const displayPrice = price.toLocaleString() + " FCFA";

  // Book title (fallback)
  const productTitle = titleParam || "Book";

  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handlePayment = () => {
    if (!paymentMethod) return;

    setIsSubmitting(true);

    // Build the upload page URL with all parameters
    const params = new URLSearchParams({
      lang: currentLang,
      method: paymentMethod,
      price: String(price),
      title: productTitle,
      ...(bookIdParam && { bookId: bookIdParam }),
    });

    router.push(`/payment-upload?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 font-lora mb-4 text-center">
            {t.title}
          </h2>
          <p className="text-gray-600 font-body text-center mb-8">
            {t.amountLabel}{" "}
            <span className="font-bold text-blue-400">{displayPrice}</span>
          </p>
          {/* Optional: show product title */}
          <p className="text-sm text-center text-gray-500 font-body -mt-6 mb-6">
            {productTitle}
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-body text-gray-700 mb-2">
                {t.selectMethod}{" "}
                <span className="text-red-500">{t.required}</span>
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { value: "mtn", label: t.mtn, icon: "mdi:cellphone" },
                  { value: "orange", label: t.orange, icon: "mdi:cellphone" },
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
                <p className="text-xs text-red-500 mt-2">{t.pleaseSelect}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between pt-4">
              <button
                onClick={() => router.back()}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-body hover:bg-gray-50 transition-all duration-300 cursor-pointer"
              >
                {t.back}
              </button>
              <button
                onClick={handlePayment}
                disabled={!paymentMethod || isSubmitting}
                className={`px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-body font-semibold transition-all duration-300 cursor-pointer ${
                  !paymentMethod || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-lg"
                }`}
              >
                {isSubmitting ? t.processing : t.payNow}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Main page component with Suspense boundary ----
export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}