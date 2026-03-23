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
      className="w-110 h-120 border-none"
      code={`
const monisha = {
  role: "Frontend Engineer",
  experience: "2.8 years",

  skills: [
    "React", "Next.js", "TypeScript",
    "Tailwind", "Redux", "Zustand"
  ],

  systemsBuilt: [
    "Real-time match management system",
    "OTP authentication with 5,000+ users",
    "Admin panels & CMS platforms"
  ],

  impact: {
    transactions: "1,000+ per month",
    performance: "Reduced API calls by 40%",
    payments: "Integrated Razorpay system"
  },

  focus: [
    "Performance optimization",
    "Scalable frontend architecture",
    "Accessibility (a11y)"
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
