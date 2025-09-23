import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-snug">
            Trade with confidence — <br className="hidden sm:block" />
            GaneCapitalfx
          </h1>
          <p className="mt-4 text-gray-600">
            Begin trading forex and CFDs on a secure, reliable platform. Access
            multiple instruments and advanced trading tools.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button variant="dark">Open Account</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div>
          <div className="h-64 bg-gradient-to-br from-primary/10 to-mint/30 rounded-lg flex items-center justify-center">
            <div className="text-center text-primary/80">
              Hero illustration / image placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
