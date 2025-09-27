import React from "react";
import TradingBanner from "../common/TradingBanner";
import PromoBanner from "../common/PromoBanner";
import FeatureSection from "../common/FeatureSection";
import FAQSection from "../common/FAQSection";
import CardGridSection from "../common/CardGridSection";
import CtaBanner from "../common/CtaBanner";
import ComparisonCards from "../common/ComparisonCards";
import { FaPercent, FaTachometerAlt, FaAward } from "react-icons/fa";

export default function AllPlatforms() {
  const cardsn = [
    {
      title: "MetaTrader 4",
      subtitle: "The World’s Most Popular Platform",
      features: [
        "Forex, indices, commodities, shares & ETFs",
        "Standard & Premier accounts",
        "Fund with M-Pesa, banks, cards or eWallets",
        "$0 platform fees",
        "Mobile, laptop or tablet",
        "Instant Notifications",
        "80 Trading Tools (incl. EAs)",
        "MQL4",
        "Open Trades dashboard with Lots",
        "Demo available",
      ],
      buttonText: "DOWNLOAD MT4",
      buttonLink: "/download-mt4",
    },
    {
      title: "MetaTrader 5",
      subtitle: "More Products, Data & Tools",
      features: [
        "Forex, indices, commodities, shares & ETFs",
        "Standard & Premier accounts",
        "Fund with M-Pesa, banks, cards or eWallets",
        "$0 platform fees",
        "Mobile, laptop or tablet",
        "Instant Notifications",
        "88 Trading Tools (incl. EAs)",
        "MQL5",
        "21 Time Frames",
        "Demo available",
      ],
      buttonText: "DOWNLOAD MT5",
      buttonLink: "/download-mt5",
    },
    {
      title: "Equiti Trader",
      subtitle: "Trade on the go",
      features: [
        "Built for FXPesa",
        "Mobile Trading Platform",
        "iOS 12+ and Android 7.1+",
        "Deposit with M-Pesa, Neteller & Skrill",
        "Instant Notifications",
        "In-app support",
        "Trade FX, Indices, Commodities, Shares and ETFs",
        "Transparent Activity Log",
        "Full Economic Calendar",
        "$0 Platform Fees",
      ],
      buttonText: "DOWNLOAD EQUITI TRADER",
      buttonLink: "/download-equiti-trader",
    },
  ];
  const buttons = [
    {
      img: "https://eq-cdn.equiti-me.com/website/documents/google_play_store_daCaEw5.svg", // path to Google Play image
      alt: "Get it on Google Play",
      link: "https://play.google.com/store/apps/details?id=com.metatrader4",
    },
    {
      img: "https://eq-cdn.equiti-me.com/website/documents/apple_app_store_n8eEhwh.svg", // path to App Store image
      alt: "Download on the App Store",
      link: "https://apps.apple.com/app/metatrader-4/id496212596",
    },
  ];
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

  const faqsData = [
    {
      question: "What partnership programs do you offer?",
      answer:
        "We offer tiered Multi Asset Manager (MAM) on MT5 and Introducing Broker (IB) partnership programs on MT5 & MT5.",
    },
    {
      question: "How will you know that a client signed up through me?",
      answer:
        "Clients who register using your referral link or code will be automatically tagged to your account.",
    },
    {
      question:
        "What happens if a client gets stopped out in the MAM program or if (s)he decides to leave?",
      answer:
        "The client can withdraw or transfer funds anytime, subject to program conditions.",
    },
    {
      question: "How does the tiered commission scheme work?",
      answer:
        "You earn rebates based on client trading volume. Higher volumes move you into better commission tiers.",
    },
    {
      question: "What partnership programs do you offer?",
      answer:
        "We offer tiered Multi Asset Manager (MAM) on MT5 and Introducing Broker (IB) partnership programs on MT5 & MT5.",
    },
    {
      question: "How will you know that a client signed up through me?",
      answer:
        "Clients who register using your referral link or code will be automatically tagged to your account.",
    },
    {
      question:
        "What happens if a client gets stopped out in the MAM program or if (s)he decides to leave?",
      answer:
        "The client can withdraw or transfer funds anytime, subject to program conditions.",
    },
    {
      question: "How does the tiered commission scheme work?",
      answer:
        "You earn rebates based on client trading volume. Higher volumes move you into better commission tiers.",
    },
  ];
  const features = [
    "FX pairs, Indices & Commodities",
    "Shares and ETFs",
    "Single Strategy Tester",
    "Market Watch Data & Table reports",
    "Instant Market News",
    "80 built-in EAs and Trading Robots",
    "Partial Order Filling",
    "3 Order Execution & 4 Pending Order types",
    "9 Time Frames",
  ];
  return (
    <>
      <TradingBanner />

      <FeatureSection
        subtitle="WHY TRADE WITH GANECAPITALFX?"
        title="All your online trading needs in one hi-tech dashboard"
        cards={card}
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

      <ComparisonCards
        heading="Find the right trading platform for your needs"
        description="Select from MetaQuotes or FXPesa platforms, we’ll always support your trading journey from Kenya and beyond."
        cards={cardsn}
      />

      <PromoBanner />

      <FeatureSection
        subtitle="WHY TRADE WITH GANECAPITALFX?"
        title="All your online trading needs in one hi-tech dashboard"
        cards={card}
      />

      <FAQSection
        subtitle="FAQs"
        title="Ganecapitalfx Partner FAQs"
        faqs={faqsData}
        bgColor="#ffffff"
      />

      <CardGridSection
        heading="There's more to explore"
        cards={cards}
        bgColor="bg-gray-50"
        textColor="text-gray-900"
      />
    </>
  );
}
