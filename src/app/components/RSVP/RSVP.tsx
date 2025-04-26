"use client";

import { useState } from "react";

import SectionHeading from "../SectionHeading";
import { submitRSVP } from "./actions";
import RSVPForm from "./RSVPForm";
import { Guest } from "./types";

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<Error | null>(null);

  const handleSubmit = async (guests: Guest[]) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      await submitRSVP(guests);
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error : new Error("Submission failed."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading>RSVP</SectionHeading>

        {submitSuccess ? (
          <SuccessMessage />
        ) : (
          <RSVPForm onSubmit={handleSubmit} isSubmitting={isSubmitting} submitError={submitError} />
        )}
      </div>
    </section>
  );
}

const SuccessMessage = () => (
  <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-lg text-center" role="status">
    <p className="text-lg mb-2">Thanks, you&apos;re all set! 🎉</p>
    <p>We can&apos;t wait to celebrate with you.</p>
  </div>
);
