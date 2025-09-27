import React from "react";
import { CheckCircle } from "lucide-react"; // lightweight icon

export default function FeatureListCard({
  subtitle,
  title,
  features,
  buttonText,
  buttonLink,
  bgColor = "#ffffff",
  textColor = "#111827",
  accentColor = "[#b88f51]", // fixed color
}) {
  return (
    <div
      className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 md:p-8 flex flex-col justify-between"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Heading */}
      <div>
        {subtitle && (
          <p className="text-sm font-medium" style={{ color: accentColor }}>
            {subtitle}
          </p>
        )}
        {title && <h3 className="text-xl font-bold mt-1 mb-4">{title}</h3>}
        <hr className="border-gray-200 mb-4" />

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <CheckCircle
                size={18}
                className="flex-shrink-0 mt-0.5"
                style={{ color: accentColor }} // ✅ now #022e37
              />
              <span className="text-sm md:text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      {buttonText && (
        <a
          href={buttonLink}
          className="mt-6 inline-block text-center px-5 py-3 rounded-md font-semibold shadow-sm transition-colors"
          style={{ backgroundColor: accentColor, color: "#fff" }} // ✅ now #022e37
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}
