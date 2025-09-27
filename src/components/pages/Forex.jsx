import React from "react";
import TradingBanner from "../common/TradingBanner";
import FeatureSection from "../common/FeatureSection";
import CtaBanner from "../common/CtaBanner";
import FAQSection from "../common/FAQSection";
import CardGridSection from "../common/CardGridSection";
import DataTable from "../common/DataTable";
import TradingHours from "../common/TradingHours";
import ContentSection from "../common/ContentSection";
import { FaPercent, FaTachometerAlt, FaAward } from "react-icons/fa";

export default function Forex() {
  const hours = [
    { day: "Sunday", time: "21:01 - 24:00 GMT" },
    { day: "Mon-Thurs", time: "00:00 - 20:59 and 21:05 - 24:00 GMT" },
    { day: "Friday", time: "00:00 - 20:57 GMT" },
  ];

  const notes = [
    {
      text: "Please note that USDRUB is set to close only and is not available for trading at any of the times listed above.",
    },
    { text: "*Average prices are during London and New York sessions." },
    {
      text: "**Trading hours can change due to public holidays, we’ve listed additional market closures on our",
      link: "/holiday-hours",
      linkText: "Holiday Hours page",
    },
  ];

  const columns = [
    "Currency Pair",
    "Typical Spread (Pips) - Standard Account",
    "Typical Spread (Pips) - Premier Account",
    "Fixed Leverage",
    "Margin",
  ];

  const data = [
    {
      pair: "AUDUSD",
      standard: "1.5",
      premier: "0.1",
      leverage: "1:400",
      margin: "0.25%",
    },
    {
      pair: "EURCHF",
      standard: "2.7",
      premier: "0.7",
      leverage: "1:80",
      margin: "1.25%",
    },
    {
      pair: "EURGBP",
      standard: "2.0",
      premier: "0.2",
      leverage: "1:400",
      margin: "0.25%",
    },
    {
      pair: "EURJPY",
      standard: "2.2",
      premier: "0.5",
      leverage: "1:400",
      margin: "0.25%",
    },
    {
      pair: "EURUSD",
      standard: "1.4",
      premier: "0.0",
      leverage: "1:400",
      margin: "0.25%",
    },
    {
      pair: "GBPCHF",
      standard: "3.8",
      premier: "1.2",
      leverage: "1:80",
      margin: "1.25%",
    },
    {
      pair: "GBPJPY",
      standard: "2.5",
      premier: "0.9",
      leverage: "1:400",
      margin: "0.25%",
    },
    {
      pair: "GBPUSD",
      standard: "2.2",
      premier: "0.2",
      leverage: "1:400",
      margin: "0.25%",
    },
    {
      pair: "NZDUSD",
      standard: "2.0",
      premier: "0.4",
      leverage: "1:400",
      margin: "0.25%",
    },
    {
      pair: "USDCAD",
      standard: "2.0",
      premier: "0.4",
      leverage: "1:400",
      margin: "0.25%",
    },
    {
      pair: "USDCHF",
      standard: "2.0",
      premier: "0.3",
      leverage: "1:400",
      margin: "0.25%",
    },
    {
      pair: "USDJPY",
      standard: "1.4",
      premier: "0.0",
      leverage: "1:400",
      margin: "0.25%",
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
        "We offer tiered Multi Asset Manager (MAM) on MT4 and Introducing Broker (IB) partnership programs on MT4 & MT5.",
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
        "We offer tiered Multi Asset Manager (MAM) on MT4 and Introducing Broker (IB) partnership programs on MT4 & MT5.",
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
  return (
    <>
      <TradingBanner />

      <FeatureSection
        subtitle="WHY TRADE WITH GANECAPITALFX?"
        title="All your online trading needs in one hi-tech dashboard"
        cards={card}
      />

      <ContentSection
        subtitle="KNOW OUR PRODUCTS"
        title="What are forex CFDs?"
        description="FX CFDs are contracts that are used to trade on currency pairs with added leverage. Online traders often choose CFDs as you can speculate on the rise or fall of an FX pair’s value - without directly owning it. “Forex” stands for “foreign exchange” (or currency pairs) and “CFDs” stands for “Contract for Differences”. Read more about these terms in our FAQs below."
        bgColor="#f9fafb"
        image={null}
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
        subtitleColor="text-[#b88f51]"
      />

      <DataTable
        subtitle="Major Forex Pairs"
        title="Major FX spreads"
        description="Go long or short on major currencies against the USD like EURUSD (Euro Dollar), USDCAD (Dollar Loonie) or GBPUSD (Pound Dollar)."
        columns={columns}
        data={data}
        bgColor="#f9fafb"
      />

      <DataTable
        subtitle="Major Forex Pairs"
        title="Major FX spreads"
        description="Go long or short on major currencies against the USD like EURUSD (Euro Dollar), USDCAD (Dollar Loonie) or GBPUSD (Pound Dollar)."
        columns={columns}
        data={data}
        bgColor="#f9fafb"
      />
      <DataTable
        subtitle="Major Forex Pairs"
        title="Major FX spreads"
        description="Go long or short on major currencies against the USD like EURUSD (Euro Dollar), USDCAD (Dollar Loonie) or GBPUSD (Pound Dollar)."
        columns={columns}
        data={data}
        bgColor="#f9fafb"
      />

      <TradingHours
        subtitle="FOREX HOURS"
        title="FX trading hours"
        description="Liquidity and spreads can change due to market conditions, spreads are variable and can widen overnight. The information in these tables is correct at the time of publication, we reserve the right to change its contents at any time."
        hours={hours}
        notes={notes}
        bgColor="#f9fafb"
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
