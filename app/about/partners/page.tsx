// app/about/partners/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="animate-slide-in-left">
              <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-6">
                Partner{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
                  for Greater Impact
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 font-body">
                Awaken Purpose Network (APN) partners with organizations,
                institutions, churches, educational providers, community groups,
                and development-focused leaders to expand access to education,
                leadership development, mentorship, and capacity-building
                initiatives that create lasting impact.
              </p>

              {/* Stats */}
              {/* <div className="flex flex-wrap gap-8 mt-10">
                <div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400 text-3xl font-lora">
                    50+
                  </div>
                  <div className="text-sm text-gray-500 font-body">
                    Active Partners
                  </div>
                </div>
                <div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400 text-3xl font-lora">
                    4
                  </div>
                  <div className="text-sm text-gray-500 font-body">
                    Continents
                  </div>
                </div>
                <div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400 text-3xl text-blue-300 font-lora">
                    1000+
                  </div>
                  <div className="text-sm text-gray-500 font-body">
                    Leaders Trained
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                      <Image
                        src="/images/purpose.jpg"
                        alt="APN Community"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-11 animate-fade-in-up">
            <h2 className="text-xl md:text-3xl text-gray-600 font-body mb-4">
              Our Approach to Partnerships
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-body">
              At APN, we believe meaningful transformation happens when shared
              vision, expertise, and collaboration come together to serve people
              and strengthen communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Shared Values",
                description:
                  "We partner with organizations that value integrity, excellence, leadership, lifelong learning, and positive social impact.",
                icon: "❤️",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Collaborative Impact",
                description:
                  "By combining knowledge, experience, and resources, we develop practical solutions that empower individuals, strengthen institutions, and contribute to sustainable community development.",
                icon: "🎯",
                color: "from-purple-400 to-purple-600",
              },
              {
                title: "Long-Term Capacity Building",
                description: `Our partnerships focus on developing people, improving organizational effectiveness, and creating systems that produce lasting results rather than short-term outcomes.
`,
                icon: "🌱",
                color: "from-green-400 to-green-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                  <h3 className="text-lg text-gray-800  font-body mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center animate-fade-in-up bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 mb-2">
            <p className="text-lg text-gray-700 leading-relaxed font-body">
              Through strategic collaboration, APN extends its impact by
              delivering education, leadership development, mentorship,
              institutional training, and capacity-building programs across
              Cameroon and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Collaborations */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-xl md:text-3xl text-gray-600 font-body mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-body">
              There are many ways to collaborate with APN to create meaningful
              and lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Leadership Development & Training",
                description:
                  "Partner with APN to deliver customized leadership development programs, professional training, workshops, seminars, and mentorship initiatives for your organization, institution, or community.",
                icon: "👥",
                color: "from-blue-500 to-blue-600",
              },
              {
                number: "02",
                title: "Events, Conferences & Learning Programs",
                description:
                  "Collaborate with APN to organize conferences, workshops, forums, seminars, and other educational events that promote learning, innovation, leadership, and professional growth.",
                icon: "🎪",
                color: "from-purple-500 to-purple-600",
              },
              {
                number: "03",
                title: "Educational & Institutional Partnerships",
                description:
                  "Work with APN to provide leadership development, academic support, professional training, and capacity-building programs for schools, universities, churches, NGOs, and other institutions.",
                icon: "🏛️",
                color: "from-green-500 to-green-600",
              },
              {
                number: "04",
                title: "Educational Content & Resource Development",
                description:
                  "Partner with APN to create, publish, and distribute books, learning materials, training manuals, digital resources, and educational content that support continuous learning and leadership development.",
                icon: "📚",
                color: "from-orange-500 to-orange-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] h-full border border-gray-100 relative overflow-hidden">
                  {/* Background Number */}
                  <div className="absolute -right-1 -top-2 text-8xl font-bold text-gray-100 opacity-50 select-none">
                    {item.number}
                  </div>

                  <div className="relative">
                    <h3 className="text-lg text-gray-800 font-body mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-body leading-relaxed">
                      {item.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="mt-6 flex items-center text-blue-400 cursor-pointer group-hover:text-blue-500 transition-colors duration-300">
                      <span className="text-sm font-body">
                        Explore partnership (Available soon)
                      </span>
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white mb-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Network Visualization */}
            <div className="animate-slide-in-left">
              <div className="relative">
                {/* Center Node */}
                <div className="w-32 h-32 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full flex items-center justify-center mx-auto shadow-2xl border-1 border-white">
                  <span className="text-3xl text-white font-lora">APN</span>
                </div>

                {/* Orbiting Nodes */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-blue-200 rounded-full animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-purple-200 rounded-full animate-spin-slower"></div>

                {/* Network Labels - Positioned Absolutely */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-blue-100">
                  <span className="text-sm font-body text-blue-400">
                    Ministry Networks
                  </span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-purple-100">
                  <span className="text-sm font-body text-purple-400">
                    Educational Institutions
                  </span>
                </div>
                <div className="absolute left-30 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-green-100">
                  <span className="text-sm font-body text-gray-400">
                    Civic Organizations
                  </span>
                </div>
                <div className="absolute right-30 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-orange-100">
                  <span className="text-sm font-body text-orange-300">
                    Nonprofit & Social Impact
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="animate-slide-in-right">
              <h2 className="text-xl md:text-3xl text-gray-600 font-body mb-6">
                Our Partnership Network
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 font-body mb-6">
                APN collaborates with a diverse network of partners, including:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Educational institutions",
                  "Churches and faith-based organizations",
                  "NGOs and nonprofit organizations",
                  "Community-based organizations",
                  "Professional associations",
                  "Private sector organizations",
                  "Government and public institutions",
                  "Development and social impact initiatives",
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 font-body group-hover:text-blue-400 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <p className="text-gray-700 font-body italic">
                  {`Every partnership is built on trust, mutual respect, shared values, and a commitment to delivering measurable and sustainable impact.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps - Call to Action */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-xl md:text-3xl text-gray-600 font-body text-white mb-4">
              Partner with APN
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-body text-white">
              Whether you are seeking leadership training, institutional
              capacity-building, educational support, or collaborative learning
              initiatives, APN welcomes opportunities to work with organizations
              that share a commitment to developing people and strengthening
              communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Leadership Development",
                description:
                  "Partner with APN to deliver leadership development and professional training programs.",
                icon: "fluent-mdl2:party-leader",
                path: "/speaking-events/invite",
              },
              {
                title: "Host a Training or Learning Event",
                description:
                  "Collaborate with APN to organize workshops, conferences, seminars, or leadership forums.",
                icon: "game-icons:summits",
                path: "/speaking-events/summits",
              },
              {
                title: "Institutional Capacity Building",
                description:
                  "Integrate APN's education, leadership development, and capacity-building services into your institution or organization.",
                icon: "streamline-ultimate:human-resources-network",
                path: "/teachings/resources",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="animate-fade-in-up group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-[1.02] flex flex-col h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center items-center mb-2">
                  <Icon icon={item.icon} width="50" height="50" />
                </div>
                <h3 className="text-lg leading-relaxed text-gray-600 font-body mb-3">
                  {item.title}
                </h3>
                <p className="font-body opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex-1">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center text-blue-200 group-hover:text-white transition-colors duration-300">
                  <span className="font-body text-gray-600">Get started</span>
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div
            className="mt-8 text-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-3">
              <p className="text-lg leading-relaxed text-gray-600 font-body text-white">
                Join a global network committed to awakening purpose,
                strengthening faith, and equipping leaders for meaningful
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
