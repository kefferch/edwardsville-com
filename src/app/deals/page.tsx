import { PageHeader } from "@/components/page-header";
import { deals } from "@/data/deals";

export default function DealsPage() {
  return (
    <>
      <PageHeader
        title="Local Deals"
        subtitle="Save money at Edwardsville's best businesses"
      />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white border-2 border-gold/30 rounded-xl p-6 hover:shadow-lg hover:border-gold/60 transition-all flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold">
                  {deal.category}
                </span>
                {deal.expiry !== "Ongoing" && (
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-500">
                    Expires {deal.expiry}
                  </span>
                )}
                {deal.expiry === "Ongoing" && (
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600">
                    Ongoing
                  </span>
                )}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{deal.business}</h3>
              <p className="text-gray-600 mt-2 flex-1">{deal.deal}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
