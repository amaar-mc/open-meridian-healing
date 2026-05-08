"use client";

import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { SectionHeading, Divider, Button } from "@/components/ui";
import { BlurText, BlurWords } from "@/components/blur-text";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-linen via-blush to-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-sage blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-terracotta blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-6">
              About
            </p>
            <BlurText
              text="A Practice Rooted in Trust & Responsibility"
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-bark leading-tight block"
              delay={0.3}
              charDelay={0.018}
            />
            <BlurWords
              text="At Open Meridian Healing, Reiki is offered as a collaborative and supportive practice. Each session is held with care and intention, creating a grounded space that supports healing in alignment with your inner wisdom."
              className="mt-8 text-bark-light/60 text-lg leading-relaxed max-w-2xl mx-auto"
              delay={0.5}
              wordDelay={0.05}
            />
            <p className="mt-6 font-heading text-2xl italic text-[#3F5A3F]">
              &ldquo;Reiki supports what is ready to unfold.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How Reiki Is Experienced */}
      <section className="py-10 lg:py-14 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="slideLeft">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/2] max-w-md mx-auto shadow-xl shadow-bark/10">
                <Image
                  src="/images/hands-healing.jpg"
                  alt="Sunset over ocean with warm golden light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/20 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.2}>
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4">
                The Experience
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight mb-6">
                How Reiki Is Experienced
              </h2>
              <p className="text-earth/70 leading-relaxed mb-6">
                Reiki is offered through light touch or hands held just above the body, always with consent. Experiences vary — many feel deep relaxation, warmth, or emotional release.
              </p>
              <StaggerContainer className="grid grid-cols-2 gap-3" stagger={0.1}>
                {[
                  "A sense of calm or ease",
                  "Gentle warmth or subtle sensations",
                  "Emotional release or clarity",
                  "Feeling grounded & present",
                ].map((item) => (
                  <StaggerItem key={item}>
                    <div className="rounded-xl bg-sage/8 border border-sage/10 p-4">
                      <p className="text-sm text-bark/80">{item}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <p className="mt-5 text-bark/80 font-medium italic border-l-2 border-sage/30 pl-5">
                There is no &ldquo;right&rdquo; way to experience Reiki.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Open Meridian Healing */}
      <section className="py-10 lg:py-14 bg-warm-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <Divider className="mb-8" />
            <SectionHeading
              eyebrow="Our Philosophy"
              title="About Open Meridian Healing"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 space-y-6 text-earth/70 leading-relaxed text-lg">
              <p className="font-heading text-3xl text-bark/80 italic font-light">
                Healing begins with openness.
              </p>
              <p>
                Life force energy moves through and beyond the physical body into an energetic field. Injury, emotional pain, prolonged stress, or trauma can interrupt this flow — experienced over time as imbalance, fatigue, or disconnection. Reiki gently supports the reorganization of this energy, without direction or control, allowing it to move where it is needed.
              </p>
              <p>
                Reiki is available to everyone, regardless of belief, background, or experience. It is offered in service of balance, harmony, and the highest good.
              </p>
              <p className="font-heading text-2xl text-bark/70 italic font-light">
                From this place, wholeness becomes more accessible.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Practitioner Bio */}
      <section className="py-10 lg:py-14 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <ScrollReveal variant="slideLeft" className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/practitioner-new.jpg"
                    alt="Founder of Open Meridian Healing"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-terracotta/10 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.2} className="lg:col-span-3">
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4">
                The Founder
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight mb-8">
                About the Founder of
                <br />
                Open Meridian Healing
              </h2>

              <p className="text-earth/70 leading-relaxed mb-6 font-heading text-xl italic text-bark/70">
                At Open Meridian Healing, Reiki is offered through love, intuition, wisdom, and universal intelligence.
              </p>

              <div className="space-y-5 text-earth/70 leading-relaxed">
                <p>
                  Reiki is not just a practice I offer. It is a calling I feel deeply drawn to make in the world.
                </p>
                <p>
                  My journey began in 2020, when I recognized how deeply past trauma was affecting my emotional responses, my physical health, and the way I moved through life. Reactive, overwhelmed, and living in a constant state of fight-or-flight, I knew something needed to change.
                </p>
                <p>
                  Through energy healing, I learned to ground myself and regulate my nervous system. It was during this process that I discovered Reiki and experienced firsthand its power.
                </p>
                <p>
                  Healing is not one-size-fits-all. My intention is to make this work accessible and personal, honoring wherever you are in your journey.
                </p>
                <p>
                  My mission is not only to share the healing practice of energy healing, but to support greater compassion, connection, and openness within ourselves and with one another.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
                <Button href="/book#discovery">Book your Discovery Call</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
