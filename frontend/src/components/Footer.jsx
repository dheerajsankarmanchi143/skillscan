
import { ScanLine, Code2, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "About", href: "#about" },
];

const careerTools = [
  "Resume Analysis",
  "Job Matching",
  "Skill Gap Detection",
  "Career Roadmap",
  "Application Tracker",
  "Career Analytics",
];

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand Section */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2"
            >
              <ScanLine
                size={32}
                className="text-[var(--primary)]"
              />

              <span className="text-2xl font-bold">
                Skill
                <span className="text-[var(--primary)]">
                  Scan
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm leading-relaxed text-[var(--muted)]">
              Empowering students and job seekers to
              discover their strengths, bridge skill gaps
              and build smarter careers.
            </p>

            {/* GitHub Repository Link */}
            <a
              href="https://github.com/dheerajsankarmanchi143/skillscan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SkillScan GitHub repository"
              className="mt-6 inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
            >
              <Code2 size={22} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Tools */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Career Tools
            </h3>

            <ul className="space-y-4">
              {careerTools.map((tool) => (
                <li
                  key={tool}
                  className="text-[var(--muted)]"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-[var(--muted)] text-center">
            © {new Date().getFullYear()} SkillScan.
            All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-[var(--muted)]">
            Built with
            <Heart
              size={16}
              className="text-[var(--primary)] fill-current"
            />
            for your future.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
