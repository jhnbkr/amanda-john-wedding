"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import IconSpinner from "../../icons/IconSpinner";
import { GUEST_LIMIT } from "./constants";
import GuestEntry from "./GuestEntry";
import { Guest } from "./types";
import { useFormValidation } from "./hooks";

interface RSVPFormProps {
  onSubmit: (guests: Guest[]) => Promise<void>;
  isSubmitting: boolean;
  submitError: Error | null;
}

export default function RSVPForm({ onSubmit, isSubmitting, submitError }: RSVPFormProps) {
  const [guests, setGuests] = useState<Guest[]>([]);
  const { errorMap, validate, clearError } = useFormValidation();

  useEffect(() => {
    setGuests([createGuest()]);
  }, []);

  useEffect(() => {
    const firstError = Object.entries(errorMap)[0];
    if (firstError) {
      const [guestId, fields] = firstError;
      const firstField = Object.keys(fields)[0];
      if (firstField) {
        const fieldId = `guest-${guestId}-${firstField}`;
        const element = document.getElementById(fieldId);
        if (element) {
          element.focus();
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, [errorMap]);

  const createGuest = (): Guest => ({
    id: uuidv4(),
    name: "",
    attending: undefined,
    meal: {},
    notes: "",
  });

  const addGuest = () => {
    if (guests.length < GUEST_LIMIT) {
      setGuests((prev: Guest[]) => [...prev, createGuest()]);
    }
  };

  const removeGuest = (id: string) => {
    if (guests.length > 1) {
      setGuests((prev: Guest[]) => prev.filter((guest: Guest) => guest.id !== id));
    }
  };

  const updateGuest = (id: string, update: Partial<Guest>) => {
    setGuests((prev: Guest[]) => prev.map((guest: Guest) => (guest.id === id ? { ...guest, ...update } : guest)));
    Object.keys(update).forEach(field => {
      if (field === "meal") {
        Object.keys(update.meal || {}).forEach(mealField => {
          clearError(id, mealField);
        });
      } else {
        clearError(id, field);
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(guests);
    if (validationErrors.length > 0) {
      return;
    }
    await onSubmit(guests);
  };

  return (
    <>
      {submitError && <ErrorMessage />}

      <form onSubmit={handleSubmit} className="space-y-8" aria-labelledby="rsvp-form-heading">
        {guests.map((guest: Guest, index: number) => (
          <GuestEntry
            key={guest.id}
            index={index}
            guest={guest}
            errorMap={errorMap}
            updateGuest={updated => updateGuest(guest.id, updated)}
            removeGuest={guests.length > 1 ? () => removeGuest(guest.id) : undefined}
            disabled={isSubmitting}
          />
        ))}

        {guests.length < GUEST_LIMIT && <AddGuestButton addGuest={addGuest} isSubmitting={isSubmitting} />}

        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </>
  );
}

interface AddGuestButtonProps {
  addGuest: () => void;
  isSubmitting: boolean;
}

const AddGuestButton = ({ addGuest, isSubmitting }: AddGuestButtonProps) => (
  <button
    type="button"
    onClick={addGuest}
    disabled={isSubmitting}
    className="mx-auto block p-4 rounded-md text-sm text-gray-900 hover:text-gray-600 transition-colors
      disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    + Add another guest
  </button>
);

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="mx-auto block px-8 py-3 text-sm uppercase tracking-[0.2em] border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
  >
    {isSubmitting ? (
      <span className="inline-flex items-center gap-2">
        Submitting
        <IconSpinner />
      </span>
    ) : (
      "Submit RSVP"
    )}
  </button>
);

const ErrorMessage = () => (
  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-8 text-center" role="alert">
    Failed to submit RSVP. Please try again.
  </div>
);
