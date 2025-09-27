import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

/**
 * Simple placeholder Logo — replace with your real <Logo /> or import.
 */
function Logo({ className = "h-10 w-10" }) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-md bg-[#022e37] text-white font-bold`}
      aria-hidden
    >
      GC
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0c] text-gray-300">
      {/* wrapper ensures footer doesn't overlap previous sections */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-12">
        {/* --- Top Banner (inside footer) --- */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
          <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">
            Global multi-asset broker
          </p>

          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Start trading online with GaneCapitalfx
          </h3>

          <div className="flex justify-center gap-3 mb-4 flex-wrap">
            <button className="bg-[#022e37] text-[#b88f51] font-semibold px-4 py-2 rounded transition">
              START TRADING
            </button>
            <button className="border border-[#022e37] text-[#b88f51]  font-semibold px-4 py-2 rounded transition">
              TRY FOR FREE
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            {/* replace src with real images */}
            <img src="/visa.svg" alt="Visa" className="h-5" />
            <img src="/mastercard.svg" alt="MasterCard" className="h-5" />
            <img src="/neteller.svg" alt="Neteller" className="h-5" />
            {/* <img src="/skrill.png" alt="Skrill" className="h-5" />
            <img src="/mpesa.png" alt="M-Pesa" className="h-5" /> */}
            <img src="/airtel.svg" alt="Airtel Money" className="h-5" />
          </div>
        </div>

        {/* --- Logo + Social Row (first row) --- */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <img
                src="/GaneCapital-logo.png"
                alt="Visa"
                className="h-40 w-40"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <a
              href="https://www.facebook.com/profile.php?id=61581003343218"
              className="  hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/ganecapitalfx"
              className="hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/ganecapitalfx/"
              className="hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* --- Six-column footer menus (single row on md+) --- */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          <div>
            <h4 className="font-semibold mb-3 text-white">Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a className="hover:text-white" href="/forex">
                  Forex
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/indices">
                  Indices
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/commodities">
                  Commodities
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/shares">
                  Shares
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/deposit-withdrawal">
                  Deposit and Withdrawals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Platforms</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a className="hover:text-white" href="/mt4">
                  MetaTrader 4
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/mt5">
                  MetaTrader 5
                </a>
              </li>

              <li>
                <a className="hover:text-white" href="/all-platforms">
                  All platforms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Accounts</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a className="hover:text-white" href="/copy-trading">
                  Copy trading
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/demo">
                  Demo
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/all-accounts">
                  All accounts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Partnerships</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a className="hover:text-white" href="/partners">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">
              About GaneCapitalfx
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a className="hover:text-white" href="/about">
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* Support column includes address & contact (this is the 6th column) */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Support</h4>

            <div className="text-sm text-gray-300 space-y-3">
              <div className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-gray-400" />
                <div>
                  <div className="text-xs text-gray-400">
                    Phone (Toll-Free Kenya)
                  </div>
                  <div className="text-sm mt-0.5">0800-XXX-XXX</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <FaWhatsapp className="mt-1 text-green-400" />
                <div>
                  <div className="text-xs text-gray-400">WhatsApp</div>
                  <div className="text-sm mt-0.5">+254 7XX XXX XXX</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-gray-400" />
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="text-sm mt-0.5">
                    support@ganecapitalfx.com
                  </div>
                </div>
              </div>

              <div className="mt-2 text-sm text-gray-300">
                <div className="text-xs text-gray-400">Address</div>
                <div className="mt-1">
                  The RiverFront, 2nd Floor, <br />
                  Nairobi, Kenya
                </div>
              </div>

              <div className="mt-2">
                <a className="text-xs hover:text-white text-gray-400" href="#">
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Region + Language + Icons (optional extra row) --- */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800 pt-6">
          <div className="text-gray-400 text-sm">
            🌍 Region & Language:{" "}
            <button className="hover:text-white ml-2">Change country</button>
          </div>

          <div className="flex items-center gap-4 text-gray-400"></div>
        </div>

        {/* --- Legal & Copyright --- */}
        <div className="mt-6 text-xs text-gray-500 space-y-4">
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
          <div className="text-gray-400">
            © {new Date().getFullYear()} GaneCapitalfx. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
