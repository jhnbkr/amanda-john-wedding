"use client";

import { ReactNode, useRef, useState } from "react";

import IconChevronDown from "../icons/IconChevronDown";
import SectionHeading from "./SectionHeading";
import IconPhone from "../icons/IconPhone";
import IconMapPin from "../icons/IconMapPin";

interface Question {
  id: string;
  title: string;
  answer: ReactNode;
}

const QUESTIONS: Question[] = [
  {
    id: "when-should-i-rsvp",
    title: "When should I RSVP by?",
    answer: (
      <>
        <p>Please RSVP by June 1st, 2025. This helps us finalize our guest list and make the necessary arrangements.</p>
        <p className="mt-2">
          Even if you are unable to attend, we would greatly appreciate your response. A &ldquo;no&rdquo; RSVP is just
          as important as a &ldquo;yes&rdquo;!
        </p>
      </>
    ),
  },
  {
    id: "can-i-bring-a-plus-one",
    title: "Can I bring a plus one?",
    answer: (
      <p>
        While we&apos;d love to invite everyone and their cousin, we&apos;ve had to be selective with our guest list to
        keep things cozy. Please check your invitation for who&apos;s specifically invited to join the celebration!
      </p>
    ),
  },
  {
    id: "kids-policy",
    title: "Are my kids welcome?",
    answer: (
      <>
        <p>
          For our special day, we have decided to keep our wedding adults only, so everyone can fully relax and enjoy
          the evening with us.
        </p>
        <p className="mt-2">
          We love your little ones, but we hope you will take this as a chance for a special date night!
        </p>
      </>
    ),
  },
  {
    id: "what-is-the-dress-code",
    title: "What is the dress code?",
    answer: (
      <>
        <p>We can&apos;t wait to see our loved ones all dressed up for our big day!</p>
        <p className="mt-2">
          Our ceremony is taking place in a lovely garden so we recommend semi-formal attire. Think cocktail or
          sundresses and light suits!
        </p>
      </>
    ),
  },
  {
    id: "arrival-time",
    title: "What time should I arrive?",
    answer: (
      <>
        <p>
          Our ceremony starts at 4:00 PM, please arrive no later than 3:30 PM. This will give you time to park and get
          settled.
        </p>
        <p className="mt-2">That way we can ensure that both the ceremony and the party will get started on time!</p>
      </>
    ),
  },
  {
    id: "venue-details",
    title: "What should I know about the venue?",
    answer: (
      <>
        <p>The venue is an active farm with beautiful gardens and scenic views.</p>
        <p className="mt-2">
          Please be cautious around the electric fences and refrain from wandering through the fields.
        </p>
        <p className="mt-2">
          The ceremony will be held outdoors in the garden, followed by the reception in the adjacent building.
        </p>
        <p className="mt-2">
          During cocktail hour, you&apos;ll have the opportunity to meet the farm&apos;s friendly alpacas (they&apos;re
          very cute).
        </p>
        <p className="mt-2">Seriously, don&apos;t touch the electric fences...</p>
      </>
    ),
  },
  {
    id: "parking",
    title: "Is there parking available?",
    answer: (
      <>
        <p>Yes, there are two parking lots available:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            The upper lot has limited space and is reserved for elderly guests or those with mobility needs. Please
            reach out to us if you need one of these spots.
          </li>
          <li>
            The lower lot is a short walk up the hill. A wagon will be available to transport guests up the hill before
            the ceremony, but you&apos;ll need to walk down at the end of the night.
          </li>
        </ul>
        <p className="mt-2">Cars can remain parked in the lower lot until 10:00 AM the following day.</p>
        <p className="mt-2 text-sm italic">
          And remember, Amanda REALLY doesn&apos;t want anyone to touch the electric fences. They&apos;re not
          decorative!
        </p>
      </>
    ),
  },
  {
    id: "transportation",
    title: "Is transportation provided?",
    answer: (
      <>
        <p>A (fancy) school bus named Pearl will be available for transportation between the hotel and venue.</p>
        <div className="mt-2">
          <p>
            <span className="font-medium">Hotel Departures:</span> 2:45 PM and 3:15 PM
          </p>
          <p>
            <span className="font-medium">Venue Departures:</span> 10:00 PM, 12:00 AM, and 1:30 AM
          </p>
        </div>

        <p className="mt-2">We encourage everyone to use the shuttle service so you can celebrate worry-free!</p>
        <p className="mt-2 text-sm italic">
          Please don&apos;t get sick on Pearl... we&apos;re not in our 20s anymore. There&apos;s a $350 cleaning fee and
          we&apos;d like to keep our deposit.
        </p>
      </>
    ),
  },
  {
    id: "hotel-information",
    title: "Where should I stay?",
    answer: (
      <>
        <p>
          We have reserved a block of rooms at{" "}
          <a
            href="https://www.motel6.com/en/home/motels.on.peterborough.5708.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 underline underline-offset-2"
          >
            Motel 6 Peterborough
          </a>
          . To reserve your room, please call{" "}
          <a href="tel:+17057480550" className="text-slate-700 underline underline-offset-2">
            (705) 748-0550
          </a>
          .
        </p>
        <div className="mt-2">
          <p>
            <span className="font-medium">Block Name:</span> &ldquo;Amanda & John Wedding&rdquo;
          </p>
          <p>
            <span className="font-medium">Check-In Time:</span> 2:00 PM
          </p>
          <p>
            <span className="font-medium">Check-Out Time:</span> 11:00 AM
          </p>
          <p>
            <span className="font-medium">Address:</span> 133 Lansdowne Street East, Peterborough, ON, K9J 7P7
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://maps.google.com/?q=133+Lansdowne+Street+East+Peterborough+ON+K9J+7P7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-200"
          >
            <IconMapPin className="h-4 w-4" />
            Get Directions
          </a>
          <a
            href="tel:+17057480550"
            className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-200"
          >
            <IconPhone className="h-4 w-4" />
            Make Reservation
          </a>
        </div>
        <p className="mt-2">
          There are several other hotels nearby if you prefer, but please note that Motel 6 is where the shuttle bus
          will depart from and return to.
        </p>
      </>
    ),
  },
  {
    id: "reception",
    title: "What about the reception?",
    answer: (
      <>
        <p>
          After the ceremony, we&apos;ll kick things off with a cocktail hour and hors d&apos;ouvres. Dinner and dancing
          will follow in the adjacent building.
        </p>
        <p className="mt-2">
          For those who prefer a quieter vibe, we&apos;ll also have a bonfire and lawn games set up outdoors.
        </p>
        <p className="mt-2">
          The party wraps up around 1:00 AM, with shuttles back to the hotel available throughout the night.
        </p>
      </>
    ),
  },
  {
    id: "bar",
    title: "Will there be a bar?",
    answer: (
      <>
        <p>
          Yes, there will be an open bar! However, we have a cap on the bar tab. If we exceed our limit, it will
          transition to a cash bar (cards accepted).
        </p>
        <p className="mt-2">Non-alcoholic drinks will also be available all night long.</p>
        <p className="mt-2 text-sm italic">Please don&apos;t forget to tip our amazing bartenders!</p>
      </>
    ),
  },
  {
    id: "photography-policy",
    title: "Can I take pictures during the ceremony?",
    answer: (
      <>
        <p>
          We&apos;d love for you to be fully present with us during our ceremony, so we&apos;re kindly asking everyone
          to put away their phones and cameras.
        </p>
        <p className="mt-2">
          Don&apos;t worry about missing the perfect shot &mdash; we&apos;ve hired an amazing photographer who will
          capture all the special moments. We&apos;ll be excited to share the photos with you afterward!
        </p>
      </>
    ),
  },
  {
    id: "registry",
    title: "Do you have a registry?",
    answer: (
      <>
        <p>The most important thing to us is that you&apos;re able to celebrate with us on our special day!</p>
        <p className="mt-2">We&apos;re so lucky to already have a home filled with love, laughter, and furniture.</p>
        <p className="mt-2">
          We do not have a gift registry. If you&apos;d like to give a gift, a contribution to our wedding and honeymoon
          fund would mean so much — but your presence truly means the most!
        </p>
      </>
    ),
  },
  {
    id: "electric-fences",
    title: "What about the electric fences?",
    answer: <p>No touchy!</p>,
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading>The Fine Print</SectionHeading>
        <div>
          {QUESTIONS.map((question, index) => (
            <QuestionItem key={index} id={question.id} title={question.title} answer={question.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

const QuestionItem = ({ id, title, answer }: Question) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentId = `question-${id}`;
  const buttonId = `${contentId}-button`;

  return (
    <div className="border-b border-gray-200 py-2">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left cursor-pointer py-4 px-4 rounded-md
          transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <span className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">{title}</span>
        <IconChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        ref={contentRef}
        className="transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="px-4 pb-4 pt-2 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};
