import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-white to-purple-50">
      {/* Header Section */}
      <header className="text-center py-20 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learn more about our journey, mission, and what drives us to provide
          the best products and services for our customers.
        </p>
      </header>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Founded in 2020, our company began with a vision to make technology
            accessible to everyone. With a commitment to innovation and
            excellence, we’ve grown into a trusted destination for high-quality
            tech gadgets and accessories. Our team is passionate about creating
            seamless shopping experiences and ensuring customer satisfaction.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
                <svg
                  className="w-8 h-8 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 010 15.292M9 4.354a4 4 0 000 15.292m6-15.292a4 4 0 010 15.292M3 12a9 9 0 0118 0"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                Constantly pushing the boundaries to bring the latest
                technology to you.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
                <svg
                  className="w-8 h-8 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m-3-6h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality
              </h3>
              <p className="text-gray-600">
                Delivering reliable and durable products that exceed
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Our team is made up of passionate professionals who share a common
            goal: to make your shopping experience exceptional. We’re here to
            help you every step of the way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-purple-200"></div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Alex Johnson
              </h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-purple-200"></div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Lisa Brown
              </h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-purple-200"></div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Mark Davis
              </h3>
              <p className="text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-lg mb-6">
            Become a part of our growing community and explore the world of
            technology with us.
          </p>
          <button className="bg-white text-purple-600 py-3 px-6 rounded-lg text-lg hover:bg-gray-200 transition duration-200">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
