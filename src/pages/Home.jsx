import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-yellow-700 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Building the Future with Dearn Works
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your trusted partner in construction, renovation, and project
          management.
        </p>
        <Link
          to="/quote"
          className="bg-white text-yellow-700 px-6 py-3 rounded font-semibold hover:bg-yellow-100 transition"
        >
          Get a Quote
        </Link>
      </section>

      {/* About / Why Choose Us */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Dearn Works?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt="Experience"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
            <p>
              We bring unmatched expertise to every construction and renovation
              project.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt="Quality"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Top Quality Materials
            </h3>
            <p>
              We use premium-grade materials to ensure durability and finish.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt="Teamwork"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Skilled Team</h3>
            <p>
              Our professional team is committed to delivering excellence on
              every site.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Work Speaks Volumes
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded shadow p-4">
              <img
                src={`https://via.placeholder.com/400x250?text=Project+${i}`}
                alt={`Project ${i}`}
                className="rounded mb-4"
              />
              <h3 className="text-xl font-semibold">Project Title {i}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Brief description of the project, location, and results.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded">
            <h3 className="text-xl font-semibold mb-2">
              Residential Construction
            </h3>
            <p>Building dream homes with care and precision.</p>
          </div>
          <div className="p-6 border rounded">
            <h3 className="text-xl font-semibold mb-2">Commercial Projects</h3>
            <p>
              Efficient, large-scale construction for businesses and
              institutions.
            </p>
          </div>
          <div className="p-6 border rounded">
            <h3 className="text-xl font-semibold mb-2">
              Renovation & Remodeling
            </h3>
            <p>Modernizing and restoring spaces with style and structure.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-yellow-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded shadow">
            <p className="italic mb-2">
              "Dearn Works delivered our home ahead of schedule and beyond
              expectations!"
            </p>
            <p className="font-semibold">— Jane M., Homa Bay</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="italic mb-2">
              "Professional, skilled, and honest. Highly recommend their
              services."
            </p>
            <p className="font-semibold">— Peter K., Kisumu</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-700 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
        <p className="text-lg mb-6">
          Let’s make your vision a reality — Get in touch for a free
          consultation.
        </p>
        <Link
          to="/quote"
          className="bg-white text-yellow-700 px-6 py-3 rounded font-semibold hover:bg-yellow-100 transition"
        >
          Request a Quote
        </Link>
      </section>
    </div>
  );
};

export default Home;
