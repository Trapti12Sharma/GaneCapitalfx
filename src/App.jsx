import React from "react";
import TopBar from "./components/common/TopBar";
import Navbar from "./components/common/Navbar";
import Hero from "./components/common/Hero";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
