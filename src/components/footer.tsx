import Link from "next/link";

const footerLinks = [
  { href: "/eat", label: "Restaurants" },
  { href: "/events", label: "Events" },
  { href: "/deals", label: "Deals" },
  { href: "/directory", label: "Directory" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Link href="/" className="text-lg font-bold text-white tracking-tight">
              edwardsville<span className="text-gold">.com</span>
            </Link>
            <p className="mt-2 text-sm max-w-xs">
              Your guide to restaurants, events, deals, and local businesses in Edwardsville, Illinois.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="text-white text-sm font-semibold mb-3">Explore</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
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
            <div>
              <h3 className="text-white text-sm font-semibold mb-3">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/events/submit" className="text-sm hover:text-white transition-colors">
                    Submit an Event
                  </Link>
                </li>
                <li>
                  <Link href="/directory" className="text-sm hover:text-white transition-colors">
                    Add Your Business
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} edwardsville.com. Made with care in Edwardsville, IL.
        </div>
      </div>
    </footer>
  );
}
