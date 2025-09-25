import React, { useRef } from "react";
import { Link } from "react-router-dom";

/**
 * Props:
 * - index (number) : index of this dropdown (from Navbar)
 * - title (string)
 * - submenu (array of {name, path})
 * - isOpen (boolean)
 * - setOpenDropdown (function) : setter from parent
 */
export default function Dropdown({
  index,
  title,
  submenu,
  isOpen,
  setOpenDropdown,
}) {
  const wrapperRef = useRef(null);

  // open on hover (desktop) - we DO NOT close on mouseleave so it stays open
  const handleMouseEnter = () => {
    setOpenDropdown(index);
  };

  // toggle on click (useful for touch devices)
  const handleClick = (e) => {
    e.preventDefault();
    setOpenDropdown(isOpen ? null : index);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      // no onMouseLeave here — keeps dropdown sticky until outside click or selection
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-1 px-3 py-2 text-gray-800 hover:text-gray-900 focus:outline-none"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="menu"
      >
        <span>{title}</span>
        {submenu.length > 0 && (
          <svg
            className={`w-4 h-4 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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

      {/* Render dropdown only when parent says it's open */}
      {submenu.length > 0 && isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
          {submenu.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setOpenDropdown(null)} // close on select
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
