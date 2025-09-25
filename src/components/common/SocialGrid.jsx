import React from "react";

export default function SocialGrid({
  subtitle = "Ganecapitalfx NEWSROOM",
  title = "Fresh off the press",
  description = "Follow us on our social media for our latest news, events and new product releases.",
  socials = [],
  bgColor = "bg-gray-50",
  cardBg = "bg-white",
}) {
  return (
    <section className={`${bgColor} py-12 px-4`}>
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="text-sm font-semibold text-teal-600 uppercase">
          {subtitle}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

      {/* Social Cards */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardBg} rounded-xl shadow-sm flex flex-col items-center justify-center p-10 hover:shadow-md transition`}
          >
            {/* Icon */}
            <div className="text-4xl mb-3 text-black">{social.icon}</div>

            {/* Name */}
            <span className="text-blue-600 font-medium">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
