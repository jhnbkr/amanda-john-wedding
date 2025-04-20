"use client";

import Image from "next/image";
import { useState } from "react";

import scrollToSection from "../utils/scrollToSection";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative min-h-screen" role="region" aria-label="Wedding invitation hero section">
      <Image
        src="/images/hero.jpg"
        alt="A dirt road winds through green fields and trees under a clear sky, with morning mist in the distance and sunlight illuminating the landscape."
        fill
        className="object-cover"
        priority
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-black/25" />
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      <div className="relative flex min-h-screen text-white">
        <div className="mx-auto max-w-2xl px-6 pt-[15vh] text-center">
          <header className="mb-12">
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wide mb-6">Amanda & John</h1>
            <p className="text-lg md:text-xl uppercase tracking-[0.3em] font-bold opacity-90">July 26, 2025</p>
          </header>

          <div className="flex gap-6 justify-center">
            <ScrollToButton href="#details">Details</ScrollToButton>
            <ScrollToButton href="#rsvp">RSVP</ScrollToButton>
          </div>
        </div>
      </div>
    </div>
  );
}

type ScrollToButtonProps = {
  href: string;
  children: React.ReactNode;
};

const ScrollToButton = ({ href, children }: ScrollToButtonProps) => {
  return (
    <button
      onClick={() => scrollToSection(href)}
      className="px-8 py-2.5 text-sm uppercase tracking-[0.2em] border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
      aria-label={`Scroll to ${children} section`}
    >
      {children}
    </button>
  );
};
