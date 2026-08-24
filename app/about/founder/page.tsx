import Image from "next/image";
import { Icon } from "@iconify/react";
import APN_Founder from "../../../public/images/APN_Founder.png";

export default function FounderPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title and Subtitle */}
            <div className="animate-slide-in-left border-r lg:border-r border-gray-200 pr-8">
              <h1 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight">
                THE FOUNDER
              </h1>
              <p className="mt-4 text-2xl md:text-3xl text-gray-600 font-lora italic">
                Meet <span className="not-italic">M. Esene Ekole</span>
              </p>
              <div className="mt-8">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
                  A Voice for Purpose, Faith, and Transformational Leadership
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="animate-slide-in-right pl-8">
              <p className="text-gray-600 leading-relaxed font-body">
                {`M. Esene Ekole is the Founder of Awaken Purpose Network (APN), a faith-based education, leadership development, and capacity-building organization born from a lifelong calling to awaken purpose, strengthen faith, and equip people for transformational impact. Through years of ministry, education, leadership development, and cross-cultural service, he became convinced that lasting transformation begins when people discover God's purpose and are equipped to live and lead faithfully. That conviction became the foundation of APN, shaping its mission to develop purpose-driven individuals, leaders, and institutions.`}
              </p>
              {/* <p className="mt-4 text-gray-600 leading-relaxed font-body">
                <span className="font-semibold">His mission is clear:</span> to
                guide individuals and leaders to discover their true calling and
                live boldly with faith, clarity, and hope.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                {/* Replace with actual founder image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      src={APN_Founder}
                      alt="Journey"
                      fill
                      className="object-cover object-[center_10%] transition-transform duration-700 ease-out hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <p className="text-lg font-semibold text-gray-700 font-body">
                      M. Esene Ekole
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                A Journey Shaped by Purpose and Obedience
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                <p>
                  {`Born and raised in Cameroon, M. Esene Ekole's journey has been shaped by God's faithful leading through seasons of learning, ministry, and service across Africa, Asia, and beyond. Along the way, he witnessed the transformative power of purpose, faith, and intentional leadership in people's lives. These experiences deepened his conviction that lasting impact begins when individuals are equipped to discover their God-given purpose and grow in faith. From this conviction, Awaken Purpose Network was established.`}
                </p>
                {/* <p>
                  Each step of this journey has strengthened his conviction that
                  purpose is not discovered by chance, but through obedience,
                  faith, and intentional living.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theological Training Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Theological Training & Academic Formation
            </h2>
            <p className="space-y-4 text-gray-600 leading-relaxed font-body">
              {`Esene’s academic journey reflects a strong foundation in theology and education, complemented by cross-cultural leadership experience. His studies across multiple levels of theological and ministry education shaped his belief that effective leadership requires both intellectual depth and practical formation. This perspective continues to inform APN’s commitment to education, leadership development, and capacity building.`}
            </p>
          </div>
        </div>
      </section>

      {/* Trials & Faith Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Refined Through Trials, Anchored in Faith
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-r from-blue-50/50 to-blue-50/50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl text-gray-700 font-body mb-4">
                  Seasons of Challenge
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                  <p>
                    In a defining season of his journey, Esene encountered
                    significant professional and personal setbacks that reshaped
                    his understanding of leadership, resilience, and purpose.
                    Major ventures faced collapse, including a large-scale
                    agricultural initiative in Cameroon and international trade
                    losses, alongside the personal grief of losing his mother.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50/50 to-yellow-100/150 rounded-2xl p-8 border border-yellow-100">
                <h3 className="text-xl text-gray-700 font-body mb-4">
                  Transformative Lessons
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                  <p>
                    {`These experiences became a turning point that reshaped his understanding of leadership, resilience, and purpose. They led to a season of rebuilding through education and reflection, strengthening his conviction that leadership is formed through adversity.`}
                  </p>
                  <p>
                    {`This conviction now informs APN’s commitment to developing individuals and institutions with the capacity to lead, grow, and thrive through challenges.`}
                  </p>
                  <div className="p-2 bg-white/50 rounded-sm border-l-2 border-blue-100">
                    <p className="text-gray-700 font-body italic">
                      <span className="not-italic">Strength is born</span>
                      {` in the deepest valleys of our journey.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4 mb-4">
              Global Impact in Leadership Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-lora">
              Across Africa, Asia, Europe, and the Americas, M. Esene Ekole has
              worked with individuals and organizations to strengthen purpose,
              leadership capacity, and personal development.
            </p>
          </div>

          {/* Circular World Map Container */}
          <div className="flex justify-center items-center mb-16">
            <div
              className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white/30 shadow-2xl bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: 'url("/images/world-map.jpg")',
                backgroundSize: "cover",
              }}
            >
              {/* View All Countries Button - Center of Circle */}
              <div className="relative z-10">
                <div className="relative group">
                  <button className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-body backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 hover:px-10 shadow-lg cursor-pointer">
                    View All Countries
                  </button>

                  {/* Countries Dropdown */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                    <div className="bg-white text-gray-800 rounded-lg shadow-2xl border border-gray-200 min-w-[200px] max-h-64 overflow-y-auto animate-unfold-down">
                      <div className="p-3">
                        <div className="space-y-1">
                          {[
                            "United States",
                            "United Kingdom",
                            "Ireland",
                            "China",
                            "Philippines",
                            "Cameroon",
                            "South Africa",
                            "Australia",
                            "Germany",
                            "Canada",
                            "Brazil",
                            "India",
                            "Singapore",
                            "Thailand",
                            "Japan",
                          ].map((country, index) => (
                            <div
                              key={index}
                              className="flex items-center p-2 hover:bg-gray-100 rounded transition-colors duration-200 cursor-pointer"
                            >
                              <span className="font-body text-gray-700 text-sm text-left w-full">
                                {country}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats or Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: "15+",
                label: "Years of Global Leadership Development",
                icon: "fluent-mdl2:calendar-year",
              },
              {
                number: "100+",
                label: "Individuals Empowered for Leadership",
                icon: "hugeicons:hand-prayer",
              },
              {
                number: "20+",
                label: "Countries of Impact and Engagement",
                icon: "emojione-v1:world-map",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in-up text-center p-6"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center items-center mb-2">
                  <Icon icon={stat.icon} width="50" height="50" />
                </div>
                <div className="text-2xl font-body mb-2">{stat.number}</div>
                <p className="font-body opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Impact Description */}
          <div
            className="max-w-3xl mx-auto text-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="font-body">
              Through teaching, mentoring, and leadership development, he equips
              individuals to live with clarity, courage, and purpose. His work
              consistently helps people move beyond survival into intentional
              growth, meaningful contribution, and impactful living.
            </p>
            <p className="mt-6 font-lora italic">
              {`Across Africa, Asia, the Americas, and Europe — equipping people for purposeful leadership.`}
            </p>
          </div>
        </div>
      </section>

      {/* Writing & Teaching Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                Writing & Teaching Through Books
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                <p>
                  In addition to teaching and leadership development, Esene
                  communicates insights through writing. His books are designed
                  to awaken purpose, strengthen faith, and support personal and
                  professional growth through seasons of development and
                  challenge.
                </p>
                <p>
                  {`His work explores themes of purpose discovery, resilience, leadership formation, and intentional living, serving individuals and institutions seeking clarity, growth, and transformational development.`}
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 shadow-lg">
                <h3 className="text-xl text-gray-600 font-body mb-6">
                  Life Beyond the Platform
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                  <p>
                    When not engaged in teaching or leadership development work,
                    Esene invests time in mentoring emerging leaders, engaging
                    in cross-cultural dialogue, and exploring diverse
                    environments with curiosity and gratitude.
                  </p>
                  <div className="p-3 bg-white/50 rounded-xl border-l-3 border-amber-500">
                    <p className="text-lg text-gray-800 font-lora italic text-center">
                      {`Every life has meaning, and every calling matters deeply to God.`}
                    </p>
                  </div>
                  {/* <p className="text-gray-600 font-body">
                    His life and ministry reflect this simple yet powerful
                    truth.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Connect & Partner
            </h2>
            <p className="space-y-4 text-gray-600 leading-relaxed font-body">
              Whether seeking purpose, education, leadership development, or
              capacity building, APN offers several ways to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Learn More",
                description: "Learn more about Awaken Purpose Network (APN)",
                icon: "raphael:books",
                path: "/about/apn",
              },
              {
                title: "Explore Resources",
                description: "Explore Books, Courses, and Resources",
                icon: "hugeicons:course",
                path: "/teachings/courses",
              },
              {
                title: "Invite to Speak",
                description:
                  "Invite M. Esene Ekole to Speak, Teach, or Train Leaders",
                icon: "emojione:speaking-head",
                path: "/speaking-events/invite",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="animate-fade-in-up group rounded-xl p-8 bg-gradient-to-br from-blue-200 to-blue-300  transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-white">
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
                  <p className="font-body opacity-90 group-hover:opacity-100 transition-opacity duration-300">
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
