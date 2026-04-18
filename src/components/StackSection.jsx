import { SectionLabel, SectionTitle, TerminalHeader } from "./ui";
import { LANGUAGES, SKILL_MATRIX, LOGIC_BLOCKS } from "../data/portfolioData";

// ─── LanguageCard ─────────────────────────────────────────────────────────────
function LanguageCard({ name, version, icon, pct, desc, alt }) {
  return (
    <div className="ghost-border card-hover" style={{ background: alt ? "#1B1B1B" : "#131313", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28 }}>
        <span className="material-symbols-outlined" style={{ fontSize: 34, color: "#D92525" }}>{icon}</span>
        <span className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9DD0CF" }}>
          {version}
        </span>
      </div>
      <h3 className="font-sg" style={{ fontSize: "1.15rem", fontWeight: 700, textTransform: "uppercase", color: "#E2E2E2", marginBottom: 8 }}>
        {name}
      </h3>
      <p style={{ fontSize: "0.84rem", color: "#E6BDB8", marginBottom: 20, minHeight: 36 }}>{desc}</p>
      <div style={{ width: "100%", background: "#0E0E0E", height: 3 }}>
        <div className="grow-bar" style={{ "--tw": `${pct}%`, background: "#D92525", height: "100%" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 5 }}>
        <span className="font-sg" style={{ fontSize: "0.62rem", color: "#9DD0CF" }}>
          SYS.PROFICIENCY: {pct}%
        </span>
      </div>
    </div>
  );
}

// ─── SkillMatrix ──────────────────────────────────────────────────────────────
function SkillMatrix() {
  return (
    <div style={{ background: "#131313", marginBottom: 48 }} className="ghost-border">
      <TerminalHeader left="~ ./execute_skills.sh" right="ACTIVE" />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 32 }}>
        {SKILL_MATRIX.map((cat, i) => (
          <div key={i}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFB4AB", display: "block", marginBottom: 14, fontFamily: "'Inter',sans-serif" }}>
              {cat.title}
            </span>
            <ul style={{ listStyle: "none" }}>
              {cat.items.map(item => <li key={item} className="skill-li">{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── LogicBlock ───────────────────────────────────────────────────────────────
function LogicBlock({ icon, title, items, bg }) {
  return (
    <div className="ghost-border" style={{ background: bg, padding: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
        <span className="material-symbols-outlined" style={{ color: "#D92525", fontSize: 26 }}>{icon}</span>
        <h3 className="font-sg" style={{ fontSize: "1.35rem", fontWeight: 700, textTransform: "uppercase", color: "#E2E2E2" }}>
          {title}
        </h3>
      </div>
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9DD0CF", marginBottom: 6, fontFamily: "'Inter',sans-serif" }}>
            {item.sub}
          </h4>
          <p style={{ fontSize: "0.84rem", color: "#E6BDB8", lineHeight: 1.6 }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

// ─── StackSection ─────────────────────────────────────────────────────────────
export default function StackSection() {
  return (
    <section id="stack" className="section-dark" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px" }}>

        <SectionLabel color="#9DD0CF">SYSTEM.CAPABILITIES // INITIALIZED</SectionLabel>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <SectionTitle line1="STACK_MANIFESTO" size="clamp(2.5rem,7vw,4.5rem)" />
          <div style={{ color: "#FFB4AB" }} />  {/* color override via SectionTitle won't work for single line */}
          <div style={{ background: "#131313", padding: 24, borderBottom: "4px solid #D92525", maxWidth: 680, marginTop: 16 }}>
            <p style={{ fontSize: "0.98rem", color: "#E6BDB8", lineHeight: 1.7 }}>
              Um índice das linguagens, frameworks e metodologias utilizadas no desenvolvimento de interfaces modernas. Cada ferramenta escolhida por sua eficiência, ergonomia e impacto real nos projetos.
            </p>
          </div>
        </div>

        {/* Language cards */}
        <h2 className="font-sg" style={{ fontSize: "1.8rem", fontWeight: 600, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#FFB4AB", marginBottom: 24 }}>
          CORE LANGUAGES
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 2, marginBottom: 48 }}>
          {LANGUAGES.map((l, i) => <LanguageCard key={i} {...l} alt={i % 2 !== 0} />)}
        </div>

        <SkillMatrix />

        {/* Logic blocks */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2 }}>
          {LOGIC_BLOCKS.map((b, i) => (
            <LogicBlock key={i} {...b} bg={i % 2 === 0 ? "#2A2A2A" : "#1F1F1F"} />
          ))}
        </div>

      </div>
    </section>
  );
}
