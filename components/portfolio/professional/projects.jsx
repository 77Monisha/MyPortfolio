import { ArrowUpRight, BellRing } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROFILE, PROJECTS, SIDE_PROJECTS } from "@/lib/portfolio-data";
import { Eyebrow, RichText, SectionTitle, TagList } from "../primitives";
import PixelField from "./pixel-field";
import ProjectRail from "./project-rail";

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
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            strokeWidth="4"
            className="stroke-pf-border"
          />
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
      <svg
        viewBox="0 0 140 36"
        preserveAspectRatio="none"
        className="mt-2 h-9 w-full"
        aria-hidden
      >
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
  default: [{ x: 1, y: 1, rx: 0.4, ry: 0.35, strength: 0.8 }],
};

// Warm haze under the pixels, matching each card's glow.
const CARD_HAZE = {
  accessibility: "",
  price:
    "bg-[radial-gradient(ellipse_75%_40%_at_50%_100%,rgb(214_150_70/0.1),transparent_75%)]",
  default: "",
};

// /p1's project copy, checked against each project's public showcase README.
// Links come from the shared portfolio data so they stay in one place.
const LINKS = Object.fromEntries(
  [...PROJECTS, ...SIDE_PROJECTS].map((p) => [
    p.id,
    { live: p.live, github: p.github },
  ]),
);
const CARDS = [
  {
    id: "fixmytree",
    name: "FixMyTree",
    purpose:
      "AI-powered website accessibility scanner that helps developers identify and prioritize WCAG issues.",
    description:
      "Scans public web pages in a real browser using Playwright and axe-core, then groups accessibility violations by severity and affected element. Provides accessibility scoring, scan history, and Gemini-powered remediation suggestions, with PDF reporting.",
    challenge:
      "Auditing fully rendered pages in headless Chromium rather than relying on static HTML.",
    // highlights: [
    //   "Severity-based issue triage and scan history across projects and pages.",
    //   "AI-generated remediation suggestions with structured responses and user-scoped data.",
    // ],
    tech: ["Next.js", "Playwright", "axe-core", "Supabase", "Gemini API"],
    visual: "accessibility",
  },
  {
    id: "priceping",
    name: "PricePing",
    purpose:
      "Product price monitoring that helps users identify worthwhile deals without repeatedly checking stores.",
    description:
      "Tracks products from their URLs, extracts price and variant information, and records price history. Scheduled checks evaluate target price, tolerance, stock, and variant availability before sending email alerts.",
    challenge:
      "Determining when a price change warrants an alert using target-price, tolerance, and variant-availability rules.",
    // highlights: [
    //   "Variant-aware monitoring with price history and product filtering.",
    //   "Automated email alerts and user-level data isolation.",
    // ],
    tech: ["Next.js", "Supabase", "Firecrawl", "PostgreSQL", "Resend"],
    visual: "price",
  },
  {
    // Secondary project: smaller title, no challenge or highlights.
    id: "scalable-toast",
    name: "Scalable Toast",
    secondary: true,
    purpose: "Reusable React notification component.",
    description:
      "Multiple variants, configurable messages and auto-dismiss, with each variant shipped as an interactive Storybook story.",
    tech: ["React", "Storybook", "Vite"],
  },
].map((card, i) => ({
  ...card,
  ...LINKS[card.id],
  index: String(i + 1).padStart(2, "0"),
}));

// Mobile stacks title → visual → purpose; from `sm` the visual sits to the
// right of the title. Description, challenge, highlights, tech and links run
// full width below.
function ProjectCard({ project }) {
  const Visual = VISUALS[project.visual];
  const glow = project.visual ?? "default";
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-pf-border bg-pf-card p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-pf-muted/50 md:p-7"
    >
      <PixelField
        glows={CARD_GLOWS[glow]}
        seed={Number(project.index) * 7}
        step={4}
        className={`inset-0 ${CARD_HAZE[glow]}`}
      />

      <div className="relative flex flex-col gap-4 sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-6 sm:gap-y-2">
        <div
          data-pixel-clear
          className="order-1 flex items-center gap-3 sm:order-none sm:col-start-1 sm:row-start-1"
        >
          <span className="rounded-md border border-pf-border px-1.5 py-0.5 font-code text-[11px] text-pf-muted">
            {project.index}
          </span>
          <h3
            id={`${project.id}-title`}
            className={`font-display leading-none tracking-[-0.01em] ${project.secondary ? "text-[1.4rem] text-pf-text/90" : "text-[1.75rem]"}`}
          >
            {project.name}
          </h3>
        </div>

        {Visual && (
          <div
            data-pixel-clear
            className="order-2 sm:order-none sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:w-52"
          >
            <Visual />
          </div>
        )}

        <p
          data-pixel-clear
          className="order-3 text-sm text-pf-muted sm:order-none sm:col-start-1 sm:row-start-2 sm:font-display sm:text-[15px] sm:text-pf-text/80"
        >
          {project.purpose}
        </p>
      </div>

      <p
        data-pixel-clear
        className={`relative mt-4 text-sm leading-relaxed ${project.secondary ? "text-pf-muted" : "text-pf-text/85"}`}
      >
        {project.description}
      </p>

      {project.challenge && (
        <p
          data-pixel-clear
          className="relative mt-3 text-sm leading-relaxed text-pf-muted"
        >
          <span className="font-code text-[11px] uppercase tracking-[0.16em] text-pf-orange">
            Challenge
          </span>{" "}
          {project.challenge}
        </p>
      )}

      {project.highlights && (
        <ul data-pixel-clear className="relative mt-3 space-y-1">
          {project.highlights.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-pf-muted"
            >
              <span
                aria-hidden
                className="mt-2 size-1 shrink-0 rounded-full bg-pf-accent"
              />
              <span>
                <RichText text={point} />
              </span>
            </li>
          ))}
        </ul>
      )}

      <TagList
        data-pixel-clear
        items={project.tech}
        label={`${project.name} technologies`}
        className="relative mt-4"
      />

      <div
        data-pixel-clear
        className="relative mt-auto flex items-center justify-end gap-4 pt-5 sm:justify-start"
      >
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
          <span className="sr-only">
            code for {project.name} (opens in a new tab)
          </span>
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
      className="scroll-mt-20 overflow-x-clip border-b border-pf-border"
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

        <div className="mt-10">
          <ProjectRail label="Projects">
            {CARDS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectRail>
        </div>
      </div>
    </section>
  );
}
