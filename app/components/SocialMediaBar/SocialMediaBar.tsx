"use client";

import { useState, useRef, useEffect } from "react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

export default function SocialMediaBar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const socialIcons = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "#1877F2",
      url: "https://web.facebook.com/awakenpurposenetwork",
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      color: "#FF0000",
      url: "https://www.youtube.com/@awakenpurposenetwork",
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v3.03c-1.49-.05-2.98-.47-4.3-1.21-1.1-.61-2.05-1.43-2.81-2.39-.01 3.07.01 6.14 0 9.21-.05 1.64-.59 3.3-1.6 4.63-1.18 1.56-2.95 2.65-4.89 2.88-1.52.18-3.07-.09-4.45-.77-1.88-.93-3.31-2.63-3.9-4.63-.14-.47-.23-.96-.27-1.46 1.22.67 2.58 1.01 3.94 1.01 2.54 0 4.89-1.07 6.48-2.97 1.17-1.4 1.83-3.2 1.85-5.06.02-1.53 0-3.07 0-4.6z" />
        </svg>
      ),
      color: "#010101",
      url: "https://www.tiktok.com/@awakenpurposenetwork",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z" />
        </svg>
      ),
      color: "#0A66C2",
      url: "https://www.linkedin.com/company/awakenpurposenetwork",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.99.02 6.756.115 5.525.213 4.712.482 3.941.901c-.785.42-1.418.92-2.04 1.543-.623.623-1.124 1.256-1.544 2.041-.42.771-.688 1.584-.786 2.815C.02 7.99 0 8.395 0 12.017c0 3.62.02 4.026.115 5.26.098 1.231.366 2.044.786 2.815.42.785.92 1.418 1.543 2.04.623.623 1.256 1.124 2.041 1.544.771.42 1.584.688 2.815.786 1.234.095 1.64.115 5.26.115 3.62 0 4.026-.02 5.26-.115 1.231-.098 2.044-.366 2.815-.786.785-.42 1.418-.92 2.04-1.543.623-.623 1.124-1.256 1.544-2.041.42-.771.688-1.584.786-2.815.095-1.234.115-1.64.115-5.26 0-3.62-.02-4.026-.115-5.26-.098-1.231-.366-2.044-.786-2.815-.42-.785-.92-1.418-1.543-2.04-.623-.623-1.256-1.124-2.041-1.544-.771-.42-1.584-.688-2.815-.786C16.043.02 15.637 0 12.017 0zm0 2.158c3.504 0 3.882.016 5.098.094 1.054.07 1.626.325 2.007.537.478.265.818.597 1.153.932.335.335.667.675.932 1.153.212.381.467.953.537 2.007.078 1.216.094 1.594.094 5.098 0 3.504-.016 3.882-.094 5.098-.07 1.054-.325 1.626-.537 2.007-.265.478-.597.818-.932 1.153-.335.335-.675.667-1.153.932-.381.212-.953.467-2.007.537-1.216.078-1.594.094-5.098.094-3.504 0-3.882-.016-5.098-.094-1.054-.07-1.626-.325-2.007-.537-.478-.265-.818-.597-1.153-.932-.335-.335-.667-.675-.932-1.153-.212-.381-.467-.953-.537-2.007-.078-1.216-.094-1.594-.094-5.098 0-3.504.016-3.882.094-5.098.07-1.054.325-1.626.537-2.007.265-.478.597-.818.932-1.153.335-.335.675-.667 1.153-.932.381-.212.953-.467 2.007-.537 1.216-.078 1.594-.094 5.098-.094z" />
          <path d="M12.017 5.838a6.18 6.18 0 100 12.36 6.18 6.18 0 000-12.36zm0 10.177a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994z" />
          <circle cx="18.406" cy="5.595" r="1.439" />
        </svg>
      ),
      color: "#E4405F",
      url: "https://www.instagram.com/awakenpurposenetwork/",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0],
  );

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
    // Add your language change logic here
    console.log(`Language changed to: ${language.name}`);
  };

  return (
    <div className="w-full bg-blue-400 py-3 relative">
      <div className="w-full mx-auto px-6">
        <div className="flex justify-end items-center">
          {/* Language Selector */}
          {/* <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsLanguageOpen(true)}
            onMouseLeave={() => setIsLanguageOpen(false)}
          >
            <button
              className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors duration-200 px-3 py-1 rounded-md hover:bg-blue-500/20 cursor-pointer font-body"
              onMouseEnter={() => setIsLanguageOpen(true)}
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
             
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>

              <span className="text-sm font-body">{selectedLanguage.name}</span>

            
              <svg
                className={`w-4 h-4 transition-transform duration-200 cursor-pointer ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

           
            {isLanguageOpen && (
              <div
                className="absolute right-0 top-full z-20"
                onMouseEnter={() => setIsLanguageOpen(true)}
                onMouseLeave={() => setIsLanguageOpen(false)}
              >
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg min-w-[120px] z-10 overflow-hidden">
                  {languages.map((language, index) => (
                    <button
                      key={language.code}
                      className="group flex items-center w-full hover:bg-gray-50 px-3 py-1 cursor-pointer transition-all duration-300"
                      onClick={() => handleLanguageSelect(language)}
                    >
                     
                      <div className="w-6 flex justify-center">
                        <span className="text-sm transition-colors duration-300 group-hover:text-blue-400">
                          {language.flag}
                        </span>
                      </div>

                     
                      <span className="text-gray-600 text-sm ml-2 font-body transition-colors duration-300 group-hover:text-blue-400">
                        {language.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
          </div> */}

          {/* Divider */}
          <div className="h-5 w-px bg-blue-300 mx-4"></div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-white hover:scale-110 transition-transform duration-300"
                aria-label={social.name}
                style={{ color: social.color }}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="h-5 w-px bg-blue-300 mx-4"></div>
        </div>
      </div>
    </div>
  );
}
