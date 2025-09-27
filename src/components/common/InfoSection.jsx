import React from "react";

export default function InfoSection({
  subtitle = "ONLINE TRADING PRODUCTS",
  title = "Hundreds of reasons to trade, now let’s find yours",
  description = "Explore worldwide financial opportunities without switching platforms - we’ve got hundreds of CFDs for you to trade on.",
  linkText = "All trading products",
  linkUrl = "#",
  imgSrc = "https://via.placeholder.com/500x300",
  bgColor = "bg-[#022e37]",
  textColor = "text-gray-800",
}) {
  return (
    <section className={`${bgColor} py-10 px-4`}>
      <div
        className={`max-w-7xl mx-auto rounded-2xl shadow-md overflow-hidden grid md:grid-cols-2 items-center gap-8 p-6 ${bgColor}`}
      >
        {/* Left Content */}
        <div className="space-y-4">
          <p className="text-sm font-semibold text-[#b88f51] uppercase">
            {subtitle}
          </p>
          <h2
            className={`text-2xl md:text-3xl font-bold leading-snug ${textColor}`}
          >
            {title}
          </h2>
          <p className="text-[#022e37]">{description}</p>
          <a
            href={linkUrl}
            className="text-[#b88f51] font-semibold hover:underline inline-block"
          >
            {linkText}
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src={imgSrc}
            alt="info"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
