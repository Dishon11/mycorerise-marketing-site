import React from "react";
import { faqs } from "../arraySet/faqs.js";
import { easeOut, motion } from "framer-motion";

export default function Faq() {
  return (
    <section className="bg-neutral-50 py-20" id="faq" s>
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-6 mx-auto">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Short answers to the most common questions before you join early
            access.
          </p>
        </div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {faqs.map((item) => (
            <div
              key={item.question}
              className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {item.question}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
