"use client";

import { useState } from "react";
import Image from "next/image";
import { restaurants, cuisineCategories } from "@/data/restaurants";
import { CategoryFilter } from "@/components/category-filter";
import { PageHeader } from "@/components/page-header";

const cuisineImages: Record<string, string> = {
  American: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  Italian: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  Mexican: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
  Asian: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  Pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  Coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
};

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
        label="Dining Guide"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
      />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <CategoryFilter
            categories={cuisineCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={cuisineImages[r.cuisine] || cuisineImages.American}
                  alt={r.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif font-semibold text-foreground text-lg">{r.name}</h3>
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-gold/15 text-gold">
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
                    className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-blue text-white text-sm font-medium hover:bg-blue-light transition-colors"
                  >
                    Visit Website
                  </a>
                )}
              </div>
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
