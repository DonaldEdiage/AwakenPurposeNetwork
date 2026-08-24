// app/books/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";

type BookInfo = {
  en: {
    title: string;
    cover: string;
    backCover: string;
    summary_Description: string;
    summary: string;
  };
  fr: {
    title: string;
    cover: string;
    backCover: string;
    summary_Description: string;
    summary: string;
  };
};

type BooksData = {
  [key: string]: BookInfo; // or you can list all known keys explicitly
};

export default function BooksPage() {
  const booksData: BooksData = {
    Old_Testament_Survey: {
      en: {
        title: "Old Testament Survey",
        cover: "/images/Old_Testament_en.png",
        backCover: "/images/book-a-en-back.jpg",
        summary_Description: "ABOUT THE BOOK",
        summary: `Old Testament Survey: Second Edition is a comprehensive introduction to the history, literature, theology, and message of the Old Testament. Designed for Bible school students, ministry leaders, pastors, and serious students of Scripture, this revised and expanded edition traces God’s redemptive plan from Creation to Restoration while highlighting the major people, events, covenants, kingdoms, prophets, and theological themes that prepare the way for Jesus Christ.

        Featuring expanded historical insights, theological reflections, maps, timelines, discussion questions, application challenges, and review exercises, this handbook equips readers to understand the Old Testament with greater clarity, confidence, and practical relevance.`,
      },
      fr: {
        title: "Survol De L'Ancien Testament",
        cover: "/images/Old_Testament_fr.png",
        backCover: "/images/book-a-fr-back.jpg",
        summary_Description: "À PROPOS DU LIVRE",
        summary: `Aperçu de l’Ancien Testament : Deuxième édition est une introduction complète à l’histoire, à la littérature, à la théologie et au message de l’Ancien Testament. Conçue pour les étudiants des écoles bibliques, les responsables de ministères, les pasteurs et les étudiants sérieux des Saintes Écritures, cette édition révisée et enrichie retrace le plan rédempteur de Dieu, de la Création jusqu’à la Restauration, tout en mettant en lumière les principaux personnages, événements, alliances, royaumes, prophètes et thèmes théologiques qui préparent le chemin vers Jésus-Christ.

        Avec des développements historiques approfondis, des réflexions théologiques, des cartes, des chronologies, des questions de discussion, des exercices d’application et des exercices de révision, ce manuel aide les lecteurs à comprendre l’Ancien Testament avec davantage de clarté, d’assurance et de pertinence pratique.`,
      },
    },
    New_Testament_Survey: {
      en: {
        title: "New Testament Survey",
        cover: "/images/New_Testament_en.png",
        backCover: "/images/book-a-en-back.jpg",
        summary_Description: "ABOUT THE BOOK",
        summary: `New Testament Survey is a comprehensive introduction to the history, literature, theology, and message of the twenty-seven books of the New Testament. Designed for Bible school students, ministry leaders, pastors, and serious students of Scripture, this volume explores the life and ministry of Jesus Christ, the growth of the early Church, the teachings of the apostles, and the hope of God’s eternal kingdom.

        Through historical background, theological reflection, biblical analysis, and practical application, this study equips readers to understand the New Testament with greater clarity, confidence, and faithfulness.`,
      },
      fr: {
        title: "Survol Du Nouveau Testament",
        cover: "/images/New_Testament_fr.png",
        backCover: "/images/book-a-fr-back.jpg",
        summary_Description: "À PROPOS DU LIVRE",
        summary: `Aperçu du Nouveau Testament est une introduction complète à l’histoire, à la littérature, à la théologie et au message des vingt-sept livres du Nouveau Testament. Conçu pour les étudiants des écoles bibliques, les responsables de ministères, les pasteurs et les étudiants sérieux des Saintes Écritures, cet ouvrage explore la vie et le ministère de Jésus-Christ, la croissance de l’Église primitive, les enseignements des apôtres et l’espérance du royaume éternel de Dieu.

        À travers le contexte historique, la réflexion théologique, l’analyse biblique et l’application pratique, cette étude permet aux lecteurs de comprendre le Nouveau Testament avec davantage de clarté, d’assurance et de fidélité.`,
      },
    },
  };
  const [language, setLanguage] = useState<"en" | "fr">("en");
  const [flipped, setFlipped] = useState<{ [key: string]: boolean }>({
    Old_Testament_Survey: false,
    New_Testament_Survey: false,
  });

  const toggleFlip = (bookKey: string) => {
    setFlipped((prev) => ({
      ...prev,
      [bookKey]: !prev[bookKey],
    }));
  };

  const resetFlip = (bookKey: string) => {
    setFlipped((prev) => ({
      ...prev,
      [bookKey]: false,
    }));
  };

  const bookKeys = Object.keys(booksData);
  // const currentBook = booksData[bookKey];
  const currentLang = language; // "en" or "fr"
  //const bookTitle = currentBook[currentLang].title;

  // Function to format summary with proper line breaks
  const formatSummary = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-3 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="min-h-screen">
      {/* SECTION 1: Hero Header */}
      <div className="w-full">
        <div className="relative w-full">
          <Image
            src="/images/book_banner.png"
            alt="Global Opportunities & Educational Services"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
      {/* Available Books  */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Available Books
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Explore our collection of biblical resources designed to deepen
              your understanding of Scripture.
            </p>
          </div>

          {/* Language Toggle */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex bg-white rounded-full shadow-md border border-gray-200 p-1">
              <button
                onClick={() => {
                  setLanguage("en");
                  const resetState: { [key: string]: boolean } = {};
                  bookKeys.forEach((key) => {
                    resetState[key] = false;
                  });
                  setFlipped(resetState);
                }}
                className={`px-6 py-2 rounded-full font-body text-sm transition-all duration-300 cursor-pointer ${
                  language === "en"
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage("fr");
                  const resetState: { [key: string]: boolean } = {};
                  bookKeys.forEach((key) => {
                    resetState[key] = false;
                  });
                  setFlipped(resetState);
                }}
                className={`px-6 py-2 rounded-full font-body text-sm transition-all duration-300 cursor-pointer ${
                  language === "fr"
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Français
              </button>
            </div>
          </div>

          {/* Book Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(booksData).map(([bookKey, book]) => {
              // const book = booksData[bookKey as keyof typeof booksData];
              const currentLang = book[language];
              const isFlipped = flipped[bookKey];
              const bookTitle = book[language].title;

              return (
                <div
                  key={bookKey}
                  className="relative group perspective-[1500px]"
                  onMouseLeave={() => resetFlip(bookKey)}
                >
                  {/* Flip Card Container */}
                  <div
                    className={`relative transition-transform duration-700 transform-style-3d w-full aspect-[3/4] max-h-[500px] cursor-pointer ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                    onClick={() => toggleFlip(bookKey)}
                  >
                    {/* Front Face - Book Cover */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-white flex flex-col">
                      {/* Image container */}
                      <div className="relative flex-1 w-full">
                        <Image
                          src={currentLang.cover}
                          alt={`${currentLang.title} cover`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      {/* Title and click to flip button */}
                      <div className="p-4 text-center">
                        <h3 className="text-gray-700 font-body text-xl font-semibold mb-2">
                          {currentLang.title}
                        </h3>
                        <span className="inline-block bg-blue-400 text-white text-sm font-body px-4 py-1 rounded-full">
                          {language === "en"
                            ? "Click to flip"
                            : "Cliquez pour retourner"}
                        </span>
                      </div>
                    </div>

                    {/* Back Face - Back Cover with Summary */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
                      {/* Summary Content */}
                      <div className="p-5 sm:p-6 flex flex-col h-full overflow-y-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon
                            icon="mdi:book-open-page-variant"
                            className="w-5 h-5 text-blue-500"
                          />
                          <h4 className="text-xs font-semibold text-blue-500 font-body tracking-wider">
                            {currentLang.summary_Description}
                          </h4>
                        </div>
                        <div className="text-sm text-gray-700 font-body leading-relaxed flex-1 overflow-y-auto prose prose-sm max-w-none">
                          {formatSummary(currentLang.summary)}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-xs text-gray-400 font-body">
                            {language === "en"
                              ? "Click to flip back"
                              : "Cliquez pour retourner"}
                          </span>

                          {/* Price display – centered between the two */}
                          <span className="text-lg text-gray-600 font-body">
                            15,000 FCFA
                          </span>

                          <Link
                            href={{
                              pathname: "/payment",
                              query: {
                                lang: language,
                                price: "15000",
                                title: bookTitle,
                                bookId: bookKey,
                              },
                            }}
                            className="text-sm text-blue-500 font-body font-semibold hover:text-blue-600 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {language === "en" ? "Shop →" : "La boutique →"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-7">
            <p className="text-gray-600 font-body mb-6">
              {language === "en"
                ? "Both books are available in English and French."
                : "Les deux livres sont disponibles en anglais et en français."}
            </p>
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-full font-body font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {language === "en" ? "Browse All Books" : "Voir Tous les Livres"}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Featured Book */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              FEATURED BOOK
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book Cover - Left Column */}
            <div className="animate-slide-in-left flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 md:w-96 md:h-[450px] transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/awaken_your_why_bc.jpeg"
                  alt="Book cover"
                  fill
                  className="object-contain rounded-2xl cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Book Details - Right Column */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-3">
                Awaken Your Why
              </h2>
              <p className="text-xl text-gray-700 font-body mb-6">
                The 5-Step Path to Discover and Live Your Purpose
              </p>
              <p className="text-gray-600 leading-relaxed font-body mb-8">
                {` A transformational guide designed to help individuals uncover their God-given purpose and 
                live with clarity, direction, and intentionality. Through biblical insight and practical steps, 
                readers are guided to align their lives with God's calling.`}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="">
                  {/* <Link
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-12 py-4 rounded-full font-body text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer w-fit mx-auto block"
                    href="/#awaken-your-why-book"
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link> */}
                </div>
                <Link
                  href="/shop#featured-books-section"
                  className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-body hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Coming 2027
                </Link>
              </div>

              {/* Badges */}
              <div className="flex gap-3 mt-8">
                <span className="nline-block bg-yellow-200 text-body px-4 py-2 rounded-full text-sm font-body cursor-pointer">
                  Workbook Available
                </span>
                <span className="nline-block bg-yellow-200 text-body px-4 py-2 rounded-full text-sm font-body cursor-pointer">
                  Study Guide
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Book Collection Grid */}
      <section className="py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Other Books
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Awaken Your WHY in 30 Days",
                tagline: "A Practical Workbook",
                image: "/images/awaken_your_why_bc.jpeg",
                path: "/#awaken-your-why-book",
                available: false,
              },
              {
                title: "The Season of Wilderness",
                tagline: "Finding God in the Desert",
                image: "/images/The_Season_of_Wilderness.png",
                path: "/images/The_Season_of_Wilderness.png",
                available: false,
              },
              {
                title: "A Life That Endures All",
                tagline: "Faith That Stands the Test",
                image: "/images/A_life_that_Endures.png",
                path: "/images/A_life_that_Endures.png",
                available: false,
              },
              {
                title: "From Hope to Faith to Miracles",
                tagline: "The Journey of Belief",
                image: "/images/Hope_To_Faith_To_miracle.png",
                path: "/images/Hope_To_Faith_To_miracle.png",
                available: false,
              },
              {
                title: "You are not alone",
                tagline: "The Journey of Belief",
                image: "/images/You_Are_Not_Alone.png",
                path: "/images/You_Are_Not_Alone.png",
                available: false,
              },
            ].map((book, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                  {/* Book Cover - Fixed height container */}
                  <div className="relative w-full h-48 mb-4">
                    {book.image ? (
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-contain rounded-lg"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    ) : (
                      <div className="w-full h-full rounded-lg flex items-center justify-center">
                        <span className="text-4xl">📚</span>
                      </div>
                    )}
                  </div>

                  {/* Content - Takes remaining space */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg text-gray-700 font-body mb-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-body mb-4">
                      {book.tagline}
                    </p>
                  </div>

                  {/* Bottom section - Always at the bottom */}
                  <div className="mt-auto pt-4">
                    {book.available ? (
                      <Link
                        href={book.path}
                        className="inline-flex items-center text-blue-400 transition-colors duration-300"
                      >
                        Learn More
                        <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                          →
                        </span>
                      </Link>
                    ) : (
                      <span className="inline-block bg-gradient-to-r from-gray-300 to-gray-300 text-white px-7 py-1 rounded-full font-body text-lg shadow-lg cursor-not-allowed opacity-90">
                        Available 2027
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: How These Books Are Used */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Designed for Growth and Impact
            </h2>
            <p className="text-lg text-gray-600 font-body">
              APN publications are designed to support learning, leadership
              development, personal growth, and purposeful living. Whether you
              are studying independently, leading a team, or facilitating a
              learning group, these resources provide practical insights that
              can be applied in everyday life and leadership.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              "Personal growth and purpose discovery",
              "Leadership development and mentoring",
              "Individual and group learning",
              "Professional and organizational development",
              "Faith formation and biblical learning",
              "Workshops, training programs, and educational initiatives",
            ].map((use, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-400">✓</span>
                </div>
                <p className="text-sm font-body text-gray-600">{use}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 font-body">
              Many titles are complemented by courses, workbooks, study guides,
              and other educational resources to provide a richer and more
              practical learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Go Deeper */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 mb-3">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Continue Your Learning Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link
              href="/teachings/courses"
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full bg-gradient-to-br from-purple-50 to-white flex flex-col"
            >
              <div className="flex justify-center items-center mb-2 text-gray-500">
                <Icon
                  icon="fluent:hat-graduation-20-regular"
                  width="50"
                  height="50"
                />
              </div>
              <h3 className="text-lg text-gray-600 font-body mb-2">
                Looking for guided learning?
              </h3>
              <p className="text-sm font-body text-blue-400 group-hover:underline mt-auto">
                Explore Courses →
              </p>
            </Link>

            <Link
              href="/teachings/resources"
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full bg-gradient-to-br from-purple-50 to-white  flex flex-col"
            >
              <div className="flex justify-center items-center mb-2 text-gray-500">
                <Icon icon="emojione-monotone:books" width="50" height="50" />
              </div>
              <h3 className="text-lg text-gray-600 font-body mb-2">
                Need practical tools and learning resources?
              </h3>
              <p className="text-sm font-body text-blue-400 group-hover:underline mt-auto">
                Explore Resources →
              </p>
            </Link>

            <Link
              href="/speaking-events/invite/#invite-to-speak-form"
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full bg-gradient-to-br from-purple-50 to-white flex flex-col"
            >
              <div className="flex justify-center items-center mb-2 text-gray-500">
                <Icon icon="hugeicons:mentor" width="50" height="50" />
              </div>
              <h3 className="text-lg text-gray-600 font-body mb-2">
                Interested in a workshop or training session?
              </h3>
              <p className="text-sm font-body text-blue-400 group-hover:underline mt-auto">
                Invite APN to Speak or Train →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
