import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white py-20" id="aboutUs">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-6 mx-auto">
            Our story
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why we’re building MyCoreRise
          </h2>
          <div className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed pb-16">
            We know what it feels like to sit for hours—classes, assignments,
            exams, work—and still feel guilty for “not doing enough” for your
            health. MyCoreRise started as a way to make movement gentler, more
            realistic and less intimidating for people like us.
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col md:flex-row items-start gap-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Divyank Surum
                </h3>
                <p className="text-sm font-medium text-purple-700 mb-2">
                  Co‑founder · Content & Community
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Leads the storytelling, community and content—making sure the
                  workouts and messages actually speak to students and desk
                  workers in real life.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col md:flex-row items-start gap-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Dishon John Siddapur
                </h3>
                <p className="text-sm font-medium text-purple-700 mb-2">
                  Co‑founder · Product & Tech
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Student developer building the app, flows and
                  experience—focused on keeping things simple, calm and
                  genuinely helpful for people who feel stuck starting.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 text-center max-w-3xl mx-auto pb-16">
            <motion.p
              className="text-sm md:text-base text-gray-600"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Our aim is to build something that helps people feel more
              grounded, resilient and consistent—one small step at a time.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
