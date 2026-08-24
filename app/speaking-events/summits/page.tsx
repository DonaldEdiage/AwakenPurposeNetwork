// app/speaking-events/summits/page.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function APNSummitsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center relative animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight  mb-6">
            APN Global Leadership Summit
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-lora mb-6">
            Uniting Leaders. Inspiring Vision. Creating Impact.
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            APN Summits are signature leadership and learning platforms of
            Awaken Purpose Network (APN), convening leaders, professionals,
            educators, entrepreneurs, and change-makers to exchange ideas,
            strengthen leadership capacity, and develop solutions for meaningful
            impact.
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            Through expert insights, practical learning, and collaborative
            experiences, APN Summits equip participants with the knowledge,
            skills, and values to lead effectively and create positive change.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-l-8 border-amber-300 shadow-lg">
            <div className="flex items-start">
              <Icon
                icon="mdi:eye"
                className="w-10 h-10 text-amber-300 mr-4 flex-shrink-0 mt-1"
              />
              <div>
                <h2 className="text-2xl md:text-3xl text-gray-600 font-body mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed font-body">
                  To create a global platform for leadership development,
                  collaboration, and transformational learning where
                  individuals, institutions, and communities are equipped to
                  grow, innovate, and create meaningful impact across society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Purpose of APN Summits
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Equip Leaders",
                description:
                  "Provide practical tools, leadership frameworks, and insights that help individuals lead with excellence, integrity, and purpose.",
                icon: "fluent-mdl2:party-leader",
                color: "from-amber-400 to-amber-600",
              },
              {
                title: "Build Meaningful Connections",
                description:
                  "Create opportunities for collaboration, networking, and partnerships among leaders, professionals, institutions, and organizations across different sectors and regions.",
                icon: "emojione-v1:world-map",
                color: "from-orange-400 to-orange-600",
              },
              {
                title: "Inspire Purpose-Driven Leadership",
                description:
                  "Encourage leaders to develop a clear vision, strong character, and a commitment to serving others through responsible leadership.",
                icon: "game-icons:inspiration",
                color: "from-red-400 to-red-600",
              },
              {
                title: "Develop Emerging Leaders",
                description:
                  "Support the next generation of leaders through mentorship, training, and opportunities for personal and professional growth..",
                icon: "material-symbols-light:model-training-outline-rounded",
                color: "from-green-400 to-green-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                  {/* Icon */}
                  <Icon
                    icon={`${item.icon}`}
                    width="50"
                    height="50"
                    className="text-gray-500"
                  />

                  {/* Title */}
                  <h3 className={`text-lg text-gray-600 font-body mt-2`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-body text-sm mb-4 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Attendee Types */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
                Who Should Attend?
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-600 font-body mb-4">
                APN Summits are designed for:
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: "fluent-mdl2:party-leader",
                    text: "Emerging and established leaders across different sectors",
                  },
                  {
                    icon: "hugeicons:students",
                    text: "Students and young professionals seeking leadership growth",
                  },
                  {
                    icon: "game-icons:on-target",
                    text: "Educators, entrepreneurs, and community builders.",
                  },
                  {
                    icon: "arcticons:church",
                    text: "Church and faith-based leaders pursuing organizational development",
                  },
                  {
                    icon: "fa6-solid:building-ngo",
                    text: "NGO and nonprofit leaders",
                  },
                  {
                    icon: "cil:institution",
                    text: "Institutional representatives seeking learning and collaboration opportunities",
                  },
                  {
                    icon: "carbon:growth",
                    text: "Individuals committed to personal growth and positive social impact",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300"
                  >
                    <Icon
                      icon={item.icon}
                      className="w-10 h-10 text-amber-300 mr-4 flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-600 font-body">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-100 rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <Icon
                      icon="emojione-v1:world-map"
                      className="w-10 h-10 text-amber-300"
                    />
                  </div>
                  <h3 className="text-2xl font-body text-gray-600 mb-2">
                    Global Participation
                  </h3>
                  <p className="text-gray-600 font-body">
                    APN Summits bring together participants from diverse
                    backgrounds, industries, cultures, and regions.
                  </p>
                  <p className="text-gray-600 font-body">
                    Through physical gatherings and digital participation
                    options, the Summit creates a platform where ideas are
                    exchanged, relationships are built, and leaders are equipped
                    for greater impact.
                  </p>
                </div>

                {/* Centered Items without Bullets */}
                <div className="flex flex-col gap-3 mt-6">
                  {[
                    {
                      label: "International Participation",
                      color: "border-blue-300",
                    },
                    {
                      label: "Virtual Learning Options",
                      color: "border-green-300",
                    },
                    {
                      label: "Practical Leadership Development",
                      color: "border-purple-300",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300 text-center`}
                    >
                      <span className="text-gray-700 font-body">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-2">
              Focus Areas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Leadership Development",
                description:
                  "Exploring practical strategies for personal effectiveness, organizational leadership, decision-making, and influence.",
              },
              {
                title: "Purpose and Personal Growth",
                description:
                  "Helping individuals discover purpose, develop potential, and pursue meaningful personal and professional growth.",
              },
              {
                title: "Character, Values and Ethical Leadership",
                description:
                  "Strengthening knowledge, skills, and systems that help individuals and organizations perform effectively.",
              },
              {
                title: "Education and Capacity Building",
                description:
                  "Preparing the next generation of purpose-driven leaders and 5-fold ministry workers.",
              },
              {
                title: "Innovation and Social Impact",
                description:
                  "Exploring creative approaches to solving challenges and creating positive change in communities and institutions.",
              },
              {
                title: "Collaboration and Partnerships",
                description:
                  "Connecting leaders, organizations, and institutions to share knowledge, resources, and opportunities for collective impact.",
              },
              {
                title: "Faith and Leadership",
                description:
                  "Examining how faith, biblical principles, and spiritual values can inform leadership, service, and personal transformation.",
                fullWidth: true,
              },
            ].map((area, index) => (
              <div
                key={index}
                className={`animate-fade-in-up group ${area.fullWidth ? "lg:col-span-3 md:col-span-2" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full border-l-4 border-amber-300 ${area.fullWidth ? "text-center" : ""}`}
                >
                  <h3 className="text-lg text-gray-700 font-body mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Participation */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-100 rounded-2xl p-10 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="text-gray-700">
                <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
                  Global Participation
                </h2>
                <p className="text-gray-700 font-body text-lg leading-relaxed mb-6">
                  APN Summits are designed to serve audiences locally and
                  internationally through:
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-body">
                    Leadership conferences
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-body">
                    Training sessions
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-body">
                    Workshops
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-body">
                    Panel discussions
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-body">
                    Networking opportunities
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-body">
                    Digital learning experiences
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon
                    icon="streamline-ultimate:global-business-man-user"
                    className="w-10 h-10 text-amber-300"
                  />
                </div>
                <p className="text-lg font-body text-gray-700">
                  Each Summit is intentionally designed to deliver practical
                  insights, meaningful connections, and actionable strategies
                  that participants can apply in their personal lives,
                  organizations, and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA  */}
      <section className="py-1 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
            Engage with APN Summits
          </h2>
          <p className="text-lg text-gray-600 font-body mb-10 max-w-2xl mx-auto">
            Explore opportunities to attend, partner, sponsor, or host an APN
            Summit and connect with leaders, organizations, and institutions
            committed to purpose-driven leadership and meaningful impact.
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="/contact"
              className="px-6 py-4 bg-gradient-to-r from-amber-200 to-yellow-300 rounded-2xl p-10 text-gray-600 text-body shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 "
            >
              Attend APN Summits
            </Link>

            <Link
              href="/speaking-events/invite"
              className="px-8 py-3 bg-blue-200 text-gray-600 text-body rounded-2xl font-body hover:bg-blue-300 transition-all duration-300 inline-flex items-center justify-center"
            >
              Partner with APN
            </Link>

            <Link
              href="/contact#contact-form"
              className="px-6 py-4 bg-gradient-to-r from-amber-200 to-yellow-300 rounded-2xl p-10 text-gray-600 text-body shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 "
            >
              Host an APN Summit
            </Link>
          </div>

          <p className="mt-10 text-gray-500 font-body">
            Join a global community of leaders and organizations advancing
            leadership development, collaboration, and positive change.
          </p>
        </div>
      </section>
    </div>
  );
}
