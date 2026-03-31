"use client";

import { useState } from "react";
import { businesses, businessCategories } from "@/data/businesses";
import { PageHeader } from "@/components/page-header";

const categoryColors: Record<string, string> = {
  "Restaurants & Bars": "bg-gold/15 text-gold",
  "Coffee & Bakery": "bg-amber-100 text-amber-700",
  "Health & Fitness": "bg-green-100 text-green-700",
  "Auto & Home": "bg-blue/10 text-blue",
  Shopping: "bg-purple-100 text-purple-700",
  "Professional Services": "bg-gray-100 text-gray-600",
  Entertainment: "bg-pink-100 text-pink-700",
};

export default function DirectoryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = businesses.filter((b) => {
    const matchesCategory =
      activeCategory === "All" || b.category === activeCategory;
    const matchesSearch =
      search === "" ||
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader
        title="Local Business Directory"
        subtitle="Explore and support local businesses in Edwardsville"
        label="Directory"
        image="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80"
      />
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search businesses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-white text-foreground shadow-sm text-base placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-gold focus:shadow-md transition-shadow"
            />
            <svg
              className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Categories
              </h3>
              <ul className="space-y-1">
                {businessCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                        activeCategory === cat
                          ? "bg-blue text-white font-medium shadow-sm"
                          : "text-gray-600 hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Listings */}
          <div className="flex-1">
            <p className="text-sm text-gray-400 mb-4">
              {filtered.length} business{filtered.length !== 1 ? "es" : ""} found
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map((biz) => (
                <div
                  key={biz.id}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif font-semibold text-foreground text-lg">
                      {biz.name}
                    </h3>
                    <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[biz.category] || "bg-gray-100 text-gray-500"}`}>
                      {biz.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{biz.description}</p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                    <span>{biz.address}</span>
                    <span>{biz.phone}</span>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-gray-400 py-12">
                No businesses found. Try a different search or category.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
