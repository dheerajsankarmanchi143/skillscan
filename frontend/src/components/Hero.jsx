
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  FileChartColumn,
  CheckCircle2,
} from "lucide-react";

const skills = [
  { name: "Technical Skills", score: 90 },
  { name: "Experience", score: 78 },
  { name: "Resume Quality", score: 88 },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-[var(--primary)] text-sm font-semibold mb-6">
            <Sparkles size={16} />
            Your Career Advantage
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Your potential.
            <br />
            <span className="text-[var(--primary)]">
              Unlocked.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] max-w-xl">
            Analyze your resume, discover missing skills,
            and build a personalized career roadmap
            towards your dream job.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#get-started"
              className="btn-primary flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all motion-safe:hover:-translate-y-1"
            >
              Analyze My Resume
              <ArrowRight size={20} />
            </a>

            <a
              href="#features"
              className="px-6 py-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] font-semibold hover:border-[var(--primary)] transition-all"
            >
              Explore Features
            </a>
          </div>

          <div className="flex items-center gap-2 mt-8 text-sm text-[var(--muted)]">
            <ShieldCheck
              size={20}
              className="text-[var(--primary)]"
            />
            Built for students and job seekers
          </div>
        </div>

        {/* Right Section - Resume Preview */}
        <div className="relative max-w-lg w-full mx-auto">
          <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-xl">

            {/* Card Header */}
            <div className="flex items-center justify-between pb-5 border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-orange-500/10 text-[var(--primary)]">
                  <FileChartColumn size={24} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Resume Analysis
                  </h2>
                  <p className="text-xs text-[var(--muted)]">
                    Sample analysis preview
                  </p>
                </div>
              </div>

              <span className="text-xs font-medium text-[var(--primary)] bg-orange-500/10 px-3 py-1 rounded-full">
                Demo
              </span>
            </div>

            {/* Circular Score */}
            <div className="flex justify-center py-8">
              <div className="relative w-40 h-40">
                <svg
                  viewBox="0 0 160 160"
                  className="w-full h-full -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth="10"
                  />

                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="427.26"
                    strokeDashoffset="59.82"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">
                    86%
                  </span>
                  <span className="text-sm text-[var(--muted)]">
                    Match Score
                  </span>
                </div>
              </div>
            </div>

            {/* Skill Progress Bars */}
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">
                      {skill.name}
                    </span>
                    <span className="text-[var(--muted)]">
                      {skill.score}%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--primary)]"
                      style={{ width: `${skill.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className="flex items-center gap-2 mt-6 pt-5 border-t border-[var(--border)]">
              <CheckCircle2
                size={18}
                className="text-green-600"
              />
              <span className="text-sm text-[var(--muted)]">
                Sample analysis completed
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
