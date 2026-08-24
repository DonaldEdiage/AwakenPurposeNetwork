import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  Montserrat,
  Lora,
  Lato,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Awaken Purpose Network",
  description: "Spiritual teachings and resources by M.E. Esene",
  // Favicon is automatically served from app/favicon.ico
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${lora.variable} ${lato.variable} ${playfair.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />

        {/* Snipcart */}
        <Script
          src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
          strategy="afterInteractive"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
          data-config-add-product-behavior="none"
        />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
        />
        <div
          id="snipcart"
          hidden
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
        ></div>
      </body>
    </html>
  );
}
