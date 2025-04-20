"use client";

import Image from "next/image";
import { useState } from "react";

import IconMapPin from "../icons/IconMapPin";
import SectionHeading from "./SectionHeading";

export default function Details() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="details" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Details</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <DetailBlock id="when-heading" title="When">
              <p className="text-3xl font-light">July 26, 2025</p>
              <p className="text-xl mt-1">4:00 PM</p>
            </DetailBlock>

            <DetailBlock id="where-heading" title="Where">
              <p className="text-2xl font-light">Farmhill Weddings</p>
              <address className="not-italic text-gray-600 mt-1">
                2709 Dillon Rd
                <br />
                Peterborough, ON K9J 6X8
              </address>
            </DetailBlock>

            <DetailBlock id="celebration-heading" title="The Celebration">
              <p className="text-gray-600 mb-6">
                The ceremony begins at 4:00 PM, followed by cocktails, dinner, and dancing — all in one beautiful
                location.
              </p>
              <GetDirectionsButton />
            </DetailBlock>
          </div>

          <div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/venue.jpg"
                alt="Exterior view of the modern white barn-style venue at Farmhill Weddings, featuring tall black-framed windows, a sloped roof, and rustic wooden pillars at sunset."
                fill
                className={`object-cover transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                priority
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface DetailBlockProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

const DetailBlock = ({ id, title, children }: DetailBlockProps) => (
  <section aria-labelledby={id}>
    <h3 id={id} className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
      {title}
    </h3>
    {children}
  </section>
);

const GetDirectionsButton = () => (
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Farmhill+Weddings+2709+Dillon+Rd+Peterborough+ON"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Get directions to Farmhill Weddings on Google Maps"
    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm uppercase tracking-[0.2em] border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
  >
    <IconMapPin />
    Get Directions
  </a>
);
