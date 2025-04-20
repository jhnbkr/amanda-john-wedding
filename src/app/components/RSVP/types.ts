export interface MenuItem {
  title: string;
  subtext?: string;
}

export interface MealChoice {
  appetizer?: string;
  entree?: string;
  dessert?: string;
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
