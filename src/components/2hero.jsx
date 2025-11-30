// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="bg-fuchsia-50" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pb-24 lg:pb-28 flex flex-col md:flex-row items-center gap-12">
        {/* Left: text */}
        <div className="w-full md:w-1/2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-200 text-[#A500E0] text-xs md:text-sm font-medium mb-4">
            <span className="h-5 w-5 rounded-full border bg-amber-50 text-purple-500 flex items-center justify-center text-[10px]">
              🚀
            </span>
            <span>Launching soon · Join early access</span>
          </div>

          {/* Main heading */}
          <h1 className="font-domine text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-4">
            <span className="text-[#BB00FF]">Stronger</span> body.
            <br className="hidden sm:block" />
            Calm <span className="text-[#BB00FF]"> mind.</span>
            <br className="hidden sm:block" />
            <span className="text-[#BB00FF]">Better </span>everyday.
          </h1>

          {/* Subheading */}
          <p className="font-domine text-base sm:text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-6">
            Short workouts, simple tracking and gentle nudges to help you stay active,
            balanced and consistent—even on your busiest study or work days.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-6 text-xs sm:text-sm">
            <span className="px-3 py-1 rounded-full bg-purple-200 text-[#A500E0]">
              Home & gym‑friendly plans
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-200 text-[#A500E0]">
              Sedentary break exercises
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-200 text-[#A500E0]">
              Progress & streak tracking
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {/* Gradient CTA */}
            <button
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm md:text-base font-semibold
                         text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
                         hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600
                         transform transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md"
              onClick={() =>
                document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Early Access
            </button>

            <button
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm md:text-base font-semibold
                         bg-white text-gray-800 border border-gray-300 hover:bg-gray-50
                         transform transition-transform duration-200 hover:-translate-y-0.5"
              onClick={() =>
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn more
            </button>
          </div>

          <p className="text-xs md:text-sm text-gray-500">
            No spam. We’ll only email you about the launch and early access.
          </p>
        </div>

        {/* Right: visual (unchanged) */}
        <div className="w-full md:w-1/2 pl-20 ">
          <div className=" bg-white rounded-3xl shadow-lg border border-gray-100  sm:p-5 ">
            
            <img src="/pexels-ivan-s-6648551.jpg" alt="this is yoga" className="w-full h-140 rounded-2xl object-cover" />
            
          </div>
        </div>
      </div>
    </section>
  );
}
