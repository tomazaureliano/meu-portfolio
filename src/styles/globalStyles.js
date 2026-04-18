// ─── Global Styles — Technical Brutalism Design System ───────────────────────

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

  *, *::before, *::after {
    border-radius: 0 !important;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #0E0E0E;
    color: #E2E2E2;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  .font-sg { font-family: 'Space Grotesk', sans-serif; }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
  }

  /* ─── Surfaces & Layout ─────────────────────── */
  .ghost-border { border: 1px solid rgba(92,64,60,0.2); }
  .section-dark  { background: #0E0E0E; }
  .section-mid   { background: #131313; }

  .grid-bg {
    background-image:
      linear-gradient(to right, rgba(53,53,53,0.3) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(53,53,53,0.3) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .scanlines {
    background: repeating-linear-gradient(
      0deg, transparent, transparent 2px,
      rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px
    );
  }

  /* ─── Navigation ────────────────────────────── */
  .nav-link {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #5A5A5A;
    padding: 6px 10px;
    cursor: pointer;
    border: none;
    background: none;
    text-decoration: none;
    transition: none;
  }
  .nav-link:hover   { color: #FFB4AB; background: rgba(217,37,37,0.1); }
  .nav-link.is-active { color: #D92525; border-bottom: 2px solid #D92525; }

  /* ─── Buttons ───────────────────────────────── */
  .btn-primary {
    background: #D92525;
    color: #FFF3F1;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 14px 28px;
    cursor: pointer;
    border: none;
    transition: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .btn-primary:hover { background: #FFB4AB; color: #131313; }

  .btn-ghost {
    background: transparent;
    color: #FFB4AB;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 14px 28px;
    cursor: pointer;
    border: 1px solid rgba(92,64,60,0.5);
    transition: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .btn-ghost:hover { background: #2A2A2A; }

  /* ─── Cards & Lists ─────────────────────────── */
  .card-hover { transition: none; cursor: crosshair; }
  .card-hover:hover { background: #2A2A2A !important; }

  .skill-li {
    font-family: monospace;
    font-size: 0.85rem;
    color: #E6BDB8;
    padding: 3px 8px;
    margin: 0 -8px;
    cursor: crosshair;
    transition: none;
  }
  .skill-li:hover { color: #FFB4AB; background: #2A2A2A; }

  /* ─── Form Inputs ───────────────────────────── */
  input, textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(92,64,60,0.5);
    color: #E2E2E2;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    padding: 12px 0;
    width: 100%;
    outline: none;
    transition: none;
  }
  input:focus, textarea:focus { border-bottom: 2px solid #FFB4AB; }
  input::placeholder, textarea::placeholder { color: #5A5A5A; }
  textarea { resize: none; min-height: 120px; }

  /* ─── Animations ────────────────────────────── */
  @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
  .cursor-blink { animation: blink 1s step-end infinite; }

  @keyframes growBar { from { width: 0; } to { width: var(--tw); } }
  .grow-bar { animation: growBar 1.4s ease-out forwards; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.7s ease-out forwards; }

  /* ─── Profile photo ─────────────────────────── */
  .profile-img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(20%) contrast(1.05);
    display: block;
  }

  /* ─── Misc ──────────────────────────────────── */
  ::-webkit-scrollbar       { width: 3px; }
  ::-webkit-scrollbar-track { background: #0E0E0E; }
  ::-webkit-scrollbar-thumb { background: #D92525; }

  ::selection { background: #D92525; color: #FFF3F1; }
`;

export default globalStyles;
