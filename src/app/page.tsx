"use client";

import Details from "./components/Details";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Details />
      <FAQ />
    </main>
  );
}
