import { OWNER } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#000", borderTop: "1px solid rgba(53,53,53,0.25)" }}>
      <div style={{
        maxWidth: 1440, margin: "0 auto", padding: "28px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16,
      }}>
        <span className="font-sg" style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8C1F28" }}>
          © {year} TOMAZ_AURELIANO. ALL RIGHTS RESERVED.
        </span>

        <span className="font-sg" style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D92525", fontWeight: 700 }}>
          THE_KINETIC_ARCHIVE // v1.0
        </span>

        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "GITHUB",    href: OWNER.github },
            { label: "LINKEDIN",  href: OWNER.linkedin },
            { label: "INSTAGRAM", href: OWNER.instagram },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-sg"
              style={{ fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#5A5A5A", textDecoration: "none", transition: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "#9DD0CF"}
              onMouseLeave={e => e.currentTarget.style.color = "#5A5A5A"}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
