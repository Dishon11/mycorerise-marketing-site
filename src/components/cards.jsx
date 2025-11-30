import React from "react";

export default function Card({
  icon,
  title,
  description,
  iconWrapperClass = "",
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3 shadow-sm w-80 hover:shadow-md hover:scale-110 transition-transform transition-shadow duration-200 ease-linear ">
      <div
        className={
          "mx-auto h-10 w-10 flex items-center justify-center rounded-xl text-lg font-medium transform transition duration-200 hover:scale-105 hover:shadow-md " +
          iconWrapperClass
        }
      >
        {icon}
      </div>
      <div className="text-lg font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600 leading-relaxed">{description}</div>
    </div>
  );
}
