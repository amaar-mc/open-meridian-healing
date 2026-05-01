"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui";
import { BlurText } from "@/components/blur-text";

const FAQS = [
  {
    question: "What is Reiki?",
    answer:
      "Reiki is a complementary wellness practice in which universal life force energy is offered through light touch or hands held just above the body. It is designed to support you and your energetic system as a whole—body, mind, and spirit—within a calm and intentional setting.\n\nReiki was developed in Japan in the early 20th century by Mikao Usui. The word \"Reiki\" comes from the Japanese words Rei (universal) and Ki (life energy). Since its origin, Reiki has been shared and practiced worldwide as a gentle, non-invasive approach to supporting relaxation, energetic balance, and overall well-being.\n\nReiki does not replace medical care and may be received alongside other supportive practices.",
  },
  {
    question: "What does Reiki feel like?",
    answer:
      "Each person's experience is unique. Many people feel deeply relaxed, calm, warm, or gently energized. Some notice subtle sensations or emotional release, while others simply experience quiet rest. There is no \"right\" way to receive Reiki.",
  },
  {
    question: "Do I need to believe in Reiki for it to work?",
    answer:
      "No belief system is required. Reiki is available to everyone and is received according to your own readiness and openness.",
  },
  {
    question: "What happens during an in-person Reiki session?",
    answer:
      "Each session begins with a short grounding meditation to help you become calm and present. You remain fully clothed and rest comfortably on a treatment table while Reiki is offered.\n\nIn-person sessions include complimentary time on a gemstone-infused Rainbow Chakra Mat (unless declined), soft meditative music, and a brief integration period at the close.",
  },
  {
    question: "What is Distance Reiki?",
    answer:
      "Distance Reiki is offered remotely and may be received from anywhere. Sessions begin with a short check-in by phone or Zoom, followed by the full session while you rest in your own space.",
  },
  {
    question: "What is Reiki-Infused Henna?",
    answer:
      "Henna is a natural, plant-based temporary body art that lasts approximately 1.5–2 weeks. Reiki-infused henna is prepared and blessed prior to application so that the henna itself carries Reiki energy. Clients may submit personal designs for review before booking.",
  },
  {
    question: "What is Ceremonial Reiki Henna Tattooing?",
    answer:
      "Ceremonial Reiki Henna includes live Reiki channeling during the application, along with grounding and intentional energy work. It weaves together energy healing and body art in a calm, intentional experience.",
  },
  {
    question: "Do you offer in-home services?",
    answer:
      "Yes. In-home Reiki and Reiki Henna services are available throughout the Greater Bay Area. A $200 non-refundable deposit is required to secure in-home bookings. Deposits may be transferred once with at least 72 hours notice.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "A minimum of 24 hours notice is required for cancellations or rescheduling of in-person and distance sessions. In-home deposits are non-refundable but may be transferred once with appropriate notice.",
  },
] as const;

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl bg-white/70 border border-sage/10 overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-sage/5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
      >
        <h3 className="font-heading text-xl lg:text-2xl text-bark font-medium pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            mass: 0.6,
          }}
          className="shrink-0 w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage"
        >
          <Plus size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              height: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{
                opacity: { duration: 0.3, delay: 0.12 },
                y: { duration: 0.3, delay: 0.12 },
              }}
              className="px-6 lg:px-8 pb-6 lg:pb-8"
            >
              <div className="h-px bg-sage/10 mb-5" />
              {answer.split("\n\n").map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.18 + i * 0.06 }}
                  className="text-earth/70 leading-relaxed mb-3 last:mb-0"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-linen via-blush to-cream overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Common Questions
            </p>
            <BlurText
              text="Frequently Asked Questions"
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-bark leading-tight block"
              delay={0.3}
              charDelay={0.022}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 0.05}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-earth/60 mb-6">
                Have a question not listed here?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact">Contact Us</Button>
                <Button href="/book#discovery" variant="outline">
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
