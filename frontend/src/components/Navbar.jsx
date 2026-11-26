
import { useState } from "react";
import {
  ScanLine,
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "About", href: "#about" },
];

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <ScanLine size={30} color="var(--primary)" />

          <span className="text-2xl font-bold tracking-tight">
            Skill<span className="text-[var(--primary)]">Scan</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)] transition-colors"
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          {/* Login */}
          <a
            href="#login"
            className="hidden lg:block text-sm font-semibold px-3 hover:text-[var(--primary)]"
          >
            Log in
          </a>

          {/* Get Started */}
          <a
            href="#get-started"
            className={`hidden lg:flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--primary)] font-semibold text-sm hover:opacity-90 transition-opacity ${
              theme === "dark" ? "text-black" : "text-white"
            }`}
          >
            Get Started
            <ArrowUpRight size={17} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden p-2"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden px-6 py-5 border-t border-[var(--border)] bg-[var(--surface)]"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium hover:text-[var(--primary)]"
              >
                {link.name}
              </a>
            ))}

            <a href="#login" onClick={() => setMenuOpen(false)}>
              Log in
            </a>

            <a
              href="#get-started"
              onClick={() => setMenuOpen(false)}
              className={`text-center py-3 rounded-xl bg-[var(--primary)] font-semibold ${
                theme === "dark" ? "text-black" : "text-white"
              }`}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
