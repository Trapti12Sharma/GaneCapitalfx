import React from "react";
import Button from "../common/Button";
import TradingBanner from "../common/TradingBanner";
import PromoBanner from "../common/PromoBanner";
import ReusableCard from "../common/ReusableCard";
import InfoSection from "../common/InfoSection";
import CtaBanner from "../common/CtaBanner";
import CardGridSection from "../common/CardGridSection";

export default function Hero() {
  const cards = [
    {
      imgSrc: "/ganehome2.png",
      title: "Free training",
      description:
        "We’ve taught over 500,000 people on finance since 2021 - totally free of charge.",
      linkText: "Learn how to trade",
      linkUrl: "/training",
    },
    {
      imgSrc: "/ganehome3.png",
      title: "Extra security",
      description:
        "Two-step account verification, funds kept separate & fully-regulated in 6 global regions.",
      linkText: "Compare accounts",
      linkUrl: "/accounts",
    },
    {
      imgSrc: "/ganehome4.png",
      title: "Meet the team",
      description:
        "With East African branches and more overseas, we’re ready to respond quickly.",
      linkText: "About GaneCapitalfx",
      linkUrl: "/about",
    },
  ];

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

      <InfoSection
        subtitle="ONLINE TRADING PRODUCTS"
        title="Hundreds of reasons to trade, now let’s find yours"
        description="Explore worldwide financial opportunities without switching platforms - we’ve got hundreds of CFDs for you to trade on."
        linkText="All trading products"
        linkUrl="/products"
        imgSrc="/gane1.png"
        bgColor="bg-white"
        textColor="text-gray-900"
      />

      <CtaBanner
        subtitle="TRADING SUPPORT"
        title="Get help from experts in our East African offices"
        primaryBtnText="START TRADING"
        primaryBtnUrl="/start"
        secondaryBtnText="TRY FOR FREE"
        secondaryBtnUrl="/demo"
        bgColor="bg-[#1f1f1f]" // dark background
        textColor="text-white"
        subtitleColor="text-teal-400"
      />

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

      <InfoSection
        subtitle="ONLINE TRADING PRODUCTS"
        title="Hundreds of reasons to trade, now let’s find yours"
        description="Explore worldwide financial opportunities without switching platforms - we’ve got hundreds of CFDs for you to trade on."
        linkText="All trading products"
        linkUrl="/products"
        imgSrc="/gane1.png"
        bgColor="bg-white"
        textColor="text-gray-900"
      />

      <InfoSection
        subtitle="ONLINE TRADING PRODUCTS"
        title="Hundreds of reasons to trade, now let’s find yours"
        description="Explore worldwide financial opportunities without switching platforms - we’ve got hundreds of CFDs for you to trade on."
        linkText="All trading products"
        linkUrl="/products"
        imgSrc="/gane1.png"
        bgColor="bg-white"
        textColor="text-gray-900"
      />

      <PromoBanner />

      <CardGridSection
        heading="There's more to explore"
        cards={cards}
        bgColor="bg-gray-50"
        textColor="text-gray-900"
      />
    </section>
  );
}
