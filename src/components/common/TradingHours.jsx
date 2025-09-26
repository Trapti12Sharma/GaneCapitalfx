import React from "react";
import { Link } from "react-router-dom";

export default function TradingHours({
  subtitle,
  title,
  description,
  hours,
  notes,
  bgColor = "#ffffff",
}) {
  return (
    <section className="py-12" style={{ backgroundColor: bgColor }}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        {subtitle && (
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            {description}
          </p>
        )}

        {/* Hours Card */}
        <div className="mt-6 bg-white shadow-sm rounded-lg p-6 space-y-3">
          {hours.map((item, i) => (
            <p key={i} className="text-gray-800 text-sm md:text-base">
              <span className="font-semibold">{item.day}:</span> {item.time}
            </p>
          ))}

          {/* Notes */}
          {notes && notes.length > 0 && (
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              {notes.map((note, i) =>
                note.link ? (
                  <p key={i}>
                    {note.text}{" "}
                    <Link
                      to={note.link}
                      className="text-teal-600 hover:underline"
                    >
                      {note.linkText}
                    </Link>
                  </p>
                ) : (
                  <p key={i}>{note.text}</p>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
