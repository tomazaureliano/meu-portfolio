import { SectionLabel, StatusBadge, Tag } from "./ui";
import { PROJECTS } from "../data/portfolioData";


function ProjectCard({ id, name, type, desc, tags, status, year, metrics, link, alt }) {
  return (
    <article
      className="ghost-border card-hover"
      style={{ background: alt ? "#1B1B1B" : "#0E0E0E", padding: 28 }}
    >

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <span className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#E6BDB8", opacity: 0.45 }}>
          {id}
        </span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <StatusBadge status={status} />
          <span className="font-sg" style={{ fontSize: "0.62rem", color: "#E6BDB8", opacity: 0.45 }}>{year}</span>
        </div>
      </div>


      <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9DD0CF", display: "block", marginBottom: 4, fontFamily: "'Inter',sans-serif" }}>
        {type}
      </span>
      <h3 className="font-sg" style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#E2E2E2", marginBottom: 12 }}>
        {name}
      </h3>


      <p style={{ fontSize: "0.84rem", color: "#E6BDB8", lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>


      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
        {tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>


      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid rgba(92,64,60,0.2)" }}>
        <span className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9DD0CF" }}>
          {metrics}
        </span>
        <a href={link} target="_blank" rel="noreferrer"
          className="font-sg"
          style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFB4AB", textDecoration: "none", borderBottom: "1px solid #FFB4AB", paddingBottom: 1 }}
        >
          INSPECT →
        </a>
      </div>
    </article>
  );
}


export default function ProjectsSection() {
  return (
    <section id="projects" className="section-mid" style={{ padding: "96px 0", position: "relative" }}>
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>

        <SectionLabel>PROJECT_ARCHIVE // DEPLOYED</SectionLabel>


        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <h1 className="font-sg" style={{ fontSize: "clamp(2.5rem,7vw,4.5rem)", fontWeight: 700, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#E2E2E2", lineHeight: 0.9 }}>
            PROJETOS<br /><span style={{ color: "#D92525" }}>SELECIONADOS</span>
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#E6BDB8", maxWidth: 360, lineHeight: 1.65 }}>
            Repositório de trabalhos concebidos, desenvolvidos e entregues. Cada projeto reflete comprometimento com qualidade de código e experiência do usuário.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 2 }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} {...p} alt={i % 3 === 1} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
          <a href="https://github.com/tomazaureliano" target="_blank" rel="noreferrer" className="btn-ghost">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>terminal</span>
            VER TODOS NO GITHUB
          </a>
        </div>

      </div>
    </section>
  );
}
