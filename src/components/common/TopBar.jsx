import React from "react";

export default function TopBar() {
  return (
    <div className="bg-[#111111] text-gray-300 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          Online Forex/CFDs are complex instruments and come with a high risk of
          losing money rapidly due to leverage.{" "}
          <span className="font-semibold">
            86.09% of retail investor accounts lose money.
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span>Sign in</span>
          <span>|</span>
          <span>Support</span>
        </div>
      </div>
    </div>
  );
}
