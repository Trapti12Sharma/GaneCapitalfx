import React from "react";
import logo from "../../assets/GaneCapital-logo.png";

export default function Logo() {
  return (
    <a href="/" className="flex items-center">
      <img src={logo} alt="GaneCapitalfx" className="h-25 w-auto" />
    </a>
  );
}
