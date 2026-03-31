import { MessageSquare, Eye, Clock, BadgeCheck, Pin } from "lucide-react";
import Link from "next/link";
import { discussions, CATEGORIES, type Discussion } from "@/data/discussions";
import { PageHeader } from "@/components/page-header";

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  Technology: "bg-blue/10 text-blue",
  Announcements: "bg-gold/15 text-gold",
  "Real Estate": "bg-green-100 text-green-700",
  Community: "bg-purple-100 text-purple-700",
  Business: "bg-orange-100 text-orange-700",
  Funny: "bg-pink-100 text-pink-700",
  Events: "bg-teal-100 text-teal-700",
};

function DiscussionRow({ d }: { d: Discussion }) {
  return (
    <div className="flex items-start gap-4 px-6 py-5 hover:bg-cream/50 transition-colors group">
      <div className="hidden sm:flex w-10 h-10 rounded-full bg-blue/8 items-center justify-center flex-shrink-0 mt-0.5">
        <MessageSquare className="w-4 h-4 text-blue/60" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          {d.pinned && <Pin className="w-3.5 h-3.5 text-gold flex-shrink-0" />}
          <Link
            href={`/discussions/${d.id}`}
            className="font-semibold text-foreground group-hover:text-blue transition-colors leading-snug"
          >
            {d.title}
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
          <span>{d.author}</span>
          {d.verified && (
            <span className="flex items-center gap-1 text-blue font-medium">
              <BadgeCheck className="w-3.5 h-3.5" />
              {d.verified}
            </span>
          )}
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
              CATEGORY_COLORS[d.category] || "bg-gray-100 text-gray-600"
            }`}
          >
            {d.category}
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 flex-shrink-0 text-sm text-gray-500">
        <div className="flex items-center gap-1.5 w-16 justify-end">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{d.replies}</span>
        </div>
        <div className="flex items-center gap-1.5 w-20 justify-end">
          <Eye className="w-3.5 h-3.5" />
          <span>{d.views.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1.5 w-20 justify-end text-xs">
          <Clock className="w-3.5 h-3.5" />
          <span>{timeAgo(d.lastActivity)}</span>
        </div>
      </div>
    </div>
  );
}

export default function DiscussionsPage() {
  return (
    <>
      <PageHeader
        title="Community Discussions"
        subtitle="What's the community talking about?"
        label="Community"
        image="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-5xl mx-auto w-full px-6 py-10">
        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>
              <strong className="text-foreground">{discussions.length}</strong>{" "}
              discussions
            </span>
            <span>
              <strong className="text-foreground">
                {discussions.reduce((a, d) => a + d.replies, 0)}
              </strong>{" "}
              replies
            </span>
            <span>
              <strong className="text-foreground">
                {discussions
                  .reduce((a, d) => a + d.views, 0)
                  .toLocaleString()}
              </strong>{" "}
              total views
            </span>
          </div>
          <Link
            href="/discussions/new"
            className="inline-flex items-center gap-2 bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-light transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Start a Discussion
          </Link>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === "All"
                  ? "bg-blue text-white shadow-sm"
                  : "bg-white text-gray-600 shadow-sm hover:shadow-md hover:text-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Discussion list */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="hidden md:flex items-center px-6 py-3 bg-cream border-b border-cream-dark text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <div className="flex-1 pl-14">Topic</div>
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="w-16 text-right">Replies</div>
              <div className="w-20 text-right">Views</div>
              <div className="w-20 text-right">Activity</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {discussions.map((d) => (
              <DiscussionRow key={d.id} d={d} />
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Discussion data sourced from the Edwardsville community.{" "}
          <Link
            href="/discussions/new"
            className="text-blue hover:underline"
          >
            Start a new discussion &rarr;
          </Link>
        </p>
      </div>
    </>
  );
}
