"use client";

interface AttendingFieldProps {
  id: string;
  attending?: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  disabled?: boolean;
}

export default function AttendingField({ id, attending, onChange, error, disabled }: AttendingFieldProps) {
  return (
    <fieldset id={`guest-${id}-attending`}>
      <legend className="block mb-3 text-sm font-medium text-gray-700">Will you attend?</legend>
      <div className="flex gap-6" role="radiogroup">
        {[
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ].map(opt => (
          <label
            key={opt.label}
            className={`flex items-center gap-2 p-2 rounded-md
              ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2`}
          >
            <input
              type="radio"
              name={`guest-${id}-attending`}
              checked={attending === opt.value}
              onChange={() => onChange(opt.value)}
              disabled={disabled}
              aria-describedby={error ? `guest-${id}-attending-error` : undefined}
              className="mt-0.5 accent-gray-900 focus:outline-none focus:ring-0 focus:ring-offset-0"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p id={`guest-${id}-attending-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
