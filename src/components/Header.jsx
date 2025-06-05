import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-yellow-700">
              Dearn Works
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
              <Link to="/" className="hover:text-yellow-600">
                Home
              </Link>
              <Link to="/services" className="hover:text-yellow-600">
                Services
              </Link>
              <Link to="/projects" className="hover:text-yellow-600">
                Projects
              </Link>
              <Link to="/about" className="hover:text-yellow-600">
                About
              </Link>
              <Link to="/contact" className="hover:text-yellow-600">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-yellow-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
            <Link
              to="/home"
              className="block text-gray-700 hover:text-yellow-600"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 hover:text-yellow-600"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="block text-gray-700 hover:text-yellow-600"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-yellow-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-yellow-600"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block bg-yellow-600 text-white text-center py-2 rounded hover:bg-yellow-700"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
