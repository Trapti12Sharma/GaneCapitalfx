// ReusableCard.jsx
import React from "react";

export default function ReusableCard({
  title,
  description,
  image,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="bg-white dark:bg-[#0b0b0c] rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg w-full max-w-sm mx-auto">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-20 h-20 object-contain mb-4"
        />
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {description}
      </p>

      {/* Button (optional) */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
