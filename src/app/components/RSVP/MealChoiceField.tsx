"use client";

import { MealChoice, MenuItem } from "./types";

interface MealChoiceFieldProps {
  id: string;
  field: keyof MealChoice;
  label: string;
  options: MenuItem[];
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

export default function MealChoiceField({
  id,
  field,
  label,
  options,
  value,
  onChange,
  error,
  disabled,
}: MealChoiceFieldProps) {
  return (
    <fieldset id={`guest-${id}-${field}`}>
      <legend className="block mb-2 text-sm font-medium text-gray-700">{label}</legend>
      <div className="flex flex-col gap-3" role="radiogroup">
        {options.map(option => (
          <label
            key={option.title}
            className={`flex items-start gap-2 p-2 rounded-md
              ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2`}
          >
            <input
              type="radio"
              name={`guest-${id}-${field}`}
              checked={value === option.title}
              onChange={() => onChange(option.title)}
              disabled={disabled}
              aria-describedby={error ? `guest-${id}-${field}-error` : undefined}
              className="mt-0.5 accent-gray-900 focus:outline-none focus:ring-0 focus:ring-offset-0"
            />
            <div className="flex-1">
              <div>{option.title}</div>
              {option.subtext && <div className="text-sm text-gray-500">{option.subtext}</div>}
            </div>
          </label>
        ))}
      </div>
      {error && (
        <p id={`guest-${id}-${field}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
