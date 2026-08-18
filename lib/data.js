import { GoldTitle, GrayTitle } from "@/components/reusables";

export const Accessibility = {
  title: "FixMyTree – AI-Powered Website Accessibility Analyser",
  desc: [
    "Audits any public page in **headless Chromium** via Playwright, running **axe-core** against the fully rendered DOM",
    "Scores accessibility **0–100** and groups violations by severity, down to the affected node and selector",
    "**Google Gemini** returns corrected markup for each violation; a scan exports as a **PDF report**",
    "Projects, pages and **scan history** stay scoped per user through **Supabase Auth (Google OAuth)**",
  ],
  tech: [
    { label: "Next.js", active: true },
    { label: "React", active: false },
    { label: "Supabase", active: true },
    { label: "Google OAuth", active: false },
    { label: "Playwright", active: true },
    { label: "Chromium", active: false },
    { label: "axe-core", active: true },
    { label: "Google Gemini API", active: true },
    { label: "Tailwind CSS", active: false },
    { label: "shadcn/ui", active: false },
    { label: "PDF Reporting", active: false },
    { label: "GitHub Actions", active: false },
    { label: "Vercel", active: false },
  ],
  live: "https://website-accessibility-analyser-six.vercel.app/",
  github: "https://github.com/77Monisha/Website-Accessibility-Scanner-showcase",
};

export const PricePing = {
  title: "PricePing – Real-Time Price Monitoring System",
  desc: [
    "Tracks a product from its URL alone — **Firecrawl** extracts name, price, stock and size variants",
    "Every observed change is appended to a **price history** in Postgres, with a lowest-price benchmark",
    "**Target price, tolerance and variant availability** decide when an alert is actually worth sending",
    "**Scheduled re-checks** mail drop alerts via **Resend**; the dashboard filters by platform, stock and price",
  ],
  tech: [
    { label: "Next.js", active: true },
    { label: "React", active: false },
    { label: "Server Actions", active: true },
    { label: "Supabase", active: true },
    { label: "PostgreSQL", active: false },
    { label: "Firecrawl", active: true },
    { label: "Resend", active: false },
    { label: "Google OAuth", active: false },
    { label: "Cron Jobs", active: true },
    { label: "Vercel", active: false },
  ],
  live: "https://pingprice.vercel.app/",
  github: "https://github.com/77Monisha/PricePing-showcase",
};

export const ToastStorybook = {
  title: "Scalable Toast – Reusable Notification Component",
  desc: [
    "A **reusable Toast component** with multiple variants, configurable messages and auto-dismiss",
    "State handled locally with **React Hooks** — no provider or global store to wire up",
    "Each variant ships as an interactive **Storybook** story, built and reviewed component-first",
  ],
  tech: [
    { label: "React", active: true },
    { label: "JavaScript", active: false },
    { label: "Storybook", active: true },
    { label: "Vite", active: false },
    { label: "React Hooks", active: true },
    { label: "ESLint", active: false },
  ],
  live: "https://65fbdadd0f64f38556d50506--cosmic-palmier-7904a4.netlify.app/?path=/story/toast--type&args=type:notification",
  github: "https://github.com/77Monisha/scalable-toast-storybook",
};

export const MoshMedia = {
  title: "Mosh Media – Video Streaming Platform",
  desc: [
    "Developed **video streaming platform** with optimized media rendering",
    "Built **modular React architecture** for scalability",
    "Integrated external APIs using **Axios & RapidAPI**",
  ],
  tech: [
    { label: "React.js", active: true },
    { label: "Material UI", active: false },
    { label: "Rapid API", active: false },
    { label: "Axios", active: true },
  ],
  live: "https://mosh-media.netlify.app/",
  github: "https://github.com/77Monisha/Mosh-Media",
};

// Retained for reference — no longer shown in the Projects section.
export const HooBank = {
  title: "HooBank",
  desc: [
    "Developed **modern responsive UI system** with reusable components",
    "Focused on **layout consistency & smooth user experience**",
  ],
  tech: [
    { label: "React", active: true },
    { label: "Tailwind CSS", active: false },
    { label: "ShadCN", active: false },
  ],
  live: "https://hoo-bank-mosh.netlify.app/",
  github: "https://github.com/77Monisha/HooBank",
};

export const ROLES = [
  {
    label: "Hawk Martech",
    title: (
      <GrayTitle>Building scalable systems for real-world users</GrayTitle>
    ),
    timeline: "April 2024 - Present",
    role: "Software Development Engineer - I",

    projects: [
      {
        name: "WLPL – Cricket Premier League Platform 🔗",
        link: "https://www.worldlegendsprot20.com/",

        highlights: [
          "Built **OTP-based authentication** supporting **5,000+ users**",
          "Integrated **Razorpay** handling **1,000+ monthly transactions**",
          "Reduced duplicate payments by **35%** using validation & lock system",
        ],
      },
      {
        name: "OneTurf – Live Match Management Platform 🔗",
        link: "https://www.oneturf.news/",

        highlights: [
          "Developed **live match system** (commentary, stats, scoreboard)",
          "Optimized API polling reducing redundant calls by **40%**",
        ],
      },
      {
        name: "Hike Messenger – Real-Time Communication 🔗",
        link: "https://webchat.tingmessenger.com/",
        highlights: [
          "Implemented **WebRTC-based real-time calling** with **sub-300ms latency**",
        ],
      },
    ],
  },

  {
    label: "Ingersoll Rand",
    title: <GoldTitle>Designing scalable and accessible UI systems</GoldTitle>,
    timeline: "July 2023 - March 2024",
    role: "Frontend Engineer",

    projects: [
      {
        name: "SEEPEX 🔗",
        link: "https://www.seepex.com/en/",

        highlights: [
          "Built **reusable component system** for large-scale product listings",
          "Improved **accessibility (a11y)** aligning with **WCAG standards**",
        ],
      },
      {
        name: "Ingersoll Rand 🔗",
        link: "https://www.ingersollrand.com/en-in/",
        highlights: [
          "Developed UI for **industrial machinery listings**",
          "Implemented **accessibility improvements** (color contrast, readability)",
          "Contributed to **scalable design system patterns**",
        ],
      },
    ],
  },
];

export const SKILLS = [
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "SCSS", icon: "sass" },
      { name: "ShadCN", icon: "shadcn" },
      { name: "Redux", icon: "redux" },
      { name: "Zustand", icon: "zustand" },
      { name: "Clerk", icon: "clerk" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Supabase", icon: "supabase" },
      { name: "Prisma", icon: "prisma" },
      { name: "OpenAI API", icon: "openai" }, // ✅ added
    ],
  },
  {
    category: "AI & Data", // ✅ new section
    items: [
      { name: "LLM / Generative AI", icon: "ai" },
      { name: "Vector Databases", icon: "vector" },
    ],
  },
  {
    category: "Performance & SEO",
    items: [
      { name: "Razorpay", icon: "razorpay" },
      { name: "Core Web Vitals", icon: "web" },
      { name: "Lighthouse", icon: "lighthouse" },
      { name: "SEO", icon: "seo" },
    ],
  },
  {
    category: "Tools & Testing",
    items: [
      { name: "Jest", icon: "jest" },
      { name: "Git", icon: "git" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
      { name: "Firecrawl", icon: "fire" },
    ],
  },
  {
    category: "Web Engineering",
    items: [
      { name: "Accessibility (a11y)", icon: "accessibility" },
      { name: "i18n", icon: "globe" },
    ],
  },
];

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiSupabase,
  SiPrisma,
  SiJest,
  SiGit,
  SiFigma,
  SiPostman,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { MdAccessibility, MdOutlineWeb } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { SiOpenai } from "react-icons/si";
import { BsCpu } from "react-icons/bs";
import { TbDatabase } from "react-icons/tb";

export const ICON_MAP = {
  nextjs: <SiNextdotjs />,
  react: <SiReact />,
  tailwind: <SiTailwindcss />,
  sass: <SiSass />,
  redux: <SiRedux />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  nodejs: <FaNodeJs />,
  graphql: <SiGraphql />,
  supabase: <SiSupabase />,
  prisma: <SiPrisma />,
  jest: <SiJest />,
  git: <SiGit />,
  figma: <SiFigma />,
  postman: <SiPostman />,
  accessibility: <MdAccessibility />,
  web: <MdOutlineWeb />,
  seo: <TbSeo />,
  openai: <SiOpenai />,
  ai: <BsCpu />,
  vector: <TbDatabase />,
};
