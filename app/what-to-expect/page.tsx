"use client";

import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { BlurText, BlurWords, BlurReveal } from "@/components/blur-text";
import { SectionHeading, Divider, Button } from "@/components/ui";

const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Before Your Session",
    description:
      "We'll start with a brief check-in to answer any questions and set a simple intention. Share as much or as little as feels comfortable.",
    bg: "bg-sage/8",
    border: "border-sage/15",
  },
  {
    number: "02",
    title: "During the Session",
    description:
      "You'll lie fully clothed on a massage table with soft music, blankets, and bolsters available. Reiki is offered through light touch (with consent) or hands held just above the body.",
    experiences: [
      "Deep relaxation",
      "Warmth or subtle sensations",
      "Emotional release",
      "A quiet, meditative state",
    ],
    note: "Some people feel very little physically but notice shifts afterward.",
    bg: "bg-terracotta/5",
    border: "border-terracotta/10",
  },
  {
    number: "03",
    title: "After the Session",
    description:
      "You'll have a few moments to reorient and ground yourself. We can briefly reflect on the experience if you'd like — sharing is always optional.",
    feelings: [
      "Calm or deeply relaxed",
      "More centered or clear",
      "Emotionally lighter",
      "Tired or energized",
    ],
    note: "Drink water and give yourself time to integrate.",
    bg: "bg-sage/8",
    border: "border-sage/15",
  },
] as const;

export default function WhatToExpectPage() {
  return (
    <>
      {/* Hero — full image with text overlay */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/images/session-room.png"
          alt="Open Meridian Healing session room"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay — bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-bark/20 to-transparent" />
        {/* Top nav clearance gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-bark/30 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="mx-auto max-w-4xl">
            <BlurReveal delay={0.2}>
              <p className="text-cream/60 text-xs font-semibold tracking-[0.28em] uppercase mb-5">
                Your Journey
              </p>
            </BlurReveal>
            <BlurText
              text="What to Expect"
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight block"
              delay={0.3}
              charDelay={0.022}
            />
            <BlurWords
              text="Your Reiki session is designed to be calm, respectful, and gently supportive. There is no pressure to feel or experience anything in a particular way."
              className="mt-6 text-cream/70 text-lg leading-relaxed max-w-xl"
              delay={0.6}
              wordDelay={0.04}
            />
            <BlurReveal delay={1.1}>
              <p className="mt-5 font-heading text-2xl italic text-sage-light/90">
                Reiki meets you exactly where you are.
              </p>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* How Reiki Is Experienced */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image — the session room again, different crop/frame */}
            <ScrollReveal variant="slideLeft">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl shadow-bark/8">
                <Image
                  src="/images/session-room.png"
                  alt="Serene healing space"
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/30 to-transparent" />
                {/* Caption tag */}
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-xs text-white/80 tracking-wide">
                    Open Meridian Healing · Gilroy, CA
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.2}>
              <p className="text-sage text-xs font-semibold tracking-[0.22em] uppercase mb-4">
                The Practice
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight mb-6">
                A Practice Rooted in Trust
              </h2>
              <p className="text-earth/60 leading-relaxed mb-8">
                At Open Meridian Healing, Reiki is offered as a supportive and
                collaborative practice. Each session is held as a sacred, safe
                and intentional space.
              </p>

              <div className="rounded-2xl bg-white/60 border border-sage/10 p-7 lg:p-9">
                <p className="text-earth/70 leading-relaxed mb-5">
                  During a Reiki session, the practitioner serves as a conduit for
                  energy, allowing it to move where it is most needed. This may be
                  done through light touch or with hands held just above the body.
                  Sessions are always offered with consent and care.
                </p>
                <StaggerContainer className="grid sm:grid-cols-2 gap-3" stagger={0.08}>
                  {[
                    "A sense of calm or ease",
                    "Gentle warmth or subtle sensations",
                    "Emotional release or clarity",
                    "Feeling grounded, centered, or more present",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3 rounded-xl bg-sage/8 p-3.5">
                        <div className="w-2 h-2 rounded-full bg-sage shrink-0" />
                        <span className="text-sm text-bark/80">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <p className="mt-5 text-bark/60 italic text-sm">
                  There is no &ldquo;right&rdquo; way to experience Reiki. Each session is
                  unique and guided by your own inner wisdom.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Session Flow"
              title="Your Session Journey"
            />
          </ScrollReveal>

          <div className="mt-16 space-y-8">
            {JOURNEY_STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className={`rounded-2xl ${step.bg} border ${step.border} p-8 lg:p-10`}>
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center">
                      <span className="font-heading text-2xl text-sage font-semibold">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-3xl text-bark font-medium mb-4">
                        {step.title}
                      </h3>
                      <p className="text-earth/70 leading-relaxed">
                        {step.description}
                      </p>
                      {"experiences" in step && step.experiences && (
                        <div className="mt-5">
                          <p className="text-sm font-medium text-bark mb-3">
                            Many people experience:
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {step.experiences.map((exp) => (
                              <div key={exp} className="flex items-center gap-2 text-sm text-earth/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                                {exp}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {"feelings" in step && step.feelings && (
                        <div className="mt-5">
                          <p className="text-sm font-medium text-bark mb-3">
                            You may feel:
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {step.feelings.map((f) => (
                              <div key={f} className="flex items-center gap-2 text-sm text-earth/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                                {f}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {"note" in step && step.note && (
                        <p className="mt-4 text-sm text-bark/60 italic">
                          {step.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomy & Reminder */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <Divider className="mb-8" />
              <h2 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight">
                Honoring Your Autonomy
              </h2>
              <p className="mt-6 text-earth/70 text-lg leading-relaxed">
                Reiki is a collaborative and supportive practice. Nothing is
                forced, and nothing is expected of you. Each session is held as a
                safe and intentional space, gently supporting healing in
                alignment with your own inner wisdom.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 rounded-2xl bg-sand/40 border border-sand p-8 text-center">
              <p className="text-sm text-earth/60 leading-relaxed">
                Reiki is offered as a complementary wellness practice. It does
                not replace medical or mental health care and does not involve
                diagnosis or treatment. Your comfort, consent, and sense of
                safety are always the priority.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Button href="/book">Book a Session</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
