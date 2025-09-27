import React from "react";
import { Link } from "react-router-dom";

export default function FeatureSection({ subtitle, title, cards }) {
  return (
    <section className="bg-[#f9fafb] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        {subtitle && (
          <p className="text-sm uppercase tracking-wide text-[#022e37] font-medium mb-2">
            {subtitle}
          </p>
        )}
        {title && (
          <h2 className="text-3xl font-bold text-[#022e37]">{title}</h2>
        )}
      </div>

      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 text-left flex flex-col justify-between"
          >
            {/* Icon */}
            {card.icon && (
              <div className="text-4xl mb-4 text-gray-800">{card.icon}</div>
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#022e37] mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">{card.description}</p>

            {/* Link */}
            {card.linkText && (
              <Link
                to={card.linkUrl || "#"}
                className="text-[#022e37] font-medium hover:underline mt-auto"
              >
                {card.linkText}
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
