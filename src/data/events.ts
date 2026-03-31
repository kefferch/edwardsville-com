export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
};

export const eventCategories = [
  "All",
  "Sports",
  "Arts",
  "Community",
  "Business",
  "Food",
] as const;

export const events: Event[] = [
  {
    id: "siue-basketball",
    title: "SIUE Cougars Basketball vs. Murray State",
    date: "2026-04-05",
    time: "7:00 PM",
    location: "First Community Arena, SIUE Campus",
    description:
      "Cheer on the Cougars as they take on Murray State in an OVC conference matchup. Student section opens at 6:15 PM.",
    category: "Sports",
  },
  {
    id: "farmers-market",
    title: "Edwardsville Farmers Market",
    date: "2026-04-12",
    time: "8:00 AM - 12:00 PM",
    location: "City Park, N Main St",
    description:
      "Fresh produce, baked goods, honey, flowers, and handmade crafts from local growers and artisans.",
    category: "Food",
  },
  {
    id: "downtown-art-walk",
    title: "Downtown Art Walk",
    date: "2026-04-18",
    time: "5:00 PM - 9:00 PM",
    location: "Main Street, Downtown Edwardsville",
    description:
      "Local galleries and shops open their doors for an evening of art, live music, and complimentary refreshments.",
    category: "Arts",
  },
  {
    id: "trivia-night",
    title: "Trivia Night at Global Brew",
    date: "2026-04-08",
    time: "7:30 PM",
    location: "Global Brew Tap House, 124 N Main St",
    description:
      "Teams of up to 6 compete for prizes and bragging rights. Reservations recommended. Free to play.",
    category: "Community",
  },
  {
    id: "school-board",
    title: "Edwardsville School Board Meeting",
    date: "2026-04-14",
    time: "7:00 PM",
    location: "District 7 Admin Center, 708 St. Louis St",
    description:
      "Monthly public meeting covering budget updates, curriculum proposals, and community Q&A.",
    category: "Community",
  },
  {
    id: "community-5k",
    title: "Run Edwardsville 5K",
    date: "2026-04-19",
    time: "8:00 AM",
    location: "SIUE Gardens, University Park Dr",
    description:
      "Family-friendly 5K run/walk through the SIUE campus trails. Proceeds benefit local youth programs.",
    category: "Sports",
  },
  {
    id: "bni-networking",
    title: "BNI Edwardsville Morning Networking",
    date: "2026-04-03",
    time: "7:45 AM - 9:30 AM",
    location: "RP Lumber Center, Edwardsville",
    description:
      "Weekly business networking breakfast. Visitors welcome to learn about referral-based marketing.",
    category: "Business",
  },
  {
    id: "jazz-night",
    title: "Jazz Night at Bin 51",
    date: "2026-04-11",
    time: "7:00 PM - 10:00 PM",
    location: "Bin 51 Wine & Spirits, 2509 S State Rte 157",
    description:
      "Live jazz trio performs while you enjoy wine, charcuterie, and good company. No cover charge.",
    category: "Arts",
  },
  {
    id: "food-truck-friday",
    title: "Food Truck Friday",
    date: "2026-04-25",
    time: "11:00 AM - 2:00 PM",
    location: "City Hall Parking Lot, Vandalia St",
    description:
      "A rotating lineup of the region's best food trucks. This month: BBQ, tacos, Greek, and ice cream.",
    category: "Food",
  },
  {
    id: "spring-cleanup",
    title: "Edwardsville Spring Community Cleanup",
    date: "2026-04-26",
    time: "9:00 AM - 12:00 PM",
    location: "Meet at Leclaire Park Pavilion",
    description:
      "Volunteers gather to clean parks, trails, and public spaces. Gloves and bags provided. All ages welcome.",
    category: "Community",
  },
];
