import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dropdown({ title, submenu }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Button with arrow animation */}
      <button
        className="flex items-center gap-1 px-3 py-2 text-gray-800 hover:text-gray-900 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {title}
        {submenu.length > 0 && (
          <svg
            className={`w-4 h-4 transform transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
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
            <Link
              key={i}
              to={item.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)} // closes only when clicked
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
