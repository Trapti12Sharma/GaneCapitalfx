import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import TopBar from "./components/common/TopBar";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Hero from "./components/pages/Hero";
import AboutUs from "./components/pages/AboutUs";
import AllAccounts from "./components/pages/AllAccounts";
import AllPlatforms from "./components/pages/AllPlatforms";
import Commodities from "./components/pages/Commodities";
import CopyTrading from "./components/pages/CopyTrading";
import Demo from "./components/pages/Demo";
import DepositandWithdrawal from "./components/pages/DepositandWithdrawal";
import Forex from "./components/pages/Forex";
import Indices from "./components/pages/Indices";
import MT4 from "./components/pages/MT4";
import MT5 from "./components/pages/MT5";
import Partners from "./components/pages/Partners";
import Shares from "./components/pages/Shares";
import TradingTools from "./components/pages/TradingTools";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/all-accounts" element={<AllAccounts />} />
          <Route path="/all-platforms" element={<AllPlatforms />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/copy-trading" element={<CopyTrading />} />
          <Route path="/demo" element={<Demo />} />
          <Route
            path="/deposit-withdrawal"
            element={<DepositandWithdrawal />}
          />
          <Route path="/forex" element={<Forex />} />
          <Route path="/indices" element={<Indices />} />
          <Route path="/mt4" element={<MT4 />} />
          <Route path="/mt5" element={<MT5 />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/shares" element={<Shares />} />
          <Route path="/trading-tools" element={<TradingTools />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
