
import { UploadCloud, ScanSearch, Route } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UploadCloud,
    title: "Upload your resume",
    description:
      "Upload your PDF resume and enter your target job description.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Discover your skill gaps",
    description:
      "Compare your resume with job requirements and identify missing skills.",
  },
  {
    number: "03",
    icon: Route,
    title: "Build your future",
    description:
      "Follow a personalized learning roadmap to achieve your career goals.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 border-t border-[var(--border)] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)]">
            How It Works
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Three simple steps.
            <br />
            <span className="text-[var(--primary)]">
              One smarter career.
            </span>
          </h2>

          <p className="mt-5 text-lg text-[var(--muted)]">
            Your journey from resume to career readiness starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center transition-all duration-300 hover:border-[var(--primary)] hover:shadow-xl"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-5 text-7xl font-bold text-[var(--primary)] opacity-10"
                >
                  {step.number}
                </span>

                <div className="relative mx-auto w-20 h-20 flex items-center justify-center rounded-2xl bg-orange-500/10 text-[var(--primary)] mb-6">
                  <Icon size={34} />
                </div>

                <span className="text-sm font-semibold tracking-widest text-[var(--primary)]">
                  STEP {step.number}
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
