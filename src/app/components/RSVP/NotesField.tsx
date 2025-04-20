"use client";

import { MAX_NOTES_LENGTH } from "./constants";

interface NotesFieldProps {
  id: string;
  notes: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function NotesField({ id, notes, onChange, disabled }: NotesFieldProps) {
  return (
    <div>
      <label htmlFor={`notes-${id}`} className="block text-sm font-medium text-gray-700">
        Additional notes
      </label>
      <textarea
        id={`guest-${id}-notes`}
        rows={3}
        maxLength={MAX_NOTES_LENGTH}
        value={notes}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        className="w-full p-3 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        aria-describedby={`guest-${id}-notes-desc`}
      />
      <div id={`guest-${id}-notes-desc`} className="text-sm text-gray-500 text-right">
        {notes.length}/{MAX_NOTES_LENGTH} characters
      </div>
    </div>
  );
}
