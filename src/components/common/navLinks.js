// src/common/navLinks.js
export const navLinks = [
  {
    title: "Products",
    submenu: [
      { name: "Forex", path: "/forex" },
      { name: "Commodities", path: "/commodities" },
      { name: "Indices", path: "/indices" },
      { name: "Shares", path: "/shares" },
      { name: "Deposits & Withdrawals", path: "/deposit-withdrawal" },
    ],
  },
  {
    title: "Platforms",
    submenu: [
      { name: "MetaTrader4", path: "/mt4" },
      { name: "MetaTrader5", path: "/mt5" },
      { name: "All Platforms", path: "/all-platforms" },
    ],
  },
  {
    title: "Accounts",
    submenu: [
      { name: "Copy Trading", path: "/copy-trading" },
      { name: "Demo", path: "/demo" },
      { name: "All Accounts", path: "/all-accounts" },
    ],
  },
  {
    title: "Insights",
    submenu: [{ name: "Trading Tools", path: "/trading-tools" }],
  },
  {
    title: "Partners",
    path: "/partners",
    submenu: [],
  },
  {
    title: "About us",
    path: "/about", // single page
    submenu: [],
  },
];
