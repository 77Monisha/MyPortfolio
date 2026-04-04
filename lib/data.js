import { GoldTitle, GrayTitle } from "@/components/reusables";

export const PingPrice = {
  title: "PingPrice – Real-Time Price Monitoring System",
  desc: [
    "Built **real-time price tracking system** with smart alerts",
    "Implemented **size-based availability tracking** for precise monitoring",
    "Designed **cron-based automation** for continuous price updates",
    "Optimized for **SEO & performance (Core Web Vitals)**",
  ],
  tech: [
    { label: "Next.js", active: true },
    { label: "Supabase", active: true },
    { label: "Clerk", active: false },
    { label: "Firecrawl", active: false },
    { label: "Cron Jobs", active: true },
    { label: "SEO", active: false },
    { label: "Web Performance", active: true },
    { label: "ShadCN", active: false },
    { label: "Tailwind CSS", active: false },
  ],
  live: "https://pingprice.vercel.app/",
  github: "https://github.com/77Monisha/PricePing",
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
  github: "https://github.com/77Monisha/Mosh",
};

export const Accessibility = {
  title: "Website Accessibility Analyser",
  desc: [
    "Built **AI-powered accessibility analysis tool** using OpenAI",
    "Evaluates **SEO, performance & a11y issues** in real-time",
    "Generates **actionable insights for developers**",
  ],
  tech: [
    { label: "Next.js", active: true },
    { label: "Supabase", active: true },
    { label: "Clerk", active: false },
    { label: "OpenAI API", active: true },
    { label: "SEO", active: false },
    { label: "Web Performance", active: true },
  ],
  live: "#",
  github: "#",
};

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
    category: "Frontend",
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
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Supabase", icon: "supabase" },
      { name: "Prisma", icon: "prisma" },
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
};
