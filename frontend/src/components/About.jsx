
import {
  Target,
  Eye,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Make career preparation simpler, smarter and more accessible.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Empower every student and job seeker to reach their career potential.",
  },
  {
    icon: HeartHandshake,
    title: "Our Commitment",
    description:
      "Provide practical, accessible and user-friendly career development tools.",
  },
];

const benefits = [
  "Built for students and job seekers",
  "Personalized career guidance",
  "Actionable skill insights",
  "Simple and user-friendly experience",
];

function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-[var(--border)] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)]">
            About SkillScan
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Bridging the gap between{" "}
            <span className="text-[var(--primary)]">
              talent and opportunity.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            SkillScan is a career readiness platform designed
            to help students and job seekers understand their
            strengths, identify missing skills and build a
            clearer path toward their dream careers.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            We believe career preparation should be simple,
            personalized and accessible to everyone.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={22}
                  className="shrink-0 text-[var(--primary)]"
                />
                <span className="font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 shadow-xl">
          <div className="space-y-8">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="flex items-start gap-5"
                >
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500/10 text-[var(--primary)]">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      {value.title}
                    </h3>

                    <p className="mt-2 leading-relaxed text-[var(--muted)]">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
