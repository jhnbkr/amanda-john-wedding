import { MealChoice } from "./types";

interface MealChoiceFieldProps<T extends string> {
  id: string;
  field: keyof MealChoice;
  label: string;
  options: readonly T[];
  value?: T;
  onChange: (value: T) => void;
  error?: string;
  disabled?: boolean;
}

export default function MealChoiceField<T extends string>({
  id,
  field,
  label,
  options,
  value,
  onChange,
  error,
  disabled,
}: MealChoiceFieldProps<T>) {
  return (
    <fieldset>
      <legend className="block mb-2 text-sm font-medium text-gray-700">{label}</legend>
      <div className="flex flex-col gap-3">
        {options.map(option => (
          <label
            key={option}
            className={`flex items-center gap-2 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          >
            <input
              type="radio"
              name={`${field}-${id}`}
              checked={value === option}
              onChange={() => onChange(option as T)}
              disabled={disabled}
              aria-describedby={error ? `${field}-${id}-error` : undefined}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {error && (
        <p id={`${field}-${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
