import { ArrowUpRight, Download } from "lucide-react";
import { HERO_STACK, PROFILE, TERMINAL_LINES } from "@/lib/portfolio-data";
import CodeSymbolField from "./code-symbol-field";
import { ButtonLink, Eyebrow, NlFlag } from "./primitives";
import { ViewToggle } from "./view-mode";

function TerminalCard() {
  return (
    <figure
      aria-label="Profile summary in a terminal window"
      className="relative w-full max-w-md overflow-hidden rounded-xl border border-pf-border bg-pf-card/95 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)]"
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
          <div key={line.cmd}>
            <dt className="text-pf-orange">
              <span aria-hidden>$ </span>
              {line.cmd}
            </dt>
            <dd
              className={
                line.success
                  ? "text-pf-green"
                  : "flex items-center gap-2 text-pf-text"
              }
            >
              {line.value}
              {line.flag && <NlFlag />}
            </dd>
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
      {/* Background: code symbols + warm halftone glow */}
      <CodeSymbolField
        parallax
        className="right-[-4rem] top-6 hidden md:block mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pf-halftone pointer-events-none absolute -bottom-24 right-0 h-[28rem] w-[40rem] opacity-50 mask-[radial-gradient(ellipse_at_70%_70%,black_10%,transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-10 md:px-8 md:pb-20 md:pt-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <ViewToggle className="mb-8 lg:hidden" />
          <Eyebrow>{PROFILE.role}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[clamp(2.4rem,5.2vw,3.6rem)] leading-[1.02] tracking-[-0.025em]"
          >
            Building scalable
            <br />
            frontend systems
            <br />
            <em className="italic">for real-world products.</em>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-pf-text/90 md:text-lg">
            Frontend Engineer with 3+ years of experience building accessible,
            performant web applications with React and Next.js.
          </p>

          <ul
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-pf-muted"
            aria-label="Core focus"
          >
            {HERO_STACK.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden>·</span>}
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#work" variant="primary" icon={ArrowUpRight}>
              View my work
            </ButtonLink>
            <ButtonLink href={PROFILE.resume} download icon={Download}>
              Download resume
            </ButtonLink>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-pf-muted">
            <p className="flex items-center gap-2.5">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-pf-green opacity-40 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-pf-green" />
              </span>
              Open to relocation to the Netherlands
            </p>
            <p className="flex items-center gap-2">
              India <span aria-label="to">→</span> Netherlands <NlFlag />
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
