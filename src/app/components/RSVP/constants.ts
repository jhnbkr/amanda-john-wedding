import { MenuItem } from "./types";

export const APPETIZERS: MenuItem[] = [
  {
    title: "Artisanal Mixed Greens",
  },
  {
    title: "Caprese Salad",
  },
  {
    title: "Caesar Salad",
  },
];

export const ENTREES: MenuItem[] = [
  {
    title: "AAA Beef Striploin",
    subtext: "Roasted potatoes, seasonal vegetables, beef jus",
  },
  {
    title: "Chicken Supreme",
    subtext: "Masala cream sauce, truffled mushrooms, garlic mashed potatoes, Ontario root vegetables",
  },
  {
    title: "Butternut Squash Ravioli",
    subtext: "Chardonnay sage butter sauce (V)",
  },
];

export const DESSERTS: MenuItem[] = [
  {
    title: "Strawberry Mason Shortcake",
  },
  {
    title: "Chocolate Truffle Mousse",
  },
  {
    title: "Baked Apple Betty",
  },
];

export const GUEST_LIMIT = 3;
export const MAX_NAME_LENGTH = 50;
export const MAX_NOTES_LENGTH = 200;
