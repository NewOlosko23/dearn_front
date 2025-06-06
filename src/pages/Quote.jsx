import React from "react";

const Quote = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Request a Project Quote
        </h2>
        <p className="text-gray-600 mb-8">
          Dearn Works offers professional construction and interior finishing
          services. Please provide your project details below and our team will
          get back to you with a customized quote within 24–48 hours.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g., 0712 345 678"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service Needed
            </label>
            <select className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Select a service</option>
              <option>Plastering & Wall Finishing</option>
              <option>Moulding Design & Installation</option>
              <option>Interior Tiling</option>
              <option>Painting & Surface Finishing</option>
              <option>Ceiling Design & Finishing</option>
              <option>Custom Interior Projects</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Estimated Budget (KES)
              </label>
              <input
                type="number"
                placeholder="e.g., 50,000"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Start Date
              </label>
              <input
                type="date"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Project Location
            </label>
            <input
              type="text"
              placeholder="e.g., Nairobi, Kisumu, Mombasa, Machakos, Kitui..."
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Project Description
            </label>
            <textarea
              rows="5"
              placeholder="Describe the site condition, size of the area, expected designs, or any special requests..."
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Send Quote Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
