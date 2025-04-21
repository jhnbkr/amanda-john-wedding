import { useCallback, useMemo, useState } from "react";

import { Guest, GuestError } from "./types";

export const useFormValidation = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState<GuestError[]>([]);

  const errorMap = useMemo(() => {
    const map: Record<string, Record<string, string>> = {};
    for (const error of errors) {
      if (!map[error.guest]) map[error.guest] = {};
      map[error.guest][error.field] = error.message;
    }
    return map;
  }, [errors]);

  const validateGuests = useCallback((guests: Guest[]): GuestError[] => {
    const validationErrors: GuestError[] = [];
    for (const guest of guests) {
      const { id, name, attending, meal } = guest;

      if (!name.trim()) {
        validationErrors.push({ guest: id, field: "name", message: "Name is required." });
      }

      if (attending === undefined)
        validationErrors.push({
          guest: id,
          field: "attending",
          message: "Please select yes or no.",
        });

      if (attending) {
        if (!meal.appetizer)
          validationErrors.push({
            guest: id,
            field: "appetizer",
            message: "Select an appetizer.",
          });

        if (!meal.entree)
          validationErrors.push({
            guest: id,
            field: "entree",
            message: "Select an entrée.",
          });

        if (!meal.dessert)
          validationErrors.push({
            guest: id,
            field: "dessert",
            message: "Select a dessert.",
          });
      }
    }
    return validationErrors;
  }, []);

  const clearError = useCallback(
    (guestId: string, field: string) => {
      if (!hasSubmitted) return;
      setErrors(prev => prev.filter(error => !(error.guest === guestId && error.field === field)));
    },
    [hasSubmitted]
  );

  const validate = useCallback(
    (guests: Guest[]) => {
      setHasSubmitted(true);
      const validationErrors = validateGuests(guests);
      setErrors(validationErrors);
      return validationErrors;
    },
    [validateGuests]
  );

  return {
    errorMap,
    hasSubmitted,
    validate,
    clearError,
  };
};
