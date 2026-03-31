import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { deals } from "@/data/deals";

const dealPhotos = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
];

const categoryColors: Record<string, string> = {
  Restaurant: "bg-gold",
  Coffee: "bg-amber-700",
  Entertainment: "bg-purple-600",
  Health: "bg-green-600",
  Auto: "bg-blue",
  Retail: "bg-rose-600",
};

export default function DealsPage() {
  return (
    <>
      <PageHeader
        title="This Week's Deals"
        subtitle="Save money at Edwardsville's best local businesses"
        label="Local Deals"
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80"
      />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((deal, i) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-40">
                <Image
                  src={dealPhotos[i % dealPhotos.length]}
                  alt={deal.business}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Colored accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${categoryColors[deal.category] || "bg-blue"}`} />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gold/15 text-gold">
                    {deal.category}
                  </span>
                  {deal.expiry !== "Ongoing" ? (
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-500">
                      Expires {deal.expiry}
                    </span>
                  ) : (
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600">
                      Ongoing
                    </span>
                  )}
                </div>
                <h3 className="font-serif font-bold text-foreground text-lg">{deal.business}</h3>
                <p className="text-gray-600 mt-2 text-sm flex-1">{deal.deal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
