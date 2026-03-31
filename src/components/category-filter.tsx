"use client";

type CategoryFilterProps = {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            active === cat
              ? "bg-blue text-white shadow-md"
              : "bg-white text-gray-600 hover:bg-cream-dark shadow-sm"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
