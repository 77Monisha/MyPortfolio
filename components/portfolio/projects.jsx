import { ArrowUpRight, BellRing } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROFILE, PROJECTS } from "@/lib/portfolio-data";
import { Eyebrow, SectionTitle, TagList } from "./primitives";

const SEVERITIES = [
  { label: "Critical", count: 14, color: "bg-pf-red" },
  { label: "Serious", count: 37, color: "bg-pf-orange" },
  { label: "Moderate", count: 92, color: "bg-pf-accent" },
  { label: "Minor", count: 32, color: "bg-pf-green" },
];

function AccessibilityVisual() {
  const score = 78;
  const r = 26;
  const circumference = 2 * Math.PI * r;
  return (
    <figure
      className="flex items-center gap-5 rounded-xl border border-pf-border bg-pf-bg/70 p-4"
      aria-label={`Sample scan: accessibility score ${score} out of 100`}
    >
      <div className="relative size-16 shrink-0">
        <svg viewBox="0 0 64 64" className="size-16 -rotate-90" aria-hidden>
          <circle cx="32" cy="32" r={r} fill="none" stroke="#2A2A2A" strokeWidth="4" />
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke="#D8D0B8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - score / 100)}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center font-display text-xl">
          {score}
        </span>
      </div>
      <ul className="space-y-1 whitespace-nowrap font-code text-[11px] text-pf-muted">
        {SEVERITIES.map((s) => (
          <li key={s.label} className="flex items-center gap-2">
            <span className={`size-1.5 rounded-full ${s.color}`} aria-hidden />
            {s.count} {s.label}
          </li>
        ))}
      </ul>
    </figure>
  );
}

function PriceVisual() {
  return (
    <figure
      className="rounded-xl border border-pf-border bg-pf-bg/70 p-4"
      aria-label="Sample alert: price dropped from ₹2,499 to ₹2,099, down 16%"
    >
      <p className="font-code text-sm text-pf-muted line-through decoration-pf-muted/60">
        ₹ 2,499
      </p>
      <p className="mt-1 flex items-baseline gap-2 font-code">
        <span className="text-lg text-pf-text">₹ 2,099</span>
        <span className="text-xs text-pf-orange">↓16%</span>
      </p>
      <svg viewBox="0 0 140 36" preserveAspectRatio="none" className="mt-2 h-9 w-full" aria-hidden>
        <polyline
          points="0,30 18,26 34,28 50,20 66,23 82,14 98,18 114,8 140,4"
          fill="none"
          stroke="#FF8A3D"
          strokeWidth="1.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <p className="mt-2 flex items-center gap-1.5 text-[11px] text-pf-orange">
        <BellRing className="size-3.5" aria-hidden /> Price drop detected
      </p>
    </figure>
  );
}

const VISUALS = { accessibility: AccessibilityVisual, price: PriceVisual };

function ProjectCard({ project }) {
  const Visual = VISUALS[project.visual];
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-pf-border bg-pf-card p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-pf-muted/50 md:p-7"
    >
      <div
        aria-hidden
        className="pf-halftone pointer-events-none absolute -bottom-10 -right-10 h-48 w-72 opacity-25 mask-[radial-gradient(ellipse_at_bottom_right,black,transparent_70%)]"
      />

      <div className="relative grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-md border border-pf-border px-1.5 py-0.5 font-code text-[11px] text-pf-muted">
              {project.index}
            </span>
            <h3
              id={`${project.id}-title`}
              className="font-display text-[1.75rem] leading-none tracking-[-0.01em]"
            >
              {project.name}
            </h3>
          </div>
          <p className="mt-2 text-sm text-pf-muted">{project.tagline}</p>
        </div>
        <div className="sm:w-52">
          <Visual />
        </div>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-pf-text/85">
        {project.description}
      </p>
      <p className="relative mt-3 text-sm leading-relaxed text-pf-muted">
        <span className="font-code text-[11px] uppercase tracking-[0.16em] text-pf-orange">
          Challenge
        </span>{" "}
        {project.challenge}
      </p>

      <TagList
        items={project.tech}
        label={`${project.name} technologies`}
        className="relative mt-5"
      />

      <div className="relative mt-6 flex flex-wrap items-center gap-4 pt-1">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-pf-border px-4 py-2.5 text-sm text-pf-text transition-colors hover:border-pf-muted"
        >
          View project
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          <span className="sr-only">{project.name} (opens in a new tab)</span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-pf-muted transition-colors hover:text-pf-text"
        >
          <FaGithub aria-hidden className="size-4" />
          Source
          <span className="sr-only">code for {project.name} (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-20 border-b border-pf-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <SectionTitle id="work-title" className="mt-3">
              Products I&apos;ve built.
            </SectionTitle>
          </div>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 border-b border-pf-muted/50 pb-0.5 text-sm text-pf-text hover:border-pf-text"
          >
            View all projects
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only">on GitHub (opens in a new tab)</span>
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
