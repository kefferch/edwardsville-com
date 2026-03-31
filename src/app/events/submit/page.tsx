import { PageHeader } from "@/components/page-header";

export default function SubmitEventPage() {
  return (
    <>
      <PageHeader
        title="Submit an Event"
        subtitle="Share what's happening in Edwardsville"
        label="Events"
        image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1920&q=80"
      />
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <svg
            className="w-16 h-16 mx-auto text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h2 className="text-2xl font-serif font-bold text-foreground mt-6">
            Event Submission Coming Soon
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            We&apos;re building a simple way for you to submit community events.
            In the meantime, reach out to us and we&apos;ll get your event listed.
          </p>
        </div>
      </div>
    </>
  );
}
