import React from "react";
import { CheckCircle } from "lucide-react"; // Icon for list items

export default function ComparisonCards({ heading, description, cards }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Header */}
        {heading && (
          <h2 className="text-2xl md:text-3xl font-bold text-[#022e37]">
            {heading}
          </h2>
        )}
        {description && (
          <p className="mt-2 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            {description}
          </p>
        )}

        {/* Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between text-left"
            >
              {/* Title + Subtitle */}
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-[#022e37] text-sm font-medium mb-4">
                  {card.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {card.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <CheckCircle
                        size={18}
                        className="flex-shrink-0 mt-0.5 text-[#b88f51]"
                      />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              {card.buttonText && (
                <a
                  href={card.buttonLink}
                  className="mt-auto inline-block text-center px-5 py-3 rounded-md font-semibold shadow-sm transition-colors bg-[#022e37] text-[#b88f51] "
                >
                  {card.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
