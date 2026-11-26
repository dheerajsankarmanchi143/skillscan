
import {
  FileSearch,
  Target,
  TrendingUp,
  Route,
  BriefcaseBusiness,
  ChartPie,
} from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Resume Analysis",
    description:
      "Understand your resume's strengths and discover areas that need improvement.",
  },
  {
    icon: Target,
    title: "Job Matching",
    description:
      "Compare your resume against job descriptions and discover how well your skills match.",
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Detection",
    description:
      "Identify missing technical and professional skills required for your dream job.",
  },
  {
    icon: Route,
    title: "Career Roadmap",
    description:
      "Build a personalized step-by-step learning roadmap to achieve your career goals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Application Tracker",
    description:
      "Organize your job applications and track their progress in one place.",
  },
  {
    icon: ChartPie,
    title: "Career Analytics",
    description:
      "Visualize your skill development, career readiness and overall progress.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 border-t border-[var(--border)] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[var(--primary)] mb-4">
            Powerful Features
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Everything you need to
            <br />
            <span className="text-[var(--primary)]">
              accelerate your career.
            </span>
          </h2>

          <p className="mt-5 text-lg text-[var(--muted)] leading-relaxed">
            The right tools to turn your career goals
            into actionable steps.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 transition-all duration-300 hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none"
              >
                {/* Hover Glow */}
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                />

                {/* Feature Icon */}
                <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500/10 text-[var(--primary)] mb-6">
                  <Icon size={28} />
                </div>

                {/* Feature Title */}
                <h3 className="relative text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="relative text-[var(--muted)] leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
