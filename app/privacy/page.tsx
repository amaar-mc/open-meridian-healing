import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-cream">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <header className="mb-12">
          <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4">
            <img src="/images/logo.png" alt="" width={18} height={18} className="inline-block mr-1.5 align-middle" />Open Meridian Healing
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-bark leading-tight">
            Privacy Policy
          </h1>
        </header>

        <div className="space-y-10 text-earth/70 leading-relaxed">
          <p>
            Open Meridian Healing respects your privacy and is committed to
            protecting your personal information.
          </p>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              Information Collected
            </h3>
            <p className="mb-3">
              When you book a session or submit an inquiry, we may collect:
            </p>
            <ul className="space-y-1.5 pl-5 list-disc marker:text-sage/50">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Location information</li>
              <li>Health-related information shared voluntarily</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              How Information Is Used
            </h3>
            <p className="mb-3">Your information is used solely for:</p>
            <ul className="space-y-1.5 pl-5 list-disc marker:text-sage/50">
              <li>Scheduling and communication</li>
              <li>Providing requested services</li>
              <li>Maintaining client records</li>
            </ul>
            <p className="mt-3">
              Your information is not sold or shared with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              Data Protection
            </h3>
            <p>
              Reasonable administrative and digital safeguards are used to
              protect your information.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">
              Your Rights (California Residents)
            </h3>
            <p className="mb-3">
              If you are a California resident, you may request to:
            </p>
            <ul className="space-y-1.5 pl-5 list-disc marker:text-sage/50">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>
                Request deletion of your data (subject to record-keeping
                requirements)
              </li>
            </ul>
            <p className="mt-3">
              Requests may be submitted via the{" "}
              <Link
                href="/contact"
                className="text-sage hover:text-sage-dark transition-colors underline underline-offset-2"
              >
                Contact page
              </Link>
              .
            </p>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-bark mb-3">Updates</h3>
            <p>
              This Privacy Policy may be updated periodically. Continued use of
              the website indicates acceptance of any changes.
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
