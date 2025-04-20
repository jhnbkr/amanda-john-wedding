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
      <label htmlFor={`name-${id}`} className="block text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        id={`name-${id}`}
        type="text"
        maxLength={MAX_NAME_LENGTH}
        value={name}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        aria-describedby={error ? `name-${id}-error` : undefined}
        className={`w-full p-3 border ${
          error ? "border-red-500" : "border-gray-200"
        } rounded-lg disabled:opacity-50 disabled:cursor-not-allowed`}
      />
      {error && (
        <p id={`name-${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
