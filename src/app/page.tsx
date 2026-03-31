import Link from "next/link";
import Image from "next/image";
import { restaurants } from "@/data/restaurants";
import { events } from "@/data/events";
import { deals } from "@/data/deals";
import { discussions } from "@/data/discussions";

const quickLinks = [
  { href: "/eat", icon: "\u{1F37D}", label: "Restaurants" },
  { href: "/events", icon: "\u{1F4C5}", label: "Events" },
  { href: "/deals", icon: "\u{1F3F7}", label: "Deals" },
  { href: "/directory", icon: "\u{1F3E2}", label: "Directory" },
  { href: "/discussions", icon: "\u{1F4AC}", label: "Discussions" },
];

const eventImages = [
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
];

const restaurantImages: Record<string, string> = {
  American: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  Italian: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  Mexican: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
  Asian: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  Pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  Coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
};

const dealImages = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
];

function formatEventDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  Technology: "bg-blue/10 text-blue",
  Announcements: "bg-gold/15 text-gold",
  "Real Estate": "bg-green-100 text-green-700",
  Community: "bg-purple-100 text-purple-700",
  Business: "bg-orange-100 text-orange-700",
  Funny: "bg-pink-100 text-pink-700",
  Events: "bg-teal-100 text-teal-700",
};

export default function HomePage() {
  const featuredRestaurants = restaurants.slice(0, 6);
  const featuredEvents = events.slice(0, 3);
  const latestDeals = deals.slice(0, 4);
  const recentDiscussions = discussions.slice(0, 4);

  return (
    <>
      {/* Hero — full viewport */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden -mt-16">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Downtown_Edwardsville_Illinois.jpg"
          alt="Downtown Edwardsville"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-6">
            Edwardsville, Illinois
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
            Your Town,<br />Every Day
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Discover the best of Edwardsville — local eats, events, deals, and community
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/eat"
              className="px-8 py-3.5 rounded-full bg-blue text-white font-semibold text-sm hover:bg-blue-light transition-colors shadow-lg"
            >
              Explore Restaurants
            </Link>
            <Link
              href="/events"
              className="px-8 py-3.5 rounded-full border-2 border-white/60 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Upcoming Events
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick links bar */}
      <section className="bg-cream border-b border-cream-dark">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:text-blue transition-all"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Happening This Week */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              What&apos;s On
            </p>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Happening This Week
              </h2>
              <Link href="/events" className="text-blue font-medium text-sm hover:underline hidden sm:block">
                View all events &rarr;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event, i) => (
              <div key={event.id} className="group relative rounded-2xl overflow-hidden h-80 shadow-sm hover:shadow-xl transition-shadow">
                <Image
                  src={eventImages[i]}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm mb-3">
                    {event.category}
                  </span>
                  <h3 className="font-serif font-bold text-white text-xl leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-2">
                    {formatEventDate(event.date)} &middot; {event.time}
                  </p>
                  <p className="text-white/60 text-sm">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taste Edwardsville — horizontal scroll */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              Eat Local
            </p>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Taste Edwardsville
              </h2>
              <Link href="/eat" className="text-blue font-medium text-sm hover:underline hidden sm:block">
                All restaurants &rarr;
              </Link>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
            {featuredRestaurants.map((r) => (
              <div
                key={r.id}
                className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-44">
                  <Image
                    src={restaurantImages[r.cuisine] || restaurantImages.American}
                    alt={r.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif font-semibold text-foreground text-lg">{r.name}</h3>
                    <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-gold/15 text-gold">
                      {r.cuisine}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This Week's Deals */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              Save Local
            </p>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                This Week&apos;s Deals
              </h2>
              <Link href="/deals" className="text-blue font-medium text-sm hover:underline hidden sm:block">
                All deals &rarr;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestDeals.map((deal, i) => (
              <div
                key={deal.id}
                className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex"
              >
                <div className="relative w-32 md:w-44 shrink-0">
                  <Image
                    src={dealImages[i % dealImages.length]}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-blue/30" />
                </div>
                <div className="p-6 flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gold/15 text-gold mb-3">
                    {deal.category}
                  </span>
                  <h3 className="font-serif font-bold text-foreground text-lg">{deal.business}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{deal.deal}</p>
                  <p className="text-xs text-gray-400 mt-3">
                    {deal.expiry === "Ongoing" ? "Ongoing offer" : `Expires: ${deal.expiry}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Pulse */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              Community
            </p>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Community Pulse
              </h2>
              <Link href="/discussions" className="text-blue font-medium text-sm hover:underline hidden sm:block">
                All discussions &rarr;
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            {recentDiscussions.map((d) => (
              <Link
                key={d.id}
                href={`/discussions/${d.id}`}
                className="block bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${CATEGORY_COLORS[d.category] || "bg-gray-100 text-gray-600"}`}>
                        {d.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground leading-snug truncate">{d.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {d.author} &middot; {d.replies} replies &middot; {d.views.toLocaleString()} views
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
