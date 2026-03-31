export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  address: string;
  phone: string;
  hours: string;
  website?: string;
  description: string;
};

export const cuisineCategories = [
  "All",
  "American",
  "Italian",
  "Mexican",
  "Asian",
  "Pizza",
  "Coffee",
] as const;

export const restaurants: Restaurant[] = [
  {
    id: "sneakys",
    name: "Sneaky's Burger Joint",
    cuisine: "American",
    address: "212 N Main St, Edwardsville, IL",
    phone: "(618) 307-9010",
    hours: "11am - 9pm",
    description:
      "Fan-favorite burgers and shakes in a laid-back, no-frills setting downtown.",
  },
  {
    id: "cleveland-heath",
    name: "Cleveland-Heath",
    cuisine: "American",
    address: "106 N Main St, Edwardsville, IL",
    phone: "(618) 307-4830",
    hours: "11am - 10pm",
    website: "https://www.cleveland-heath.com",
    description:
      "Upscale American fare with craft cocktails and a warm, modern ambiance.",
  },
  {
    id: "artisan-bakery",
    name: "Artisan Bakery & Cafe",
    cuisine: "Coffee",
    address: "230 N Main St, Edwardsville, IL",
    phone: "(618) 655-1010",
    hours: "6:30am - 3pm",
    description:
      "Fresh-baked pastries, artisan breads, and specialty coffee every morning.",
  },
  {
    id: "edisons",
    name: "Edison's Entertainment Complex",
    cuisine: "American",
    address: "2477 S State Rte 157, Edwardsville, IL",
    phone: "(618) 692-1122",
    hours: "11am - 12am",
    website: "https://www.edisonsusa.com",
    description:
      "Full-service restaurant, bowling, and live entertainment under one roof.",
  },
  {
    id: "bin51",
    name: "Bin 51 Wine & Spirits",
    cuisine: "American",
    address: "2509 S State Rte 157, Edwardsville, IL",
    phone: "(618) 692-5100",
    hours: "11am - 10pm",
    description:
      "Wine bar with elevated small plates, charcuterie boards, and live jazz nights.",
  },
  {
    id: "mias-italian",
    name: "Mia's Italian Kitchen",
    cuisine: "Italian",
    address: "142 N Main St, Edwardsville, IL",
    phone: "(618) 656-4400",
    hours: "11am - 9:30pm",
    description:
      "Classic Italian dishes, housemade pasta, and wood-fired pizzas in a cozy trattoria.",
  },
  {
    id: "casa-patron",
    name: "Casa del Patron",
    cuisine: "Mexican",
    address: "1025 Century Dr, Edwardsville, IL",
    phone: "(618) 692-8800",
    hours: "11am - 10pm",
    description:
      "Authentic Mexican cuisine with fresh-made tortillas, salsas, and margaritas.",
  },
  {
    id: "lucky-wok",
    name: "Lucky Wok Asian Bistro",
    cuisine: "Asian",
    address: "320 S Buchanan St, Edwardsville, IL",
    phone: "(618) 656-1234",
    hours: "11am - 9:30pm",
    description:
      "Pan-Asian favorites from pad thai to sushi rolls, prepared fresh daily.",
  },
  {
    id: "peel-pizza",
    name: "Peel Wood Fired Pizza",
    cuisine: "Pizza",
    address: "921 S Arbor Vitae, Edwardsville, IL",
    phone: "(618) 659-8561",
    hours: "11am - 9pm",
    website: "https://www.peelpizza.com",
    description:
      "Neapolitan-style wood-fired pizzas with locally sourced ingredients.",
  },
  {
    id: "global-brew",
    name: "Global Brew Tap House",
    cuisine: "American",
    address: "124 N Main St, Edwardsville, IL",
    phone: "(618) 307-5858",
    hours: "11am - 12am",
    description:
      "Rotating taps with 50+ craft beers paired with elevated pub fare.",
  },
  {
    id: "beans-leaves",
    name: "Beans & Leaves",
    cuisine: "Coffee",
    address: "206 N Main St, Edwardsville, IL",
    phone: "(618) 655-9090",
    hours: "6am - 5pm",
    description:
      "Cozy neighborhood coffee shop with specialty lattes and loose-leaf teas.",
  },
  {
    id: "main-street-tacos",
    name: "Main Street Tacos",
    cuisine: "Mexican",
    address: "118 N Main St, Edwardsville, IL",
    phone: "(618) 307-2222",
    hours: "10:30am - 9pm",
    description:
      "Street-style tacos, burritos, and loaded nachos with house-made guacamole.",
  },
];
