"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/what-to-expect", label: "What to Expect" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_2px_rgba(58,42,30,0.06)]"
            : "bg-transparent"
        }`}
      >
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-terracotta/40 origin-left"
          style={{ width: progressWidth, willChange: "width" }}
        />

        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
              <Image
                src="/images/logo.png"
                alt="Open Meridian Healing logo"
                width={32}
                height={32}
                className="shrink-0 w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-brand text-[13px] sm:text-base lg:text-lg font-normal text-honey tracking-wide leading-none truncate">
                Open Meridian Healing
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[13px] font-medium text-bark-light/70 hover:text-bark transition-colors duration-300 py-1 whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-terracotta transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:w-1/2" />
                  <span className="absolute bottom-0 right-1/2 h-[1.5px] w-0 bg-terracotta transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:w-1/2" />
                </Link>
              ))}
              <Link
                href="/book#discovery"
                className="ml-2 rounded-full bg-terracotta px-5 py-2 text-[13px] font-medium text-white whitespace-nowrap transition-all duration-300 hover:bg-terracotta-light hover:shadow-lg hover:shadow-terracotta/15 hover:scale-[1.03] active:scale-[0.97]"
              >
                Book your Discovery Call
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden shrink-0 p-2 text-bark"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-bark/15 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-cream shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-8 pb-8">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 px-4 rounded-xl text-lg font-heading font-medium text-bark hover:bg-sage/10 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    href="/book#discovery"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center rounded-full bg-terracotta px-6 py-3.5 text-base font-medium text-white hover:bg-terracotta-light transition-colors"
                  >
                    Book your Discovery Call
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
