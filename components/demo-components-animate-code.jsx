"use client";

import {
  Code,
  CodeBlock,
  CodeHeader,
} from "@/components/animate-ui/components/animate/code";
import { Code2 } from "lucide-react";
import React from "react";

export const CodeDemo = ({ duration, delay, writing, cursor }) => {
  return (
    <Code
      key={`${duration}-${delay}-${writing}-${cursor}`}
      className="w-120 h-120 border-none"
      code={`
const monisha = {
  role: "Software Development Engineer",
  experience: "2.8 years+",

  coreSkills: [
    "React", "Next.js", "TypeScript",
    "Tailwind CSS", "Redux", "Zustand",
    "SCSS", "ShadCN", "Clerk"
  ],

  backendAndAPIs: [
    "Node.js", "GraphQL", "Supabase", "Prisma"
  ],

  engineering: [
    "Performance Optimization",
    "Core Web Vitals", "Lighthouse",
    "Accessibility (a11y)", "Internationalization (i18n)",
    "SEO"
  ],

  tools: [
    "Git", "Figma", "Postman", "Jest", "Firecrawl"
  ],

  systemsBuilt: [
    "Real-time match management system (commentary, stats, scoreboard)",
    "Secure OTP authentication system supporting 5,000+ users",
    "Admin dashboards & CMS platforms for content and payments",
    "WebRTC-based real-time audio/video calling system"
  ],

  impact: {
    scale: "Handled 5,000+ users across production systems",
    transactions: "Processed 1,000+ payments/month via Razorpay",
    performance: "Reduced API calls by 40% in high-traffic systems",
    optimization: "Improved performance, SEO, and accessibility scores",
    reliability: "Reduced duplicate transactions by 35% using validation systems"
  },

  projects: [
    "PingPrice – Real-time price tracking with alerts & cron jobs",
    "Mosh Media – Scalable video streaming platform",
  ],

  focus: [
    "Building scalable frontend architecture",
    "Performance-first engineering",
    "Real-time systems & data handling",
    "Clean UI systems & developer experience"
  ]
};

export default monisha;
`}
    >
      <CodeHeader icon={Code2}>Monisha_Resume.jsx</CodeHeader>

      <CodeBlock
        cursor={cursor}
        lang="jsx"
        writing={writing}
        duration={duration}
        delay={delay}
      />
    </Code>
  );
};
