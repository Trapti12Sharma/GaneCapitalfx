import React from "react";
import { Link } from "react-router-dom";

export default function ContentSection({
  subtitle,
  title,
  description,
  bgColor = "#ffffff",
  textColor = "#111827", // Tailwind's gray-900
  subtitleColor = "#022e37", // Tailwind's teal-500
  image = null,
  link = null,
  linkText = null,
}) {
  return (
    <section className="py-12" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          {subtitle && (
            <p
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </p>
          )}
          {title && (
            <h2
              className="mt-2 text-2xl md:text-3xl font-bold"
              style={{ color: textColor }}
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
          {link && (
            <Link
              to={link}
              className="mt-3 inline-block text-teal-600 hover:underline text-sm md:text-base"
            >
              {linkText || "Learn more"}
            </Link>
          )}
        </div>

        {/* Right Image (optional) */}
        {image && (
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={image}
              alt={title}
              className="max-w-sm w-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
