import React from "react";

export default function AppDownloadSection({
  subtitle,
  title,
  bgColor = "#1f1f1f", // dark background
  textColor = "#ffffff",
  subtitleColor = "#b88f51", // teal
  buttons = [], // array of { img, alt, link }
}) {
  return (
    <section className="py-10" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </p>
        )}

        {/* Title */}
        {title && (
          <h2
            className="mt-2 text-2xl md:text-3xl font-bold"
            style={{ color: textColor }}
          >
            {title}
          </h2>
        )}

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          {buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-105"
            >
              <img
                src={btn.img}
                alt={btn.alt}
                className="h-12 md:h-14 w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
