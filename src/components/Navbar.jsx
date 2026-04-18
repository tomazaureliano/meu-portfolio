import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data/portfolioData";

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/Curriculo_Tomaz_Aureliano__1_.pdf";
  link.download = "Curriculo_Tomaz_Aureliano.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

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
        <button
          onClick={() => navigate("home")}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="font-sg" style={{ fontSize: "1rem", fontWeight: 700, color: "#D92525", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            TOMAZ.AURELIANO
          </span>
        </button>

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

          <button
            className="btn-ghost"
            onClick={downloadResume}
            style={{ marginLeft: 16, padding: "8px 18px", fontSize: "0.65rem", display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>download</span>
            RESUME
          </button>
        </div>
      </div>
    </nav>
  );
}