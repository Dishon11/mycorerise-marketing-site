import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on click
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">
            MC
          </div>
          <span className="text-base md:text-lg font-semibold text-gray-900">
            MyCoreRise
          </span>
        </div>

        {/* Center links (desktop) */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-8 text-sm text-gray-600">
            <button className="hover:text-gray-900" onClick={() => scrollTo("features")}>
              Features
            </button>
            <button className="hover:text-gray-900" onClick={() => scrollTo("who-its-for")}>
              Who it’s for
            </button>
            <button className="hover:text-gray-900" onClick={() => scrollTo("how-it-works")}>
              How it works
            </button>
            <button className="hover:text-gray-900" onClick={() => scrollTo("faq")}>
              FAQs
            </button>
          </div>
        </nav>

        {/* Right CTA (desktop) */}
        <div className="hidden md:flex">
          <button
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold
                       text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
                       hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600
                       transform transition-transform transition-shadow duration-200
                       hover:-translate-y-0.5 hover:shadow-md"
            onClick={() => scrollTo("final-cta")}
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-sm font-medium text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm text-gray-700">
            <button onClick={() => scrollTo("features")} className="text-left hover:text-gray-900">
              Features
            </button>
            <button onClick={() => scrollTo("who-its-for")} className="text-left hover:text-gray-900">
              Who it’s for
            </button>
            <button onClick={() => scrollTo("how-it-works")} className="text-left hover:text-gray-900">
              How it works
            </button>
            <button onClick={() => scrollTo("faq")} className="text-left hover:text-gray-900">
              FAQs
            </button>
            <button
              onClick={() => scrollTo("final-cta")}
              className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold
                         text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
                         hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600"
            >
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
