// app/sales-refunds/page.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function SalesRefundsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
            SALES & REFUNDS
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
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-gray-700 leading-relaxed font-body">
                Awaken Purpose Network (APN) is committed to providing
                high-quality books, courses, digital resources, and ministry
                tools designed to awaken purpose, strengthen faith, and equip
                individuals and organizations. Please review our sales and
                refunds policies carefully.
              </p>
            </div>

            {/* 1. Orders & Payment */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                1. Orders & Payment
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-body">
                <li>
                  All orders for books, workbooks, courses, and resources are
                  processed through our secure online platform.
                </li>
                <li>
                  Payments can be made via approved online methods displayed at
                  checkout.
                </li>
                <li>
                  Prices are listed in the currency indicated on the product
                  page and are subject to change without prior notice.
                </li>
              </ul>
            </div>

            {/* 2. Order Confirmation */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                2. Order Confirmation
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-body">
                <li>
                  After completing your purchase, you will receive an order
                  confirmation email from support@awakenpurposenetwork.com.
                </li>
                <li>
                  If you do not receive a confirmation within 24 hours, please
                  check your spam/junk folder or contact
                  support@awakenpurposenetwork.com for assistance.
                </li>
              </ul>
            </div>

            {/* 3. Shipping & Delivery */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                3. Shipping & Delivery
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-body">
                <li>
                  Physical products (books, workbooks, or merchandise) will be
                  shipped to the address provided during checkout.
                </li>
                <li>
                  Delivery times vary depending on your location, shipping
                  method, and customs procedures for international orders.
                </li>
                <li>
                  APN is not responsible for delays caused by third-party
                  shipping providers or customs.
                </li>
              </ul>
            </div>

            {/* 4. Digital Products & Access */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                4. Digital Products & Access
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-body">
                <li>
                  Digital products, courses, and online resources are available
                  immediately after purchase or on the scheduled course start
                  date.
                </li>
                <li>
                  If you encounter technical issues or cannot access your
                  digital product, contact support@awakenpurposenetwork.com for
                  assistance.
                </li>
              </ul>
            </div>

            {/* 5. Refunds */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                5. Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-body">
                <li>Refund requests are considered on a case-by-case basis.</li>
                <li>
                  Refunds are only available if:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>
                      You received a defective or inaccessible product, or
                    </li>
                    <li>There was an error in processing your order.</li>
                  </ul>
                </li>
                <li>
                  Refund requests must be submitted within 14 days of the
                  purchase date to support@awakenpurposenetwork.com with your
                  order details.
                </li>
                <li>
                  Once approved, refunds will be processed to the original
                  payment method within 7–10 business days.
                </li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-600 font-body">
                  <span className="font-semibold">Note:</span> Refund requests
                  must be submitted within 14 days of purchase.
                </p>
              </div>
            </div>

            {/* 6. Cancellations */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                6. Cancellations
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-body">
                <li>
                  Orders may be cancelled within 24 hours of purchase by
                  contacting support@awakenpurposenetwork.com.
                </li>
                <li>
                  After 24 hours, cancellations may not be possible if the
                  product has been accessed or shipped.
                </li>
              </ul>
            </div>

            {/* 7. Exchanges */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                7. Exchanges
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-body">
                <li>
                  APN does not offer direct product exchanges for items without
                  defects.
                </li>
                <li>
                  If your product is defective or you experience technical
                  issues, APN will work with you to resolve the issue promptly.
                </li>
                <li>
                  For non-defective products, exchanges are generally not
                  offered, but exceptions may be considered on a case-by-case
                  basis.
                </li>
              </ul>
            </div>

            {/* 8. Contact & Support */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                8. Contact & Support
              </h2>
              <p className="text-gray-600 leading-relaxed font-body mb-3">
                For all inquiries regarding orders, refunds, exchanges, or
                technical issues, please contact our customer support team at:
              </p>
              <div className="bg-gray-50 rounded-xl p-4 inline-block">
                <div className="flex items-center">
                  <Icon
                    icon="mdi:email"
                    className="w-5 h-5 text-gray-400 mr-2"
                  />
                  <span className="text-gray-600 font-body">
                    support@awakenpurposenetwork.com
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-3 font-body">
                We aim to respond to all inquiries within 1–2 business days.
              </p>
            </div>

            {/* 9. Important Notes */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-2xl text-gray-600 font-lora mb-4">
                9. Important Notes
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-body">
                <li>By purchasing from APN, you agree to these policies.</li>
                <li>
                  APN reserves the right to update or modify this policy at any
                  time without prior notice.
                </li>
                <li>
                  All updates will be posted on the Sales & Refunds Policy page.
                </li>
              </ul>
            </div>

            {/* Closing Statement */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <p className="text-gray-600 leading-relaxed font-body text-center">
                Thank you for choosing Awaken Purpose Network. We are honored to
                serve you and help you awaken purpose, strengthen faith, and
                live with impact.
              </p>
              <div className="flex justify-center mt-1">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full"></div>
              </div>
            </div>

            {/* Effective Date Note */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 font-body">
                Effective Date: January 1, 2025 | Last Updated: January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
