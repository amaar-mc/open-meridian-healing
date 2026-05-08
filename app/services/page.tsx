"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { SectionHeading, Divider, Button } from "@/components/ui";
import { Clock, MapPin, Wifi, Home, Gem, Flower2, Sparkles } from "lucide-react";
import { BlurText, BlurWords } from "@/components/blur-text";

function PricingGroup({
  options,
  defaultIndex = 1,
  cols = 3,
}: {
  options: { duration: string; price: string; note?: string }[];
  defaultIndex?: number;
  cols?: 2 | 3;
}) {
  const [selected, setSelected] = useState(defaultIndex);
  return (
    <div className={`grid gap-4 mb-6 ${cols === 2 ? "grid-cols-2 max-w-sm" : "grid-cols-1 sm:grid-cols-3"}`}>
      {options.map((opt, i) => (
        <button
          key={i}
          onClick={() => setSelected(i)}
          className={`rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 focus:outline-none cursor-pointer ${
            selected === i
              ? "bg-sage text-white shadow-lg shadow-sage/25 scale-[1.02]"
              : "bg-white/70 border border-sage/15 hover:-translate-y-1 hover:shadow-lg hover:shadow-sage/10"
          }`}
        >
          <p className={`text-sm font-medium ${selected === i ? "text-white/70" : "text-earth/60"}`}>
            {opt.duration}
          </p>
          <p className={`mt-2 font-heading text-3xl sm:text-4xl font-light ${selected === i ? "text-white" : "text-bark"}`}>
            {opt.price}
          </p>
          {opt.note && (
            <p className={`mt-2 text-xs ${selected === i ? "text-white/60" : "text-earth/50"}`}>
              {opt.note}
            </p>
          )}
        </button>
      ))}
    </div>
  );
}

function PackageCard({
  duration,
  price,
  selected,
  onClick,
}: {
  duration: string;
  price: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl p-5 text-center transition-all duration-300 focus:outline-none cursor-pointer w-full ${
        selected
          ? "bg-terracotta/20 border-2 border-terracotta/50"
          : "bg-terracotta/8 border border-terracotta/15 hover:bg-terracotta/12"
      }`}
    >
      <p className="text-sm text-earth/60">{duration}</p>
      <p className="mt-1 font-heading text-2xl text-bark">{price}</p>
    </button>
  );
}

function PackageGroup({
  options,
  defaultIndex = 1,
}: {
  options: { duration: string; price: string }[];
  defaultIndex?: number;
}) {
  const [selected, setSelected] = useState(defaultIndex);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {options.map((opt, i) => (
        <PackageCard
          key={i}
          {...opt}
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-linen via-blush to-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-terracotta blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Our Offerings
            </p>
            <BlurText
              text="Services & Offerings"
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-bark leading-tight block"
              delay={0.3}
              charDelay={0.022}
            />
            <BlurWords
              text="Each session is approached with care and intention, honoring the unique needs of every individual."
              className="mt-8 text-bark-light/60 text-lg leading-relaxed max-w-xl mx-auto"
              delay={0.5}
              wordDelay={0.05}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* In-Person Reiki */}
      <section id="in-person" className="py-10 lg:py-14 bg-cream scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sage text-sm font-medium mb-6">
                <Sparkles size={16} />
                Most Popular
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight mb-3">
                In-Person Reiki Sessions
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-earth/60">
                <span className="flex items-center gap-1"><Clock size={14} /> 50 · 75 · 90 minutes</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> Gilroy, CA</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-earth/70 leading-relaxed text-center max-w-2xl mx-auto mb-10">
              Each session begins with a guided meditation, followed by Reiki offered through gentle touch or hands above the body. You remain fully clothed on a treatment table. Includes complimentary time on a gemstone-infused Rainbow Chakra Mat.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <PricingGroup
              options={[
                { duration: "50 min", price: "$100" },
                { duration: "75 min", price: "$140" },
                { duration: "90 min", price: "$175" },
              ]}
              defaultIndex={1}
            />

            <div className="rounded-2xl bg-terracotta/8 border border-terracotta/15 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-heading text-xl text-bark font-medium">
                  4-Session Package
                </h4>
                <span className="rounded-full bg-terracotta/20 px-3 py-1 text-xs font-semibold text-terracotta">
                  Save 20%
                </span>
              </div>
              <PackageGroup
                options={[
                  { duration: "50 min", price: "$320" },
                  { duration: "75 min", price: "$448" },
                  { duration: "90 min", price: "$560" },
                ]}
                defaultIndex={1}
              />
              <p className="mt-4 text-xs text-earth/50">
                Packages do not expire. Non-refundable and non-transferable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rainbow Chakra Mat */}
      <section id="chakra-mat" className="py-10 lg:py-14 bg-warm-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-sage text-sm font-medium mb-4">
                <Gem size={16} />
                Standalone Offering
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight mb-3">
                Rainbow Chakra Mat Experience
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-sm text-earth/60 mb-8">
                <span className="flex items-center gap-1"><Clock size={14} /> 30 or 60 minutes</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> Gilroy, CA</span>
              </div>
              <div className="space-y-4 text-earth/70 leading-relaxed">
                <p>
                  Rest on a gemstone-infused Rainbow Chakra Mat in a quiet,
                  intentional setting. Each session begins with a brief guided
                  meditation.
                </p>
                <p>
                  The mat emits far infrared heat, pulsed electromagnetic field
                  (PEMF), red light, and negative ions, embedded with seven
                  chakra-aligning gemstones.
                </p>
              </div>
              <div className="mt-8">
                <PricingGroup
                  options={[
                    { duration: "30 min", price: "$40" },
                    { duration: "60 min", price: "$70" },
                  ]}
                  defaultIndex={1}
                  cols={2}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden aspect-square">
                <Image
                  src="/images/crystals-chakra.png"
                  alt="Healing crystals and gemstones for chakra alignment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Distance Reiki */}
      <section id="distance" className="py-10 lg:py-14 bg-cream scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sage text-sm font-medium mb-6">
              <Wifi size={16} />
              Available Anywhere
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight mb-3">
              Distance Reiki
            </h2>
            <p className="text-sm text-earth/60 mb-8">
              Remote Sessions · 75 minutes
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-2xl mx-auto space-y-4 text-earth/70 leading-relaxed text-left mb-10">
              <p>
                Distance Reiki sessions are offered remotely and may be received
                from anywhere. Each session begins with a brief check-in by phone
                or Zoom, followed by a guided meditation. You rest comfortably in
                a quiet space of your choosing while Reiki is offered remotely.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="max-w-xs mx-auto mb-8">
              <div className="rounded-2xl p-6 text-center bg-sage text-white shadow-lg shadow-sage/20">
                <p className="text-sm font-medium text-white/70">75 min</p>
                <p className="mt-2 font-heading text-4xl font-light text-white">$110</p>
              </div>
            </div>
            <div className="max-w-sm mx-auto rounded-2xl bg-terracotta/8 border border-terracotta/15 p-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <h4 className="font-heading text-xl text-bark">4-Session Package</h4>
                <span className="rounded-full bg-terracotta/20 px-3 py-1 text-xs font-semibold text-terracotta">
                  Save 20%
                </span>
              </div>
              <p className="font-heading text-3xl text-bark">$352</p>
              <p className="mt-3 text-xs text-earth/50">
                Non-refundable. No expiration.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* In-Home Reiki */}
      <section id="in-home" className="py-10 lg:py-14 bg-warm-white scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-sage text-sm font-medium mb-4">
                <Home size={16} />
                Greater Bay Area
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight mb-4">
                In-Home Reiki Sessions
              </h2>
              <p className="text-earth/70 leading-relaxed max-w-xl mx-auto">
                Receive Reiki in the comfort of your own home. Sessions mirror the in-person experience with opening meditation, Reiki, and integration.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <PricingGroup
              options={[
                { duration: "50 min", price: "$140" },
                { duration: "75 min", price: "$180" },
                { duration: "90 min", price: "$215" },
              ]}
              defaultIndex={1}
            />

            <div className="rounded-xl bg-sand/50 border border-sand p-4">
              <p className="text-sm text-earth/70 text-center">
                <span className="font-medium text-bark">Travel & Setup Fee:</span>{" "}
                $30–$65 depending on location. Does not include Rainbow Chakra Mat.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reiki Henna */}
      <section id="henna" className="py-10 lg:py-14 bg-cream scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Body Art & Energy"
              title="Reiki Henna Tattooing"
              subtitle="Temporary plant-based body art infused with Reiki energy, offered as simple infused henna or a ceremonial experience."
            />
          </ScrollReveal>

          <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal variant="slideLeft">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/henna.jpg"
                  alt="Beautiful henna art"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              <ScrollReveal variant="slideRight" delay={0.1}>
                <div className="rounded-2xl bg-white/70 border border-sage/15 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Flower2 size={20} className="text-sage" />
                    <h3 className="font-heading text-2xl text-bark font-medium">
                      Reiki-Infused Henna
                    </h3>
                  </div>
                  <p className="text-earth/70 leading-relaxed text-sm mb-4">
                    Henna prepared and blessed with Reiki prior to application.
                    Choose from available designs or submit your own for review.
                  </p>
                  <p className="font-heading text-3xl text-bark">From $25</p>
                  <p className="text-xs text-earth/50 mt-1">
                    Varies by size, placement, and complexity
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slideRight" delay={0.2}>
                <div className="rounded-2xl bg-gradient-to-br from-sage/10 to-terracotta/5 border border-sage/15 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={20} className="text-terracotta" />
                    <h3 className="font-heading text-2xl text-bark font-medium">
                      Ceremonial Reiki Henna
                    </h3>
                  </div>
                  <p className="text-earth/70 leading-relaxed text-sm mb-2">
                    An immersive experience with live Reiki channeling during
                    application. Includes grounding meditation, ~10 minutes of
                    Reiki, and integration.
                  </p>
                  <p className="font-heading text-3xl text-bark mt-4">From $50</p>
                  <p className="text-xs text-earth/50 mt-1">
                    Includes small design. Increases with scope.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slideRight" delay={0.3}>
                <div className="rounded-2xl bg-white/70 border border-terracotta/15 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Home size={20} className="text-terracotta" />
                    <h3 className="font-heading text-2xl text-bark font-medium">
                      In-Home Henna Services
                    </h3>
                  </div>
                  <p className="text-earth/70 leading-relaxed text-sm mb-4">
                    Available throughout Greater Bay Area for private gatherings,
                    ceremonies, and intentional group experiences.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-sand/40 p-4 text-center">
                      <p className="text-xs text-earth/50">Reiki-Infused</p>
                      <p className="font-heading text-xl text-bark">Min $400</p>
                    </div>
                    <div className="rounded-xl bg-sand/40 p-4 text-center">
                      <p className="text-xs text-earth/50">Channeled Reiki</p>
                      <p className="font-heading text-xl text-bark">Min $450</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Single bottom CTA */}
      <section className="py-14 lg:py-18 bg-warm-white">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Divider className="mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl font-light text-bark mb-4">
              Ready to begin?
            </h2>
            <p className="text-earth/60 mb-8 leading-relaxed">
              New clients start with a complimentary 15-minute discovery call. All henna and in-home services require advance coordination.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/book#discovery">Book your Discovery Call</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
