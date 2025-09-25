import React from "react";

const PromoBanner = () => {
  return (
    <section className="bg-gray-900 text-white rounded-2xl px-6 py-10 sm:px-4 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto my-10">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <p className="text-teal-400 text-xs sm:text-sm font-semibold tracking-wide">
          WELCOME BONUS
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 leading-snug">
          Make your first deposit and get{" "}
          <span className="text-teal-400">100% extra trading credit!</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Terms and conditions apply.
        </p>
        <button className="mt-6 px-5 sm:px-6 py-3 bg-teal-400 text-gray-900 rounded-md font-semibold hover:bg-teal-300 transition w-full sm:w-auto">
          OPEN ACCOUNT
        </button>
      </div>

      {/* Right Content */}
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <div className="bg-white text-gray-900 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-6 sm:px-8 py-8 sm:py-10 rounded-xl shadow-lg">
          100%
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
