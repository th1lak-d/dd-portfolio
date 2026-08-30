import { useEffect, useState } from "react";
import Hero from "./components/Hero.jsx";
import FeaturedProject from "./components/FeaturedProject.jsx";
import Skills from "./components/Skills.jsx";
import NextProject from "./components/NextProject.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("dd-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dd-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="bg-paper dark:bg-paper-d text-ink dark:text-ink-d min-h-screen font-body transition-colors duration-300">
      <ThemeToggle dark={dark} onToggle={() => setDark((d) => !d)} />
      <Hero />
      <FeaturedProject />
      <Skills />
      <NextProject />
      <Contact />
      <Footer />
    </div>
  );
}
  
