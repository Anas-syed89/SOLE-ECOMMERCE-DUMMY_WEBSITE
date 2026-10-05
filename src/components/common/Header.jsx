import React, { useState } from "react";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Logo (Left Side) */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="./logo.jpg"
            className="h-8 w-8 transition-transform group-hover:scale-105"
            alt="Flowbite Logo"
          />
          <div className="text-2xl font-black tracking-widest text-white uppercase">
            SOLE<span className="text-indigo-500">.</span>
          </div>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 p-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-700 transition-colors"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            /* X icon */
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <div
          id="navbar-menu"
          className={`absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 md:static md:w-auto md:border-0 md:bg-transparent transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          } md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-8 p-4 md:p-0 font-medium">
            {/* Home */}
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to={"/"}
                className="block py-2 px-3 text-indigo-400 md:p-0 font-semibold"
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to={"/about"}
                className="block py-2 px-3 md:p-0 text-slate-300 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
            </li>

            {/* Products */}
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to={"/products"}
                className="block py-2 px-3 md:p-0 text-slate-300 hover:text-blue-600 transition-colors"
              >
                Products
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to={"/contact"}
                className="block py-2 px-3 md:p-0 text-slate-300 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </li>

            {/* Shopping Cart Button */}
            <li className="pt-2 md:pt-0">
              <Link
                onClick={() => setIsOpen(false)}
                to={"/addToCart/cart"}
                className="relative flex items-center justify-center h-10 w-10 bg-black rounded-full text-slate-300 hover:text-blue-600 transition-colors shadow-lg"
              >
                <ShoppingCart size={20} strokeWidth={2} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
