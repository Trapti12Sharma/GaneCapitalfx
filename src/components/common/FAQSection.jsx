import React, { useState } from "react";

export default function FAQSection({
  subtitle,
  title,
  faqs,
  bgColor = "#ffffff",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        {subtitle && (
          <p className="text-sm font-semibold text-[#022e37] uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>

        {/* FAQ Items */}
        <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-900 font-medium">
                  {faq.question}
                </span>
                <span className="ml-2 text-gray-600">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
