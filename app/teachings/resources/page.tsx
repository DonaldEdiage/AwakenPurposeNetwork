// app/teachings/resources/page.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight  mb-6">
            RESOURCES
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-lora mb-6">
            Practical Tools for Learning, Leadership, and Growth
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            Awaken Purpose Network (APN) provides a growing collection of
            educational resources designed to support lifelong learning,
            leadership development, personal growth, and institutional
            capacity-building.
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            Our resources combine practical knowledge with faith-informed
            values, helping individuals, leaders, educators, organizations, and
            communities apply what they learn in meaningful and impactful ways.
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            {`Whether you are pursuing personal development, strengthening your leadership skills, supporting your organization, or facilitating learning within your community, APN's resources are designed to equip you for lasting impact.`}
          </p>
        </div>
      </section>

      {/* Featured Resources Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-gray-600 font-lora mb-2">
              Featured Resources
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Workbooks & Learning Guides",
                description:
                  "Interactive workbooks and practical guides that complement APN courses, workshops, and personal learning journeys.",
                format: "Downloadable PDFs, printable resources",
                icon: "ep:guide",
                color: "from-blue-400 to-blue-600",
                textColor: "text-blue-600",
                bgColor: "bg-blue-50",
                path: "/teachings/resources",
              },
              {
                title: "Leadership Toolkits",
                description:
                  "Templates, planning tools, checklists, and practical resources that support effective leadership, decision-making, team development, and organizational growth.",
                format: "Digital downloads, printable templates",
                icon: "et:tools",
                color: "from-purple-400 to-purple-600",
                textColor: "text-purple-600",
                bgColor: "bg-purple-50",
                path: "/teachings/resources",
              },
              {
                title: "Capacity-Building Resources",
                description:
                  "Guides and practical tools designed to strengthen organizational effectiveness, planning, governance, training, and institutional development.",
                format: "PDFs, templates, implementation guides",
                icon: "grommet-icons:resources",
                color: "from-green-400 to-green-600",
                textColor: "text-green-600",
                bgColor: "bg-green-50",
                path: "/teachings/resources",
              },
              {
                title: "Books & Study Resources",
                description:
                  "Companion guides, study materials, and learning resources that complement APN publications and support individual or group learning.",
                format: "PDF downloads and print editions",
                icon: "arcticons:kanji-study",
                color: "from-orange-400 to-orange-600",
                textColor: "text-orange-600",
                bgColor: "bg-orange-50",
                path: "/teachings/resources",
              },
              {
                title: "Faith & Personal Growth Resources",
                description:
                  "Reflection guides, devotionals, and biblical learning materials that encourage spiritual growth, purposeful living, and ethical leadership.",
                format: "Downloadable PDFs and digital resources",
                icon: "carbon:ibm-cloud-direct-link-1-dedicated-hosting",
                color: "from-teal-400 to-teal-600",
                textColor: "text-teal-600",
                bgColor: "bg-teal-50",
                path: "/teachings/resources",
              },
              {
                title: "Educational Resources",
                description:
                  "Learning materials, worksheets, discussion guides, and facilitator resources for workshops, classrooms, leadership programs, and community learning initiatives.",
                format: "Digital downloads and printable resources",
                icon: "hugeicons:teaching",
                color: "from-red-400 to-red-600",
                textColor: "text-red-600",
                bgColor: "bg-red-50",
                path: "/teachings/resources",
              },
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.path}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                  {/* Icon */}
                  <Icon
                    icon={`${resource.icon}`}
                    width="50"
                    height="50"
                    className="text-gray-500"
                  />

                  {/* Title */}
                  <h3 className={`text-lg text-gray-700 font-body mt-2`}>
                    {resource.title}
                  </h3>

                  {/* Description - Takes remaining space */}
                  <p className="text-gray-600 font-body text-sm mt-2 leading-relaxed flex-1">
                    {resource.description}
                  </p>

                  {/* Bottom Section - Always at the bottom */}
                  <div className="mt-auto pt-4">
                    {/* Format Badge */}
                    <div className={`${resource.bgColor} rounded-lg p-3 mb-3`}>
                      <p className="text-xs font-body text-gray-600">
                        <span className="font-semibold">Format:</span>{" "}
                        {resource.format}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center text-blue-400 transition-colors duration-300">
                      <span className="text-sm font-body font-body">
                        Explore insights
                      </span>
                      <Icon
                        icon="mdi:arrow-right"
                        className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      />
                      <span className="text-sm font-body font-body ml-3">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Value Add Message */}
          <div className="mt-10 text-center">
            <p className="inline-block bg-yellow-200 text-body px-4 py-2 rounded-full text-sm font-body">
              All resources are designed to save time, increase effectiveness,
              and empower individuals and ministry teams for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories Preview */}
      <section className="mt-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Popular Downloads */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <h3 className="text-lg text-gray-700 font-body">
                  Popular Downloads
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Purpose Discovery Workbook",
                    // downloads: "2.3K",
                    icon: "emojione-monotone:books",
                  },
                  {
                    name: "Leadership Development Toolkit",
                    // downloads: "1.8K",
                    icon: "ion:checkmark-done",
                  },
                  {
                    name: "Personal Growth Planner",
                    // downloads: "3.1K",
                    icon: "hugeicons:hand-prayer",
                  },
                  {
                    name: "Strategic Planning Template",
                    // downloads: "1.2K",
                    icon: "clarity:calendar-line",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <Icon
                        icon={`${item.icon}`}
                        width="35"
                        height="35"
                        className="text-gray-500 mr-3"
                      />
                      <span className="text-sm text-gray-700 font-body group-hover:text-blue-400 ml-2">
                        {item.name}
                      </span>
                    </div>
                    {/* <span className="text-xs bg-blue-50 text-blue-400 px-2 py-1 rounded-full">
                      {item.downloads}
                    </span> */}
                  </div>
                ))}
              </div>
            </div>

            {/* Newest Additions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <h3 className="text-lg text-gray-700 font-body ">
                  New Resources
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Emerging Leaders Guide",
                    //date: "Feb 2026",
                    icon: "icon-park-outline:women",
                  },
                  {
                    name: "Organizational Capacity-Building Toolkit",
                    //date: "Feb 2026",
                    icon: "healthicons:young-people-outline",
                  },
                  {
                    name: "Career Development Workbook",
                    //date: "Jan 2026",
                    icon: "hugeicons:wedding",
                  },
                  {
                    name: "Community Leadership Handbook",
                    //  date: "Jan 2026",
                    icon: "carbon:financial-assets",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <Icon
                        icon={`${item.icon}`}
                        width="35"
                        height="35"
                        className="text-gray-500 mr-3"
                      />
                      <span className="text-sm text-gray-700 font-body group-hover:text-blue-400">
                        {item.name}
                      </span>
                    </div>
                    {/* <span className="text-xs text-gray-500 font-body">
                      {item.date}
                    </span> */}
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                {/* <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <Icon
                    icon="mdi:clock-fast"
                    className="w-9 h-9 text-blue-400"
                  />
                </div> */}
                <h3 className="text-lg text-gray-700 font-body ">
                  Resource Library
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Personal development",
                    eta: "Spring 2026",
                    icon: "healthicons:ministry-of-health-outline",
                  },
                  {
                    name: "Leadership development",
                    eta: "Summer 2026",
                    icon: "fluent:arrow-growth-20-regular",
                  },
                  {
                    name: "Education and lifelong learning",
                    eta: "Spring 2026",
                    icon: "hugeicons:mentoring",
                  },
                  {
                    name: "Capacity building",
                    eta: "Fall 2026",
                    icon: "carbon:worship",
                  },
                  {
                    name: "Professional growth",
                    eta: "Fall 2026",
                    icon: "carbon:development",
                  },
                  {
                    name: "Organizational effectiveness",
                    eta: "Fall 2026",
                    icon: "streamline-ultimate:hierarchy-5-organize",
                  },
                  {
                    name: "Faith and values-based leadership",
                    eta: "Fall 2026",
                    icon: "fluent-mdl2:party-leader",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <Icon
                        icon={`${item.icon}`}
                        width="35"
                        height="35"
                        className="text-gray-500 mr-3"
                      />
                      <span className="text-sm text-gray-500 font-body">
                        {item.name}
                      </span>
                    </div>
                    {/* <span className="text-xs text-amber-500 px-2 py-1 rounded-full">
                      {item.eta}
                    </span> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="inline-block bg-yellow-200 text-body px-4 py-2 rounded-full text-sm font-body">
            Every resource is developed to help individuals and organizations
            save time, strengthen their capabilities, and apply learning with
            confidence.
          </p>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="mt-9 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-6">
            Equip Yourself for Greater Impact
          </h2>
          <p className="text-lg text-gray-600 font-body mb-10 max-w-2xl mx-auto">
            Whether you are an individual pursuing personal growth, an educator
            supporting learners, a leader developing your team, or an
            organization strengthening its capacity, APN provides practical
            resources to help you learn, lead, and create lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contsct-form"
              className="px-8 py-4 border-1 border-blue-400 text-blue-400 rounded-lg font-body  hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              {/* <Icon icon="mdi:help-circle-outline" className="w-5 h-5 mr-2" /> */}
              Need Help?
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500 font-body">
            Explore our growing collection of guides, workbooks, templates,
            learning resources, and leadership tools designed to support your
            journey.
          </p>
        </div>
      </section>
    </div>
  );
}
