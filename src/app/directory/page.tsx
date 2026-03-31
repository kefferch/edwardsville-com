"use client";

import { useState } from "react";
import { businesses, businessCategories } from "@/data/businesses";
import { PageHeader } from "@/components/page-header";

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
        title="Business Directory"
        subtitle="Explore local businesses in Edwardsville"
      />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <div className="sticky top-24">
              <input
                type="text"
                placeholder="Search businesses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue focus:border-transparent mb-6"
              />
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Categories
              </h3>
              <ul className="space-y-1">
                {businessCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === cat
                          ? "bg-blue text-white font-medium"
                          : "text-gray-600 hover:bg-gray-100"
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
            <div className="space-y-3">
              {filtered.map((biz) => (
                <div
                  key={biz.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {biz.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {biz.description}
                      </p>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                      {biz.category}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400">
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
