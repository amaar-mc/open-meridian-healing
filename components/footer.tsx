import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/what-to-expect", label: "What to Expect" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/book", label: "Book Now" },
  { href: "/contact", label: "Contact" },
] as const;

const LEGAL_LINKS = [
  { href: "/policies", label: "Policies" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclaimer", label: "Disclaimer" },
] as const;

export function Footer() {
  return (
    <footer className="bg-linen border-t border-sand">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Open Meridian Healing logo"
                width={56}
                height={56}
              />
              <span className="font-brand text-2xl font-normal text-honey tracking-wide">
                Open Meridian Healing
              </span>
            </Link>
            <p className="text-bark-light/60 leading-relaxed max-w-sm mb-8">
              Reiki and intuitive energy healing offered in a warm, grounded,
              and supportive space. Available in-person in Gilroy, CA, and remotely anywhere.
            </p>
            <a
              href="mailto:openmeridianhealing@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-terracotta hover:text-terracotta-light transition-colors font-medium"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              openmeridianhealing@gmail.com
            </a>
          </div>

          {/* Nav + Legal columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-bark/40 mb-5">
                Navigate
              </p>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-bark-light/60 hover:text-terracotta transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-bark/40 mb-5">
                Location
              </p>
              <ul className="space-y-3 text-sm text-bark-light/60">
                <li>Gilroy, California</li>
                <li>Greater Bay Area</li>
                <li>Distance — Anywhere</li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-bark/40 mb-5">
                Legal
              </p>
              <ul className="space-y-3">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-bark-light/60 hover:text-terracotta transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sand">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-bark/30">
            © {new Date().getFullYear()} Open Meridian Healing · Complementary wellness. Not medical treatment.
          </p>
          <Link
            href="/book#discovery"
            className="text-xs font-medium text-terracotta hover:text-terracotta-light transition-colors"
          >
            Book your Discovery Call →
          </Link>
        </div>
      </div>
    </footer>
  );
}
