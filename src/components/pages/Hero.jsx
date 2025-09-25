import React from "react";
import Button from "../common/Button";
import TradingBanner from "../common/TradingBanner";
import PromoBanner from "../common/PromoBanner";
import FeatureSection from "../common/FeatureSection";
import { FaPercent, FaTachometerAlt, FaAward } from "react-icons/fa";
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

  const card = [
    {
      icon: <FaPercent />,
      title: "Costs kept low",
      description:
        "$0 platform fees, $0 commission^ and spreads from 0.0 pips* to keep your money on market.",
      linkText: "Trading accounts",
      linkUrl: "/all-accounts",
    },
    {
      icon: <FaTachometerAlt />,
      title: "Speedy & secure",
      description:
        "Trade with a regulated broker that offers fast execution on world-famous trading platforms.",
      linkText: "Trading platforms",
      linkUrl: "/all-platforms",
    },
    {
      icon: <FaAward />,
      title: "Award-winning benefits",
      description:
        "24/6 customer support, built-in research tools, free training resources and networking events.",
      linkText: "Join the Academy",
      linkUrl: "/about",
    },
  ];

  const handleClick = () => alert("Button clicked!");

  return (
    <section className="bg-white">
      <TradingBanner />

      <PromoBanner />

      <FeatureSection
        subtitle="WHY TRADE WITH GANECAPITALFX?"
        title="All your online trading needs in one hi-tech dashboard"
        cards={card}
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

      <CtaBanner
        subtitle="TRADING SUPPORT"
        title="Get help from experts in our East African offices"
        primaryBtnText="START TRADING"
        primaryBtnUrl="/start"
        secondaryBtnText="TRY FOR FREE"
        secondaryBtnUrl="/demo"
        bgColor="bg-[#1f1f1f]"
        textColor="text-white"
        subtitleColor="text-teal-400"
      />

      <FeatureSection
        subtitle="WHY TRADE WITH GANECAPITALFX?"
        title="All your online trading needs in one hi-tech dashboard"
        cards={card}
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
