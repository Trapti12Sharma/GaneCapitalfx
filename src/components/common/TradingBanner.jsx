import React from "react";

const TradingBanner = () => {
  return (
    <section className="bg-white text-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto my-10">
      {/* Left Content */}
      <div className="max-w-lg">
        <p className="text-[#022e37] text-sm font-semibold">
          AWARD-WINNING BROKER
        </p>
        <h2 className="text-4xl font-bold mt-3">
          Shape your financial future by trading online
        </h2>
        <p className="text-gray-600 mt-3">
          Trade online on your mobile, tablet or desktop with a huge range of
          products, great rates and local support from a global broker.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 bg-[#022e37] text-[#b88f51] rounded-md font-semibold hover:bg-[#b88f51] hover:text-[#022e37] transition">
            START TRADING
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-md font-semibold hover:bg-gray-100 transition">
            TRY FOR FREE
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <img
          src="/hero-banner.png" // replace with your image
          alt="Trading App"
          className="w-72 rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default TradingBanner;
