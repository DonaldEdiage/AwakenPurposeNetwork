// app/shop/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

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

export default function ShopPage() {
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
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "books", name: "Books & Workbooks" },
    { id: "courses", name: "Courses & Trainings" },
    { id: "digital", name: "Digital Downloads" },
  ];

  const products = [
    // Featured Books
    {
      id: "awaken-your-why",
      title: "Awaken Your WHY",
      tagline: "The 5-Step Path to Discover and Live Your Purpose",
      description:
        "A transformational guide designed to help individuals uncover their God-given purpose and live with clarity, direction, and intentionality.",
      price: 19.99,
      image: "/images/awaken_your_why_bc.jpeg",
      category: "books",
      featured: true,
      isDigital: true,
      available: false,
    },
    {
      id: "awaken-your-why-workbook",
      title: "Awaken Your WHY in 30 Days",
      tagline: "Interactive Workbook",
      description:
        "Interactive companion to put the teachings into action with daily exercises and reflections.",
      price: 12.99,
      image: "/images/awaken_your_why_bc.jpeg",
      category: "books",
      featured: true,
      isDigital: true,
      available: false,
    },
    {
      id: "season-of-wilderness",
      title: "The Season of Wilderness",
      tagline: "Finding God in the Desert",
      description:
        "Learn to thrive spiritually during challenging seasons and grow in resilience.",
      price: 16.99,
      image: "/images/The_Season_of_Wilderness.png",
      category: "books",
      featured: false,
      isDigital: true,
      available: false,
    },
    {
      id: "life-that-endures",
      title: "A Life That Endures",
      tagline: "Faith That Stands the Test",
      description:
        "Build leadership skills, influence, and character for personal, professional, and ministry impact.",
      price: 16.99,
      image: "/images/A_life_that_Endures.png",
      category: "books",
      featured: false,
      isDigital: true,
      available: false,
    },
    {
      id: "hope-to-faith",
      title: "From Hope to Faith to Miracles",
      tagline: "The Journey of Belief",
      description:
        "Move from struggle to supernatural breakthrough through biblical principles and practical tools.",
      price: 16.99,
      image: "/images/Hope_To_Faith_To_miracle.png",
      category: "books",
      featured: false,
      isDigital: true,
      available: false,
    },
    // Courses
    {
      id: "purpose-course",
      title: "Discover & Live Your Purpose",
      tagline: "Online Course",
      description:
        "Based on Awaken Your WHY. Identify your God-given purpose and create actionable steps to live it fully.",
      price: 97.0,
      image: "/images/awaken_your_why_bc.jpeg",
      category: "courses",
      featured: true,
      isDigital: true,
      available: false,
    },
    {
      id: "leadership-course",
      title: "Leadership & Character Development",
      tagline: "Online Course with Mentorship",
      description:
        "Based on A Life That Endures. Build leadership skills, influence, and character for lasting impact.",
      price: 147.0,
      image: "/images/awaken_your_why_bc.jpeg",
      category: "courses",
      featured: false,
      isDigital: true,
      available: false,
    },
    // Digital Resources
    {
      id: "sop-template",
      title: "SOP Writing Framework",
      tagline: "Digital Template",
      description:
        "Professional SOP template for study abroad and scholarship applications.",
      price: 9.99,
      image: "/images/awaken_your_why_bc.jpeg",
      category: "digital",
      featured: false,
      isDigital: true,
      available: false,
    },
    {
      id: "research-proposal",
      title: "PhD Research Proposal Template",
      tagline: "Digital Template",
      description:
        "Complete framework for writing a compelling research proposal.",
      price: 14.99,
      image: "/images/awaken_your_why_bc.jpeg",
      category: "digital",
      featured: false,
      isDigital: true,
      available: false,
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
            SHOP
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-body mb-6">
            Tools, Books, & Resources for Purposeful Living
          </p>
          <p className="text-lg leading-relaxed text-gray-600 font-body mx-auto mb-4">
            Explore books, workbooks, courses, and ministry resources designed
            to equip you, your team, and your community for faith, leadership,
            and impact.
            <br />
            <span className="text-sm text-gray-500 mt-2 block">
              All products are carefully curated to help you apply biblical
              truths, leadership principles, and personal development strategies
              in practical ways.
            </span>
          </p>
        </div>
      </section>

      {/* Available Books */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
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
                                lang: language, // "en" or "fr"
                                price: "15000", // price as string (will be parsed)
                                title: bookTitle, // e.g., "Meteorology Guide"
                                bookId: bookKey, // optional, e.g., "meteorology-guide"
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
            {/* <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-full font-body font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {language === "en" ? "Browse All Books" : "Voir Tous les Livres"}
            </Link> */}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-9 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 id='featured-books-section'">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Featured Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group animate-fade-in-up bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 bg-white-100 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg text-gray-600 font-lora mb-3 font-semibold">
                    {product.title}
                  </h3>
                  <p className="text-sm text-blue-400 font-body mb-2">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 font-body text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-2xl font-semibold text-gray-600 font-body">
                      ${product.price}
                    </span>
                    {product.available ? (
                      <button
                        className="relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-7 py-1 rounded-full font-body text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ml-auto block text-center group-hover:shadow-xl group-hover:scale-105 snipcart-add-item"
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-url="/shop"
                        data-item-description={product.description}
                        data-item-name={product.title}
                        data-item-image={product.image}
                      >
                        <span className="relative z-10">Add to Cart</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>
                    ) : (
                      <span className="bg-gradient-to-r from-gray-300 to-gray-300 text-white px-7 py-1 rounded-full font-body text-lg shadow-lg cursor-not-allowed ml-auto block text-center opacity-90">
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

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-body transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-300 to-blue-400 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group animate-fade-in-up bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 bg-white-100 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg text-gray-600 font-lora mb-3 font-semibold">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-2xl font-semibold text-gray-600 font-body">
                      ${product.price}
                    </span>
                    {product.available ? (
                      <button
                        className="relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-7 py-1 rounded-full font-body text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ml-auto block text-center group-hover:shadow-xl group-hover:scale-105 snipcart-add-item"
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-url="/shop"
                        data-item-description={product.description}
                        data-item-name={product.title}
                        data-item-image={product.image}
                      >
                        <span className="relative z-10">Add to Cart</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>
                    ) : (
                      <span className="bg-gradient-to-r from-gray-300 to-gray-300 text-white px-7 py-1 rounded-full font-body text-lg shadow-lg cursor-not-allowed ml-auto block text-center opacity-90">
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

      {/* Next Steps CTA */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center mb-3">
          <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
            Ready to Grow?
          </h2>
          <p className="text-xl opacity-90 mb-8 font-body">
            Explore more resources or join our community for updates and
            exclusive content.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teachings/courses"
              className="px-8 py-4 bg-white text-blue-400 rounded-full font-body font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Icon icon="mdi:book-open-variant" className="w-10 h-10" />
              Explore Books & Courses
            </Link>
          
            <Link
              href="/speaking-events/invite/#invite-to-speak-form"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-body font-semibold hover:bg-white hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Icon icon="mdi:microphone" className="w-5 h-5" />
              Invite to Speak
            </Link>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link
              href="/teachings/courses"
              className="px-8 py-2 bg-white text-blue-400 rounded-full font-body hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Icon icon="mdi:book-open-variant" className="w-9 h-9 mr-2" />
              Explore Books & Courses
            </Link>

            <Link
              href="/speaking-events/invite/#invite-to-speak-form"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-body  hover:bg-white hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Icon icon="mdi:microphone" className="w-9 h-9 mr-2" />
              Invite to Speak
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
