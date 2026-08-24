import Link from "next/link";
import { Icon } from "@iconify/react";

export default function InsightsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
            INSIGHTS
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-lora mb-6">
            Ideas That Inspire. Knowledge That Empowers. Leadership That
            Transforms.
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            Awaken Purpose Network (APN) shares practical insights, educational
            resources, and thought leadership to help individuals, leaders,
            institutions, and communities grow with purpose and create lasting
            impact.
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            Our articles, videos, guides, and learning resources combine
            biblical values with practical knowledge, equipping readers to grow
            personally, professionally, spiritually, and socially.
          </p>
        </div>
      </section>

      {/* Featured Insights Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-gray-600 font-lora mb-2">
              Explore Insights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed mt-3">
              Discover resources across a range of topics designed to support
              lifelong learning and leadership development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Purpose & Personal Growth",
                description:
                  "Explore practical insights on discovering purpose, developing potential, building resilience, and living with intention.",
                format: "Articles, videos, reflection guides",
                icon: "fluent:arrow-growth-20-regular",
                color: "from-blue-400 to-blue-600",
                textColor: "text-blue-600",
                bgColor: "bg-blue-50",
                path: "/teachings/insights",
              },
              {
                title: "Leadership Development",
                description:
                  "Learn practical leadership principles that strengthen character, decision-making, communication, teamwork, and organizational effectiveness.",
                format: "Articles, downloadable guides, learning resources",
                icon: "fluent-mdl2:party-leader",
                color: "from-purple-400 to-purple-600",
                textColor: "text-purple-600",
                bgColor: "bg-purple-50",
                path: "/teachings/insights",
              },
              {
                title: "Education & Lifelong Learning",
                description:
                  "Explore ideas that support academic success, continuous learning, critical thinking, and professional development.",
                format: "Articles, study resources, educational content",
                icon: "iconoir:learning",
                color: "from-green-400 to-green-600",
                textColor: "text-green-600",
                bgColor: "bg-green-50",
                path: "/teachings/insights",
              },
              {
                title: "Faith, Values & Everyday Living",
                description:
                  "Discover how biblical principles can inform ethical leadership, personal growth, service, and purposeful living.",
                format: "Articles, devotionals, video reflections",
                icon: "arcticons:church",
                color: "from-orange-400 to-orange-600",
                textColor: "text-orange-600",
                bgColor: "bg-orange-50",
                path: "/teachings/insights",
              },
              {
                title: "Institutional Development & Capacity Building",
                description:
                  "Learn strategies for strengthening organizations through leadership development, effective systems, collaboration, and organizational learning.",
                format: "Articles, case studies, practical guides",
                icon: "cil:institution",
                color: "from-teal-400 to-teal-600",
                textColor: "text-teal-600",
                bgColor: "bg-teal-50",
                path: "/teachings/insights",
              },
              {
                title: "Youth & Emerging Leaders",
                description:
                  "Support the growth of students and young professionals through leadership development, mentorship, career preparation, and purpose discovery.",
                format: "Articles, webinars, learning notes",
                icon: "healthicons:young-people",
                color: "from-teal-400 to-teal-600",
                textColor: "text-teal-600",
                bgColor: "bg-teal-50",
                path: "/teachings/insights",
              },
            ].map((insight, index) => (
              <Link
                key={index}
                href={insight.path}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                  {/* Icon */}
                  <Icon
                    icon={`${insight.icon}`}
                    width="50"
                    height="50"
                    className="text-gray-500"
                  />

                  {/* Title */}
                  <h3 className={`text-lg text-gray-600 font-body mt-2`}>
                    {insight.title}
                  </h3>

                  {/* Description - Takes remaining space */}
                  <p className="text-gray-600 font-body text-sm mt-2 leading-relaxed flex-1">
                    {insight.description}
                  </p>

                  {/* Bottom Section - Always at the bottom */}
                  <div className="mt-auto pt-4">
                    {/* Format Badge */}
                    <div className={`${insight.bgColor} rounded-lg p-3 mb-4`}>
                      <p className="text-xs font-body text-gray-600">
                        <span className="font-semibold">Format:</span>{" "}
                        {insight.format}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center text-blue-400 transition-colors duration-300">
                      <span className="text-sm font-body font-body">
                        Coming soon
                        {/* Explore insights */}
                      </span>
                      {/* <Icon
          icon="mdi:arrow-right"
          className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
        /> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content Preview Cards */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Articles Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <Icon
                    icon="ooui:articles-rtl"
                    className="w-6 h-6 text-blue-400"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-600 font-lora">
                  Recent Articles
                </h3>
              </div>

              {/* Article List - Takes remaining space */}
              <div className="flex-1 space-y-4">
                {[
                  {
                    title:
                      "Discovering Your Purpose: Building a Life of Meaning",
                    date: "Feb 15, 2026",
                  },
                  {
                    title: "Leading with Integrity in Times of Change",
                    date: "Feb 8, 2026",
                  },
                  {
                    title: "The Value of Lifelong Learning",
                    date: "Feb 1, 2026",
                  },
                  {
                    title: "Developing Leaders Who Create Lasting Impact",
                    date: "Jan 25, 2026",
                  },
                ].map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <Icon
                        icon="mdi:file-document"
                        className="w-4 h-4 text-gray-400 mr-3"
                      />
                      <span className="text-gray-700 font-body group-hover:text-blue-400 transition-colors duration-200">
                        {article.title}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-body">
                      {article.date}
                    </span>
                  </div>
                ))}
              </div>

              {/* Link - Always at bottom */}
              <div className="mt-auto pt-6">
                <Link
                  href="/teachings/insights"
                  className="inline-flex items-center text-blue-400 font-body font-semibold"
                >
                  Coming Soon
                  {/* <Icon icon="mdi:arrow-right" className="w-4 h-4 ml-2" /> */}
                </Link>
              </div>
            </div>

            {/* Video Teachings Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <Icon
                    icon="ph:video-thin"
                    className="w-6 h-6 text-blue-300"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-600 font-body">
                  Video Learning
                </h3>
              </div>

              {/* Video List - Takes remaining space */}
              <div className="flex-1 space-y-4">
                {[
                  {
                    title: "The Power of Purpose",
                    duration: "45 min",
                  },
                  {
                    title: "Leading with Excellence and Integrity",
                    duration: "38 min",
                  },
                  {
                    title: "Developing Tomorrow's Leaders Today",
                    duration: "52 min",
                  },
                  {
                    title: "Building Stronger Communities Through Leadership",
                    duration: "41 min",
                  },
                ].map((video, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <Icon
                        icon="mdi:play"
                        className="w-4 h-4 mr-3 text-gray-400"
                      />
                      <span className="text-gray-600 font-body group-hover:text-blue-300 transition-colors duration-200">
                        {video.title}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-500 font-body">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Link - Always at bottom */}
              <div className="mt-auto pt-6">
                <Link
                  href="/teachings/insights"
                  className="inline-flex items-center text-blue-300 font-body font-semibold"
                >
                  Coming Soon
                  {/* <Icon icon="mdi:arrow-right" className="w-4 h-4 ml-2" /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Updates Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Content Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon
                  icon="mdi:calendar-refresh"
                  className="w-6 h-6 text-white"
                />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-lg text-gray-600 font-body">
                  Growing Resource Library
                </h3>
                <p className="text-gray-600 font-body text-sm mt-1">
                  New articles, videos, guides, and educational resources are
                  added regularly to support continuous learning, leadership
                  development, and transformational growth.
                </p>
                <p className="text-gray-600 font-body text-sm mt-2">
                  {` Whether you are a student, professional, educator, community
                  leader, ministry leader, or organizational decision-maker,
                  APN's Insights are designed to provide practical knowledge you
                  can apply in everyday life and leadership.`}
                </p>
              </div>
            </div>

            {/* Link Button - Placed at the bottom right */}
            <div className="flex justify-center sm:justify-end">
              <Link
                href="/teachings/courses"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full font-body text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer inline-block text-center"
              >
                <span className="relative z-10">Browse Resources</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-4">
            Explore the Resource Library
          </h2>
          <p className="text-xl opacity-90 mb-10 font-body">
            Browse our growing collection of articles, educational resources,
            videos, and leadership content designed to help you learn, lead, and
            create meaningful impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
            <Link
              href="/teachings/resources"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-body  hover:bg-white hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Icon
                icon="mdi:book-open-page-variant"
                className="w-9 h-9 mr-2"
              />
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
