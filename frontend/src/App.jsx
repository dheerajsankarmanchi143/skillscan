
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  // Theme State
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply and Save Theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Switch Theme
  const toggleTheme = () => {
    setTheme((previous) =>
      previous === "light" ? "dark" : "light"
    );
  };

  return (
    <div className="min-h-screen">

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <CTA />
      </main>

      <Footer />

    </div>
  );
}

export default App;
