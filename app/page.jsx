"use client";

import { CodeDemo } from "@/components/demo-components-animate-code";
import { StarsBackgroundDemo } from "@/components/demo-components-backgrounds-stars";
import {
  Accessibility,
  HooBank,
  ICON_MAP,
  MoshMedia,
  PingPrice,
  ROLES,
  SKILLS,
} from "@/lib/data";
import {
  GoldTitle,
  GrayTitle,
  SectionHeading,
  SectionLabel,
} from "@/components/reusables";
import { Bot, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import { ShareButton } from "@/components/animate-ui/components/community/share-button";

// function MockUI({ rows = 3 }) {
//   const widths = ["w-4/5", "w-3/5", "w-2/5", "w-4/5", "w-1/2"];
//   const colors = [
//     "bg-white/5",
//     "bg-white/5",
//     "bg-amber-400/15",
//     "bg-white/5",
//     "bg-white/5",
//   ];
//   return (
//     <div className="mt-5 rounded-xl bg-[#141417] border border-white/10 overflow-hidden">
//       <div className="h-9 bg-white/5 border-b border-white/10 flex items-center px-3.5 gap-1.5">
//         <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
//         <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
//         <span className="w-2 h-2 rounded-full bg-[#28c840]" />
//       </div>
//       <div className="p-4 flex flex-col gap-2">
//         {Array.from({ length: rows }).map((_, i) => (
//           <div
//             key={i}
//             className={`h-2 rounded-full ${widths[i]} ${colors[i]}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

function BentoCard({
  icon,
  title,
  desc,
  children,
  className = "",
  tech,
  link,
  source,
}) {
  return (
    <div
      className={`relative bg-[#0f0f11] border border-white/10 hover:border-amber-400/20 rounded-2xl p-9 h-full transition-all duration-300 hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-amber-400/5 via-transparent to-transparent pointer-events-none" />
      <span className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-xl mb-5">
        {icon}
      </span>
      <h3 className="font-serif text-xl tracking-tight mb-2">{title}</h3>
      <p className="text-sm text-stone-400 font-light leading-relaxed">
        {desc}
      </p>
      {children}

      <div className="flex flex-wrap gap-2 mt-5">
        TECH STACK :
        {tech.map((t) => (
          <Badge key={t.label} variant={t.active ? "gold" : "outline"}>
            {t.label}
          </Badge>
        ))}
      </div>
      <div className="flex flex-row justify-between items-end mt-4">
        <Link href={link}>
          <Button className="cursor-pointer bg-linear-to-br from-stone-100 via-stone-300 to-stone-500 font-semibold">
            Live Link
          </Button>
        </Link>
        <Link href={source}>
          <Button className="cursor-pointer bg-linear-to-br from-stone-100 via-stone-300 to-stone-500 font-semibold">
            Github
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-[#0a0a0b] overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen grid grid-cols-5 px-6 pt-36 pb-24 overflow-hidden">
        <StarsBackgroundDemo />

        <div className="-rotate-2 col-span-3 flex flex-col gap-5 items-center justify-center text-center">
          <Badge variant="gold">Frontend Engineer • 2.8 Years Experience</Badge>

          <h1 className="font-serif relative z-10 text-5xl md:text-6xl lg:text-6xl leading-tight tracking-tighter max-w-4xl">
            <GrayTitle>Building scalable frontend</GrayTitle>
            <br />
            <GoldTitle>systems for real-world performance</GoldTitle>
          </h1>

          <p className="relative z-10 text-base md:text-lg text-stone-400 font-light max-w-xl mt-6 leading-relaxed">
            Focused on performance, real-time systems, and scalable
            architecture. Built products handling 5,000+ users and 1,000+
            monthly transactions.
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-10">
            <Button variant="gold" size="hero">
              View Projects
            </Button>

            <Button variant="outline" size="hero">
              Contact Me →
            </Button>
          </div>
        </div>

        <div className="col-span-2 flex items-center justify-start rotate-3">
          <CodeDemo duration={30000} writing />
        </div>
      </section>

      {/* ── PROFESSIONAL EXPERIENCE ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 mt-28">
        <div className="text-center mb-16">
          <SectionLabel>Professional Experience</SectionLabel>
          <SectionHeading
            gray="Production-grade systems built for scale,"
            gold="performance, and real users"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ROLES.map((role) => (
            <div
              key={role.label}
              className="relative bg-[#0f0f11] border border-white/10 hover:border-amber-400/20 rounded-2xl p-12 h-full transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div className="flex flex-row justify-between items-center mb-5">
                <span className="inline-block text-xs font-semibold text-amber-400 tracking-widest uppercase border border-amber-400/20 bg-amber-400/10 rounded-full px-3 py-1.5 ">
                  {role.label}
                </span>
                <span className="inline-block text-xs font-semibold text-white tracking-widest uppercase ">
                  {role.timeline}
                </span>
              </div>
              <h3 className="font-serif text-2xl tracking-tight mb-4">
                {role.role}
              </h3>
              <p className="text-sm text-stone-400 font-light leading-relaxed mb-8">
                {role.desc}
              </p>
              <ul className="space-y-3">
                {role.perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm text-stone-400"
                  >
                    <span className="mt-0.5 min-w-4 h-4 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-xs text-amber-400">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── PERSONAL PROJECTS ── */}
      <section
        id="Features"
        className="relative z-10 mt-28 max-w-5xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <SectionLabel>Selected Projects</SectionLabel>
          <SectionHeading
            gray="Independent projects focused on performance, real-time systems, and "
            gold="solving practical problems with scalable architecture."
          />
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7">
            <BentoCard
              icon={<Bot size={20} className="text-amber-400" />}
              title={
                <GrayTitle>
                  PingPrice – Real-Time Price Monitoring System
                </GrayTitle>
              }
              desc="PricePing is your intelligent price monitoring assistant. Track products in real time, set custom target prices, receive instant email alerts, monitor size-specific availability, and explore historical price trends — so you can purchase at the perfect moment."
              link={PingPrice.live}
              source={PingPrice.github}
              tech={PingPrice.tech}
            ></BentoCard>
          </div>

          <div className="col-span-12 md:col-span-5">
            <BentoCard
              icon={<Wallet size={16} className="text-amber-400" />}
              title={
                <GrayTitle>Mosh Media : Video Streaming Platform</GrayTitle>
              }
              desc="Developed a responsive video streaming platform using modular React components with
performance-optimized media rendering, ensuring scalable UI architecture and smooth playback."
              link={MoshMedia.live}
              source={MoshMedia.github}
              tech={MoshMedia.tech}
            ></BentoCard>
          </div>
          <div className="col-span-12 md:col-span-6">
            <BentoCard
              icon="🗓️"
              title={<GoldTitle>HooBank </GoldTitle>}
              desc="HooBank is the highly responsive website with modern UX/UI in React JS and Tailwind with amazing opening section and high quality gradient, having business stats, buttons , testimonials and reusable components."
              link={HooBank.live}
              source={HooBank.github}
              tech={HooBank.tech}
            ></BentoCard>
          </div>
          <div className="col-span-12 md:col-span-6">
            <BentoCard
              icon="📊"
              title={<GrayTitle>Website Accessibility Analyser</GrayTitle>}
              desc="Post-interview analysis by Gemini. Covers communication, technical depth, problem-solving, and a clear hiring recommendation with action items."
              link={PingPrice.live}
              source={PingPrice.github}
              tech={PingPrice.tech}
            ></BentoCard>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="relative max-w-4xl mx-auto py-14 my-28">
        <div className="text-center mb-16">
          <SectionHeading gray="Skills & " gold="Technologies" />
        </div>

        <div className="space-y-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-12 items-start gap-4"
            >
              {/* LEFT: CATEGORY */}
              <div className="col-span-12 md:col-span-3">
                <h3 className="text-amber-400 font-medium text-sm tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* RIGHT: SKILLS */}
              <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition"
                  >
                    <span className="text-sm opacity-80">
                      {ICON_MAP[skill.icon] || "•"}
                    </span>
                    <span className="text-sm text-stone-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="relative z-10 pb-28 max-w-5xl mx-auto px-6">
        <div className="relative border border-amber-400/20 rounded-3xl px-16 py-20 bg-linear-to-br from-amber-400/5 to-transparent text-center overflow-hidden">
          <StarsBackgroundDemo />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full bg-[radial-gradient(ellipse,rgba(251,191,36,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="font-serif relative z-10 text-4xl md:text-5xl leading-tight tracking-tight mb-4">
            <GrayTitle>Your next interview</GrayTitle>
            <br />
            <GoldTitle>starts here</GoldTitle>
          </h2>
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="hero">
              Get started free →
            </Button>
            <Button variant="outline" size="hero">
              Become an interviewer
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-28 max-w-5xl mx-auto px-6">
        <div className="relative border border-amber-400/20 rounded-3xl px-16 py-20 bg-linear-to-br from-amber-400/5 to-transparent text-center overflow-hidden">
          <StarsBackgroundDemo />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full bg-[radial-gradient(ellipse,rgba(251,191,36,0.1)_0%,transparent_70%)] pointer-events-none" />

          {/* HEADING */}
          <h2 className="font-serif relative z-10 text-4xl md:text-5xl leading-tight tracking-tight mb-4">
            <GrayTitle>Let’s build something</GrayTitle>
            <br />
            <GoldTitle>impactful together</GoldTitle>
          </h2>

          {/* SUBTEXT */}
          <p className="text-stone-400 text-sm mb-8 relative z-10">
            Open to frontend roles, remote opportunities, and high-impact teams.
          </p>

          {/* CTA */}
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="hero">
              View Resume
            </Button>
            <Button variant="outline" size="hero">
              Contact Me →
            </Button>
            <ShareButton />
          </div>
        </div>
      </section>
    </div>
  );
}
