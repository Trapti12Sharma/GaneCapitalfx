import React from "react";
import Logo from "./Logo";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0c] text-gray-300 text-sm">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-6 gap-8">
        {/* Logo + Branding */}
        <div className="col-span-2">
          <Logo />
          <p className="mt-3 text-gray-400">Powered by EGM Securities</p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-3">Products</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Forex
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Indices
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Commodities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shares
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                ETFs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                All products
              </a>
            </li>
          </ul>
        </div>

        {/* Platforms */}
        <div>
          <h4 className="font-semibold mb-3">Platforms</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                MetaTrader 4
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                MetaTrader 5
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Equiti Trader App
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                All platforms
              </a>
            </li>
          </ul>
        </div>

        {/* Accounts */}
        <div>
          <h4 className="font-semibold mb-3">Accounts</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Copy trading
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Demo
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                All accounts
              </a>
            </li>
          </ul>
        </div>

        {/* Partnerships */}
        <div>
          <h4 className="font-semibold mb-3">Partnerships</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Partner with us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Refer a friend
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-3">About GaneCapitalfx</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Media releases
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li>📞 Phone (Toll-Free Kenya)</li>
            <li>💬 WhatsApp: +254 7XX XXX XXX</li>
            <li>📞 Phone (International)</li>
            <li>✉️ Email</li>
            <li>📍 The RiverFront, Nairobi</li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Region + Language */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center py-6 border-t border-gray-800">
        <div className="flex items-center gap-2 text-gray-400">
          🌍 Region & Language:{" "}
          <button className="hover:text-white">Change country</button>
        </div>
        <div className="flex gap-4 text-gray-400 mt-3 sm:mt-0">
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Legal + Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-800 text-xs text-gray-500 space-y-4">
        <p>
          *Low spreads and zero commission depends on the product and account
          type. Margined FX and contracts for difference are complex leveraged
          products which carry a high level of risk and can result in losses
          that exceed your initial investment. We recommend you seek
          professional advice before trading.
        </p>
        <p>
          EGM Securities Limited is a company incorporated with limited
          liability, under the laws of Republic of Kenya, under company number
          PVT-AAAFFF7. EGM Securities Limited is licensed and regulated by the
          Capital Markets Authority of the Republic of Kenya under license
          number 107. We do not provide investment advice or management
          services.
        </p>
        <p>
          Any analysis, opinion, commentary or research-based material on our
          website is for information and educational purposes only and is not,
          under any circumstances, intended to be an offer, recommendation or
          solicitation to buy or sell. Trading leveraged products carries high
          risk.
        </p>
        <p>© {new Date().getFullYear()} GaneCapitalfx. All rights reserved.</p>
      </div>
    </footer>
  );
}
