// Content shared by the Professional View (/p1) and the Developer View (/p2).
// Kept as plain data so each view can render the same content differently.

export const PROFILE = {
  name: "Monisha Chaurasia",
  wordmark: "MONISHA.CHAURASIA",
  role: "Frontend Engineer",
  email: "monishachaurasia77@gmail.com",
  linkedin: "https://www.linkedin.com/in/monisha-chaurasia-732794211/",
  github: "https://github.com/77Monisha",
  handle: "77Monisha",
  resume: "/Monisha_Chaurasia_Resume.pdf",
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Accessibility",
  "Performance",
];

export const TERMINAL_LINES = [
  { cmd: "whoami", value: "monisha-chaurasia" },
  { cmd: "role", value: "frontend-engineer" },
  { cmd: "stack", value: "React · Next.js · TypeScript" },
  { cmd: "location", value: "India → Netherlands", flag: true },
  { cmd: "status", value: "open_to_work", success: true },
];

export const PROJECTS = [
  {
    id: "fixmytree",
    index: "01",
    name: "FixMyTree",
    tagline: "AI-powered website accessibility analyzer",
    description:
      "Scan public websites, detect WCAG issues using Playwright + axe-core and generate contextual fixes with Gemini.",
    challenge:
      "Auditing the fully rendered DOM in headless Chromium, not just static HTML.",
    tech: ["Next.js", "Playwright", "axe-core", "Supabase", "Gemini"],
    live: "https://website-accessibility-analyser-six.vercel.app/",
    github: "https://github.com/77Monisha/Website-Accessibility-Scanner-showcase",
    visual: "accessibility",
  },
  {
    id: "priceping",
    index: "02",
    name: "PricePing",
    tagline: "Automated product price tracking & alerts",
    description:
      "Track product prices from any URL, historical data, price drop alerts and email notifications.",
    challenge:
      "Deciding when an alert is worth sending — target price, tolerance and variant availability.",
    tech: ["Next.js", "Firecrawl", "Supabase", "Cron", "Resend"],
    live: "https://pingprice.vercel.app/",
    github: "https://github.com/77Monisha/PricePing-showcase",
    visual: "price",
  },
];

// Secondary work, shown alongside the featured projects in the Developer View.
export const SIDE_PROJECTS = [
  {
    id: "scalable-toast",
    name: "Scalable Toast",
    tagline: "Reusable notification component",
    description:
      "A reusable Toast component with multiple variants, configurable messages and auto-dismiss — each variant shipped as an interactive Storybook story.",
    challenge:
      "Keeping state local with React Hooks — no provider or global store to wire up.",
    tech: ["React", "Storybook", "Vite", "React Hooks"],
    live: "https://65fbdadd0f64f38556d50506--cosmic-palmier-7904a4.netlify.app/?path=/story/toast--type&args=type:notification",
    github: "https://github.com/77Monisha/scalable-toast-storybook",
  },
];

export const EXPERIENCE = [
  {
    company: "Hawk Martech",
    role: "Software Development Engineer I",
    start: "Apr 2024",
    end: "Present",
    highlights: [
      "Built **WLPL** – cricket premier league platform used by **5,000+ users** with **1,000+ monthly transactions**.",
      "Integrated **Razorpay** and reduced duplicate payments by **35%**.",
      "Optimized API polling, reducing redundant calls by **40%**.",
      "Built real-time calling using **WebRTC** with **sub-300ms** latency.",
    ],
    tech: ["React", "Next.js", "JavaScript", "REST APIs", "Razorpay", "WebRTC"],
  },
  {
    company: "Ingersoll Rand",
    role: "Software Development Engineer I",
    start: "Jul 2023",
    end: "Mar 2024",
    highlights: [
      "Developed and maintained web applications with **React** and modern JavaScript.",
      "Collaborated with cross-functional teams to deliver product features.",
      "Improved **accessibility** in line with WCAG — colour contrast and readability.",
      "Improved performance and user experience through code optimization.",
    ],
    tech: ["React", "JavaScript", "REST APIs", "SCSS", "Figma"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Core",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML / CSS / SCSS", icon: "html" },
    ],
  },
  {
    title: "State & Data",
    items: [
      { name: "Redux", icon: "redux" },
      { name: "Zustand", icon: "zustand" },
      { name: "TanStack Query", icon: "tanstackquery" },
      { name: "TanStack Table", icon: "tanstacktable" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "REST APIs", icon: "api" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Supabase", icon: "supabase" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      { name: "Playwright", icon: "playwright" },
      { name: "Jest", icon: "jest" },
      { name: "Vitest", icon: "vitest" },
      { name: "axe-core", icon: "accessibility" },
      { name: "Lighthouse", icon: "lighthouse" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    title: "AI & Automation",
    items: [
      { name: "Gemini API", icon: "gemini" },
      { name: "OpenAI API", icon: "openai" },
      { name: "LLM Applications", icon: "ai" },
      { name: "Firecrawl", icon: "fire" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
      { name: "Vercel", icon: "vercel" },
      { name: "Docker", icon: "docker" },
    ],
  },
];

export const ABOUT = {
  intro:
    "I'm a **Frontend Engineer** who loves building products that make a real impact. I care about performance, accessibility and thoughtful UI. Currently based in India and open to opportunities in the Netherlands.",
  stats: [
    { value: "3+", label: "Years experience" },
    { value: "5+", label: "Projects" },
    { value: "5,000+", label: "Users reached" },
  ],
  languages: [
    { name: "English", level: "Professional", tone: "accent" },
    { name: "Hindi", level: "Native", tone: "muted" },
    { name: "Dutch", level: "Beginner (A1), learning", tone: "orange" },
  ],
  learning: ["TypeScript (deepening)", "System design", "Dutch (A1 → A2)", "AI & automation"],
};

export const MARQUEE_WORDS = [
  "Accessible by default",
  "Performance-minded",
  "Product-focused",
  "React",
  "Next.js",
  "TypeScript",
];
