"use client";

import { useState } from "react";
import Link from "next/link";
import { events, eventCategories } from "@/data/events";
import { CategoryFilter } from "@/components/category-filter";
import { PageHeader } from "@/components/page-header";

function formatEventDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
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

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="What's happening in Edwardsville"
      />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <CategoryFilter
            categories={eventCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
          <Link
            href="/events/submit"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gold text-white text-sm font-semibold hover:bg-gold-light transition-colors shrink-0"
          >
            Submit an Event
          </Link>
        </div>

        <div className="space-y-4">
          {sorted.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-4 md:gap-8"
            >
              <div className="md:w-44 shrink-0">
                <p className="text-sm font-semibold text-blue">
                  {formatEventDate(event.date)}
                </p>
                <p className="text-sm text-gray-500 mt-1">{event.time}</p>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {event.title}
                  </h3>
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-blue/10 text-blue">
                    {event.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
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
