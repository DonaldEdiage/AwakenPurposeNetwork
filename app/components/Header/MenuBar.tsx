"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

export default function MenuBar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null,
  );
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "The Founder", path: "/about/founder" },
        { name: "Our Story", path: "/about/story" },
        { name: "Awaken Purpose Network", path: "/about/apn" },
        { name: "Partners & Collaborations", path: "/about/partners" },
      ],
    },
    {
      name: "GOES",
      path: "/goes",
      dropdown: [
        { name: "About GOES", path: "/goes/overview" },
        { name: "Services", path: "/goes/services" },
        { name: "Resources & Training", path: "/goes/resources-training" },
        { name: "Global Scholarships", path: "/goes/scholarship" },
      ],
    },
    { name: "Books", path: "/books" },
    {
      name: "Teachings",
      path: "/teachings",
      dropdown: [
        { name: "Courses", path: "/teachings/courses" },
        { name: "Insights", path: "/teachings/insights" },
        { name: "Resources", path: "/teachings/resources" },
      ],
    },
    { name: "Shop", path: "/shop" },
    {
      name: "Speaking & Events",
      path: "/speaking-events",
      dropdown: [
        { name: "Overview", path: "/speaking-events/overview" },
        { name: "Invite to Speak", path: "/speaking-events/invite" },
        { name: "APN Summits", path: "/speaking-events/summits" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const isActiveOrChildActive = (item: (typeof menuItems)[0]) => {
    if (pathname === item.path) return true;
    if (item.dropdown) {
      return item.dropdown.some(
        (dropdownItem) => pathname === dropdownItem.path,
      );
    }
    return false;
  };

  const handleMouseEnter = (itemName: string) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleDropdownItemClick = () => {
    setHoveredItem(null);
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setExpandedMobileItem(null);
    }
  };

  const toggleMobileDropdown = (itemName: string) => {
    setExpandedMobileItem(expandedMobileItem === itemName ? null : itemName);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setExpandedMobileItem(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          setExpandedMobileItem(null);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="flex flex-wrap justify-end items-center gap-0.5 sm:gap-1 lg:gap-2 py-1 sm:py-2">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown && item.dropdown.length > 0 ? (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.path}
                    onClick={(e) => e.preventDefault()}
                    className={`whitespace-nowrap text-xs sm:text-sm lg:text-base font-body tracking-wider cursor-pointer transition-all duration-300 px-1.5 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-lg inline-flex items-center h-7 sm:h-8 lg:h-10 ${
                      isActiveOrChildActive(item)
                        ? "bg-blue-50 text-blue-400"
                        : "text-gray-600 hover:bg-gray-100 hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {hoveredItem === item.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-100">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-lg min-w-[120px] z-10 overflow-hidden animate-unfold-down">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            href={dropdownItem.path}
                            className={`flex items-center justify-center w-full text-left whitespace-nowrap text-xs sm:text-sm lg:text-base font-body tracking-wider cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:text-blue-400 px-3 sm:px-4 py-1.5 sm:py-2 ${
                              pathname === dropdownItem.path
                                ? "bg-gray-100 text-blue-400"
                                : "text-gray-600"
                            }`}
                            onClick={handleDropdownItemClick}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path}
                  className={`whitespace-nowrap text-xs sm:text-sm lg:text-base font-body tracking-wider cursor-pointer transition-all duration-300 px-1.5 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-lg inline-flex items-center h-7 sm:h-8 lg:h-10 ${
                    pathname === item.path
                      ? "bg-blue-50 text-blue-400"
                      : "text-gray-600 hover:bg-gray-100 hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden" ref={mobileMenuRef}>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          <Icon
            icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
            className="w-7 h-7 text-gray-600"
          />
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 right-4 left-4 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 max-h-[80vh] overflow-y-auto animate-fade-in-up">
            <div className="flex flex-col py-2">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 last:border-0"
                >
                  {item.dropdown && item.dropdown.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`flex items-center justify-between w-full px-4 py-3 text-left font-body transition-colors duration-200 ${
                          isActiveOrChildActive(item)
                            ? "text-blue-400 bg-blue-50"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        <Icon
                          icon={
                            expandedMobileItem === item.name
                              ? "mdi:chevron-up"
                              : "mdi:chevron-down"
                          }
                          className="w-5 h-5 text-gray-400"
                        />
                      </button>
                      {expandedMobileItem === item.name && (
                        <div className="bg-gray-50 pl-4">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              href={dropdownItem.path}
                              className={`block px-4 py-3 text-sm font-body transition-colors duration-200 ${
                                pathname === dropdownItem.path
                                  ? "text-blue-400 bg-blue-50"
                                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-400"
                              }`}
                              onClick={handleDropdownItemClick}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 text-left font-body transition-colors duration-200 ${
                        pathname === item.path
                          ? "text-blue-400 bg-blue-50"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={handleDropdownItemClick}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
