"use client";

import Details from "./components/Details";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RSVP from "./components/RSVP";

export default function Home() {
  return (
    <main>
      <Hero />
      <Details />
      <FAQ />
      <RSVP />
      <Footer />
    </main>
  );
}
