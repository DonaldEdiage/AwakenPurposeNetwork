// app/teachings/courses/page.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
            COURSES
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-body mb-6">
            Purposeful Learning Experiences
          </p>
          <p className="text-lg leading-relaxed text-gray-600 font-body mx-auto mb-4">
            Awaken Purpose Network (APN) delivers purpose-driven learning
            experiences that equip individuals, leaders, professionals,
            students, and institutions with the knowledge, skills, and values
            needed for personal growth, leadership effectiveness, and meaningful
            impact.
          </p>
          <p className="nline-block bg-yellow-200 text-body px-4 py-2 rounded-full text-sm font-body">
            Courses are available through self-paced learning, live virtual
            classes, in-person workshops, and blended learning formats.
          </p>
        </div>
      </section>

      {/* Track 1: Personal & Spiritual Growth */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-7">
            <div className="inline-flex items-center bg-blue-100 text-blue-400 px-4 py-2 rounded-full mb-4">
              <Icon icon="mdi:leaf" className="w-5 h-5 mr-2" />
              <span className="text-sm font-body">Learning Pathway One</span>
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-2">
              Purpose, Personal Growth & Leadership
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-body mx-auto">
              Designed for individuals seeking personal development, leadership
              growth, and greater clarity of purpose.
            </p>
          </div>

          {/* Courses Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-300 to-purple-400 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Format
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: "Discover & Live Your Purpose",
                      description:
                        "Based on Awaken Your WHY and Awaken Your WHY in 30 Days. Explore your purpose, identify your strengths, and develop an action plan for purposeful living.",
                      format: "Self-paced & virtual cohort",
                      duration: "4 weeks",
                      icon: "carbon:ibm-watson-discovery",
                    },
                    {
                      name: "Leadership & Character Development",
                      description:
                        "Based on A Life That Endures. Develop leadership competencies, communication skills, integrity, resilience, and influence.",
                      format: "Self-paced with Mentorship",
                      duration: "6 weeks",
                      icon: "fluent-mdl2:party-leader",
                    },
                    {
                      name: "Personal Growth & Life Direction",
                      description:
                        "Develop practical habits for goal setting, decision-making, resilience, and lifelong personal growth.",
                      format: "Virtual or In-person",
                      duration: "4 weeks",
                      icon: "arcticons:solunarperiods",
                    },
                    {
                      name: "Faith, Purpose & Everyday Living",
                      description:
                        "Discover how biblical principles can guide personal growth, ethical leadership, and purposeful living.",
                      format: "Workshop or Virtual Course",
                      duration: "4 weeks",
                      icon: "arcticons:smart-living",
                    },
                  ].map((course, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center">
                          <span className="font-body text-gray-700">
                            {course.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 font-body">
                        {course.description}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 font-body">
                        <span className="bg-purple-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                          {course.format}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm font-body text-gray-600">
                        {course.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Track 2: Church & Leadership Development */}
      <section className="py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-7">
            <div className="inline-flex items-center bg-purple-100 text-purple-400 px-4 py-2 rounded-full mb-4">
              <Icon icon="mdi:leaf" className="w-5 h-5 mr-2" />
              <span className="text-sm font-body font-semibold">
                Learning Pathway Two
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-2">
              Education & Professional Development
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-body">
              Courses that strengthen academic success, workplace effectiveness,
              and career readiness.
            </p>
          </div>

          {/* Courses Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-300 to-blue-400 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Format
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: "Academic Success Strategies",
                      description:
                        "Develop effective study habits, critical thinking, research skills, and lifelong learning strategies.",
                      format: "Virtual",
                      duration: "4 weeks",
                      badge: true,
                    },
                    {
                      name: "Career Development & Employability",
                      description:
                        "Build workplace readiness through communication, professional skills, career planning, and interview preparation.",
                      format: "Hybrid",
                      duration: "4 weeks",
                    },
                    {
                      name: "Digital Skills for Learning & Work",
                      description:
                        "Strengthen essential digital competencies for education, professional development, and collaboration.",
                      format: "Self-paced",
                      duration: "4 weeks",
                    },
                    {
                      name: "Professional Communication",
                      description:
                        "Improve written, verbal, and interpersonal communication for academic and workplace success.",
                      format: "Virtual",
                      duration: "3 weeks",
                    },
                  ].map((course, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-5">
                        <div className="font-body text-gray-700">
                          {course.name}
                          {course.badge && (
                            <span className="ml-3 bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
                              Executive Fellow
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 font-body">
                        {course.description}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 font-body">
                        <span className="bg-blue-50 text-bue-600 px-3 py-1 rounded-full text-xs">
                          {course.format}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm font-body text-gray-600">
                        {course.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Track 3: Church & Leadership Development */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-7">
            <div className="inline-flex items-center bg-blue-100 text-blue-400 px-4 py-2 rounded-full mb-4">
              <Icon icon="mdi:leaf" className="w-5 h-5 mr-2" />
              <span className="text-sm font-body font-semibold">
                Learning Pathway Three
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-2">
              Leadership & Capacity Building
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-body">
              Designed for emerging leaders, experienced professionals, and
              organizations.
            </p>
          </div>

          {/* Courses Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-300 to-purple-400 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Format
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: "Global Executive Leadership Program (GELP)",
                      description:
                        "An immersive leadership development experience combining executive leadership, mentorship, strategic thinking, and practical application.",
                      format: "Hybrid",
                      duration: "12 weeks",
                      badge: true,
                    },
                    {
                      name: "Strategic Leadership & Organizational Development",
                      description:
                        "Strengthen leadership effectiveness, organizational culture, planning, and team performance.",
                      format: "Hybrid",
                      duration: "8 weeks",
                    },
                    {
                      name: "Project & Program Management Fundamentals",
                      description:
                        "Practical tools for planning, implementing, and evaluating projects and organizational initiatives.",
                      format: "Hybrid",
                      duration: "6 weeks",
                    },
                    {
                      name: "Institutional Capacity Building",
                      description:
                        "Build stronger systems, governance, planning, and operational effectiveness within organizations and institutions.",
                      format: "Workshop",
                      duration: "6 weeks",
                    },
                  ].map((course, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-5">
                        <div className="font-body text-gray-700">
                          {course.name}
                          {course.badge && (
                            <span className="ml-3 bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
                              Executive Fellow
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 font-body">
                        {course.description}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 font-body">
                        <span className="bg-blue-50 text-bue-600 px-3 py-1 rounded-full text-xs">
                          {course.format}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm font-body text-gray-600">
                        {course.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-7">
            <div className="inline-flex items-center bg-purple-100 text-purple-400 px-4 py-2 rounded-full mb-4">
              <Icon icon="mdi:leaf" className="w-5 h-5 mr-2" />
              <span className="text-sm font-body font-semibold">
                Learning Pathway Four
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-2">
              Faith & Biblical Learning
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-body">
              These courses are designed for individuals and churches seeking
              deeper biblical understanding and spiritual growth.
            </p>
          </div>

          {/* Courses Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-300 to-blue-400 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Format
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-sm">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: "Spiritual Formation & Growth",
                      description:
                        "Develop spiritual disciplines, biblical understanding, and Christ-like character for everyday life.",
                      format: "Self-paced or Guided",
                      duration: "6 weeks",
                      badge: true,
                    },
                    {
                      name: "New Testament Foundations",
                      description:
                        "Explore the historical background, teachings, and practical application of the New Testament.",
                      format: "Online",
                      duration: "8 weeks",
                    },
                    {
                      name: "Old Testament Insights",
                      description:
                        "Study key themes, biblical history, covenant, prophecy, and wisdom literature.",
                      format: "Online",
                      duration: "8 weeks",
                    },
                    {
                      name: "Church Leadership & Ministry Development",
                      description:
                        "Practical leadership principles for pastors, ministry teams, and church leaders seeking healthy and sustainable ministry.",
                      format: "Hybrid",
                      duration: "8 weeks",
                    },
                  ].map((course, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-5">
                        <div className="font-body text-gray-700">
                          {course.name}
                          {course.badge && (
                            <span className="ml-3 bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
                              Executive Fellow
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 font-body">
                        {course.description}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 font-body">
                        <span className="bg-blue-50 text-bue-600 px-3 py-1 rounded-full text-xs">
                          {course.format}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm font-body text-gray-600">
                        {course.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md text-center animate-fade-in-up group rounded-xl p-6 sm:p-8 bg-gradient-to-br from-blue-200 to-blue-300 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  icon="dashicons:welcome-learn-more"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-body text-gray-700 mb-2">
                Flexible Learning Options
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-body mb-4">
                Choose the learning experience that best fits your schedule and
                goals.
              </p>

              {/* Learning Options List */}
              <div className="text-left space-y-2 max-w-xs mx-auto">
                {[
                  "Self-paced online learning",
                  "Live virtual cohorts",
                  "In-person workshops",
                  "Hybrid learning experiences",
                  "Institutional training programs",
                ].map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-700 font-body">
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center animate-fade-in-up group rounded-xl p-8 bg-gradient-to-br from-blue-200 to-blue-300  transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  icon="hugeicons:mentor"
                  className="w-8 h-8 text-gray-400"
                />
              </div>
              <h3 className="text-xl font-body font-body mb-2">
                Mentorship & Learning Support
              </h3>
              <p className="text-gray-600 font-body">
                Many APN courses include mentorship, guided discussions,
                practical assignments, and opportunities to apply learning in
                real-life contexts.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center animate-fade-in-up group rounded-xl p-8 bg-gradient-to-br from-blue-200 to-blue-300  transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  icon="clarity:certificate-line"
                  className="w-8 h-8 text-gray-400"
                />
              </div>
              <h3 className="text-xl font-body font-body mb-2">
                Certificate of Completion
              </h3>
              <p className="text-gray-600 font-body">
                Participants who successfully complete course requirements
                receive an APN Certificate of Completion recognizing their
                commitment to learning, leadership development, and personal
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 text-gray-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-600 font-body tracking-tight mb-6">
            Begin Your Learning Journey
          </h2>
          <p className="text-lg text-gray-600 font-body leading-relaxed">
            Whether you are seeking personal development, leadership training,
            professional growth, biblical education, or institutional
            capacity-building, APN offers learning experiences designed to help
            you grow with purpose and create lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">
            <Link
              href="/contact/#contact-form"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-body hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              Request Information
            </Link>
          </div>

          <p className="mt-8 nline-block bg-yellow-200 text-body px-4 py-2 rounded-full text-sm font-body">
            Browse all courses, descriptions, durations, and enrollment options
          </p>
        </div>
      </section>
    </div>
  );
}
