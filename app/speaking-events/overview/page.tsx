// app/speaking-events/overview/page.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function SpeakingOverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center relative animate-fade-in-up">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight  mb-6">
            OVERVIEW
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-lora mb-6">
            Transformational Learning. Purpose-Driven Leadership. Lasting
            Impact.
          </p>
          <p className="text-lg text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            Inspiring Faith, Leadership, and Growth.
          </p>
        </div>
      </section>

      {/* Intro Section  */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className=" text-gray-700 leading-relaxed font-body">
              Awaken Purpose Network (APN) partners with educational
              institutions, organizations, NGOs, businesses, and community
              groups to deliver leadership training, speaking engagements,
              workshops, seminars, and educational events. Grounded in biblical
              values and practical experience, each engagement equips
              participants with knowledge, skills, purpose, and strategies for
              lasting personal, professional, and organizational growth.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <span className="inline-block bg-blue-200 text-body px-4 py-2 rounded-full text-sm font-body">
                Available for in-person and virtual engagements.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Focus Areas */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Speaking & Training Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Every session is customized to align with the goals, audience, and
              context of your event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Purpose, Calling & Personal Development",
                description:
                  "Helping individuals discover purpose, develop their potential, and live with clarity and intention.",
                icon: "iconamoon:star-thin",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Leadership Development",
                description:
                  "Building effective, values-based leadership through practical principles that strengthen character, influence, communication, and decision-making.",
                icon: "fluent-mdl2:party-leader",
                color: "from-purple-400 to-purple-600",
              },
              {
                title: "Education, Learning & Capacity Building",
                description:
                  "Supporting lifelong learning through educational training, professional development, and institutional capacity-building initiatives.",
                icon: "fluent:arrow-growth-20-regular",
                color: "from-green-400 to-green-600",
              },
              {
                title: "Youth & Emerging Leaders",
                description:
                  "Equipping students and young professionals with the mindset, skills, and leadership competencies needed to thrive and make meaningful contributions.",
                icon: "qlementine-icons:education-24",
                color: "from-orange-400 to-orange-600",
              },
              {
                title: "Faith, Values & Ethical Leadership",
                description:
                  "Exploring how biblical principles and ethical leadership can shape individuals, organizations, and communities with integrity, service, and excellence.",
                icon: "eos-icons:service-outlined",
                color: "from-red-400 to-red-600",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full cursor-pointer flex flex-col">
                  {/* Icon */}
                  <Icon
                    icon={`${area.icon}`}
                    width="50"
                    height="50"
                    className="text-gray-500"
                  />

                  {/* Title */}
                  <h3 className={`text-lg text-gray-600 font-body mt-2`}>
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-body text-sm mb-4 mt-2 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center">
            <span className="inline-block bg-blue-200 text-body px-4 py-2 rounded-full text-sm font-body">
              Every presentation is carefully prepared and tailored to the
              specific objectives of the host organization and audience.
            </span>
          </div>
        </div>
      </section>

      {/* Types of Events */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Event Types */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                Types of Engagements
              </h2>
              <p className="text-gray-600 font-body mb-6">
                APN provides speaking and training services for a wide range of
                events, including:
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: "streamline-freehand:crm-lead-distribution",
                    event: "Leadership conferences and forums",
                  },
                  {
                    icon: "guidance:conference-room",
                    event: "Workshops and professional development programs",
                  },
                  {
                    icon: "fluent-mdl2:party-leader",
                    event: "Educational institutions and school events",
                  },
                  {
                    icon: "tdesign:institution",
                    event: "Church conferences and ministry training",
                  },
                  {
                    icon: "fa6-solid:building-ngo",
                    event: "NGO and community development programs",
                  },
                  {
                    icon: "carbon:events",
                    event: "Corporate and organizational learning events",
                  },
                  {
                    icon: "pinhead:campsite-beside-oval-broadleaved-tree-above-water",
                    event: "Youth conferences and leadership camps",
                  },
                  {
                    icon: "game-icons:discussion",
                    event: "Panel discussions, seminars, and special events",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Icon
                      icon={`${item.icon}`}
                      width="30"
                      height="30"
                      className="text-gray-500 mr-4"
                    />
                    {/* <span className="text-3xl mr-4">{item.icon}</span> */}
                    <span className="text-gray-700 font-body font-medium">
                      {item.event}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center">
                <span className="inline-block bg-blue-200 text-body px-4 py-2 rounded-full text-sm font-body">
                  Each engagement can be customized to suit your audience,
                  objectives, and event format.
                </span>
              </div>
            </div>

            {/* Right Column - Location & Availability */}
            <div className="animate-slide-in-right">
              <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <Icon
                      icon="mdi:map-marker"
                      className="w-8 h-8 text-gray-500"
                    />
                  </div>
                  <h3 className="text-2xl font-body">Availability</h3>
                </div>

                <p className="text-white/90 font-body mb-6">
                  Based in Yaoundé,<span className="font-bold"> Cameroon</span>,
                  Awaken Purpose Network (APN) delivers speaking engagements,
                  leadership development, education and training programs, and
                  capacity-building services throughout Cameroon and
                  internationally.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white/90 font-body mb-6 font-semibold text-center">
                      Services are available through:
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Icon
                      icon="mdi:earth"
                      className="w-8 h-8 mx-auto mb-2 text-gray-500"
                    />
                    <p className="text-sm font-body">In-person engagements </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Icon
                      icon="mdi:video"
                      className="w-8 h-8 mx-auto mb-2 text-gray-500"
                    />
                    <p className="text-sm font-body">
                      Virtual presentations and webinars{" "}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Icon
                      icon="carbon:hybrid-networking"
                      className="w-8 h-8 mx-auto mb-2 text-gray-500"
                    />
                    <p className="text-sm font-body">
                      Hybrid learning experiences{" "}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse mr-2"></div>
                    <p className="text-sm font-body">
                      Bookings are accepted throughout the year, subject to
                      availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation to Speak */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Icon icon="mdi:microphone" className="w-9 h-9 mr-2" />
              <span className="text-sm font-body font-semibold">
                Invitation to Speak
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-body mb-6">
              Invite APN to Speak or Train
            </h2>
            <p className="text-xl opacity-90 mb-10 font-body max-w-2xl mx-auto">
              Whether you are planning a conference, leadership workshop,
              educational event, institutional training program, or community
              development initiative, APN would be pleased to partner with you.
            </p>
          </div>

          <Link
            href="/speaking-events/invite/#invite-to-speak-form"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-body  hover:bg-white hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center"
          >
            <Icon icon="mdi:calendar-check" className="w-9 h-9 mr-3" />
            Invite APN
          </Link>

          <p className="mt-6 text-sm text-white/70 font-body">
            For churches, conferences, schools, and organizations
          </p>
        </div>
      </section>
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-in-right max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6 text-center leading-[1.2]">
            <span className="block">Speaking engagements</span>
            <span className="block text-sm md:text-base font-light text-gray-400 my-1">
              AND
            </span>
            <span className="block">training sessions</span>
            <span className="block text-sm md:text-base font-light text-gray-400 my-1">
              ARE AVAILABLE FOR:
            </span>
          </h2>

          <div className="space-y-4">
            {[
              "Educational institutions",
              "NGOs and nonprofit organizations",
              "Businesses and professional organizations",
              "Government and public institutions",
              "Community groups and leadership networks",
              "Churches and faith-based organizations",
            ].map((action, index) => (
              <div
                key={index}
                className="flex items-center justify-center group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-3 group-hover:bg-blue-300 group-hover:text-white transition-all duration-300"></div>
                <span className="text-gray-700 font-lato group-hover:text-blue-300 transition-colors duration-300">
                  {action}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center">
            <span className="inline-block bg-blue-200 text-body px-4 py-2 rounded-full text-sm font-body">
              Submit a speaking or training request to begin the conversation
              with our team.
            </span>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: "10+",
                label: "Years Speaking",
                icon: "fluent-mdl2:calendar-year",
              },
              {
                number: "15+",
                label: "Countries",
                icon: "emojione-v1:world-map",
              },
              { number: "100+", label: "Events", icon: "carbon:events" },
              {
                number: "5K+",
                label: "Lives Impacted",
                icon: "hugeicons:hand-prayer",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center text-gray-600">
                <div className="flex justify-center items-center mb-2">
                  <Icon icon={`${stat.icon}`} className="w-9 h-9" />
                </div>
                <div className="text-2xl font-body mb-2">{stat.number}</div>
                <p className="font-body opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
