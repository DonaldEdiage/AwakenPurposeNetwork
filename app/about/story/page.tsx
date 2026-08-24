import Image from "next/image";
import { Icon } from "@iconify/react";

export default function StoryPage() {
  return (
    <div className="min-h-screen font-body">
      <section className="overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in-up text-center">
            <h2 className="text-xl md:text-4xl lg:text-5xl text-gray-600 font-body tracking-tight mb-10">
              Our Story
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-body mb-6">
              From Vision to Transformational Impact
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed font-lato">
              Awaken Purpose Network (APN) was founded with a clear conviction:
              when people discover their purpose, develop their potential, and
              are equipped with the right knowledge, skills, and values, they
              become catalysts for lasting transformation in their families,
              organizations, and communities.
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed font-lato">
              As a faith-based education, leadership development, and
              capacity-building network, APN exists to awaken purpose,
              strengthen faith, and equip individuals, leaders, institutions,
              and communities to thrive academically, professionally,
              spiritually, and socially.
            </p>
          </div>
        </div>
      </section>

      {/* The Beginning Section */}
      <section className="py-1 px-4 sm:px-6 lg:px-8 mt-15">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                The Beginning
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-lato">
                <p>
                  Awaken Purpose Network began with a vision to create a
                  platform where education, leadership development, mentorship,
                  and transformational learning come together to help people
                  discover purpose and maximize their potential.
                </p>
                <p>
                  Inspired by the life, teaching, and leadership journey of M.
                  Esene Ekole, APN was established to respond to the growing
                  need for practical leadership development, quality education,
                  mentorship, and capacity-building that empower people to make
                  meaningful contributions within their professions,
                  organizations, ministries, and communities.
                </p>
                <p>
                  From its beginnings in Cameroon, the vision has continued to
                  grow beyond geographical boundaries, creating opportunities
                  for learning, collaboration, leadership development, and
                  global impact.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/images/Our_Story.png"
                    alt="A Vision Spanning Continents"
                    fill
                    className="object-cover object-[center_10%] transition-transform duration-700 ease-out hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Optional overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                    <div className="p-1 w-full">
                      <p className="text-white font-body text-right">
                        A Vision Spanning Continents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey of Faith Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              A Vision Beyond Borders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center bg-blue-200 rounded-full px-4 py-2">
              <Icon icon="mdi:earth" className="w-9 h-9 mr-2 text-gray-600" />
              <span className="text-sm font-body text-gray-600">
                APN believes that purpose knows no boundaries.
              </span>
            </div>
          </div>
          <div
            className="max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-gray-600 leading-relaxed font-body">
                {`By connecting faith with learning, leadership with service, and knowledge with practical application, the network seeks to equip people from diverse backgrounds to lead with integrity, excellence, and purpose.`}
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed font-lato">
                Whether serving students, professionals, emerging leaders,
                churches, educational institutions, NGOs, or community
                organizations, APN is committed to building leaders who create
                positive and lasting impact wherever they serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built Through Purpose and Resilience*/}
      <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Built Through Purpose and Resilience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-300 mx-auto rounded-full"></div>
          </div>

          <div
            className="max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-gray-600 leading-relaxed font-body">
                {`The journey of APN has been shaped by perseverance, continual learning, and an unwavering commitment to God's calling.`}
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed font-lato">
                {` Like many meaningful visions, its growth has required navigating challenges, embracing change, and remaining committed to serving people with excellence. These experiences have strengthened the network's resolve to provide education, mentorship, leadership development, and capacity-building that produce lasting transformation.`}
              </p>
              <p className="mt-6  text-gray-600 leading-relaxed font-body">
                {`Today, APN continues to grow as a platform where purpose is awakened, potential is developed, and leaders are equipped to make meaningful contributions in every sphere of society.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-4">
              Growing Through Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Over the years, APN has continued to expand its reach through
              initiatives that reflect its commitment to education, leadership,
              and transformational development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fluent:hat-graduation-20-regular",
                title: "Education and Training",
                description:
                  "Designing and delivering courses, workshops, seminars, and learning experiences that build practical knowledge, skills, and leadership capacity.",
              },
              {
                icon: "game-icons:summits",
                title: "Leadership Development",
                description:
                  "Equipping emerging and experienced leaders with the tools, values, and competencies needed for effective leadership and sustainable impact.",
              },
              {
                icon: "hugeicons:mentor",
                title: "Mentorship and Personal Development",
                description:
                  "Supporting individuals through mentorship, coaching, and personal development initiatives that foster growth, purpose, and lifelong learning.",
              },
              {
                //icon: "game-icons:summits",
                icon: "emojione-monotone:books",
                title: "Educational Resources",
                description:
                  "Developing books, learning materials, training resources, and digital content that promote continuous education and professional development.",
              },
              {
                icon: "healthicons:agriculture",
                title: "Institutional Partnerships",
                description:
                  "Collaborating with schools, churches, NGOs, community organizations, and other institutions to strengthen leadership, organizational effectiveness, and capacity.",
              },
              {
                icon: "gis:network",
                title: "Conferences and Learning Platforms",
                description:
                  "Organizing conferences, forums, workshops, and leadership events that encourage learning, collaboration, innovation, and transformational impact.",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="animate-fade-in-up group hover:transform hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                  <div className="flex justify-center items-center mb-2">
                    <Icon icon={milestone.icon} width="50" height="50" />
                  </div>
                  <h3 className="text-xl text-gray-600 font-body mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 font-body">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission in Action Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white mt-3">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-body mb-4">
              Our Mission in Action
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto font-lora">
              {`Every initiative undertaken by APN reflects its commitment to:`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Awaken purpose and help individuals discover their God-given potential and calling.",
              "Strengthen faith while promoting lifelong learning, leadership development, and personal growth.",
              "Equip individuals, leaders, institutions, and organizations through education, mentorship, and capacity-building.",
              "Create opportunities for transformational impact within communities, workplaces, educational institutions, and society.",
            ].map((mission, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <p className="font-lato">{mission}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 text-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-xl italic font-body max-w-3xl mx-auto">
              {`Our story is not measured simply by programs or milestones, but by transformed lives, strengthened institutions, developed leaders, and communities empowered to flourish.`}
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead Section */}
      <section className="py-13 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl p-8 border border-blue-100">
                <h2 className="text-3xl md:text-4xl text-gray-600 font-body mb-6">
                  Looking Ahead
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                  <p>
                    As APN continues to grow, its vision remains focused on
                    expanding access to quality education, leadership
                    development, mentorship, and capacity-building across
                    Cameroon and internationally.
                  </p>
                  <p className="text-blue-300">
                    Through innovative learning experiences, strategic
                    partnerships, digital learning solutions, and
                    transformational leadership programs, APN is building a
                    network of purpose-driven individuals and institutions
                    committed to excellence and meaningful impact.
                  </p>
                  <p className="mt-5">
                    The journey continues with a simple but powerful vision: to
                    awaken purpose, equip leaders, strengthen institutions, and
                    inspire transformational impact across every sphere of
                    society.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-2xl text-gray-700 font-body mb-6">
                Join the Journey
              </h3>

              <div className="space-y-4">
                <p>
                  Whether you are seeking personal or professional growth,
                  leadership development, educational opportunities, or
                  organizational training, APN invites you to become part of a
                  growing community committed to learning, leadership, and
                  lasting impact.
                </p>
                {[
                  "Learn more about Awaken Purpose Network",
                  "Explore our books, courses, and educational resources.",
                  "Partner with APN or invite us to train your team or organization.",
                ].map((action, index) => (
                  <div
                    key={index}
                    className="flex items-center group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-300 flex items-center justify-center mr-3 group-hover:bg-blue-300 group-hover:text-white transition-all duration-300"></div>
                    <span className=" text-gray-700 font-lato group-hover:text-blue-300 transition-colors duration-300">
                      {action}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <p className=" text-gray-700 font-lora">
                  Together, we can awaken purpose, develop leaders, strengthen
                  institutions, and create transformational impact for
                  generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
