import React from "react";
import { programs } from "../arraySet/program.js";
import Card from "./cards";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Program() {
  return (
    <section className="bg-white py-20" id="who-its-for" s>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-6 mx-auto">
            Who it's for
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Designed for real people with real schedules
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed pb-16">
            Whether you’re cramming for exams, glued to a desk, or restarting
            after a break, MyCoreRise meets you where you are.
          </p>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 ">
            {programs.map((item) => (
              <Card
                key={item.title}
                iconWrapperClass="bg-emerald-100 text-emerald-700"
                icon={
                  <Icon icon={item.icon} className="w-6 h-6 text-emerald-700" />
                }
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
