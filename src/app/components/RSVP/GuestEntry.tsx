"use client";

import AttendingField from "./AttendingField";
import MealChoiceField from "./MealChoiceField";
import NameField from "./NameField";
import NotesField from "./NotesField";
import { APPETIZERS, DESSERTS, ENTREES } from "./constants";
import { useGuestErrors } from "./hooks";
import { Guest, GuestError } from "./types";

interface GuestEntryProps {
  index: number;
  guest: Guest;
  updateGuest: (guest: Partial<Guest>) => void;
  removeGuest?: () => void;
  disabled?: boolean;
  errors: GuestError[];
}

export default function GuestEntry({ index, guest, updateGuest, removeGuest, disabled, errors }: GuestEntryProps) {
  const { id, name, attending, meal, notes } = guest;
  const errorMap = useGuestErrors(errors);
  const showMealChoices = attending === true;

  return (
    <div className="relative p-6 border border-gray-200 rounded-lg" aria-labelledby={`guest-${id}-heading`}>
      <h3 id={`guest-${id}-heading`} className="font-light text-lg mb-6">
        Guest {index + 1}
      </h3>
      {removeGuest && <RemoveGuestButton index={index} removeGuest={removeGuest} disabled={disabled} />}
      <div className="space-y-6">
        <NameField
          id={id}
          name={name}
          onChange={value => updateGuest({ name: value })}
          error={errorMap[id]?.name}
          disabled={disabled}
        />
        <AttendingField
          id={id}
          attending={attending}
          onChange={value => updateGuest({ attending: value })}
          error={errorMap[id]?.attending}
          disabled={disabled}
        />
        {showMealChoices && (
          <>
            <MealChoiceField
              id={id}
              field="appetizer"
              label="Appetizer"
              options={APPETIZERS}
              value={meal.appetizer}
              onChange={value => updateGuest({ meal: { ...meal, appetizer: value } })}
              error={errorMap[id]?.appetizer}
              disabled={disabled}
            />
            <MealChoiceField
              id={id}
              field="entree"
              label="Entrée"
              options={ENTREES}
              value={meal.entree}
              onChange={value => updateGuest({ meal: { ...meal, entree: value } })}
              error={errorMap[id]?.entree}
              disabled={disabled}
            />
            <MealChoiceField
              id={id}
              field="dessert"
              label="Dessert"
              options={DESSERTS}
              value={meal.dessert}
              onChange={value => updateGuest({ meal: { ...meal, dessert: value } })}
              error={errorMap[id]?.dessert}
              disabled={disabled}
            />
          </>
        )}
        <NotesField id={id} notes={notes} onChange={value => updateGuest({ notes: value })} disabled={disabled} />
      </div>
    </div>
  );
}

interface RemoveGuestButtonProps {
  index: number;
  removeGuest: () => void;
  disabled?: boolean;
}

const RemoveGuestButton = ({ index, removeGuest, disabled }: RemoveGuestButtonProps) => (
  <button
    type="button"
    onClick={() => confirm("Are you sure?") && removeGuest()}
    disabled={disabled}
    className="absolute top-6 right-6 text-sm text-red-600 hover:text-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    aria-label={`Remove Guest ${index + 1}`}
  >
    Remove
  </button>
);
