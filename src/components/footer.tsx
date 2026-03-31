import Link from "next/link";

const exploreLinks = [
  { href: "/eat", label: "Restaurants" },
  { href: "/events", label: "Events" },
  { href: "/deals", label: "Deals" },
  { href: "/directory", label: "Directory" },
];

const communityLinks = [
  { href: "/discussions", label: "Discussions" },
  { href: "/events/submit", label: "Submit an Event" },
  { href: "/directory", label: "Add Your Business" },
];

const aboutLinks = [
  { href: "/", label: "About Edwardsville" },
  { href: "/", label: "Contact Us" },
  { href: "/", label: "Advertise" },
  { href: "/", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="bg-blue-dark text-white/60">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tight">
              edwardsville<span className="text-gold">.com</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Your daily guide to the best of Edwardsville, Illinois — local restaurants, events, deals, and community.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              About
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} edwardsville.com. Made with care in Edwardsville, IL.
          </p>
          <p className="text-xs text-white/40">
            Edwardsville, Illinois — A great place to live, work, and play.
          </p>
        </div>
      </div>
    </footer>
  );
}
