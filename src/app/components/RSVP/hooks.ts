import { useMemo } from "react";

import { GuestError } from "./types";

export const useGuestErrors = (errors: GuestError[]) => {
  return useMemo(() => {
    const map: Record<string, Record<string, string>> = {};
    for (const error of errors) {
      if (!map[error.guest]) map[error.guest] = {};
      map[error.guest][error.field] = error.message;
    }
    return map;
  }, [errors]);
};
