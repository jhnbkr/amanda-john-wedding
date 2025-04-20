"use server";

import { formatInTimeZone } from "date-fns-tz";
import { google } from "googleapis";
import { v4 as uuidv4 } from "uuid";

import { Guest } from "./types";

const API_VERSION = "v4";
const API_AUTH = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME;
const SHEET_TIMEZONE = process.env.GOOGLE_SHEET_TIMEZONE ?? "UTC";

export async function submitRSVP(guests: Guest[]) {
  const timestamp = Date.now();
  const session = uuidv4();

  const rows = guests.map(guest => [
    guest.name,
    guest.attending ? "Yes" : "No",
    guest.meal.appetizer ?? "N/A",
    guest.meal.entree ?? "N/A",
    guest.meal.dessert ?? "N/A",
    guest.notes ?? "",
    formatInTimeZone(timestamp, SHEET_TIMEZONE, "yyyy-MM-dd"),
    formatInTimeZone(timestamp, SHEET_TIMEZONE, "hh:mm:ss a"),
    guest.id,
    session,
    timestamp,
  ]);

  const api = google.sheets({ version: API_VERSION, auth: API_AUTH });
  await api.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${SHEET_NAME}!A:K`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: rows,
    },
  });
}
