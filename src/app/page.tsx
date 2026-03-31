import Link from "next/link";
import { restaurants } from "@/data/restaurants";
import { events } from "@/data/events";
import { deals } from "@/data/deals";

function formatEventDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function HomePage() {
  const featuredRestaurants = restaurants.slice(0, 6);
  const todayEvents = events.slice(0, 4);
  const latestDeals = deals.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Your Edwardsville, Every Day
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Discover restaurants, events, deals, and local businesses in Edwardsville, Illinois.
          </p>
          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants, events, businesses..."
                className="w-full px-5 py-4 rounded-xl text-gray-900 bg-white shadow-lg text-base placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-gold"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Happening Soon */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Happening Soon</h2>
          <Link
            href="/events"
            className="text-blue font-medium text-sm hover:underline"
          >
            View all events &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {todayEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-blue/10 text-blue mb-3">
                {event.category}
              </span>
              <h3 className="font-semibold text-gray-900 leading-snug">{event.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {formatEventDate(event.date)} &middot; {event.time}
              </p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eat Local */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Eat Local</h2>
            <Link
              href="/eat"
              className="text-blue font-medium text-sm hover:underline"
            >
              All restaurants &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredRestaurants.map((r) => (
              <div
                key={r.id}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-gray-900">{r.name}</h3>
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-gold/15 text-gold-light">
                    {r.cuisine}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{r.description}</p>
                <div className="mt-3 text-xs text-gray-400">
                  {r.hours} &middot; {r.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Deals */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Deals</h2>
          <Link
            href="/deals"
            className="text-blue font-medium text-sm hover:underline"
          >
            All deals &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white border-2 border-gold/30 rounded-xl p-6 hover:shadow-lg hover:border-gold/60 transition-all"
            >
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold mb-3">
                {deal.category}
              </span>
              <h3 className="font-bold text-gray-900 text-lg">{deal.business}</h3>
              <p className="text-gray-600 mt-2">{deal.deal}</p>
              <p className="text-xs text-gray-400 mt-3">Expires: {deal.expiry}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
