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
import { GoldTitle, GrayTitle, SectionHeading } from "@/components/reusables";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ShareButton } from "@/components/animate-ui/components/community/share-button";
import { highlightText } from "@/lib/utils";
import Header from "@/components/header";
import { useState } from "react";
import ResumeModal from "@/components/resume-modal";

function BentoCard({
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
      className={`relative bg-[#0f0f11] border border-white/10 hover:border-amber-400/20 rounded-2xl p-4 md:p-9 h-full transition-all duration-300 hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between ${className} hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(251,191,36,0.08)]
transition-all duration-300`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-amber-400/5 via-transparent to-transparent pointer-events-none" />
      <h3 className="font-serif text-xl tracking-tight mb-2">{title}</h3>
      <ul className="space-y-2">
        {desc.map((point, i) => (
          <li
            className="flex items-start gap-2 text-sm text-stone-400 leading-relaxed"
            key={i}
          >
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="flex-1">{highlightText(point)}</div>
          </li>
        ))}
      </ul>
      {children}

      <div className="flex flex-wrap gap-2 mt-5">
        TECH STACK :
        {tech?.map((t) => (
          <Badge key={t.label} variant={t.active ? "gold" : "outline"}>
            {t.label}
          </Badge>
        ))}
      </div>
      <div className="flex flex-row justify-between items-end mt-4">
        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button className="cursor-pointer bg-linear-to-br from-stone-100 via-stone-300 to-stone-500 font-semibold">
              Live Link
            </Button>
          </Link>
        )}
        {source && (
          <Link href={source} target="_blank" rel="noopener noreferrer">
            <Button className="cursor-pointer bg-linear-to-br from-stone-100 via-stone-300 to-stone-500 font-semibold">
              Github
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [openResume, setOpenResume] = useState(false);
  return (
    <>
      <Header onResumeClick={() => setOpenResume(true)} />
      <div className="bg-[#0a0a0b] overflow-x-hidden">
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-0 px-4 md:px-6 pt-28 md:pt-36 pb-10 md:pb-24 overflow-hidden">
          <StarsBackgroundDemo />

          <div className="rotate-0 md:-rotate-2 col-span-3 flex flex-col gap-3 md:gap-5 items-center justify-center text-center">
            <Badge
              variant="gold"
              className="text-[10px] md:text-sm whitespace-normal text-center px-3 py-1 relative"
            >
              Open to Software Engineer roles • EU relocation • Remote
            </Badge>

            <h1 className="font-serif relative z-10 text-3xl md:text-6xl lg:text-6xl leading-tight tracking-tighter max-w-4xl">
              <GrayTitle>Building scalable frontend</GrayTitle>
              <br />
              <GoldTitle>systems for real-world products</GoldTitle>
            </h1>

            <p className="relative z-10 text-sm md:text-lg text-stone-400 font-light max-w-xl mt-3 md:mt-6 leading-relaxed">
              Focused on performance, real-time systems, and scalable
              architecture. Built products handling 5,000+ users and 1,000+
              monthly transactions.
            </p>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-6 md:mt-10">
              <a href="#projects">
                <Button variant="gold" size="hero">
                  View Projects
                </Button>
              </a>

              <a href="#contact">
                <Button variant="outline" size="hero">
                  Contact Me →
                </Button>
              </a>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-start rotate-0 md:rotate-3">
            <CodeDemo duration={30000} writing />
          </div>
        </section>

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <section
          className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 mt-14 md:mt-28"
          id="experience"
        >
          <div className="text-center mb-8 md:mb-16">
            <SectionHeading gray="Professional" gold="Experience" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROLES.map((role) => (
              <div
                key={role.label}
                className="relative bg-[#0f0f11] border border-white/10 hover:border-amber-400/20 rounded-2xl p-4 md:p-12 h-full transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* subtle glow */}
                <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.05)_0%,transparent_70%)] pointer-events-none" />

                {/* header */}
                <div className="flex flex-row justify-between items-center mb-5">
                  <span className="text-xs font-semibold text-amber-400 tracking-widest uppercase border border-amber-400/20 bg-amber-400/10 rounded-full px-3 py-1.5">
                    {role.label}
                  </span>
                  <span className="text-xs font-semibold text-white tracking-widest uppercase">
                    {role.timeline}
                  </span>
                </div>

                {/* role */}
                <h3 className="font-serif text-xl md:text-2xl tracking-tight mb-6">
                  {role.role}
                </h3>

                {/* section label */}
                <p className="text-xs tracking-widest text-amber-400 uppercase mb-3 md:mb-6">
                  My Contributions
                </p>

                {/* projects */}
                <div className="space-y-6 md:space-y-8">
                  {role.projects.map((project) => (
                    <div key={project.name}>
                      {/* project title */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-white mb-2"
                      >
                        <span className="cursor-pointer">{project.name}</span>
                      </a>

                      {/* highlights */}
                      <ul className="space-y-2 mt-2">
                        {project.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-stone-400"
                          >
                            <span className="mt-0.5 min-w-4 h-4 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-xs text-amber-400">
                              ✓
                            </span>

                            <div className="leading-relaxed">
                              {highlightText(point)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PERSONAL PROJECTS ── */}
        <section
          id="projects"
          className="relative z-10 mt-14 md:mt-28 max-w-5xl mx-auto px-4 md:px-6"
        >
          <div className="text-center mb-8 md:mb-16">
            <SectionHeading gray="My" gold="Projects" />
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7">
              <BentoCard
                title={
                  <GoldTitle>
                    PingPrice – Real-Time Price Monitoring System
                  </GoldTitle>
                }
                desc={PingPrice.desc}
                link={PingPrice.live}
                source={PingPrice.github}
                tech={PingPrice.tech}
              ></BentoCard>
            </div>

            <div className="col-span-12 md:col-span-5">
              <BentoCard
                title={
                  <GrayTitle>Mosh Media : Video Streaming Platform</GrayTitle>
                }
                desc={MoshMedia.desc}
                link={MoshMedia.live}
                source={MoshMedia.github}
                tech={MoshMedia.tech}
              ></BentoCard>
            </div>
            <div className="col-span-12 md:col-span-6">
              <BentoCard
                title={<GrayTitle>HooBank </GrayTitle>}
                desc={HooBank.desc}
                link={HooBank.live}
                source={HooBank.github}
                tech={HooBank.tech}
              ></BentoCard>
            </div>
            <div className="col-span-12 md:col-span-6">
              <BentoCard
                title={<GoldTitle>Website Accessibility Analyser</GoldTitle>}
                desc={Accessibility.desc}
                // link={Accessibility.live}
                // source={Accessibility.github}
                tech={Accessibility.tech}
              ></BentoCard>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section
          className="relative max-w-4xl mx-auto py-0 md:-14 mt-14 md:mt-28"
          id="skills"
        >
          <div className="text-center mb-8 md:mb-16">
            <SectionHeading gray="Skills & " gold="Technologies" />
          </div>

          <div className="px-4 md:px-0 space-y-6">
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
                      <span className="text-sm text-stone-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          className="relative z-10 pb-12 md:pb-28 mt-14 md:mt-28 max-w-5xl mx-auto px-4 md:px-6"
          id="contact"
        >
          <div className="relative border border-amber-400/20 rounded-3xl px-6 md:px-16 py-10 md:py-20 bg-linear-to-br from-amber-400/5 to-transparent text-center overflow-hidden">
            <StarsBackgroundDemo />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full bg-[radial-gradient(ellipse,rgba(251,191,36,0.1)_0%,transparent_70%)] pointer-events-none" />

            <h2 className="font-serif relative z-10 text-4xl md:text-5xl leading-tight tracking-tight mb-4">
              <GrayTitle>Let’s build something</GrayTitle>
              <br />
              <GoldTitle>impactful together</GoldTitle>
            </h2>

            <p className="text-stone-400 text-sm mb-8 relative z-10">
              Open to frontend roles, remote opportunities, and high-impact
              teams.
            </p>

            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <Button
                variant="gold"
                size="hero"
                onClick={() => setOpenResume(true)}
              >
                View Resume
              </Button>
              <ShareButton
                size="lg"
                icon="suffix"
                className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-8 py-5.5 text-base rounded-xl"
              >
                Contact Me
              </ShareButton>
            </div>
          </div>
        </section>
      </div>
      {openResume && <ResumeModal setOpenResume={setOpenResume} />}
    </>
  );
}
