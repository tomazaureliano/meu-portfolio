# TOMAZ.AURELIANO // PORTFOLIO

Meu projeto de portfólio profissional — Full Stack Developer & estudante de Ciência da Computação na UFRPE.

Design system: **Technical Brutalism / The Kinetic Archive**

---

## Stack

- **React 18** + **Vite**
- Estilização via CSS-in-JS (string de estilos globais injetada via `<style>`)
- Zero dependências de UI — design system próprio do zero

---

## Estrutura

```
src/
├── App.jsx                        ← raiz, IntersectionObserver para nav
├── main.jsx                       ← entry point
├── styles/
│   └── globalStyles.js            ← todo o CSS (brutalism design tokens)
├── data/
│   ├── portfolioData.js           ← conteúdo: owner, projetos, skills, etc.
│   └── photo.js                   ← foto de perfil em base64
└── components/
    ├── ui/
    │   └── index.jsx              ← primitivos: SectionLabel, TermLine, Tag...
    ├── Navbar.jsx
    ├── HeroSection.jsx            ← typing animation + terminal overlay
    ├── ProfileSection.jsx         ← foto real + bento grid
    ├── StackSection.jsx           ← language cards + skill matrix
    ├── ProjectsSection.jsx        ← 6 projetos com status badges
    ├── ContactSection.jsx         ← formulário + info de contato
    └── Footer.jsx
```

---

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

---


## Design System

| Token | Valor |
|---|---|
| Primary | `#FFB4AB` |
| Primary Container | `#D92525` |
| Tertiary (Teal) | `#9DD0CF` |
| Background | `#0E0E0E` |
| Surface | `#131313` |
| Border Radius | `0px` (zero global) |
| Headline Font | Space Grotesk |
| Body Font | Inter |
