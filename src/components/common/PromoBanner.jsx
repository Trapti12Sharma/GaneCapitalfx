import React from "react";

const PromoBanner = () => {
  return (
    <section className="bg-gray-900 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto my-10">
      {/* Left Content */}
      <div className="max-w-lg">
        <p className="text-teal-400 text-sm font-semibold">WELCOME BONUS</p>
        <h2 className="text-3xl font-bold mt-3">
          Make your first deposit and get{" "}
          <span className="text-teal-400">100% extra trading credit!</span>
        </h2>
        <p className="text-gray-400 mt-3">Terms and conditions apply.</p>
        <button className="mt-6 px-6 py-3 bg-teal-400 text-gray-900 rounded-md font-semibold hover:bg-teal-300 transition">
          OPEN ACCOUNT
        </button>
      </div>

      {/* Right Content */}
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <div className="bg-white text-gray-900 font-bold text-6xl px-8 py-10 rounded-xl shadow-lg">
          100%
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
