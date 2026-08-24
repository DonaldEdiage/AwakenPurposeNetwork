// app/about/apn/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function APNPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      {/* Hero Section with Diagonal Split */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 transform -skew-y-3 origin-top-left"></div>
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight">
                  AWAKEN PURPOSE NETWORK
                </h1>
                <p className="mt-4 text-lg md:text-3xl text-gray-600 font-lora italic">
                  Awakening Purpose. Equipping Leaders. Impacting the World.
                </p>
              </div>

              <div className="animate-slide-in-right bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-lg text-white leading-relaxed font-body">
                  Awaken Purpose Network (APN) is a faith-based education,
                  leadership development, and capacity-building company
                  committed to helping individuals, leaders, institutions, and
                  communities discover purpose, develop their potential,
                  strengthen their faith, and create lasting impact.
                </p>
                <p className="mt-4 text-white leading-relaxed font-body">
                  Through education, training, mentorship, leadership
                  development, academic and career support, and transformational
                  learning experiences, APN equips people with the knowledge,
                  skills, values, and opportunities needed to thrive personally,
                  professionally, and purposefully.
                </p>
                <p className="mt-4 text-white leading-relaxed font-body">
                  Rooted in biblical principles and driven by a passion for
                  transformation, APN serves as a bridge between faith,
                  learning, leadership, and impact—empowering people to live,
                  lead, and serve with clarity, courage, excellence, and purpose
                  in Cameroon and around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="animate-fade-in-up group">
              <div className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <h2 className="text-xl md:text-3xl text-gray-600 font-body">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed font-body">
                  To awaken purpose, strengthen faith, and equip individuals,
                  leaders, and organizations for transformational impact through
                  education, training, mentorship, leadership development, and
                  capacity-building programs—empowering them to grow
                  academically, professionally, spiritually, and socially in
                  Cameroon and internationally.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="animate-fade-in-up group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <h2 className="text-xl md:text-3xl text-gray-600 font-body">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed font-body">
                  To be a leading international platform for education,
                  leadership development, and capacity-building, where
                  individuals, institutions, and communities are trained,
                  equipped, and inspired to live with clarity, excellence, and
                  purpose-driven impact across all spheres of society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Circular Wheel Layout */}
      {/* Core Values - Horizontal Scroll on Mobile */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl text-gray-700 font-body mb-3">
              Our Core Values
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body max-w-2xl mx-auto">
              The foundational principles that guide everything we do
            </p>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 w-max">
              {[
                {
                  title: "Purpose",
                  icon: "✨",
                  color: "from-blue-400 to-blue-600",
                  textColor: "text-blue-600",
                  description:
                    "Every person is created with meaning, calling, and assignment.",
                },
                {
                  title: "Faith",
                  icon: "✝️",
                  color: "from-purple-400 to-purple-600",
                  textColor: "text-purple-600",
                  description:
                    "Anchored in biblical truth, nurturing resilient faith.",
                },
                {
                  title: "Transformation",
                  icon: "🦋",
                  color: "from-green-400 to-green-600",
                  textColor: "text-green-600",
                  description:
                    "Inner change expressed outwardly in character and service.",
                },
                {
                  title: "Excellence",
                  icon: "⭐",
                  color: "from-yellow-400 to-yellow-600",
                  textColor: "text-yellow-600",
                  description:
                    "Integrity, preparation, and commitment in all we do.",
                },
                {
                  title: "Servant Leadership",
                  icon: "👑",
                  color: "from-orange-400 to-orange-600",
                  textColor: "text-orange-600",
                  description:
                    "Leading by serving, equipping, and empowering others.",
                },
                {
                  title: "Global Impact",
                  icon: "🌍",
                  color: "from-red-400 to-red-600",
                  textColor: "text-red-600",
                  description:
                    "Cross-cultural ministry and partnership beyond borders.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="w-64 bg-white rounded-xl p-5 shadow-md border-l-4 border-gray-200"
                  style={{
                    borderLeftColor: value.color
                      .split(" ")[1]
                      .replace("to-", ""),
                  }}
                >
                  <h3
                    className={`text-lg font-bold ${value.textColor} font-body mb-2`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet/Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Purpose",
                description:
                  "We believe every person is created by God with meaning, calling, and assignment. Purpose is discovered through obedience, faith, and intentional living.",
                icon: "✨",
                color: "from-blue-400 to-blue-600",
                textColor: "text-blue-600",
              },
              {
                title: "Faith",
                description:
                  "We are anchored in biblical truth and committed to nurturing deep, resilient faith that endures trials and produces spiritual maturity.",
                icon: "✝️",
                color: "from-purple-400 to-purple-600",
                textColor: "text-purple-600",
              },
              {
                title: "Transformation",
                description:
                  "True transformation begins within and is expressed outwardly—in character, leadership, service, and impact.",
                icon: "🦋",
                color: "from-green-400 to-green-600",
                textColor: "text-green-600",
              },
              {
                title: "Excellence",
                description:
                  "We approach ministry, teaching, and leadership development with integrity, preparation, and a commitment to excellence in all we do.",
                icon: "⭐",
                color: "from-yellow-400 to-yellow-600",
                textColor: "text-yellow-600",
              },
              {
                title: "Servant Leadership",
                description:
                  "We believe leaders are called to serve, equip, and empower others, reflecting the heart of Christ in humility and love.",
                icon: "👑",
                color: "from-orange-400 to-orange-600",
                textColor: "text-orange-600",
              },
              {
                title: "Global Impact",
                description:
                  "APN embraces cross-cultural ministry and global partnership, recognizing that God's purpose transcends borders, cultures, and nations.",
                icon: "🌍",
                color: "from-red-400 to-red-600",
                textColor: "text-red-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full"
              >
                <h3 className={`text-lg text-gray-600 font-body mb-3`}>
                  {value.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve - Two Column Layout */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="animate-slide-in-left">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="/images/welcome_to_apn.jpeg"
                  alt="APN Community"
                  fill
                  className="object-contain rounded-2xl transition-transform duration-700 ease-out hover:scale-110"
                />
              </div>
            </div>

            {/* Right Column - Who We Serve Content */}
            <div className="animate-slide-in-right">
              <h2 className="text-xl md:text-3xl text-gray-600 font-body mb-6">
                Who We Serve
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-body">
                Awaken Purpose Network serves a diverse community of
                individuals, groups, and institutions seeking growth,
                development, and transformational impact through education,
                leadership training, mentorship, and capacity-building programs.
              </p>

              <div className="space-y-6">
                {[
                  {
                    group: "Individuals",
                    description:
                      "Students, professionals, and purpose-driven individuals seeking personal development, academic growth, career advancement, leadership training, and clarity of direction.",
                  },
                  {
                    group: "Church and Community Leaders",
                    description:
                      "Pastors, ministry leaders, and community builders pursuing leadership development, organizational growth, discipleship support, and capacity-building for effective service and impact.",
                  },
                  {
                    group: "Emerging Leaders",
                    description:
                      "Young leaders and change-makers being equipped with the skills, knowledge, values, and mentorship needed to grow, serve, and lead effectively in their communities and professions.",
                  },
                  {
                    group: "Institutions and Organizations",
                    description:
                      "Schools, churches, NGOs, and organizations seeking structured training, leadership development programs, educational support, and capacity-building solutions to strengthen their systems and impact.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up group border-l-4 border-blue-300 pl-6 py-4 hover:border-blue-400 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-xl text-gray-900 font-body mb-2">
                      {item.group}
                    </h3>
                    <p className="text-gray-600 font-body">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Areas of Focus */}
            <div className="animate-slide-in-left">
              <div className="mb-8">
                <h2 className="text-xl md:text-3xl text-gray-600 font-body mb-6">
                  Our Areas of Focus
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-body">
                  APN fulfills its mission through the following core areas:
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    number: "1",
                    title: "Education & Training Programs",
                    description:
                      "Design and delivery of structured educational programs, training courses, workshops, seminars, and learning sessions aimed at developing knowledge, skills, and competencies.",
                  },
                  {
                    number: "2",
                    title: "Leadership Development",
                    description:
                      "Provision of leadership training and development programs focused on personal effectiveness, organizational leadership, and professional growth across various sectors.",
                  },
                  {
                    number: "3",
                    title: "Capacity Building Services",
                    description:
                      "Implementation of capacity-building initiatives for individuals, groups, and institutions to improve performance, efficiency, governance, and operational effectiveness.",
                  },
                  {
                    number: "4",
                    title: "Academic & Professional Development Support",
                    description:
                      "Provision of guidance and support services related to academic development, skills acquisition, career development, and employability preparation.",
                  },
                  {
                    number: "5",
                    title: "Institutional Training & Advisory Services",
                    description:
                      "Delivery of training and advisory services to organizations, institutions, and groups including schools, NGOs, community-based organizations, and private entities.",
                  },
                  {
                    number: "6",
                    title: "Events, Conferences & Learning Platforms",
                    description:
                      "Organization of educational events, training conferences, workshops, forums, and development programs in physical and digital formats.",
                  },
                  {
                    number: "7",
                    title: "Educational Content Development",
                    description:
                      "Creation, publication, and distribution of educational materials, training resources, and learning content in various formats.",
                  },
                  {
                    number: "8",
                    title: "Digital Learning Solutions",
                    description:
                      "Development and management of digital platforms, online learning systems, and technology-enabled education and training tools.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-gray-600 font-body">
                            {item.number}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl text-gray-900 font-body mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 font-body mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <p className="text-sm text-gray-600 leading-relaxed font-body italic">
                  APN operates within the scope of education, training,
                  leadership development, and capacity-building services in
                  Cameroon and internationally.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/our_Areas_of_focus.jpg"
                    alt="APN Areas of Focus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Optional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network with a Calling */}
      <section className="py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="text-center animate-fade-in-up">
              <h2 className="text-xl md:text-3xl text-gray-600 font-body mb-6">
                A Network with a Calling
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed font-body mb-6">
                  Awaken Purpose Network (APN) is more than a platform—it is a
                  purpose-driven network committed to education, leadership
                  development, and capacity-building. It exists to equip
                  individuals and institutions with knowledge, skills, and
                  values that enable them to grow, lead effectively, and make
                  meaningful impact in their communities and professions.
                </p>
                <div className="inline-block bg-gradient-to-r from-blue-300 to-blue-400 text-white px-8 py-4 rounded-full">
                  <p className="text-xl font-body italic">
                    {`When purpose is awakened, lives are transformed and people begin to live with clarity, direction, and impact.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps  */}
      <section className="py-11 px-4 sm:px-6 lg:px-8 mb-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Connect with APN
            </h2>
            <p className="space-y-4 text-gray-600 leading-relaxed font-body">
              Whether you are an individual seeking personal and professional
              development, an emerging leader pursuing growth, or an institution
              seeking training and capacity-building support, there are many
              ways to connect with APN:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Learn More",
                description: "Learn more about The Founder",
                icon: "dashicons:welcome-learn-more",
                path: "/about/founder",
              },
              {
                title: "Explore Resources",
                description: "Explore Books, Courses, and Resources",
                icon: "streamline-ultimate:human-resources-network",
                path: "/teachings/resources",
              },
              {
                title: "Partner with APN",
                description:
                  "Invite APN to Teach, Train, or Partner with your organization or institution",
                icon: "mdi:partnership",
                path: "/speaking-events/invite#invite-to-speak-form",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="animate-fade-in-up group rounded-xl p-8 bg-gradient-to-br from-blue-200 to-blue-300 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex flex-col h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-white flex flex-col h-full">
                  <div className="flex justify-center items-center mb-2">
                    <Icon
                      icon={item.icon}
                      width="50"
                      height="50"
                      color="#fff"
                    />
                  </div>
                  <h3 className="text-lg leading-relaxed text-gray-600 font-body mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex-1">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center text-blue-400 group-hover:text-white transition-colors duration-300">
                    <span className="font-body">Learn more</span>
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
