"use client";

import { useRef, useState } from "react";

import IconChevronDown from "../icons/IconChevronDown";
import SectionHeading from "./SectionHeading";

interface Question {
  id: string;
  title: string;
  answer: string;
}

const QUESTIONS: Question[] = [
  {
    id: "what-is-the-dress-code",
    title: "What is the dress code?",
    answer:
      "Semi-formal attire is requested. For gentlemen, a suit and tie. For ladies, cocktail dresses or formal attire.",
  },
  {
    id: "is-there-parking-available",
    title: "Is there parking available?",
    answer: "Yes, complimentary parking is available at the venue.",
  },
  {
    id: "can-i-bring-a-plus-one",
    title: "Can I bring a plus one?",
    answer: "Please check your invitation for the number of seats reserved in your name.",
  },
  {
    id: "what-time-should-i-arrive",
    title: "What time should I arrive?",
    answer: "We recommend arriving 15-20 minutes before the ceremony begins at 4:00 PM.",
  },
  {
    id: "what-about-the-reception",
    title: "What about the reception?",
    answer: "The reception will follow immediately after the ceremony at the same beautiful location.",
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
    <div className="border-b border-gray-200 py-6">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left cursor-pointer"
      >
        <span className="text-lg text-gray-900 hover:text-gray-600 transition-colors">{title}</span>
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
        <div className="pt-4 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};
