"use client";

import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { BlurText, BlurWords, BlurReveal } from "@/components/blur-text";
import { SectionHeading, Divider, ServiceCard, Button } from "@/components/ui";
import { LotusScroll } from "@/components/lotus-scroll";
import { AnimatedNumber } from "@/components/animated-number";
import {
  Hand,
  Wifi,
  Home,
  Gem,
  Flower2,
  Heart,
  Brain,
  Sparkles,
  Sun,
} from "lucide-react";

const SUPPORT_AREAS = [
  {
    icon: <Heart size={22} />,
    title: "Physical",
    items: [
      "Renewed energy and vitality",
      "Release of physical tension",
      "Greater ease and comfort",
      "Natural resilience support",
    ],
  },
  {
    icon: <Flower2 size={22} />,
    title: "Emotional",
    items: [
      "Reducing stress and overwhelm",
      "Regulating anxiety",
      "Navigating grief and transitions",
      "Greater emotional balance",
    ],
  },
  {
    icon: <Brain size={22} />,
    title: "Mental",
    items: [
      "Quieter, spacious mental state",
      "Improved focus and clarity",
      "Awareness of thought patterns",
      "Shifting self-critical loops",
    ],
  },
  {
    icon: <Sparkles size={22} />,
    title: "Spiritual",
    items: [
      "Strengthened intuition",
      "Self-compassion cultivation",
      "Feeling connected and aligned",
      "Deeper sense of wholeness",
    ],
  },
] as const;

const SERVICES = [
  {
    title: "In-Person Reiki",
    description:
      "Experience Reiki in a calm, intentional setting in Gilroy, CA. Each session includes complimentary time on a gemstone-infused Rainbow Chakra Mat.",
    href: "/services#in-person",
    icon: <Hand size={24} />,
  },
  {
    title: "Distance Reiki",
    description:
      "Receive Reiki from anywhere. Remote sessions offer the same presence and intention, allowing you to rest in your own space.",
    href: "/services#distance",
    icon: <Wifi size={24} />,
  },
  {
    title: "In-Home Reiki",
    description:
      "Reiki brought to you within the Greater Bay Area. Ideal for those who prefer the comfort of their own home.",
    href: "/services#in-home",
    icon: <Home size={24} />,
  },
  {
    title: "Rainbow Chakra Mat",
    description:
      "Rest on a gemstone-infused mat emitting far infrared heat, PEMF, red light, and negative ions.",
    href: "/services#chakra-mat",
    icon: <Gem size={24} />,
  },
  {
    title: "Reiki Henna Tattooing",
    description:
      "Temporary plant-based body art infused with Reiki energy. Choose simple infused henna or a ceremonial experience.",
    href: "/services#henna",
    icon: <Flower2 size={24} />,
  },
] as const;

const STATS = [
  { value: 5, suffix: "+", label: "Distinct offerings to meet you where you are" },
  { value: 15, suffix: " min", label: "Complimentary discovery call to begin" },
] as const;

export function HomeContent() {
  return (
    <>
      {/* Lotus scroll section — drives lotus bloom with scroll */}
      <LotusScroll />

      {/* What is Reiki */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slideLeft">
              <div className="relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl shadow-bark/8">
                  <Image
                    src="/images/lifestyle-calm.png"
                    alt="Person in calm meditation, open hands, warm natural light"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-sage/10 -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-terracotta/10 -z-10" />
              </div>
            </ScrollReveal>

            <div>
              <BlurReveal delay={0.1}>
                <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4">
                  The Practice
                </p>
              </BlurReveal>
              <BlurText
                text="What is Reiki?"
                delay={0.2}
                className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight mb-6 block"
              />
              <div className="space-y-5 text-earth/70 leading-relaxed">
                <BlurWords
                  text="When stress, emotions, or life experiences build up, the body can hold that tension—leaving you feeling heavy, unsettled, or out of balance. Open Meridian Healing offers Reiki as a grounded, heart-centered practice supporting a return to clarity, calm, and wholeness."
                  delay={0.3}
                  wordDelay={0.04}
                />
                <BlurWords
                  text="Reiki is a complementary wellness practice that works with universal life force energy. It is offered through light touch or hands held just above the body. Reiki invites the nervous system to settle, supports energetic flow through the body and its meridians, and helps the mind and body return to a more coherent state of balance."
                  delay={0.5}
                  wordDelay={0.03}
                />
              </div>
              <BlurReveal delay={0.9} className="mt-8">
                <Button href="/services">Explore Services →</Button>
              </BlurReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — animated numbers */}
      <section className="py-10 bg-linen/50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 divide-x divide-sage/15">
            {STATS.map((stat, i) => (
              <BlurReveal key={stat.label} delay={i * 0.15} className="text-center px-2 sm:px-4">
                <p className="font-heading text-2xl sm:text-4xl md:text-5xl text-bark font-light">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} duration={1.4} />
                </p>
                <p className="mt-2 text-[10px] sm:text-xs text-earth/50 leading-snug max-w-[90px] sm:max-w-[120px] mx-auto">
                  {stat.label}
                </p>
              </BlurReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-6 bg-cream">
        <div className="h-px w-24 bg-sage/20" />
        <span className="mx-4 text-sage/40 text-xl">✦</span>
        <div className="h-px w-24 bg-sage/20" />
      </div>

      {/* How Reiki Supports You */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-cream to-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <BlurReveal delay={0.1}>
              <p className="text-terracotta text-xs font-semibold tracking-[0.22em] uppercase mb-3">
                Holistic Wellness
              </p>
            </BlurReveal>
            <BlurText
              text="How Reiki Can Support You"
              className="font-heading text-3xl md:text-4xl font-light text-bark leading-tight block"
              delay={0.2}
              charDelay={0.02}
            />
            <BlurWords
              text="Reiki is a gentle, supportive practice that helps the body and mind settle into a more balanced, regulated state—guided by your own inner wisdom. Each experience is unique, with support across physical, emotional, mental, and spiritual well-being."
              className="mt-4 text-earth/60 max-w-2xl mx-auto leading-relaxed"
              delay={0.4}
              wordDelay={0.03}
            />
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5" stagger={0.1}>
            {SUPPORT_AREAS.map((area) => (
              <StaggerItem key={area.title}>
                <div className="group rounded-2xl bg-white/60 backdrop-blur-sm border border-sage/10 p-5 lg:p-6 hover:shadow-lg hover:shadow-sage/5 transition-all duration-500 h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sage/10 text-sage mb-4 group-hover:bg-sage group-hover:text-white transition-all duration-300">
                    {area.icon}
                  </div>
                  <h3 className="font-heading text-lg font-medium text-bark mb-3">
                    {area.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-earth/70">
                        <Sun size={11} className="text-honey mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <BlurReveal delay={0.1}>
              <p className="text-terracotta text-xs font-semibold tracking-[0.22em] uppercase mb-4">
                Our Offerings
              </p>
            </BlurReveal>
            <BlurText
              text="Services & Offerings"
              className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight block"
              delay={0.2}
              charDelay={0.025}
            />
            <BlurWords
              text="Each session is approached with care and intention, honoring the unique needs of every individual."
              className="mt-5 text-earth/60 max-w-xl mx-auto leading-relaxed"
              delay={0.5}
              wordDelay={0.05}
            />
          </div>

          <StaggerContainer
            className="mt-4 flex flex-wrap justify-center gap-6"
            stagger={0.1}
          >
            {SERVICES.map((service) => (
              <StaggerItem key={service.title} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col">
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <BlurReveal delay={0.4} className="mt-12 text-center">
            <Button href="/services" variant="secondary">
              View All Services →
            </Button>
          </BlurReveal>
        </div>
      </section>

      <div className="flex items-center justify-center py-6 bg-warm-white">
        <div className="h-px w-24 bg-sage/20" />
        <span className="mx-4 text-sage/40 text-xl">✦</span>
        <div className="h-px w-24 bg-sage/20" />
      </div>

      {/* Invitation / CTA — dark section */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,#2A1F18_0%,#1A1512_70%,#0F0C0A_100%)]" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-sage blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-terracotta blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <BlurReveal className="mb-8">
            <Divider className="[&_span]:text-sage-light [&_div]:bg-cream/20" />
          </BlurReveal>
          <BlurText
            text="Are you ready to activate"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight block"
            delay={0.1}
            charDelay={0.018}
          />
          <br />
          <BlurReveal delay={0.55}>
            <span className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-sage-light">{"untapped energy "}</span><span className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-cream">{"within you?"}</span>
          </BlurReveal>
          <BlurReveal delay={0.7} className="mt-6 text-cream/60 text-lg leading-relaxed max-w-xl mx-auto">
            Reiki is available to everyone. If something in you is asking for change, you&apos;re invited to begin.
          </BlurReveal>

          <BlurReveal delay={1.1} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/book#discovery">
              Book your Discovery Call
            </Button>
          </BlurReveal>
          <BlurReveal delay={1.3}>
            <p className="mt-5 text-cream/40 text-sm">
              New clients start here with a brief, complimentary 15-minute call
              to connect, ask questions, and choose the best next step.
            </p>
          </BlurReveal>
        </div>
      </section>
    </>
  );
}
