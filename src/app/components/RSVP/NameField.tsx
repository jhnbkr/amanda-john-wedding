"use client";

import { MAX_NAME_LENGTH } from "./constants";

interface NameFieldProps {
  id: string;
  name: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

export default function NameField({ id, name, onChange, error, disabled }: NameFieldProps) {
  return (
    <div>
      <label htmlFor={`guest-${id}-name`} className="block text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        id={`guest-${id}-name`}
        type="text"
        maxLength={MAX_NAME_LENGTH}
        value={name}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        aria-describedby={error ? `guest-${id}-name-error` : undefined}
        className={`w-full p-3 border ${
          error ? "border-red-500" : "border-gray-200"
        } rounded-lg disabled:opacity-50 disabled:cursor-not-allowed`}
      />
      {error && (
        <p id={`guest-${id}-name-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
