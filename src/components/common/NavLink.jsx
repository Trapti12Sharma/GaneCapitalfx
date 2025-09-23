import React from "react";

export default function NavLink({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 hover:text-primary rounded transition"
    >
      {children}
    </a>
  );
}
