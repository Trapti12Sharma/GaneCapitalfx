import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";
import { navLinks } from "../common/navLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Links */}
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) =>
                link.submenu && link.submenu.length > 0 ? (
                  <Dropdown
                    key={i}
                    title={link.title}
                    submenu={link.submenu}
                    isOpen={openDropdown === i}
                    setOpenDropdown={() =>
                      setOpenDropdown(openDropdown === i ? null : i)
                    }
                  />
                ) : (
                  <Link
                    key={i}
                    to={link.path}
                    className="px-3 py-2 text-gray-800 hover:text-gray-900"
                  >
                    {link.title}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button variant="outline">RISK-FREE DEMO</Button>
            </div>
            <Button variant="primary">START TRADING</Button>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md focus:outline-none"
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-1 px-2">
              {navLinks.map((link, i) => (
                <div key={i}>
                  {link.submenu && link.submenu.length > 0 ? (
                    <>
                      <p className="font-semibold text-gray-800 mt-2">
                        {link.title}
                      </p>
                      <div className="ml-4 flex flex-col">
                        {link.submenu.map((s, j) => (
                          <Link
                            key={j}
                            to={s.path}
                            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
                            onClick={() => setOpen(false)}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 px-3 pt-3">
                <Button variant="outline" fullWidth>
                  RISK-FREE DEMO
                </Button>
                <Button variant="primary" fullWidth>
                  START TRADING
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
