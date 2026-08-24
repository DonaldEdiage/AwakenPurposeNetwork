"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { blogPosts } from "../../data/blogPosts";

export default function BlogsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1,
      );
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1,
      );
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-white font-body text-gray-600 tracking-tight leading-none font-cormorant tracking-wide">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-4">
          Latest Insights
        </h2>
        <p className="text-lg text-gray-600 font-body mx-auto leading-relaxed">
          Explore our collection of spiritual wisdom, practical guidance, and
          transformative insights
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Container with border and faded background - Same as before */}
        <div
          className="rounded-3xl p-8 md:p-12 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("/images/blog-background.jpg")',
          }}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Single Slide Container with Fade Transition */}
            <div className="relative h-150">
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-4 relative h-full">
                    {/* Blog Image with Overlay Content */}
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      {/* Gradient Overlay at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                      {/* Content Overlay on Image */}
                      <div className="absolute bottom-20 left-0 right-0 p-6 text-white">
                        {/* Title */}
                        <h3 className="text-2xl text-white mb-3 line-clamp-2 font-body">
                          {post.title}
                        </h3>
                        {/* Description/Excerpt */}
                        <p className="text-white/90 font-body leading-relaxed line-clamp-2 text-m">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fixed Overlay - Doesn't fade */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex justify-between items-center">
                {/* View Article Button */}
                {/* <button className="bg-gray-600 text-white px-4 py-2 rounded-full text-m hover:bg-gray-700 transition-all duration-300 flex items-center justify-center h-8 cursor-pointer font-body">
                  View Article
                </button> */}

                {/* Navigation Controls */}
                <div className="flex items-center gap-2">
                  {/* Counter */}
                  <div className="bg-gray-600 text-white px-3 py-2 rounded-full text-m min-w-12 text-center h-8 flex items-center justify-center">
                    {currentIndex + 1}/{blogPosts.length}
                  </div>

                  {/* Left Button */}
                  <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className="bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Right Button */}
                  <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className="bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* View All Blogs Button */}
      {/* <div className="text-center mt-12">
        <button className="border border-blue-300 text-blue-300 px-8 py-3 rounded-full font-body backdrop-blur-sm bg-white hover:bg-opacity-20 transition-all duration-300 hover:px-10 shadow-lg cursor-pointer">
          View All Blog Posts
        </button>
      </div> */}
    </section>
  );
}
