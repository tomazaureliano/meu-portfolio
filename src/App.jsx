import { useState, useEffect } from "react";
import globalStyles from "./styles/globalStyles";
import { NAV_ITEMS } from "./data/portfolioData";

import Navbar          from "./components/Navbar";
import HeroSection     from "./components/HeroSection";
import ProfileSection  from "./components/ProfileSection";
import StackSection    from "./components/StackSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection  from "./components/ContactSection";
import Footer          from "./components/Footer";

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("home");

  // Smooth scroll helper used by children
  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  // Highlight nav link based on scroll position
  useEffect(() => {
    const observers = NAV_ITEMS.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <>
      {/* Inject global styles */}
      <style>{globalStyles}</style>

      <div style={{ background: "#0E0E0E", minHeight: "100vh" }}>
        <Navbar active={active} navigate={navigate} />
        <HeroSection   navigate={navigate} />
        <ProfileSection />
        <StackSection  />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
