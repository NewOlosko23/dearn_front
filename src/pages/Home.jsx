import { Link } from "react-router-dom";
import Hero from "../assets/hero.jpg";
import { FaTools, FaDraftingCompass, FaPaintBrush } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const testimonials = [
    {
      quote: `"Dearn Works delivered our home ahead of schedule and beyond expectations!"`,
      author: "Jane M., Homa Bay",
    },
    {
      quote: `"Professional, skilled, and honest. Highly recommend their services."`,
      author: "Peter K., Kisumu",
    },
    {
      quote: `"Their attention to detail in plastering and interior finishes was unmatched."`,
      author: "Samuel N., Nairobi",
    },
    {
      quote: `"Reliable team, excellent communication, and stunning final results."`,
      author: "Grace W., Mombasa",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full text-white h-[60vh] md:h-[75vh]">
        <img
          src={Hero}
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Building the Future with Dearn Works
          </h1>
          <p className="text-md md:text-xl mb-6 max-w-2xl">
            Your trusted partner in construction, renovation, and project
            management.
          </p>
          <Link
            to="/quote"
            className="bg-white text-yellow-700 px-6 py-3 rounded font-semibold hover:bg-yellow-100 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose Dearn Works?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Craftsmanship */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FaTools className="text-yellow-600 w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Superior Craftsmanship
            </h3>
            <p className="text-gray-600">
              We pay close attention to every stroke, cut, and curve —
              delivering perfectly finished surfaces, clean mouldings, and
              seamless tile work.
            </p>
          </div>

          {/* Design-Driven Approach */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FaDraftingCompass className="text-yellow-600 w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Detail-Oriented Design
            </h3>
            <p className="text-gray-600">
              Our moulding and interior finish designs are thoughtfully planned
              and expertly executed to reflect style, elegance, and function.
            </p>
          </div>

          {/* Finish Quality */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FaPaintBrush className="text-yellow-600 w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Flawless Finishes
            </h3>
            <p className="text-gray-600">
              From smooth plaster to vibrant paint and precise tiling, we ensure
              your interior feels complete, clean, and built to impress.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat pointer-events-none"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 z-10 relative">
          Our Work Speaks Volumes
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={`https://via.placeholder.com/400x250?text=Project+${i}`}
                alt={`Project ${i}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  Elegant Living Room {i}
                </h3>
                <p className="text-sm text-gray-600">
                  A premium interior finish with plaster, paint, and custom
                  mouldings in Homa Bay.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1: Residential Construction */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <div className="mb-4">
              {/* Replace with real image later */}
              <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Residential Construction
            </h3>
            <p className="text-gray-600">
              We build homes that blend quality, beauty, and comfort — brick by
              brick.
            </p>
          </div>

          {/* Service 2: Commercial Projects */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <div className="mb-4">
              <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Commercial Projects
            </h3>
            <p className="text-gray-600">
              From offices to retail spaces, we deliver functional, modern
              commercial builds on time and within budget.
            </p>
          </div>

          {/* Service 3: Renovation & Remodeling */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <div className="mb-4">
              <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Renovation & Remodeling
            </h3>
            <p className="text-gray-600">
              Give your spaces new life with our seamless upgrades and stylish
              transformations.
            </p>
          </div>

          {/* Service 4: Plaster & Finishing */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <div className="mb-4">
              <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Plaster & Finishing
            </h3>
            <p className="text-gray-600">
              Expert plastering and smooth finishes that prepare your walls for
              painting or tiling.
            </p>
          </div>

          {/* Service 5: Tile & Flooring */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <div className="mb-4">
              <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Tile & Flooring
            </h3>
            <p className="text-gray-600">
              Stylish and durable tile installations and flooring solutions
              tailored for your needs.
            </p>
          </div>

          {/* Service 6: Interior Design */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <div className="mb-4">
              <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Interior Design
            </h3>
            <p className="text-gray-600">
              Creative and functional interior designs to make every corner
              shine.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-yellow-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map(({ quote, author }, index) => (
              <div
                key={index}
                className="px-6 py-10 text-center bg-yellow-500 rounded-2xl shadow-lg"
              >
                <p className="text-lg italic mb-4">“{quote}”</p>
                <p className="font-semibold">- {author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Your Dream Space?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Contact Dearn Works today and let's start making your vision a
          reality.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
