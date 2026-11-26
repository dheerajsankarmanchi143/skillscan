
import { Rocket, ArrowRight, Sparkles } from "lucide-react";

function CTA() {
  return (
    <section
      id="get-started"
      className="py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[var(--surface)] px-6 py-16 sm:px-12 sm:py-20 text-center">

          {/* Background Glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative max-w-3xl mx-auto">

            {/* Rocket Icon */}
            <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-3xl bg-orange-500/10 text-[var(--primary)] mb-8">
              <Rocket size={36} />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[var(--primary)]">
              <Sparkles size={16} />
              Your Future Starts Here
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Ready to unlock{" "}
              <span className="text-[var(--primary)]">
                your potential?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              Take the first step toward your dream career.
              Discover your strengths, bridge your skill gaps
              and build your future with SkillScan.
            </p>

            {/* CTA Button */}
            <button
              type="button"
              disabled
              className="btn-primary mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all disabled:cursor-not-allowed"
            >
              Get Started
              <ArrowRight size={20} />
            </button>

            {/* Supporting Text */}
            <p className="mt-5 text-sm text-[var(--muted)]">
              Resume analysis is coming soon.
              Built for your career journey.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
