import { GoldTitle, GrayTitle } from "@/components/reusables";

export const PingPrice = {
  title: "PingPrice – Real-Time Price Monitoring System",
  desc: "Track product prices in real-time with alerts, size-based availability, and historical trends.",
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
  desc: "Responsive video streaming platform with optimized media rendering and scalable UI.",
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
  desc: "Analyzes accessibility, SEO, and performance using AI-driven insights.",
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
  desc: "Modern responsive UI with reusable components and smooth UX.",
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
    desc: "Worked as a Frontend Engineer building high-scale systems including payments, real-time platforms, and admin tools used by thousands of users.",
    perks: [
      "Built OTP-based authentication system supporting 5,000+ users",
      "Integrated Razorpay handling 1,000+ monthly transactions",
      "Reduced duplicate payments by 35% using validation & lock system",
      "Developed real-time match system with 40% fewer API calls",
      "Led frontend development for admin panels & CMS platforms",
    ],
  },
  {
    label: "Ingersoll Rand",
    title: <GoldTitle>Designing scalable and accessible UI systems</GoldTitle>,
    timeline: "July 2023 - March 2024",
    role: "Frontend Engineer",
    desc: "Focused on building reusable frontend components and improving accessibility and consistency across large-scale industrial platforms.",
    perks: [
      "Developed reusable component system for product listings",
      "Improved accessibility compliance across multiple modules",
      "Enhanced UI consistency and cross-page maintainability",
      "Collaborated with senior engineers on scalable architecture",
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
