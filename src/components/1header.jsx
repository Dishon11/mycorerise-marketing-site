// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-100 bg-white backdrop-blur sticky top-0 bg-white backdrop-blur-3xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">
            MC
          </div>
          <span className="text-base md:text-lg font-semibold text-gray-900">
            MyCoreRise
          </span>
        </div>

        {/* Center links */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-8 text-sm text-gray-600">
            <button
              className="hover:text-gray-900"
              onClick={() =>
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Features
            </button>
            <button
              className="hover:text-gray-900"
              onClick={() =>
                document.getElementById("who-its-for")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Who it’s for
            </button>
            <button
              className="hover:text-gray-900"
              onClick={() =>
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              How it works
            </button>
            <button
              className="hover:text-gray-900"
              onClick={() =>
                document.getElementById("aboutUs")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About us
            </button>
            <button
              className="hover:text-gray-900"
              onClick={() =>
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              FAQs
            </button>
          </div>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex">
          <button
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold
                       bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
                       hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600
                       text-white transform transition-transform transition-shadow duration-200
                       hover:-translate-y-0.5 hover:shadow-md"
            onClick={() =>
              document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Early Access
          </button>
        </div>

        {/* Simple mobile placeholder */}
        <button className="md:hidden text-sm font-medium text-gray-700">
          Menu
        </button>
      </div>
    </header>
  );
}
