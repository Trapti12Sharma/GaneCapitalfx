import React from "react";

export default function CardGridSection({
  heading = "There's more to explore",
  cards = [],
  bgColor = "bg-gray-50",
  textColor = "text-gray-900",
}) {
  return (
    <section className={`${bgColor} py-12 px-4`}>
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className={`text-2xl md:text-3xl font-bold ${textColor}`}>
          {heading}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start"
          >
            {/* Image */}
            {card.imgSrc && (
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 flex-grow">{card.description}</p>

            {/* Link */}
            {card.linkText && (
              <a
                href={card.linkUrl || "#"}
                className="text-[#022e37] font-medium hover:underline"
              >
                {card.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
