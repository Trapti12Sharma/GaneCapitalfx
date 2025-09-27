import React from "react";
import TradingBanner from "../common/TradingBanner";
import PromoBanner from "../common/PromoBanner";
import FeatureSection from "../common/FeatureSection";
import FAQSection from "../common/FAQSection";
import CardGridSection from "../common/CardGridSection";
import FeatureListCard from "../common/FeatureListCard";
import AppDownloadSection from "../common/AppDownloadSection";
import { FaPercent, FaTachometerAlt, FaAward } from "react-icons/fa";

export default function MT5() {
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

      <FeatureListCard
        subtitle="More on MT5"
        title="MT5’s top features"
        features={features}
        buttonText="DOWNLOAD MT5"
        buttonLink="/download-MT5"
        bgColor="#ffffff"
        accentColor="#0d9488"
      />

      <AppDownloadSection
        subtitle="START TRADING ON MT5"
        title="Hundreds of assets on one trading platform"
        bgColor="#1f1f1f"
        textColor="#ffffff"
        subtitleColor="#b88f51"
        buttons={buttons}
      />

      <PromoBanner />

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
