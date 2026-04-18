import { useState, useEffect } from "react";
import { SectionLabel, TermLine } from "./ui";
import { OWNER, METRICS } from "../data/portfolioData";

// ─── Metric Card ──────────────────────────────────────────────────────────────
function MetricCard({ value, label, icon, color }) {
  return (
    <div className="ghost-border" style={{ background: "#131313", padding: "28px 24px" }}>
      <span className="material-symbols-outlined" style={{ color: "#9DD0CF", fontSize: 22 }}>{icon}</span>
      <div className="font-sg" style={{ fontSize: "2.2rem", fontWeight: 700, color, lineHeight: 1, marginTop: 14 }}>
        {value}
      </div>
      <p style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E6BDB8", marginTop: 8, fontFamily: "'Inter',sans-serif", fontWeight: 700 }}>
        {label}
      </p>
    </div>
  );
}

// ─── Typing Headline ──────────────────────────────────────────────────────────
function TypingHeadline({ text }) {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setChars(c => {
        if (c >= text.length) { clearInterval(t); return c; }
        return c + 1;
      });
    }, 55);
    return () => clearInterval(t);
  }, [text]);

  return (
    <h1 className="font-sg" style={{
      fontSize: "clamp(3rem,8vw,5.5rem)",
      fontWeight: 700,
      letterSpacing: "-0.04em",
      color: "#E2E2E2",
      lineHeight: 0.9,
      textTransform: "uppercase",
      marginBottom: 40,
      whiteSpace: "pre-line",
      minHeight: "2.4em",
    }}>
      {text.slice(0, chars)}
      <span className="cursor-blink" style={{ color: "#D92525" }}>_</span>
    </h1>
  );
}

// ─── Terminal Overlay ─────────────────────────────────────────────────────────
function TerminalOverlay() {
  return (
    <div
      style={{
        width: 400, flexShrink: 0,
        background: "rgba(53,53,53,0.85)",
        backdropFilter: "blur(20px)",
        padding: 24, position: "relative", overflow: "hidden",
        boxShadow: "0 0 32px rgba(105,0,5,0.06)",
      }}
      className="ghost-border"
    >
      <div className="scanlines" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4 }} />
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid rgba(92,64,60,0.3)" }}>
        <span className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9DD0CF" }}>
          SYS.TERMINAL // SECURE
        </span>
        <span className="font-sg" style={{ fontSize: "0.65rem", color: "#E6BDB8" }}>ID: 9482.A</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <TermLine text="BOOT SEQUENCE INITIATED..." />
        <TermLine text="LOADING KERNEL MODULES [OK]" />
        <TermLine text="MOUNTING PORTFOLIO_DATA.JSON [OK]" />
        <TermLine text={`USER: ${OWNER.name.toUpperCase()} [IDENTIFIED]`} />
        <TermLine text={`ROLE: ${OWNER.role.toUpperCase()} [LOADED]`} />
        <TermLine text="AWAITING INPUT_" active />
      </div>
    </div>
  );
}

// ─── HeroSection ──────────────────────────────────────────────────────────────
export default function HeroSection({ navigate }) {
  return (
    <section id="home" className="section-dark" style={{ minHeight: "100vh", paddingTop: 88, position: "relative", overflow: "hidden" }}>
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "56px 48px 0" }}>
        {/* Hero row */}
        <div style={{ display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Left */}
          <div style={{ flex: "1 1 480px" }} className="fade-up">
            <p className="font-sg" style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#FFB4AB", marginBottom: 24 }}>
              PORTFÓLIO TÉCNICO // V 1.0
            </p>

            <TypingHeadline text={"SISTEMA\nINICIADO"} />

            <p style={{ fontSize: "1rem", color: "#E6BDB8", maxWidth: 520, lineHeight: 1.75, marginBottom: 40 }}>
              {OWNER.bio}
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => navigate("projects")}>
                VER PROJETOS
              </button>
              <button className="btn-ghost" onClick={() => navigate("contact")}>
                CONTATO
              </button>
            </div>
          </div>

          {/* Terminal */}
          <TerminalOverlay />
        </div>

        {/* Metrics */}
        <div style={{ marginTop: 64, paddingBottom: 80 }}>
          <SectionLabel>CORE METRICS</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 2 }}>
            {METRICS.map((m, i) => <MetricCard key={i} {...m} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
