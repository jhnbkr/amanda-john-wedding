import { APPETIZERS, DESSERTS, ENTREES } from "./constants";

export type Appetizer = (typeof APPETIZERS)[number];
export type Entree = (typeof ENTREES)[number];
export type Dessert = (typeof DESSERTS)[number];

export interface MealChoice {
  appetizer?: Appetizer;
  entree?: Entree;
  dessert?: Dessert;
}

export interface Guest {
  id: string;
  name: string;
  attending?: boolean;
  meal: MealChoice;
  notes: string;
}

export interface GuestError {
  guest: string;
  field: string;
  message: string;
}
