import React from "react";

export default function CtaBanner({
  subtitle = "TRADING SUPPORT",
  title = "Get help from experts in our East African offices",
  primaryBtnText = "START TRADING",
  primaryBtnUrl = "#",
  secondaryBtnText = "TRY FOR FREE",
  secondaryBtnUrl = "#",
  bgColor = "bg-[#022e37]",
  textColor = "text-white",
  subtitleColor = "text-[#022e37]",
  primaryBtnColor = "bg-[#b88f51] text-[#022e37] hover:opacity-90",
  secondaryBtnColor = "border border-[#7fd6c6] text-white ",
}) {
  return (
    <section className="py-10 px-4">
      <div
        className={`max-w-5xl mx-auto rounded-2xl shadow-md p-8 text-center ${bgColor}`}
      >
        {/* Subtitle */}
        <p className={`text-sm font-semibold mb-3 uppercase text-[#b88f51]`}>
          {subtitle}
        </p>

        {/* Title */}
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${textColor}`}>
          {title}
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={primaryBtnUrl}
            className={`px-6 py-3 rounded-md font-semibold transition ${primaryBtnColor}`}
          >
            {primaryBtnText}
          </a>
          <a
            href={secondaryBtnUrl}
            className={`px-6 py-3 rounded-md font-semibold transition ${secondaryBtnColor}`}
          >
            {secondaryBtnText}
          </a>
        </div>
      </div>
    </section>
  );
}
