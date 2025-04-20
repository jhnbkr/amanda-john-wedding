"use server";

import { formatInTimeZone } from "date-fns-tz";
import { google } from "googleapis";
import { v4 as uuidv4 } from "uuid";

import { Guest } from "./types";

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME ?? "Responses";
const TZ = process.env.TZ ?? "America/Toronto";

export async function submitRSVP(guests: Guest[]) {
  const now = new Date();
  const session = uuidv4();

  const rows = guests.map(guest => [
    guest.name,
    guest.attending ? "Yes" : "No",
    guest.meal.appetizer ?? "N/A",
    guest.meal.entree ?? "N/A",
    guest.meal.dessert ?? "N/A",
    guest.notes ?? "",
    formatInTimeZone(now, TZ, "yyyy-MM-dd"),
    formatInTimeZone(now, TZ, "hh:mm:ss a"),
    guest.id,
    session,
  ]);

  const api = google.sheets({ version: "v4", auth });
  await api.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAME}!A:G`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: rows,
    },
  });

  return { success: true };
}
