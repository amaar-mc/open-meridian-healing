"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui";
import { Mail, MapPin, Globe, Send } from "lucide-react";

// Replace with Web3Forms access key — get it free at web3forms.com with openmeridianhealing@gmail.com
const WEB3FORMS_KEY = "7cca3ec0-fb9b-437f-812b-d36b064e0ffe";

const INQUIRY_OPTIONS = [
  "Discovery Call",
  "In-Person Reiki Sessions",
  "Rainbow Chakra Mat Session",
  "Distance Reiki",
  "In-Home Reiki Sessions (Inquiry required)",
  "In-Person Reiki-Infused Henna Tattooing",
  "In-Home Reiki-Infused Henna Tattooing (Inquiry required)",
  "In-Person Ceremonial Reiki Henna Tattooing",
  "In-Home Ceremonial Reiki Henna Tattooing (Inquiry required)",
  "Other",
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `Website Inquiry: ${data.get("subject") ?? "General"}`);
    data.append("from_name", String(data.get("name") ?? "Website Visitor"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await response.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-linen via-blush to-cream overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Get in Touch
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-bark leading-tight">
              Contact
            </h1>
            <p className="mt-8 text-bark-light/60 text-lg leading-relaxed max-w-2xl mx-auto">
              If you have a question, would like help choosing the right
              offering, or want to inquire about an in-home service, you&apos;re
              welcome to reach out.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/book#discovery">Book a Discovery Call</Button>
              <Button href="/book" variant="outline" small>
                Returning Clients: Schedule
              </Button>
              <Button href="/contact#form" variant="secondary" small>
                In-Home Service Inquiry
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section id="form" className="pb-24 lg:pb-32 bg-cream scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Sidebar */}
            <ScrollReveal variant="slideLeft" className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="font-heading text-xl text-bark font-medium mb-4">
                    Reach Out Directly
                  </h3>
                  <a
                    href="mailto:openmeridianhealing@gmail.com"
                    className="flex items-center gap-3 rounded-xl bg-sage/8 border border-sage/10 p-4 text-sm text-bark hover:bg-sage/15 transition-colors"
                  >
                    <Mail size={18} className="text-sage" />
                    openmeridianhealing@gmail.com
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-earth/70">
                    <MapPin size={16} className="text-sage mt-0.5 shrink-0" />
                    <span>In-person sessions in a private space in Gilroy, CA</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-earth/70">
                    <Globe size={16} className="text-sage mt-0.5 shrink-0" />
                    <span>In-home services throughout the Greater Bay Area</span>
                  </div>
                </div>

                <div className="rounded-xl bg-sand/40 border border-sand p-5">
                  <p className="text-xs text-earth/50 leading-relaxed">
                    This form is for general questions and inquiries. To schedule,
                    use the booking links above. New clients begin with a Discovery Call.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal variant="slideRight" delay={0.2} className="lg:col-span-2">
              {submitted ? (
                <div className="rounded-2xl bg-sage/10 border border-sage/15 p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                    <Send size={28} className="text-sage" />
                  </div>
                  <h3 className="font-heading text-3xl text-bark mb-4">
                    Thank You
                  </h3>
                  <p className="text-earth/60 max-w-md mx-auto leading-relaxed">
                    Your message has been received. You can expect a reply within 1–2 business days.
                  </p>
                  <p className="mt-4 text-earth/60 max-w-md mx-auto">
                    If you&apos;re a new client and would like to schedule, you&apos;re welcome to begin here:
                  </p>
                  <div className="mt-6">
                    <Button href="/book#discovery">Book a Discovery Call</Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-white/70 border border-sage/10 p-8 lg:p-10"
                >
                  <h2 className="font-heading text-3xl text-bark mb-8">
                    Send a Message
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">
                        Full Name <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full rounded-xl border border-sage/20 bg-cream/50 px-4 py-3 text-sm text-bark placeholder:text-earth/30 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">
                        Email Address <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-sage/20 bg-cream/50 px-4 py-3 text-sm text-bark placeholder:text-earth/30 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-bark mb-2">
                      Phone Number{" "}
                      <span className="text-earth/40 font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-xl border border-sage/20 bg-cream/50 px-4 py-3 text-sm text-bark placeholder:text-earth/30 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-bark mb-2">
                      What are you reaching out about?{" "}
                      <span className="text-terracotta">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      className="w-full rounded-xl border border-sage/20 bg-cream/50 px-4 py-3 text-sm text-bark focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                    >
                      <option value="">Select an option</option>
                      {INQUIRY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-bark mb-2">
                      Message <span className="text-terracotta">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl border border-sage/20 bg-cream/50 px-4 py-3 text-sm text-bark placeholder:text-earth/30 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-bark mb-3">
                      Preferred method of contact
                    </label>
                    <div className="flex gap-6">
                      {(["Email", "Text"] as const).map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contact-method"
                            value={method}
                            defaultChecked={method === "Email"}
                            className="w-4 h-4 text-sage focus:ring-sage border-sage/30"
                          />
                          <span className="text-sm text-earth/70">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <p className="mt-4 text-sm text-terracotta text-center">
                      Something went wrong. Email directly: openmeridianhealing@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-8 w-full rounded-full bg-sage px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-sage-dark hover:shadow-lg hover:shadow-sage/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>

                  <p className="mt-4 text-xs text-earth/40 text-center">
                    Sent to openmeridianhealing@gmail.com
                  </p>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
