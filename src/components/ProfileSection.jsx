import { SectionLabel, SectionTitle, Tag } from "./ui";
import { OWNER, EDUCATION, DIRECTIVES } from "../data/portfolioData";
import { PROFILE_PHOTO } from "../data/photo";

// ─── AvatarCard ───────────────────────────────────────────────────────────────
function AvatarCard() {
  return (
    <div style={{ width: 260, flexShrink: 0, background: "#2A2A2A", padding: 10 }} className="ghost-border">
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 8, left: 8, width: 18, height: 18, borderTop: "2px solid #FFB4AB", borderLeft: "2px solid #FFB4AB", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: 8, right: 8, width: 18, height: 18, borderBottom: "2px solid #FFB4AB", borderRight: "2px solid #FFB4AB", zIndex: 2 }} />
        <img src={PROFILE_PHOTO} alt="Tomaz Aureliano" className="profile-img" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 4px 0" }}>
        <span className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9DD0CF" }}>
          STATUS: {OWNER.status}
        </span>
        <span className="font-sg" style={{ fontSize: "0.65rem", color: "#FFB4AB" }}>
          {OWNER.level}
        </span>
      </div>
    </div>
  );
}

// ─── BioBlock ─────────────────────────────────────────────────────────────────
function BioBlock() {
  return (
    <div style={{ flex: "1 1 400px" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "3px 10px", background: "#2A2A2A" }} className="ghost-border">
        <span className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9DD0CF" }}>
          SYSTEM USER
        </span>
      </div>

      <SectionTitle line1={OWNER.nameDisplay[0]} line2={OWNER.nameDisplay[1]} />

      <h2 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E6BDB8", display: "flex", alignItems: "center", gap: 8, margin: "16px 0 24px", fontFamily: "'Inter',sans-serif" }}>
        <span className="material-symbols-outlined" style={{ color: "#FFB4AB", fontSize: 18 }}>memory</span>
        {OWNER.roleDisplay}
      </h2>

      <p style={{ fontSize: "0.98rem", color: "#E2E2E2", lineHeight: 1.75, maxWidth: 580, borderLeft: "4px solid #D92525", paddingLeft: 20, marginBottom: 32 }}>
        {OWNER.bio}
      </p>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <a href={`mailto:${OWNER.email}`} className="btn-primary">INITIALIZE_CONTACT</a>
        <a href="#" className="btn-ghost">DECRYPT_RESUME</a>
      </div>
    </div>
  );
}

// ─── EducationPanel ───────────────────────────────────────────────────────────
function EducationPanel() {
  return (
    <div style={{ background: "#1F1F1F", padding: 32 }} className="ghost-border">
      <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 16, borderBottom: "1px solid #353535", marginBottom: 28 }}>
        <h3 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9DD0CF", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Inter',sans-serif" }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>school</span>
          KNOWLEDGE_BASE.LOG
        </h3>
        <span className="font-sg" style={{ fontSize: "0.65rem", color: "#E6BDB8" }}>V.2025</span>
      </div>

      {EDUCATION.map((e, i) => (
        <div key={i} style={{ display: "flex", gap: 28, padding: e.alt ? "16px" : "0 0 20px", background: e.alt ? "#1B1B1B" : "transparent", margin: e.alt ? "0 -16px" : 0 }}>
          <span className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFB4AB", minWidth: 130, paddingTop: 3 }}>
            {e.period}
          </span>
          <div>
            <h4 className="font-sg" style={{ fontSize: "1.35rem", fontWeight: 600, color: "#E2E2E2", marginBottom: 4 }}>{e.degree}</h4>
            <p style={{ fontSize: "0.88rem", color: "#E6BDB8", marginBottom: 10 }}>{e.school}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {e.tags.map(t => <Tag key={t} color="#9DD0CF" bg="#353535">{t}</Tag>)}
            </div>
          </div>
        </div>
      ))}

      {/* Experience row */}
      <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(92,64,60,0.2)" }}>
        <div style={{ display: "flex", gap: 28 }}>
          <span className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFB4AB", minWidth: 130, paddingTop: 3 }}>
            2024 – PRESENT
          </span>
          <div>
            <h4 className="font-sg" style={{ fontSize: "1.35rem", fontWeight: 600, color: "#E2E2E2", marginBottom: 4 }}>
              DESENVOLVEDOR FRONTEND
            </h4>
            <p style={{ fontSize: "0.88rem", color: "#9DD0CF", marginBottom: 6 }}>Seed a Bit Tecnologia — EJ UFRPE</p>
            <p style={{ fontSize: "0.84rem", color: "#E6BDB8", lineHeight: 1.6 }}>
              Desenvolvendo interfaces modernas com React e TypeScript para clientes reais da empresa júnior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DirectivesPanel ─────────────────────────────────────────────────────────
function DirectivesPanel() {
  return (
    <div style={{ background: "#353535", padding: 32, borderTop: "4px solid #D92525" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 16, borderBottom: "1px solid rgba(19,19,19,0.5)", marginBottom: 24 }}>
        <span className="material-symbols-outlined" style={{ color: "#FFB4AB", fontSize: 20 }}>target</span>
        <h3 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E2E2E2", fontFamily: "'Inter',sans-serif" }}>
          CORE_DIRECTIVES
        </h3>
      </div>

      {DIRECTIVES.map((d, i) => (
        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          <span style={{ color: "#FFB4AB", fontFamily: "'Space Grotesk',sans-serif", flexShrink: 0 }}>&gt;&gt;</span>
          <p style={{ fontSize: "0.9rem", color: "#E6BDB8", lineHeight: 1.6 }}>{d}</p>
        </div>
      ))}

      <div style={{ marginTop: 24 }}>
        <div style={{ height: 3, background: "#1F1F1F" }}>
          <div style={{ height: "100%", width: "80%", background: "#FFB4AB" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          <span className="font-sg" style={{ fontSize: "0.62rem", color: "#E6BDB8" }}>DIRECTIVE_COMPLETION</span>
          <span className="font-sg" style={{ fontSize: "0.62rem", color: "#FFB4AB" }}>80%</span>
        </div>
      </div>
    </div>
  );
}

// ─── NetworkNodes ─────────────────────────────────────────────────────────────
function NetworkNodes() {
  const nodes = [
    { icon: "terminal", label: "GITHUB", desc: "// Source Code Repository", href: OWNER.github, primary: false },
    { icon: "account_tree", label: "LINKEDIN", desc: "// Professional Network", href: OWNER.linkedin, primary: false },
    { icon: "corporate_fare", label: "SEED A BIT", desc: "// Empresa Júnior UFRPE", href: "https://seedabit.org.br", primary: false },
    { icon: "code_blocks", label: "VIEW_SOURCE", desc: "// Inspect Portfolio Arc.", href: OWNER.github, primary: true },
  ];

  return (
    <div style={{ paddingTop: 40 }}>
      <h3 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E2E2E2", fontFamily: "'Inter',sans-serif", borderBottom: "1px solid rgba(92,64,60,0.3)", paddingBottom: 8, display: "inline-block", marginBottom: 24 }}>
        NETWORK_NODES
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 2 }}>
        {nodes.map((n, i) => (
          <a key={i} href={n.href} target="_blank" rel="noreferrer"
            style={{ background: n.primary ? "#D92525" : "#1F1F1F", padding: 24, display: "flex", flexDirection: "column", gap: 16, textDecoration: "none", cursor: "crosshair" }}
            className={n.primary ? "" : "ghost-border card-hover"}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 30, color: n.primary ? "#FFF3F1" : "#E6BDB8" }}>{n.icon}</span>
            <div>
              <h4 className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: n.primary ? "#FFF3F1" : "#E2E2E2" }}>{n.label}</h4>
              <p style={{ fontSize: "0.82rem", color: n.primary ? "rgba(255,243,241,0.75)" : "#E6BDB8", marginTop: 4 }}>{n.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── ProfileSection ───────────────────────────────────────────────────────────
export default function ProfileSection() {
  return (
    <section id="profile" className="section-mid" style={{ padding: "96px 0", position: "relative" }}>
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>

        <SectionLabel color="#9DD0CF">INIT_SEQUENCE // PROFILE</SectionLabel>

        {/* Hero row */}
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap", alignItems: "flex-start", marginBottom: 64 }}>
          <AvatarCard />
          <BioBlock />
        </div>

        {/* Bento grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 2, marginBottom: 2 }}>
          <EducationPanel />
          <DirectivesPanel />
        </div>

        <NetworkNodes />
      </div>
    </section>
  );
}
