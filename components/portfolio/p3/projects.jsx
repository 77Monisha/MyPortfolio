import { ArrowUpRight, BellRing } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROFILE, PROJECTS } from "@/lib/portfolio-data";
import { Eyebrow, SectionTitle, TagList } from "../primitives";
import PixelField from "./pixel-field";

const SEVERITIES = [
  { label: "Critical", count: 14, color: "bg-pf-red" },
  { label: "Serious", count: 37, color: "bg-pf-orange" },
  { label: "Moderate", count: 92, color: "bg-[#EAB308]" },
  { label: "Minor", count: 32, color: "bg-pf-green" },
];

function AccessibilityVisual() {
  const score = 78;
  const r = 26;
  const circumference = 2 * Math.PI * r;
  return (
    <figure
      className="flex items-center justify-center gap-5 rounded-xl border border-pf-border bg-pf-bg/70 p-4"
      aria-label={`Sample scan: accessibility score ${score} out of 100`}
    >
      <div className="relative size-16 shrink-0">
        <svg viewBox="0 0 64 64" className="size-16 -rotate-90" aria-hidden>
          <circle cx="32" cy="32" r={r} fill="none" strokeWidth="4" className="stroke-pf-border" />
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - score / 100)}
            className="stroke-pf-accent"
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
      <p className="font-code text-sm text-pf-muted">₹ 2,499</p>
      <p className="mt-2 flex items-baseline gap-2 font-code">
        <span className="text-lg text-pf-text">₹ 2,099</span>
        <span className="text-xs text-pf-orange">↓ 16%</span>
      </p>
      <svg viewBox="0 0 140 36" preserveAspectRatio="none" className="mt-2 h-9 w-full" aria-hidden>
        <polyline
          points="0,30 18,26 34,28 50,20 66,23 82,14 98,18 114,8 140,4"
          fill="none"
          strokeWidth="1.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="stroke-pf-orange"
        />
      </svg>
      <p className="mt-2 flex items-center gap-1.5 text-[11px] text-pf-orange">
        <BellRing className="size-3.5" aria-hidden /> Price drop detected
      </p>
    </figure>
  );
}

const VISUALS = { accessibility: AccessibilityVisual, price: PriceVisual };

// Pixel glow per card, in fractions of the card. FixMyTree stays subtle
// around its visual; PricePing gets the warm "floor" from the design. Text,
// tags, buttons and the visual are marked data-pixel-clear, so the glow only
// fills the empty space around them.
const CARD_GLOWS = {
  accessibility: [
    { x: 0.62, y: 0.1, rx: 0.12, ry: 0.25, strength: 0.7 },
    { x: 1, y: 1, rx: 0.42, ry: 0.4, strength: 0.9 },
  ],
  price: [
    { x: 0.72, y: 1.05, rx: 0.6, ry: 0.35, strength: 1.1 },
    { x: 1, y: 0.65, rx: 0.12, ry: 0.4, strength: 0.7 },
  ],
};

// Warm haze under the pixels, matching each card's glow.
const CARD_HAZE = {
  accessibility: "",
  price: "bg-[radial-gradient(ellipse_75%_40%_at_50%_100%,rgb(214_150_70/0.1),transparent_75%)]",
};

// Mobile stacks title → visual → tagline → tags → button and drops the
// description; from `sm` the visual moves into its own column on the right.
function ProjectCard({ project }) {
  const Visual = VISUALS[project.visual];
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-pf-border bg-pf-card p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-pf-muted/50 sm:grid sm:grid-cols-[1fr_13rem] sm:gap-x-6 sm:gap-y-0 md:p-7"
    >
      <PixelField
        glows={CARD_GLOWS[project.visual]}
        seed={Number(project.index) * 7}
        step={4}
        className={`inset-0 ${CARD_HAZE[project.visual]}`}
      />

      <div data-pixel-clear className="relative order-1 flex items-center gap-3 sm:order-none sm:col-start-1 sm:row-start-1">
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

      <div data-pixel-clear className="relative order-2 sm:order-none sm:col-start-2 sm:row-span-5 sm:row-start-1 sm:self-start">
        <Visual />
      </div>

      <p data-pixel-clear className="relative order-3 text-sm text-pf-muted sm:order-none sm:col-start-1 sm:row-start-2 sm:mt-2 sm:font-display sm:text-[15px] sm:text-pf-text/80">
        {project.tagline}
      </p>

      <p data-pixel-clear className="relative hidden text-sm leading-relaxed text-pf-text/85 sm:col-start-1 sm:row-start-3 sm:mt-5 sm:block">
        {project.description}
      </p>

      <TagList
        data-pixel-clear
        items={project.tech}
        label={`${project.name} technologies`}
        className="relative order-4 sm:order-none sm:col-start-1 sm:row-start-4 sm:mt-5"
      />

      <div data-pixel-clear className="relative order-5 flex items-center justify-end gap-4 sm:order-none sm:col-start-1 sm:row-start-5 sm:mt-6 sm:justify-start">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-pf-border bg-pf-bg/40 px-4 py-2.5 text-sm text-pf-text transition-colors hover:border-pf-muted"
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
            <Eyebrow>Featured work</Eyebrow>
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
