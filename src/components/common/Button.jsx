import React from "react";

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  ...props
}) {
  const base =
    "px-4 py-2 rounded-md font-semibold transition text-center border";
  const variants = {
    primary: "bg-[#7fd6c6] border-[#7fd6c6] text-black hover:opacity-90",
    outline: "bg-transparent border-gray-400 text-black hover:bg-gray-50",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
