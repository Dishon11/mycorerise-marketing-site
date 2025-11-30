import React from "react";
import Card from "./cards";
import { Icon } from "@iconify/react";
import { working } from "../arraySet/working.js";

export default function Working() {
  return (
    <section className="bg-neutral-50 py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-6 mx-auto">
            How it works
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple steps to get started
          </h2>
          <div className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed pb-16">
            Getting into movement shouldn't be complicated. MyCoreRise makes it
            easy to join, choose a gentle starting point, and stay
            consistent—without pressure or confusion.
          </div>
          <div className="flex justify-center flex-wrap gap-8 lg:gap-12 pb-16">
            {working.map((item) => (
              <Card
                key={item.title}
                step={item.step}
                iconWrapperClass="bg-sky-100 text-sky-700"
                icon={
                  <Icon
                    icon={item.icon}
                    
                  />
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
