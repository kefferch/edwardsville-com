"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { events, eventCategories } from "@/data/events";
import { CategoryFilter } from "@/components/category-filter";
import { PageHeader } from "@/components/page-header";

const eventPhotos = [
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
];

function formatEventDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatShortDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate().toString(),
  };
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? events
      : events.filter((e) => e.category === activeCategory);

  const sorted = [...filtered].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <PageHeader
        title="What's On"
        subtitle="Upcoming events in and around Edwardsville"
        label="Events Calendar"
        image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1920&q=80"
      />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <CategoryFilter
            categories={eventCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
          <Link
            href="/events/submit"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gold text-white text-sm font-semibold hover:bg-gold-light transition-colors shrink-0 shadow-sm"
          >
            Submit an Event
          </Link>
        </div>

        {/* Featured event — large hero card */}
        {featured && (
          <div className="group relative rounded-2xl overflow-hidden h-80 md:h-96 mb-10 shadow-sm hover:shadow-xl transition-shadow">
            <Image
              src={eventPhotos[0]}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm mb-3">
                {featured.category}
              </span>
              <h3 className="font-serif font-bold text-white text-3xl md:text-4xl leading-snug">
                {featured.title}
              </h3>
              <p className="text-white/70 text-sm mt-3">
                {formatEventDate(featured.date)} &middot; {featured.time}
              </p>
              <p className="text-white/60 text-sm">{featured.location}</p>
              <p className="text-white/50 text-sm mt-2 max-w-2xl">{featured.description}</p>
            </div>
          </div>
        )}

        {/* Rest in grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((event, i) => {
            const { month, day } = formatShortDate(event.date);
            return (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-44">
                  <Image
                    src={eventPhotos[(i + 1) % eventPhotos.length]}
                    alt={event.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-md">
                    <p className="text-xs font-bold text-gold uppercase">{month}</p>
                    <p className="text-xl font-bold text-foreground leading-none">{day}</p>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-blue/10 text-blue mb-2">
                    {event.category}
                  </span>
                  <h3 className="font-serif font-semibold text-foreground text-lg leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{event.time}</p>
                  <p className="text-sm text-gray-400">{event.location}</p>
                </div>
              </div>
            );
          })}
        </div>

        {sorted.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No events found in this category.
          </p>
        )}
      </div>
    </>
  );
}
