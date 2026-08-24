import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full py-15 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Author Image with Creative Frame */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-300 rounded-full opacity-40"></div>

            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="w-80 h-96 mx-auto lg:mx-0 bg-gradient-to-br from-blue-300 to-blue-400 rounded-3xl p-1 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative w-full h-full bg-gray-200 rounded-3xl overflow-hidden">
                  {/* Author image with zoom animation */}
                  <Image
                    src="/images/About_Esene_HOME_PAGE.png"
                    alt="APN Community"
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Floating Quote */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs z-20">
                <p className="text-sm text-gray-600 font-body italic">
                  Teaching and developing purpose-driven leaders
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="relative">
            {/* Section Subtitle */}
            <div className="mb-4">
              <span className="font-body font-bold text-gray-700 tracking-widest text-md uppercase">
                About Esene
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-body text-gray-600 mb-8 leading-tight">
              A Voice for <br />
              <span className="text-blue-400">
                Purpose, Leadership, and Transformational Impact
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-body leading-relaxed">
                <span className="font-semibold">M. Esene Ekole</span> is the
                Founder of Awaken Purpose Network (APN), an education and
                leadership development platform dedicated to helping individuals
                and institutions discover purpose, develop capacity, and create
                meaningful impact.
                <span className="text-blue-400 font-medium">
                  {" "}
                  {`Loves writing books based on his vast experience`}
                </span>
              </p>

              <p className="text-lg text-gray-600 font-body leading-relaxed">
                With experience in{" "}
                <span className="font-semibold">
                  ministry, education, and leadership training across cultures
                </span>
                , he brings together faith, learning, and practical leadership
                development to equip people for personal and global
                transformation. Through his teachings, books, and speaking, he
                continues to raise purpose-driven leaders equipped for clarity,
                excellence, and influence.
                <span className="text-blue-400 font-medium">
                  {" "}
                  God loves you; let him.
                </span>
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-10">
              <Link
                href="/about/founder"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-400 text-white px-12 py-4 rounded-full font-body text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer w-fit mx-auto block text-center"
              >
                <span className="relative z-10">
                  Learn More About The Author
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
