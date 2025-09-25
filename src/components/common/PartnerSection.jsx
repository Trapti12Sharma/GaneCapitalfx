import React from "react";
import { Link } from "react-router-dom";

export default function PartnerSection({
  subtitle,
  title,
  description,
  buttonText,
  buttonLink,
  image,
  bgColor = "#ffffff",
}) {
  return (
    <section className="py-12" style={{ backgroundColor: bgColor }}>
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
            {subtitle}
          </p>
        )}

        {/* Title */}
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}

        {/* Button */}
        {buttonText && (
          <div className="mt-6">
            <Link
              to={buttonLink}
              className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-md shadow hover:bg-teal-600 transition"
            >
              {buttonText}
            </Link>
          </div>
        )}

        {/* Image */}
        {image && (
          <div className="mt-10 flex justify-center">
            <img
              src={image}
              alt="Partner section illustration"
              className="w-full max-w-4xl rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </section>
  );
}
