import { useState } from "react";
import { SectionLabel, TerminalHeader } from "./ui";
import { OWNER, CONTACT_INFO } from "../data/portfolioData";


function ContactInfoItem({ icon, label, value }) {
  return (
    <div
      style={{ display: "flex", gap: 16, alignItems: "center", padding: 16, background: "#131313" }}
      className="ghost-border"
    >
      <span className="material-symbols-outlined" style={{ color: "#9DD0CF", fontSize: 20 }}>{icon}</span>
      <div>
        <span className="font-sg" style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9DD0CF", display: "block" }}>
          {label}
        </span>
        <span style={{ fontSize: "0.9rem", color: "#E2E2E2" }}>{value}</span>
      </div>
    </div>
  );
}


function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", msg: "" });
  };

  return (
    <div style={{ background: "#131313", padding: 36 }} className="ghost-border">
      <TerminalHeader left="~ ./new_message.sh" right="ENCRYPTED" />

      <div style={{ padding: "28px 0 0", display: "flex", flexDirection: "column", gap: 28 }}>
        <div>
          <label style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E6BDB8", display: "block", marginBottom: 6, fontFamily: "'Inter',sans-serif" }}>
            IDENTIFICAÇÃO
          </label>
          <input
            type="text"
            placeholder="Seu nome completo"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div>
          <label style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E6BDB8", display: "block", marginBottom: 6, fontFamily: "'Inter',sans-serif" }}>
            ENDEREÇO DE REDE
          </label>
          <input
            type="email"
            placeholder="email@dominio.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div>
          <label style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E6BDB8", display: "block", marginBottom: 6, fontFamily: "'Inter',sans-serif" }}>
            PAYLOAD
          </label>
          <textarea
            placeholder="Descreva seu projeto, proposta ou ideia..."
            value={form.msg}
            onChange={e => setForm({ ...form, msg: e.target.value })}
          />
        </div>

        <button
          className="btn-primary"
          style={{ width: "100%", padding: "18px", letterSpacing: "0.2em", justifyContent: "center" }}
          onClick={handleSubmit}
        >
          {sent
            ? <><span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span> MENSAGEM ENVIADA</>
            : "TRANSMIT_MESSAGE →"
          }
        </button>
      </div>
    </div>
  );
}


export default function ContactSection() {
  return (
    <section id="contact" className="section-dark" style={{ padding: "96px 0", position: "relative" }}>
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>

        <SectionLabel color="#9DD0CF">ESTABLISH_CONNECTION</SectionLabel>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, flexWrap: "wrap" }}>
          
          <div>
            <h1 className="font-sg" style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 700, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#E2E2E2", lineHeight: 0.9, marginBottom: 32 }}>
              VAMOS<br /><span style={{ color: "#D92525" }}>CONSTRUIR</span><br />ALGO
            </h1>

            <p style={{ fontSize: "0.98rem", color: "#E6BDB8", lineHeight: 1.75, maxWidth: 380, marginBottom: 40 }}>
              Disponível para projetos, estágios e colaborações open source.
              Apaixonado por interfaces bem feitas e sistemas que resolvem problemas reais.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {CONTACT_INFO.map((item, i) => <ContactInfoItem key={i} {...item} />)}
            </div>

        
            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
              {[
                { label: "GITHUB", href: OWNER.github, icon: "terminal" },
                { label: "LINKEDIN", href: OWNER.linkedin, icon: "account_tree" },
                { label: "INSTAGRAM", href: OWNER.instagram, icon: "photo_camera" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{ background: "#131313", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
                  className="ghost-border card-hover"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#9DD0CF" }}>{s.icon}</span>
                  <span className="font-sg" style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E6BDB8" }}>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

      
          <ContactForm />
        </div>

      </div>
    </section>
  );
}
