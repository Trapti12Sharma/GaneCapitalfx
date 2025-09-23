import React from "react";
import Button from "./Button";
import TradingBanner from "./TradingBanner";
import PromoBanner from "./PromoBanner";
import ReusableCard from "./ReusableCard";
export default function Hero() {
  const handleClick = () => alert("Button clicked!");

  return (
    <section className="bg-white">
      <TradingBanner />
      <PromoBanner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <ReusableCard
          title="Secure Transactions"
          description="Your funds are always safe with top-notch encryption."
          image="https://via.placeholder.com/80"
          buttonText="Learn More"
          onButtonClick={handleClick}
        />

        <ReusableCard
          title="Fast Withdrawals"
          description="Get your money quickly and easily anytime."
          image="https://via.placeholder.com/80"
          buttonText="Withdraw Now"
          onButtonClick={() => console.log("Withdraw clicked")}
        />

        <ReusableCard
          title="24/7 Support"
          description="We’re here to help whenever you need us."
          image="https://via.placeholder.com/80"
        />
      </div>
    </section>
  );
}
