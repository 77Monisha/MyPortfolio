// Content shared by the Developer View (/p1) and the Professional View (/).
// Kept as plain data so each view can render the same content differently.
// Exports prefixed P1_ hold /p1-only versions of content the homepage shows
// differently; update both when your resume changes.

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

// The homepage's README terminal.
export const TERMINAL_LINES = [
  { cmd: "whoami", value: "monisha-chaurasia" },
  { cmd: "role", value: "software-engineer / frontend" },
  { cmd: "experience", value: "3+ years · SDE-II" },
  { cmd: "stack", value: "React · Next.js · TypeScript" },
  { cmd: "status", value: "open_to_international_opportunities", success: true },
];

// /p1's hero terminal.
export const P1_TERMINAL_LINES = [
  { cmd: "whoami", value: "monisha-chaurasia" },
  { cmd: "role", value: "software-engineer / frontend" },
  { cmd: "experience", value: "3+ years · SDE-II" },
  { cmd: "core_stack", value: "React · Next.js · TypeScript" },
  { cmd: "focus", value: "Scalable UI · Product Workflows · Performance" },
  { cmd: "location", value: "India" },
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
    // Homepage repository card
    repo: {
      purpose: "AI-powered website accessibility scanner with Gemini remediation suggestions.",
      topics: ["Playwright", "axe-core", "WCAG", "Gemini", "Next.js"],
    },
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
    repo: {
      purpose: "Product price monitoring with variant-aware alerts and price history.",
      topics: ["Next.js", "Supabase", "Firecrawl", "Cron", "Resend"],
    },
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
    repo: {
      purpose: "Reusable toast notification component with configurable variants and dismissal behavior.",
      topics: ["React", "Storybook", "Vite", "React Hooks"],
    },
  },
];

// The homepage's career timeline, newest first. Dates and links match
// P1_EXPERIENCE below.
export const CAREER = [
  {
    role: "Software Development Engineer II",
    company: "Hawk MarTech",
    location: "Gurgaon, India",
    start: "Mar 2026",
    end: "Present",
    promoted: true,
    projects: [
      {
        name: "HikeBridge — Customer Engagement Platform",
        link: "https://hikebridge.com/",
        highlights: [
          "Built the dashboard from scratch as the **sole frontend developer** — **49 routes**, **191 reusable components**.",
          "Built a visual **workflow automation builder** with React Flow and ELK.",
          "Delivered omnichannel messaging, contact management, audience segmentation and billing — Razorpay, wallet, subscriptions, GST, UPI Autopay and eNACH.",
        ],
      },
    ],
    tech: ["React", "React Flow", "ELK", "Razorpay"],
  },
  {
    role: "Software Development Engineer I",
    company: "Hawk MarTech",
    location: "Gurgaon, India",
    start: "Apr 2024",
    end: "Mar 2026",
    projects: [
      {
        name: "WLPL — Cricket Premier League Platform",
        link: "https://www.worldlegendsprot20.com/",
        highlights: [
          "Supported **500K+ users** through OTP-based authentication and registration.",
          "Integrated Razorpay for **1,000+ monthly transactions**, with payment safeguards that cut duplicate transactions by **35%**.",
          "Led frontend development of the admin panel with **two engineers**.",
        ],
      },
      {
        name: "OneTurf — Live Match Management",
        link: "https://www.oneturf.news/",
        highlights: [
          "Built live match management features and optimised API polling, cutting redundant API calls by **40%**.",
        ],
      },
    ],
    tech: ["React", "Next.js", "JavaScript", "REST APIs", "Razorpay"],
  },
  {
    role: "Frontend Engineer",
    company: "Ingersoll Rand",
    location: "Bengaluru, India",
    start: "Jul 2023",
    end: "Mar 2024",
    projects: [
      {
        highlights: [
          "Built reusable UI components for industrial product and service listings.",
          "Improved accessibility and UI consistency across product pages.",
        ],
      },
    ],
    tech: ["React", "JavaScript", "SCSS", "Figma"],
  },
];

// The homepage's skills, synced with the resume.
export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "html" },
      { name: "SCSS", icon: "sass" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "ShadCN", icon: "shadcn" },
      { name: "React Flow", icon: "reactflow" },
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
    ],
  },
  {
    title: "Web Engineering",
    items: [
      { name: "Accessibility (WCAG)", icon: "accessibility" },
      { name: "Core Web Vitals", icon: "web" },
      { name: "SEO", icon: "seo" },
      { name: "Internationalization", icon: "globe" },
    ],
  },
  {
    title: "AI & Tooling",
    items: [
      { name: "Gemini API", icon: "gemini" },
      { name: "LLMs", icon: "ai" },
      { name: "Firecrawl", icon: "fire" },
      { name: "Git", icon: "git" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
    ],
  },
];

// /p1's experience section, grouped by company. Covers the same roles as
// CAREER with longer highlights.
export const P1_EXPERIENCE = [
  {
    company: "Hawk MarTech",
    location: "Gurgaon, India",
    start: "April 2024",
    end: "Present",
    tagline: "Building scalable systems for real-world users",
    // Newest first; the first entry is the promotion.
    positions: [
      {
        role: "Software Development Engineer II",
        period: "Mar 2026 – Present",
        promoted: true,
        projects: [
          {
            name: "HikeBridge — Customer Engagement Platform",
            link: "https://hikebridge.com/",
            highlights: [
              "Built the customer dashboard from scratch as the **sole frontend developer** — **49 routes** and **191 reusable components** across a multi-tenant SaaS platform.",
              "Designed end-to-end workflows for omnichannel messaging, contact management, WhatsApp templates, service onboarding, audience segmentation and billing.",
              "Engineered a visual **workflow automation builder** with React Flow and ELK: triggers, actions, conditions, wait steps, versioning and automatic layout for complex customer journeys.",
              "Integrated backend services for wallet management, Razorpay payments, usage-based billing, subscription plans, proration, tax invoices, GST, UPI Autopay and eNACH.",
            ],
          },
        ],
      },
      {
        role: "Software Development Engineer I",
        period: "Apr 2024 – Mar 2026",
        projects: [
          {
            name: "WLPL — Cricket Premier League Platform",
            link: "https://www.worldlegendsprot20.com/",
            highlights: [
              "Built OTP-based authentication and registration for **500K+ users**, with secure session management and validation safeguards.",
              "Integrated Razorpay for **1,000+ monthly transactions** — order verification, coupon and affiliate workflows, and a 15-minute payment lock that cut duplicate transactions by **35%**.",
              "Led frontend development of the TLC Admin Panel with **2 engineers**: manual payment links via SMS/email, coupon management and affiliate rewards.",
            ],
          },
          {
            name: "OneTurf — Live Match Management Platform",
            link: "https://www.oneturf.news/",
            highlights: [
              "Led development of the live match management system — commentary, fixtures, stats and scoreboard — and optimised API polling, cutting redundant API calls by **40%** during high-traffic events.",
            ],
          },
        ],
      },
    ],
    tech: ["React", "Next.js", "JavaScript", "REST APIs", "Razorpay"],
  },
  {
    company: "Ingersoll Rand",
    location: "Bengaluru, India",
    start: "July 2023",
    end: "March 2024",
    tagline: "Designing scalable and accessible UI systems",
    positions: [
      {
        role: "Frontend Engineer",
        projects: [
          {
            name: "SEEPEX",
            link: "https://www.seepex.com/en/",
            highlights: [
              "Built **reusable component system** for large-scale product listings",
              "Improved **accessibility (a11y)** aligning with **WCAG standards**",
            ],
          },
          {
            name: "Ingersoll Rand",
            link: "https://www.ingersollrand.com/en-in/",
            highlights: [
              "Developed UI for **industrial machinery listings**",
              "Implemented **accessibility improvements** (color contrast, readability)",
              "Contributed to **scalable design system patterns**",
            ],
          },
        ],
      },
    ],
    tech: ["React", "JavaScript", "REST APIs", "SCSS", "Figma"],
  },
];

// /p1's skills: a longer, more granular version of SKILL_GROUPS.
export const P1_SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "SCSS", icon: "sass" },
      { name: "ShadCN", icon: "shadcn" },
      { name: "React Flow", icon: "reactflow" },
    ],
  },
  {
    title: "State Management & Data",
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
      { name: "axe-core", icon: "accessibility" },
      { name: "Vitest", icon: "vitest" },
      { name: "Jest", icon: "jest" },
      { name: "Unit Testing", icon: "unittest" },
      { name: "Integration Testing", icon: "integrationtest" },
    ],
  },
  {
    title: "Web Engineering & Tools",
    items: [
      { name: "Web Accessibility (a11y)", icon: "accessibility" },
      { name: "Internationalization (i18n)", icon: "globe" },
      { name: "Core Web Vitals", icon: "web" },
      { name: "SEO", icon: "seo" },
      { name: "Lighthouse", icon: "lighthouse" },
      { name: "Razorpay", icon: "razorpay" },
      { name: "Git", icon: "git" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    title: "AI & Emerging Tech",
    items: [
      { name: "LLMs", icon: "ai" },
      { name: "Generative AI (GenAI)", icon: "genai" },
      { name: "Gemini API", icon: "gemini" },
      { name: "Vector Databases", icon: "vector" },
      { name: "Firecrawl", icon: "fire" },
    ],
  },
  {
    title: "DevOps & Automation",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "CI/CD", icon: "cicd" },
    ],
  },
];

// Spoken languages, shown on both views.
export const LANGUAGES = [
  { name: "English", level: "Professional", tone: "accent" },
  { name: "Hindi", level: "Native", tone: "muted" },
  { name: "Dutch", level: "Beginner (A1), learning", tone: "orange" },
];

// The homepage's profile copy.
export const ABOUT = {
  headline: "Frontend Engineer | React · Next.js · TypeScript",
  intro:
    "I'm a Software Engineer with 3+ years of experience building production-ready web applications. I focus on scalable UI, complex product workflows, performance, and accessibility.",
  status: "Open to international opportunities",
  stats: [
    { value: "3+", label: "Years experience" },
    { value: "5+", label: "Projects" },
    { value: "500K+", label: "Users reached" },
  ],
  languages: LANGUAGES,
  focus: [
    "Frontend architecture",
    "Advanced TypeScript",
    "AI-powered applications",
    "Dutch (A1 → A2)",
  ],
};

// /p1's About section.
export const P1_ABOUT = {
  intro:
    "I'm a **Software Engineer specialising in frontend development**, building scalable, production-ready applications with React, Next.js, and TypeScript. I enjoy solving complex product challenges, designing reusable UI systems, and improving performance and accessibility. Currently based in India, I'm open to relocation.",
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "5+", label: "Projects" },
    { value: "500K+", label: "Users reached" },
  ],
  languages: LANGUAGES,
  learning: [
    "Advanced TypeScript",
    "System design and frontend architecture",
    "Dutch (A1 → A2)",
    "AI-powered applications and automation",
  ],
};

export const MARQUEE_WORDS = [
  "Accessible by default",
  "Performance-minded",
  "Product-focused",
  "React",
  "Next.js",
  "TypeScript",
];
