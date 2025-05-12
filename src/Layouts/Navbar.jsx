import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const telegramlink = "https://t.me/yardpm2024";
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Podcast", to: "/podcast" },
    { name: "Team", to: "/team" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav className="bg-blue shadow-md sticky top-0 z-50 font-kumbh-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold text-white hover:text-orange"
              >
                YARDP
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-lg hover:text-orange font-medium ${
                      isActive
                        ? "text-xl text-orange underline underline-offset-4"
                        : "text-white text-xl"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Join Us */}
            <div className="hidden md:block">
              <a
                href={telegramlink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange text-xl text-blue font-bold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-yellow-500 transition"
              >
                Join Us
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center text-white">
              <button onClick={() => setIsOpen(true)}>
                <FaBars size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay with Sidebar */}
      <div
        className={`fixed inset-0 z-50 flex transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Blur Overlay */}
        <div
          className={`w-[30%] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Slide-in Menu */}
        <div
          className={`w-[70%] bg-white/90 backdrop-blur-sm shadow-xl p-6 transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue">Menu</h2>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-blue underline" : "text-gray-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href={telegramlink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
            >
              Join Us
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
