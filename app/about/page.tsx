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
              text="At Open Meridian Healing, Reiki is offered as a supportive and collaborative practice. Each session is held as a sacred, safe and intentional space, gently supporting healing in alignment with your own inner wisdom."
              className="mt-8 text-bark-light/60 text-lg leading-relaxed max-w-2xl mx-auto"
              delay={0.5}
              wordDelay={0.05}
            />
            <p className="mt-6 font-heading text-2xl italic text-sage-light/80">
              &ldquo;Reiki supports what is ready to unfold.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How Reiki Is Experienced */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="slideLeft">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/hands-healing.jpg"
                  alt="Healing hands during a Reiki session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/30 to-transparent" />
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
      <section className="py-24 lg:py-32 bg-warm-white">
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
                Life exists in a constant movement of energy. This flow of life
                force energy moves through the physical body and extends beyond
                it into the surrounding energetic field—often referred to as the
                biometric field or the aura. This energetic system is responsive,
                dynamic, and deeply connected to our overall sense of well-being.
              </p>
              <p>
                Life experiences such as physical injury, emotional pain,
                prolonged stress, or trauma can interrupt the natural continuity
                of this flow. Over time, these interruptions may be experienced
                as imbalance, fatigue, or a sense of disconnection within
                oneself. Reiki offers a gentle way to support the reorganization
                of energy, inviting greater mind–heart coherence and ease.
              </p>
              <p>
                At Open Meridian Healing, Reiki is understood as a practice
                rooted in love, wisdom, intuition, and universal intelligence.
                Reiki carries its own innate knowing and does not require
                direction or control. Through the practice of Reiki, the
                practitioner consciously opens to the flow of this energy,
                allowing it to move where it is needed.
              </p>
              <p>
                Channeling Reiki supports the realignment and continuity of
                energy throughout the body, its meridians, and the surrounding
                biofield. As this flow becomes more consistent, areas of
                congestion or interruption can begin to soften and clear,
                allowing the body to engage more fully with its own restorative
                processes.
              </p>

              <div className="my-12 rounded-2xl bg-sage/8 border border-sage/15 p-8 lg:p-10">
                <p className="text-bark/80 leading-relaxed">
                  People relate to Reiki through many perspectives. Some
                  experience it as a spiritual practice rooted in love and inner
                  awareness. Others understand it through the language of
                  electromagnetic fields, energy frequency, or principles
                  reflected in quantum physics. No single belief system is
                  required.{" "}
                  <span className="font-medium text-bark">
                    Reiki meets each person within the framework that resonates
                    most naturally for them.
                  </span>
                </p>
              </div>

              <p>
                One of the most beautiful aspects of Reiki is its universality.
                Reiki is available to everyone, regardless of belief,
                nationality, social status, body size, race, religion, sexual
                orientation, gender identity, or cultural background. It is
                offered in service of balance, harmony, and the highest good of
                all.
              </p>
              <p>
                Sessions are guided by presence, attentiveness, intuition, and
                respect. Each session is approached as a collaborative
                process—one that honors your experience and allows healing to
                emerge as the mind and body open to receive life force energy.
              </p>
              <p className="font-heading text-2xl text-bark/70 italic font-light">
                From this place, wholeness becomes more accessible as a natural
                state of remembrance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Practitioner Bio */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <ScrollReveal variant="slideLeft" className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/practitioner.png"
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

              <div className="space-y-5 text-earth/70 leading-relaxed">
                <p>
                  Reiki is not just a practice I offer. It is a calling and a contribution I feel deeply drawn to make in the world.
                </p>
                <p>
                  My journey with energy healing began in 2020, during a period of profound self-awareness. I started to recognize how deeply past trauma was affecting my emotional responses, my physical health, and the way I moved through life. I was often reactive, emotionally overwhelmed, and living in a constant state of fight-or-flight. I knew something needed to change, not only so I could feel better, but so I could live with greater clarity, presence, and intention.
                </p>
                <p>
                  Through energy healing, I began learning how to ground myself and regulate my nervous system. As my body and mind found greater balance, my capacity to make healthier decisions expanded. Since beginning this work, I have lost over 62 pounds and feel more balanced and healthier than I ever have. During my own healing process, I discovered Reiki and experienced firsthand its power.
                </p>
                <p>
                  I believe healing is not one-size-fits-all. My intention is to make this work accessible and personal, honoring wherever you are in your journey. It is an honor to walk alongside others as they reconnect with their own capacity for healing, balance, and inner clarity.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book#discovery">Book a Discovery Call</Button>
                <Button href="/book" variant="outline" small>
                  Returning Clients: Schedule a Session
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
