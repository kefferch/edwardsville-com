"use client";

import { useState } from "react";
import { restaurants, cuisineCategories } from "@/data/restaurants";
import { CategoryFilter } from "@/components/category-filter";
import { PageHeader } from "@/components/page-header";

export default function EatPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? restaurants
      : restaurants.filter((r) => r.cuisine === activeCategory);

  return (
    <>
      <PageHeader
        title="Eat Local"
        subtitle="Discover the best restaurants and cafes in Edwardsville"
      />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <CategoryFilter
          categories={cuisineCategories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">{r.name}</h3>
                <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-blue/10 text-blue">
                  {r.cuisine}
                </span>
              </div>
              <p className="text-sm text-gray-500 flex-1">{r.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5">
                <p className="text-sm text-gray-600">{r.address}</p>
                <p className="text-sm text-gray-600">{r.phone}</p>
                <p className="text-sm text-gray-400">{r.hours}</p>
              </div>
              {r.website && (
                <a
                  href={r.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue text-white text-sm font-medium hover:bg-blue-light transition-colors"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No restaurants found in this category.
          </p>
        )}
      </div>
    </>
  );
}
