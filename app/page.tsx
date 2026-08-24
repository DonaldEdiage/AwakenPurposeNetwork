// app/page.tsx - Home page
import HeroSection from "./components/HeroSection/heroSection";

import BookPreview from "./components/BookPreview/BookPreview";
// import BlogsSection from "./components/BlogsSection/BlogsSection";
import SpeakingSection from "./components/SpeakingSection/SpeakingSection";
// import NewsletterSection from "./components/NewsletterSection/NewsletterSection";
import AboutSection from "./components/AboutSection/AboutSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center font-sans dark:bg-black">
      <div className="w-full">
        <HeroSection />
      </div>
      <BookPreview />
      {/* <BlogsSection /> Remove the code file */}
      <SpeakingSection />
      {/* <NewsletterSection /> Remove the code file */}
      <AboutSection />
    </div>
  );
}
