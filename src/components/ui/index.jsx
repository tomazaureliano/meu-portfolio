// ─── SectionLabel ─────────────────────────────────────────────────────────────
export function SectionLabel({ children, color = "#FFB3B1" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color,
        whiteSpace: "nowrap",
      }}>
        {children}
      </span>
      <div style={{ height: 1, flex: 1, background: "rgba(92,64,60,0.15)" }} />
    </div>
  );
}

// ─── TerminalLine ─────────────────────────────────────────────────────────────
export function TermLine({ text, active = false }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <span
        className={`font-sg ${active ? "cursor-blink" : ""}`}
        style={{ color: "#FFB3B1", opacity: 0.5, fontSize: "0.75rem" }}
      >
        &gt;
      </span>
      <span className="font-sg" style={{ fontSize: "0.75rem", letterSpacing: "0.08em", color: active ? "#9DD0CF" : "#E6BDB8" }}>
        {text}
      </span>
    </div>
  );
}

// ─── SectionTitle ─────────────────────────────────────────────────────────────
export function SectionTitle({ line1, line2, size = "clamp(2.5rem,7vw,4.5rem)" }) {
  return (
    <h1 className="font-sg" style={{
      fontSize: size,
      fontWeight: 700,
      letterSpacing: "-0.04em",
      textTransform: "uppercase",
      color: "#E2E2E2",
      lineHeight: 0.92,
    }}>
      {line1}
      {line2 && <><br /><span style={{ color: "#D92525" }}>{line2}</span></>}
    </h1>
  );
}

// ─── StatusBadge ──────────────────────────────────────────────────────────────
const STATUS_STYLES = {
  LIVE:        { bg: "#044040", color: "#9DD0CF" },
  BETA:        { bg: "#8C1F28", color: "#FFB3B1" },
  DEVELOPMENT: { bg: "#353535", color: "#E6BDB8" },
};

export function StatusBadge({ status }) {
  const s = STATUS_STYLES[status] || STATUS_STYLES.DEVELOPMENT;
  return (
    <span style={{ background: s.bg, padding: "2px 8px" }}>
      <span className="font-sg" style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: s.color }}>
        {status}
      </span>
    </span>
  );
}

// ─── TerminalHeader ───────────────────────────────────────────────────────────
export function TerminalHeader({ left, right }) {
  return (
    <div style={{ background: "#0E0E0E", padding: "10px 20px", borderBottom: "1px solid rgba(92,64,60,0.3)", display: "flex", justifyContent: "space-between" }}>
      <span className="font-sg" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#9DD0CF" }}>{left}</span>
      <span className="font-sg" style={{ fontSize: "0.65rem", color: "#E6BDB8" }}>{right}</span>
    </div>
  );
}

// ─── Tag ──────────────────────────────────────────────────────────────────────
export function Tag({ children, color = "#FFB4AB", bg = "#1F1F1F" }) {
  return (
    <span className="font-sg" style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color, background: bg, padding: "2px 8px" }}>
      {children}
    </span>
  );
}
