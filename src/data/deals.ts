export type Deal = {
  id: string;
  business: string;
  deal: string;
  expiry: string;
  category: string;
};

export const deals: Deal[] = [
  {
    id: "sneakys-bogo",
    business: "Sneaky's Burger Joint",
    deal: "Buy one burger, get one 50% off every Tuesday",
    expiry: "Ongoing",
    category: "Restaurant",
  },
  {
    id: "peel-lunch",
    business: "Peel Wood Fired Pizza",
    deal: "$10 lunch special — personal pizza + drink, Mon-Fri 11am-2pm",
    expiry: "Apr 30, 2026",
    category: "Restaurant",
  },
  {
    id: "beans-loyalty",
    business: "Beans & Leaves",
    deal: "Free drink after 10 purchases with loyalty card",
    expiry: "Ongoing",
    category: "Coffee",
  },
  {
    id: "edisons-bowling",
    business: "Edison's Entertainment Complex",
    deal: "$5 bowling games on Sundays from 10am-1pm. Shoes included.",
    expiry: "May 31, 2026",
    category: "Entertainment",
  },
  {
    id: "main-street-fitness",
    business: "Main Street Fitness",
    deal: "First month free for new members. No contract required.",
    expiry: "Apr 15, 2026",
    category: "Health",
  },
  {
    id: "eville-auto",
    business: "Edwardsville Auto Spa",
    deal: "20% off any full detail service when you book online",
    expiry: "Apr 30, 2026",
    category: "Auto",
  },
  {
    id: "casa-patron-margaritas",
    business: "Casa del Patron",
    deal: "Half-price margaritas every Thursday, all day",
    expiry: "Ongoing",
    category: "Restaurant",
  },
  {
    id: "green-earth",
    business: "Green Earth Garden Center",
    deal: "Buy 3 plants, get 1 free — spring planting sale",
    expiry: "Apr 20, 2026",
    category: "Retail",
  },
];
