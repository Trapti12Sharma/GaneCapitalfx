import React from "react";

export default function AwardsSection({ subtitle, title, awards }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <p className="text-sm font-semibold text-[#022e37] uppercase tracking-wide">
          {subtitle}
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>

        {/* Awards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {awards.map((award, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div
                className={`flex items-center justify-center w-28 h-28 rounded-full mb-4`}
                style={{ backgroundColor: award.bgColor || "#e5f6f6" }}
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">
                {award.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
