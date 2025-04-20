import { MenuItem } from "./types";

export const APPETIZERS: MenuItem[] = [
  {
    title: "Artisanal Mixed Greens",
    subtext: "Fresh seasonal greens with house vinaigrette",
  },
  {
    title: "Caprese Salad",
    subtext: "Fresh mozzarella, heirloom tomatoes, basil, balsamic reduction",
  },
  {
    title: "Caesar Salad",
    subtext: "Crisp romaine, smoked pork belly, garlic croutons, parmesan",
  },
];

export const ENTREES: MenuItem[] = [
  {
    title: "AAA Beef Striploin",
    subtext: "Roasted potatoes, seasonal vegetables, red wine beef jus",
  },
  {
    title: "Chicken Supreme",
    subtext: "Masala cream sauce, truffled mushrooms, garlic mashed potatoes, Ontario root vegetables",
  },
  {
    title: "Butternut Squash Ravioli",
    subtext: "Chardonnay sage butter sauce, toasted pine nuts, crispy sage (V)",
  },
];

export const DESSERTS: MenuItem[] = [
  {
    title: "Strawberry Mason Shortcake",
    subtext: "Fresh strawberries, vanilla cream, buttery shortcake crumble",
  },
  {
    title: "Chocolate Truffle Mousse",
    subtext: "Dark chocolate, fresh berries, chantilly cream",
  },
  {
    title: "Baked Apple Betty",
    subtext: "Warm spiced apples, brown sugar streusel, vanilla bean ice cream",
  },
];

export const GUEST_LIMIT = 3;
export const MAX_NAME_LENGTH = 50;
export const MAX_NOTES_LENGTH = 200;
