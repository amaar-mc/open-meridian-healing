import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-cream">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <header className="mb-12">
          <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4">
            🌿 Open Meridian Healing
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight">
            Disclaimer
          </h1>
        </header>

        <div className="text-earth/70 leading-relaxed space-y-5">
          <p>
            Services provided by Open Meridian Healing are complementary wellness
            practices and are not medical treatment, diagnosis, or a substitute
            for licensed healthcare.
          </p>
          <p>
            Individual experiences vary and no specific outcomes are guaranteed.
          </p>
          <p>
            Reiki does not replace medical or mental health care and does not
            involve diagnosis or treatment. Clients are encouraged to continue
            working with their healthcare providers and to make informed
            decisions about their own care.
          </p>
          <p>
            By booking a session or using this website, you acknowledge that you
            have read and understood this disclaimer.
          </p>
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
