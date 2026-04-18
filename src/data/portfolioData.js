// ─── Portfolio Data — Tomaz Aureliano (tomazaureliano) ────────────────────────

export const OWNER = {
  name: "Tomaz Aureliano",
  nameDisplay: ["TOMAZ", "AURELIANO"],
  pronouns: "he/him",
  role: "Full Stack Developer",
  roleDisplay: "FULL STACK DEVELOPER // CIÊNCIA DA COMPUTAÇÃO",
  company: "Seed a Bit",
  university: "UFRPE",
  location: "Recife, PE — Brasil",
  email: "tomazbruno24@gmail.com",
  github: "https://github.com/tomazaureliano",
  linkedin: "https://linkedin.com/in/tomaz-bruno-9a4b19392",
  instagram: "https://instagram.com/tomaz_b64",
  status: "ONLINE",
  level: "CS.STUDENT",
  bio: "Computer Science student passionate about turning complex problems into fluid interfaces and scalable systems. Currently focusing on Full Stack development and process automation.",
  available: "Aberto para oportunidades",
};

export const METRICS = [
  { value: "7",   label: "GITHUB FOLLOWERS",    icon: "group",          color: "#9DD0CF" },
  { value: "TS",  label: "LINGUAGEM FAVORITA",  icon: "code",           color: "#FFB4AB" },
  { value: "n8n", label: "AUTOMATION TOOLS",    icon: "settings_suggest", color: "#FFB3B1" },
  { value: "EJ",  label: "SEED A BIT — UFRPE",  icon: "corporate_fare", color: "#FFB4AB" },
];

export const EDUCATION = [
  {
    period: "2025 – PRESENT",
    degree: "BACHARELADO EM CIÊNCIA DA COMPUTAÇÃO",
    school: "UFRPE — Universidade Federal Rural de Pernambuco, Recife",
    tags: ["ARQUITETURA", "ALGORITMOS", "CÁLCULO", "UI/UX"],
    alt: false,
  },
];

export const DIRECTIVES = [
  "Transformar problemas complexos em interfaces fluidas e sistemas escaláveis.",
  "Contribuir com soluções reais de impacto social via Seed a Bit.",
  "Automação de workflows e produtividade no desenvolvimento com n8n.",
];

export const LANGUAGES = [
  { name: "TypeScript", version: "V.5.x",  icon: "code",     pct: 85, desc: "Tipagem estática, interfaces, generics e segurança em tempo de compilação." },
  { name: "JavaScript", version: "ES2024", icon: "javascript", pct: 88, desc: "Runtime dinâmico, DOM manipulation, async/await e event-driven programming." },
  { name: "HTML & CSS", version: "CSS3",   icon: "html",      pct: 90, desc: "Semântica, acessibilidade, flexbox/grid, responsividade e animações CSS." },
  { name: "Java",       version: "V.21",   icon: "terminal",  pct: 65, desc: "POO, estruturas de dados, algoritmos e fundamentos de engenharia de software." },
];

export const SKILL_MATRIX = [
  { title: "FRAMEWORKS",   items: ["React", "Next.js", "Tailwind CSS"] },
  { title: "BACKEND / DB", items: ["Supabase", "Docker", "Node.js"] },
  { title: "DESIGN",       items: ["Figma", "UI/UX Practices"] },
  { title: "TOOLS",        items: ["Git", "GitHub", "n8n", "Automation"] },
];

export const LOGIC_BLOCKS = [
  {
    icon: "web",
    title: "FRONTEND CRAFT",
    items: [
      { sub: "COMPONENT.ARCHITECTURE", text: "Design de componentes React reutilizáveis, atômicos e compostos, seguindo responsabilidade única e reusabilidade." },
      { sub: "UI/UX.PRACTICES", text: "Interesse em best practices de Figma e design systems para interfaces acessíveis e visualmente consistentes." },
      { sub: "FULL.STACK.FLOW", text: "Integração frontend/backend com Next.js e Supabase para soluções end-to-end completas e eficientes." },
    ],
  },
  {
    icon: "settings_suggest",
    title: "AUTOMATION & TOOLS",
    items: [
      { sub: "WORKFLOW.AUTOMATION", text: "Construção de pipelines de automação com n8n para eliminar tarefas repetitivas e aumentar produtividade." },
      { sub: "CONTAINER.DEPLOY", text: "Containerização com Docker para ambientes consistentes de desenvolvimento e deploy reprodutível." },
      { sub: "SOCIAL.IMPACT", text: "Desenvolvimento de soluções de impacto social real como membro da Empresa Júnior Seed a Bit da UFRPE." },
    ],
  },
];

export const PROJECTS = [
  {
    id: "01",
    name: "MOVE_RECIFE",
    type: "DESIGN & FRONTEND",
    desc: "Projeto de concepção digital para aplicação web que visa melhorar a experiência do transporte na cidade de Recife.",
    tags: ["REACT", "TYPESCRIPT", "FIGMA", "TAILWIND"],
    status: "LIVE",
    year: "2026",
    metrics: "EJ INTERNA",
    link: "https://github.com/tomazaureliano",
  },
  {
    id: "02",
    name: "N8N_AUTOMATIONS",
    type: "AUTOMATION",
    desc: "Coleção de workflows de automação com n8n para produtividade: notificações, integrações de API e pipelines de dados automatizados.",
    tags: ["N8N", "AUTOMATION", "API", "WEBHOOKS"],
    status: "LIVE",
    year: "2026",
    metrics: "EJ INTERNA",
    link: "https://github.com/tomazaureliano",
  },
  {
    id: "03",
    name: "FINANCE_MANAGER",
    type: "FRONTEND",
    desc: "Dashboard moderno construído com Next.js, Expo e Tailwind. Componentes reutilizáveis, responsivo e integrado com Supabase.",
    tags: ["NEXT.JS", "TAILWIND", "SUPABASE", "TYPESCRIPT"],
    status: "BETA",
    year: "2026",
    metrics: "EJ INTERNA",
    link: "https://github.com/tomazaureliano",
  },
  {
    id: "04",
    name: "JAVA_STRUCTURES",
    type: "ACADEMIC",
    desc: "Implementações de estruturas de dados e algoritmos em Java para estudo de fundamentos da Ciência da Computação na UFRPE.",
    tags: ["JAVA", "DSA", "ALGORITHMS", "OOP"],
    status: "LIVE",
    year: "2025",
    metrics: "ACADÊMICO",
    link: "https://github.com/tomazaureliano/Sistemas-de-Locacao-de-Equipamentos-e-Reserva-de-Locais-Esportivos",
  },
  {
    id: "05",
    name: "MOVIE_NIGHT",
    type: "FRONTEND",
    desc: "Site de recomendação de filmes construído com React e Figma; integrado com API de terceiros para dados de filmes, com foco em UI/UX e design system consistente.",
    tags: ["REACT", "FIGMA", "CSS3", "STORYBOOK"],
    status: "DEVELOPMENT",
    year: "2025",
    metrics: "DESIGN SYS",
    link: "https://github.com/tomazaureliano/desafio-api-front",
  },
  {
    id: "06",
    name: "ARCH_STUDIES",
    type: "ACADEMIC",
    desc: "Projetos e anotações sobre Arquitetura de Computadores, cobrindo circuitos lógicos, hierarquia de memória e organização de processadores.",
    tags: ["C", "ASSEMBLY", "LOGIC", "UFRPE"],
    status: "DEVELOPMENT",
    year: "2025",
    metrics: "UFRPE CS",
    link: "https://github.com/tomazaureliano/Atividades-de-Algoritmos-UFRPE",
  },
];

export const CONTACT_INFO = [
  { icon: "mail",          label: "EMAIL",        value: "tomazbruno24@gmail.com" },
  { icon: "location_on",   label: "LOCALIZAÇÃO",  value: "Recife, PE — Brasil" },
  { icon: "photo_camera",  label: "INSTAGRAM",    value: "@tomaz_b64" },
  { icon: "corporate_fare",label: "EMPRESA ATUAL",value: "Seed a Bit — UFRPE" },
];

export const NAV_ITEMS = ["home", "profile", "stack", "projects", "contact", "currículo"];
