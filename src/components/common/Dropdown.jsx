import React, { useState } from "react";

export default function Dropdown({ title, submenu }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-gray-800 hover:text-gray-900">
        {title}
        {submenu.length > 0 && (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {/* Dropdown menu */}
      {submenu.length > 0 && open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          {submenu.map((item, i) => (
            <a
              key={i}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
