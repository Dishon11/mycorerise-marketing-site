import React from "react";

export default function Footer() {
    const currentYear= new Date().getFullYear();
    // const currentYear=2099;
  return (
    <section className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to start small and stay consistent?
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Join the early access list and be the first to know when MyCoreRise is live.
        </p>

        
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 text-sm md:text-base
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm md:text-base font-semibold
                       bg-indigo-600 text-white hover:bg-indigo-700
                       transform transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Get Early Access
          </button>
        </form>

        <p className="mt-3 text-xs md:text-sm text-gray-500">
          No spam. Just launch updates and early-access invites.
        </p>

        
        
        <div className="mt-10 pt-6 border-t border-gray-100 text-xs text-gray-500 space-y-2">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover:text-gray-700">About</button>
            <button className="hover:text-gray-700">Contact</button>
            <button className="hover:text-gray-700">Privacy Policy</button>
            <button className="hover:text-gray-700">Terms of Service</button>
          </div>
          <p>© {currentYear} DSsquare. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
