import { ArrowUpRight, Download } from "lucide-react";
import { HERO_STACK, PROFILE } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { ButtonLink, Eyebrow } from "../primitives";
import { ViewToggle } from "../view-mode";
import PixelField from "./pixel-field";

// /p1's own terminal (the shared TERMINAL_LINES still drive /p2).
const TERMINAL_LINES = [
  { cmd: "whoami", value: "monisha-chaurasia" },
  { cmd: "role", value: "software-engineer / frontend" },
  { cmd: "experience", value: "3+ years · SDE-II" },
  { cmd: "core_stack", value: "React · Next.js · TypeScript" },
  { cmd: "focus", value: "Scalable UI · Product Workflows · Performance" },
  { cmd: "location", value: "India" },
];

// On mobile the terminal and stack are trimmed to what reads at a glance.
const MOBILE_LINES = new Set(["whoami", "experience", "core_stack"]);
const MOBILE_STACK = HERO_STACK.slice(0, 3);

// Pixel glow around the terminal, in fractions of a field that extends past
// the terminal (which covers roughly x 0.21–0.79, y 0.19–0.81).
const TERMINAL_GLOWS = [
  { x: 0.16, y: 0.62, rx: 0.13, ry: 0.55, strength: 1.3 },
  { x: 0.98, y: 1, rx: 0.55, ry: 0.5, strength: 1.5 },
  { x: 0.85, y: 0.4, rx: 0.1, ry: 0.5, strength: 1 },
  { x: 0.8, y: 0.06, rx: 0.25, ry: 0.14, strength: 0.6 },
  { x: 0.5, y: 0.95, rx: 0.38, ry: 0.16, strength: 0.85 },
];

function Terminal() {
  return (
    <figure
      aria-label="Profile summary in a terminal window"
      className="relative w-full overflow-hidden rounded-xl border border-pf-border bg-pf-card/95 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.85)] lg:max-w-md"
    >
      <div className="flex items-center justify-between border-b border-pf-border px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-pf-red" />
          <span className="size-2.5 rounded-full bg-[#F5B83D]" />
          <span className="size-2.5 rounded-full bg-pf-green" />
        </div>
        <span className="font-code text-xs text-pf-muted">~/monisha</span>
      </div>
      <dl className="space-y-4 px-5 py-5 font-code text-[13px] leading-relaxed">
        {TERMINAL_LINES.map((line) => (
          <div
            key={line.cmd}
            className={cn(!MOBILE_LINES.has(line.cmd) && "hidden sm:block")}
          >
            <dt className="text-pf-orange">
              <span aria-hidden>$ </span>
              {line.cmd}
            </dt>
            <dd className="text-pf-text">{line.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-pf-border"
    >
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-14 pt-8 md:px-8 md:pb-20 md:pt-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <ViewToggle fullWidth className="mb-8 lg:hidden" />
          <Eyebrow>{PROFILE.role}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[clamp(2.25rem,5.2vw,3.6rem)] leading-[1.04] tracking-[-0.025em]"
          >
            Building scalable
            <br />
            frontend systems
            <br />
            <em className="italic">for real-world products.</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pf-text/90">
            Software Engineer building scalable, production-ready web
            applications with React, Next.js, and TypeScript. Experienced in
            complex product workflows, performance optimization, and accessible
            user experiences.
          </p>

          {/* Mobile: chips. Desktop: one mono line separated by dots. */}
          <ul
            className="mt-6 flex flex-wrap gap-2 sm:hidden"
            aria-label="Core focus"
          >
            {MOBILE_STACK.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-pf-border bg-pf-card px-3 py-1.5 text-sm text-pf-text"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul
            className="mt-6 hidden flex-wrap items-center gap-x-3 gap-y-2 font-code text-[13px] text-pf-text/85 sm:flex"
            aria-label="Core focus"
          >
            {HERO_STACK.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-pf-muted">
                    ·
                  </span>
                )}
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#work" variant="primary" icon={ArrowUpRight}>
              View my work
            </ButtonLink>
            <ButtonLink href={PROFILE.resume} download icon={Download}>
              Download resume
            </ButtonLink>
          </div>

          <p className="mt-8 flex items-center gap-2.5 text-sm text-pf-muted sm:mt-9">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-pf-green opacity-40 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-pf-green" />
            </span>
            Open to international opportunities
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <PixelField
            glows={TERMINAL_GLOWS}
            seed={11}
            className="-inset-x-40 -inset-y-28 bg-[radial-gradient(ellipse_55%_45%_at_95%_100%,rgb(214_150_70/0.14),transparent_70%)]"
          />
          <Terminal />
        </div>
      </div>
    </section>
  );
}
