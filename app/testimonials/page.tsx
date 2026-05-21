"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";
import { Divider, Button } from "@/components/ui";
import { BlurText } from "@/components/blur-text";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Amanda Fullmer",
    location: "Verified Client",
    services: ["In-Person Reiki", "Rainbow Chakra Mat", "Henna"],
    quote: [
      "I've had a few Reiki sessions with Manu at Open Meridian Healing, and those experiences were incredible in their own way. From the moment you walk in, you're welcomed into a calm, serene space with soothing music and pleasant scents that immediately put you at ease.",
      "During my first session, I felt intense sensations—pressure, pulling, and warmth in different parts of my body—that led to a powerful emotional release. I found myself unexpectedly crying, but it felt like a deep sense of happiness and letting go.",
      "Another session included the healing mat and blanket, which took the relaxation to another level. The warmth helped me completely sink into the experience, and it felt deeply restorative and comforting.",
      "I also had a henna session with Manu, and she brought my ideas to life beautifully. Even with my typically cold hands, the design lasted quite a while and I received so many compliments.",
      "Overall, Manu creates a truly special and healing experience. I'm so grateful and would highly recommend her to anyone looking to relax, release, and reconnect.",
    ],
  },
  {
    name: "Rummy K.",
    location: "Verified Client",
    services: ["In-Person Reiki"],
    quote: [
      "I had the pleasure of receiving a Reiki session with Manu. It was an exceptionally positive experience. I found her to be very personable, grounded and calming. She took her time in explaining what she was going to do and what I may experience after the session. I found the ambience of the setting to be serene and peaceful.",
      "During the session I found myself in a calm and meditative state through her guidance. I was highly impressed that when she worked on my body she intuitively was able to zone into the exact areas where I was feeling pain.",
      "I left the session feeling lighter and deeply relaxed and looking forward to another session with her.",
    ],
  },
  {
    name: "Nicole Sohal",
    location: "Verified Client",
    services: ["In-Person Reiki", "Rainbow Chakra Mat"],
    quote: [
      "I had my first Reiki experience with Manu and I'm so impressed! She went above and beyond to ensure I was prepared, hydrated, and comfortable. Her space is cozy and pristine, featuring a stunning rainbow chakra mat that adds such great elemental energy.",
      "She explained the process perfectly and helped me guide my session by ensuring that I came with a clear intention in mind. For me the results were immediate — I felt so much more balanced and had the best deep sleep that night.",
      "I truly feel lighter and more refreshed. Such a professional and soothing presence. I can't recommend her enough as I walked away completely enlightened.",
    ],
  },
  {
    name: "Simi Pannu",
    location: "Verified Client",
    services: ["In-Person Reiki"],
    quote: [
      "I recently experienced Reiki energy healing by Manu, and it was truly an eye-opening experience for me. During the session, I could physically feel the energy in her hands. They became incredibly warm, almost like having a heating pad placed exactly where healing was needed. What amazed me most was that she seemed to know where I was hurting without me ever mentioning it.",
      "The experience felt calming, comforting, and deeply restorative. It opened my mind to exploring more natural healing practices and the connection between energy, stress, and the body. I am grateful for the experience and would highly recommend it to anyone curious about holistic healing.",
    ],
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-honey text-honey" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-linen via-blush to-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-sage blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-terracotta blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Client Experiences
            </p>
            <BlurText
              text="What Clients Are Saying"
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-bark leading-tight block"
              delay={0.3}
              charDelay={0.018}
            />
            <p className="mt-8 text-bark-light/60 text-lg leading-relaxed max-w-xl mx-auto">
              Real words from real people who have experienced Open Meridian Healing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial cards */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <StaggerContainer className="space-y-12" stagger={0.15}>
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative rounded-3xl bg-white/80 border border-sage/12 shadow-xl shadow-bark/5 p-8 lg:p-12">
                  {/* Large decorative quote mark */}
                  <div
                    aria-hidden
                    className="absolute -top-5 left-8 font-heading text-[7rem] leading-none text-sage/15 select-none pointer-events-none"
                  >
                    &ldquo;
                  </div>

                  <div className="relative z-10">
                    <StarRow />

                    {/* Service tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {t.services.map((s) => (
                        <span
                          key={s}
                          className="inline-block rounded-full bg-sage/10 border border-sage/15 px-3 py-1 text-xs font-medium text-sage-dark"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Quote body — paragraphs as-written, wording unchanged */}
                    <blockquote className="space-y-4 text-earth/75 leading-relaxed text-[1.05rem]">
                      {t.quote.map((para, i) => (
                        <p key={i} className={i === t.quote.length - 1 ? "font-medium text-bark/80 italic" : ""}>
                          {para}
                        </p>
                      ))}
                    </blockquote>

                    {/* Attribution */}
                    <div className="mt-8 pt-6 border-t border-sage/12 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage/30 to-terracotta/20 flex items-center justify-center">
                        <span className="font-heading text-lg font-medium text-bark">
                          {t.name[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-bark text-sm">{t.name}</p>
                        <p className="text-xs text-earth/50 mt-0.5">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Divider className="mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl font-light text-bark mb-4">
              Ready to experience it yourself?
            </h2>
            <p className="text-earth/60 mb-8 leading-relaxed">
              New clients begin with a complimentary 15-minute discovery call.
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
