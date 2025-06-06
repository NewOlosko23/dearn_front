import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto mt-7 p-8 md:p-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Get In Touch
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Whether you have questions about our services, want a free consultation,
        or need assistance with your project, we’re here to help. Reach out to
        us using the form below or via the contact details.
      </p>

      <div className="md:flex md:space-x-12">
        {/* Contact Details */}
        <div className="md:w-1/3 mb-10 md:mb-0 space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-primary w-6 h-6" />
            <span className="text-gray-700 font-medium">+254 702 778 024</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-primary w-6 h-6" />
            <span className="text-gray-700 font-medium">
              dkyalo076@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-primary w-6 h-6" />
            <span className="text-gray-700 font-medium">Nairobi, Kenya</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="md:w-2/3 bg-white p-8 rounded-lg shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
