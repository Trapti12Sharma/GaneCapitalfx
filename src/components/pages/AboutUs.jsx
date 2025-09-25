import React from "react";
import TradingBanner from "../common/TradingBanner";
import FeatureSection from "../common/FeatureSection";
import PromoBanner from "../common/PromoBanner";
import SocialGrid from "../common/SocialGrid";
import AwardsSection from "../common/AwardsSection";
import CardGridSection from "../common/CardGridSection";
import { FaPercent, FaTachometerAlt, FaAward } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutUs() {
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
  const socials = [
    { name: "Facebook", link: "https://facebook.com", icon: <FaFacebookF /> },
    { name: "X", link: "https://twitter.com", icon: <FaXTwitter /> },
    { name: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
    { name: "TikTok", link: "https://tiktok.com", icon: <FaTiktok /> },
    {
      name: "Telegram",
      link: "https://telegram.org",
      icon: <FaTelegramPlane />,
    },
    { name: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedinIn /> },
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
      icon: <FaAward />,
      title: "Award-winning benefits",
      description:
        "24/6 customer support, built-in research tools, free training resources and networking events.",
      linkText: "Join the Academy",
      linkUrl: "/about",
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
      icon: <FaAward />,
      title: "Award-winning benefits",
      description:
        "24/6 customer support, built-in research tools, free training resources and networking events.",
      linkText: "Join the Academy",
      linkUrl: "/about",
    },
  ];

  const cardn = [
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

  const awardsData = [
    {
      image: "/award1.png",
      title: "Best Trading Education Provider 2022",
      description: "The European (EGM Securities, Kenya)",
      bgColor: "#e0f2f1",
    },
    {
      image: "/award2.png",
      title: "Most Innovative Brokerage Company Award 2021",
      description: "Pan Finance (Equiti Group, Sep 2021)",
      bgColor: "#e8f5e9",
    },
    {
      image: "/award3.png",
      title: "Best Forex Broker Kenya 2021",
      description: "World Economic Magazine (FXPesa, Kenya)",
      bgColor: "#fff3e0",
    },
    {
      image: "/award4.png",
      title: "Best Broker in Africa Award 2021",
      description: "AtoZ Markets (FXPesa, Kenya)",
      bgColor: "#ede7f6",
    },
    {
      image: "/award5.png",
      title: "Best Liquidity Provider 2021",
      description: "Finance Magnates (Equiti Capital, UK)",
      bgColor: "#e1f5fe",
    },
    {
      image: "/award6.png",
      title: "Best Non-Dealing Online Forex Broker Award",
      description: "DigiTech Excellence Awards 2019 (FXPesa, Kenya)",
      bgColor: "#fce4ec",
    },
  ];

  return (
    <>
      <TradingBanner />

      <FeatureSection
        subtitle="WHY TRADE WITH GANECAPITALFX?"
        title="All your online trading needs in one hi-tech dashboard"
        cards={card}
      />

      <PromoBanner />

      <AwardsSection
        subtitle="Equiti Group Awards"
        title="Going for Golds across the globe"
        awards={awardsData}
      />

      <FeatureSection
        subtitle="WHY TRADE WITH GANECAPITALFX?"
        title="All your online trading needs in one hi-tech dashboard"
        cards={cardn}
      />

      <PromoBanner />
      <SocialGrid socials={socials} />

      <CardGridSection
        heading="There's more to explore"
        cards={cards}
        bgColor="bg-gray-50"
        textColor="text-gray-900"
      />
    </>
  );
}
