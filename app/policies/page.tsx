import Link from "next/link";

export default function PoliciesPage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-cream">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <header className="mb-12">
          <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4">
            🌿 Open Meridian Healing
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight">
            Policies & Payment Information
          </h1>
        </header>

        <div className="space-y-10 text-earth/70 leading-relaxed">
          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              Scheduling
            </h3>
            <p>
              All sessions must be scheduled in advance. New clients begin with a
              Discovery Call prior to booking Reiki sessions.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              Cancellation Policy
            </h3>
            <p>
              A minimum of 24 hours notice is required to cancel or reschedule
              in-person and distance sessions. Appointments canceled with less
              than 24 hours notice may be charged the full session fee.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              In-Home Services
            </h3>
            <p className="mb-3">
              In-home Reiki and Reiki Henna services require advance inquiry and
              confirmation. A $200 non-refundable deposit is required to secure
              all in-home bookings. Deposits may be transferred one time if
              rescheduled with at least 72 hours notice. The remaining balance is
              due upon arrival on the day of service.
            </p>
            <ul className="space-y-1.5 pl-5 list-disc marker:text-sage/50">
              <li>In-Home Reiki-Infused Henna — minimum $400</li>
              <li>In-Home Ceremonial Reiki Henna — minimum $450</li>
              <li>In-Home Reiki Sessions — based on session length and travel</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              Packages
            </h3>
            <p>
              Session packages are non-refundable and do not expire. Packages may
              not be transferred to another individual.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              Late Arrivals
            </h3>
            <p>
              If you arrive late, your session may be shortened to honor
              scheduled appointments. The full session fee still applies.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              Scope of Practice
            </h3>
            <p>
              All services offered are complementary wellness practices and are
              not medical treatment. Reiki does not replace licensed healthcare.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-sage/15">
          <Link
            href="/"
            className="text-sm text-sage hover:text-sage-dark transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </article>
    </div>
  );
}
