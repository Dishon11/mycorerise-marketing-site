import React from "react";
import Card from "./cards";
import { Icon } from "@iconify/react";
import { features } from "../arraySet/features.js";

export default function Features() {
  return (
    <section className="bg-neutral-50 py-20 " id="features"s>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-6">
            Features
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built to help you start—and keep going
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MyCoreRise keeps things simple: realistic plans, gentle reminders,
            and clear tracking so you can finally stay consistent without the
            overwhelm.
          </p>

          <div className="gap-8 flex flex-wrap justify-center lg:gap-12  sm:px-8 py-16 ">
            {features.map((item) => (
              <Card
                key={item.title}
                iconWrapperClass="bg-indigo-50 text-indigo-600"
                icon={
                  <Icon icon={item.icon} className="w-6 h-6 text-indigo-600" />
                }
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
