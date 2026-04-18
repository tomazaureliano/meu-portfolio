import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data/portfolioData";

export default function Navbar({ active, navigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? "rgba(0,0,0,0.94)" : "#000",
      backdropFilter: scrolled ? "blur(20px)" : "none",
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 48px", maxWidth: 1440, margin: "0 auto",
      }}>
        {/* Brand */}
        <button
          onClick={() => navigate("home")}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="font-sg" style={{ fontSize: "1rem", fontWeight: 700, color: "#D92525", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            TOMAZ.AURELIANO
          </span>
        </button>

        {/* Links */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {NAV_ITEMS.map(s => (
            <button
              key={s}
              className={`nav-link ${active === s ? "is-active" : ""}`}
              onClick={() => navigate(s)}
            >
              {s}
            </button>
          ))}
          <a
            href="#"
            className="btn-ghost"
            style={{ marginLeft: 16, padding: "8px 18px", fontSize: "0.65rem" }}
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
