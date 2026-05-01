"use client";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { SectionHeading, Divider, Button } from "@/components/ui";
import {
  Phone,
  Video,
  MapPin,
  Wifi,
  Gem,
  Clock,
  Flower2,
  Home,
  CheckCircle2,
} from "lucide-react";

function CalendlyEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-sage/15 shadow-lg bg-white">
      <iframe
        src="https://calendly.com/openmeridianhealing/15min"
        width="100%"
        height="700"
        frameBorder="0"
        title="Schedule a session with Open Meridian Healing"
        className="w-full block"
        loading="lazy"
      />
    </div>
  );
}

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-linen via-blush to-cream overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-6">
              <img src="/images/logo.png" alt="" width={18} height={18} className="inline-block mr-1.5 align-middle" />Schedule
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-bark leading-tight">
              Book Your Session
            </h1>
            <p className="mt-8 text-bark-light/60 text-lg leading-relaxed max-w-2xl mx-auto">
              New clients begin with a complimentary 15-minute Discovery Call.
              Returning clients may use the same scheduler to book directly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Discovery Call Info */}
      <section id="discovery" className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-cream scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-sage/10 to-terracotta/5 border border-sage/15 p-8 lg:p-12">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-4 py-2 text-sage text-sm font-medium mb-6">
                  <Phone size={16} />
                  New Clients Start Here
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight">
                  Discovery Call
                </h2>
                <p className="mt-4 text-earth/60 max-w-xl mx-auto">
                  This complimentary 15-minute call allows us to briefly connect,
                  discuss what you&apos;re seeking, and determine the most
                  aligned next step.
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-earth/50">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> 15 minutes
                  </span>
                  <span>·</span>
                  <span>Complimentary</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Phone size={14} /> Phone or
                    <Video size={14} className="ml-1" /> Zoom
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl text-bark font-medium mb-4">
                    Required For
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "All first-time Reiki clients",
                      "All Henna services (in-person or in-home)",
                      "All In-Home services",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-earth/70">
                        <CheckCircle2 size={16} className="text-sage shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-bark font-medium mb-4">
                    What We&apos;ll Cover
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "What you're seeking support with",
                      "Review session options",
                      "Henna design review (if applicable)",
                      "Clarify pricing and logistics",
                      "Answer your questions",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-earth/70">
                        <CheckCircle2 size={16} className="text-sage shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scheduler */}
      <section id="scheduler" className="py-12 lg:py-16 bg-cream scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-light text-bark">
                Choose a Time
              </h2>
              <p className="mt-3 text-earth/60 text-sm">
                Returning clients may select any available time — no call required.
              </p>
            </div>
            <CalendlyEmbed />
            <div className="mt-6 rounded-xl bg-sand/40 border border-sand p-5">
              <p className="text-xs text-earth/60 leading-relaxed text-center">
                By booking, I understand that services offered by Open Meridian Healing are complementary wellness practices and are not medical treatment, diagnosis, or a substitute for licensed healthcare. I consent to receive services and understand I may decline touch or equipment use at any time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      {/* Henna & In-Home */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variant="slideLeft">
              <div className="rounded-2xl bg-white/70 border border-terracotta/15 p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center text-terracotta mb-5">
                  <Flower2 size={22} />
                </div>
                <h3 className="font-heading text-2xl text-bark font-medium mb-3">
                  Henna Services
                </h3>
                <p className="text-earth/60 text-sm leading-relaxed mb-6">
                  Henna sessions are customized based on design, placement, and
                  whether you choose Reiki-infused henna or Ceremonial Reiki
                  Henna Tattooing. All henna services require design review and
                  confirmation prior to scheduling.
                </p>
                <Button href="#scheduler" variant="secondary" small>
                  Schedule a Call
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight">
              <div className="rounded-2xl bg-white/70 border border-sage/15 p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center text-sage mb-5">
                  <Home size={22} />
                </div>
                <h3 className="font-heading text-2xl text-bark font-medium mb-3">
                  In-Home Services
                </h3>
                <p className="text-earth/60 text-sm leading-relaxed mb-4">
                  All in-home Reiki and henna services require advance
                  coordination. A{" "}
                  <span className="font-medium text-bark">
                    $200 non-refundable deposit
                  </span>{" "}
                  is required to secure in-home bookings. Deposits may be
                  transferred once with at least 72 hours notice.
                </p>
                <Button href="/contact" small>
                  Send an Inquiry
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
